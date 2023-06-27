const express = require('express');
const  userloginregister  = require('../controllers/userController');
const router = express.Router();

router.post('/register', userloginregister.registerUser);
router.post('/login', userloginregister.loginUser);

module.exports = router;
