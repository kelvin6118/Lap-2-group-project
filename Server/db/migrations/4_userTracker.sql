DROP TABLE IF EXISTS userTrackers;

CREATE TABLE userTrackers (
    id serial PRIMARY KEY,
    habit_ID int NOT NULL,
    date VARCHAR(60) NOT NULL
);
