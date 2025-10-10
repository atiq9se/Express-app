const express = require('express');
const router = express.Router();

const controller = require('../controller/user.controller');

router.use(express.json())

// router.get("/", controller.gerUsers);
// router.get("/:id", controller.gerUser);
router.post("/", controller.postUser);
// router.put("/", controller.putUser);
// router.patch("/", controller.patchUser);
// router.delete("/", controller.deleteUser);
 
module.exports = router; 