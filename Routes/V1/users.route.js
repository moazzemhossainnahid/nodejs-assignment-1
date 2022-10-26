const express = require('express');
const usersControllers = require('../../Controllers/users.controllers');
const router = express.Router();

// get all users
router.get("/all", usersControllers.getAllUsers);

// get random user
router.get("/random", usersControllers.getRandomUser);




module.exports = router;