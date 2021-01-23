const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const {getUserInfo,updateUserInfo} =require('../controllers/usersInfoController');



router.get('/getUserInfo',auth, getUserInfo);
router.patch('/updateUserInfo',auth, updateUserInfo);

module.exports=router;