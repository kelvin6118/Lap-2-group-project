async function getUserInfo(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
