const express = require('express');
const usersControllers = require('../../Controllers/users.controllers');
const router = express.Router();

// get all users
router.get("/all", usersControllers.getAllUsers);

// get random user
router.get("/random", usersControllers.getRandomUser);

// get user by ID
router.get("/:id", usersControllers.getUserByID);

// save a user
router.post("/save", usersControllers.saveAUser);

// update a user
router.patch("/update/:id", usersControllers.updateAUser);

// delete a user
router.delete("/:id", usersControllers.deleteUser);




module.exports = router;