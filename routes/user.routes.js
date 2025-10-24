const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');
const validate = require('../middlewares/validate');
const { userRegisterSchema } = require("../schema/user.schema");

router.get("/api/users", controller.allUsers);
router.get("/api/users/:id", controller.singleUser);
router.post("/api/users", validate(userRegisterSchema), controller.createUser);
router.put("/api/users/:id", controller.putUser);
router.patch("/api/users/:id", controller.patchUser);
router.delete("/api/users/:id", controller.deleteUser);
 
module.exports = router; 