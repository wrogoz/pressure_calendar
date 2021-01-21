const express=require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const {
    registerUser,
    showAllUsers,
    loginUser,
    findSingleUser
  } = require("../controllers/usersController");
  router.get("/",  showAllUsers);
router.get('/me',auth, findSingleUser);
router.get('/getMedicalData', (req, res) => {
  res.send('get medical data route')
});
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports=router