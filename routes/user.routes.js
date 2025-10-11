const controller = require('../controller/user.controller');
const express = require('express');
const router = express.Router();
// const validate = require('../middlewares/validate');
// const { validateUserRegistration } = require("../schema/user.schema");

router.get("/api/users", controller.allUsers);
router.get("/api/users/:id", controller.singleUser);
router.post("/api/users", controller.createUser);
router.put("/api/users/:id", controller.putUser);
router.patch("/api/users/:id", controller.patchUser);
router.delete("/api/users/:id", controller.deleteUser);
 
module.exports = router; 