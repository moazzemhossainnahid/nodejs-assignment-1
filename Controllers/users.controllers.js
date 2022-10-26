const usersData = require("../UserData.json");
const fs = require('fs');


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

// get user by id

module.exports.getUserByID = (req, res) => {
    const id = req.params.id;
    const find = usersData.find(user => user.index == id);
    res.send(find)
}


// save a user

module.exports.saveAUser = (req, res) => {
    const newUser = req.body;
    newUser.index = usersData.length;
    fs.readFile("UserData.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const users = JSON.parse(data);
            users.push(newUser);
            fs.writeFile("UserData.json", JSON.stringify(users, null, 2), (err) => {
                console.log(err)
            })
        }
    })
    res.send("Data Saved!");
}



module.exports.updateAUser = (req, res) => {
    const { id } = req.params;
    const { name, gender, contact, address, photoUrl } = req.body;
    fs.readFile("UserData.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
            res.send("internal error 1st")
        }
        else {
            const users = JSON.parse(data);            
            const updateData = users.find(user => user._id == id);
            if (updateData) {
                    updateData.name = name;                
                    updateData.gender = gender;               
                    updateData.contact = contact;               
                    updateData.address = address;                
                    updateData.photoUrl = photoUrl;
                }

            fs.writeFile("UserData.json", JSON.stringify(users, null, 2), (err) => {
                console.log(err)
                res.send("Data Updated!")
            })
        }
    })
}