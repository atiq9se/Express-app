const express = require('express');
const router = express.Router();

const { userSchema } = require('../userSchema');
const { registerUser } = require('../controller/user.controller');

router.use(express.json())

router.post("/", registerUser);
 
module.exports = router; 