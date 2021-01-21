const express=require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const {
    registerUser,
    showAllUsers,
    loginUser,
    findSingleUser,
    getMedicalData
  } = require("../controllers/usersController");

router.get("/", showAllUsers);
router.get('/me',auth, findSingleUser);


router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports=router