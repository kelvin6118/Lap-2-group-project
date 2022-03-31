const db = require('../dbConfig/init');


module.exports = class Tracker {
    constructor(data){
        this.id = data.id;
        this.habit = data.habit_ID;
        this.date = data.date;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM userTrackers;')
                const trackers = result.rows.map(t => ({ id: t.id, habit:t.habit_id, date:t.date }));
                resolve(trackers)
            } catch (err) {
                reject("Error getting trackers")
            }
        })
    };

    static create(trackerData){
        return new Promise (async (resolve, reject) => {
            try {
                let result;
                const { userID, habitID, date } = trackerData;
                for (let i=0; i < habitID.length; i++){
                    console.log(habitID[i])
                let newTracker = await db.query('INSERT INTO userTrackers (habit_ID, date) VALUES ($1,$2) RETURNING *;',[habitID[i], date]);
                result = new Tracker(newTracker.rows[0]);}
                resolve (result);
            } catch (err) {
                reject('Tracker could not be created');
            }
        });
    };
}
