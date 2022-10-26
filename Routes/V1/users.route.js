const express = require('express');
const usersControllers = require('../../Controllers/users.controllers');
const router = express.Router();
const usersData = require("../../UserData.json");

// get all users
router.get("/all", (req, res) => {
    const limit = req.query.limit;
    if (limit) {
        const result = usersData.slice(0, limit)
        res.send(result)
    } else {
        res.send(usersData)
    }
})




module.exports = router;