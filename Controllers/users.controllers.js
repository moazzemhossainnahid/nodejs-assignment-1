const usersData = require("../UserData.json");


// get all users
module.exports.getAllUsers = (req, res) => {
    const limit = req.query.limit;
    if (limit) {
        const result = usersData.slice(0, limit)
        res.send(result)
    } else {
        res.send(usersData)
    }
}


// get random user
module.exports.getRandomUser = (req, res) => {
    const randomNumber = Math.floor(Math.random() * usersData.length);
    const randUser = usersData.find(user => user.index == randomNumber)
    res.send(randUser);
}