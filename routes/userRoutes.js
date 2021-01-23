const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  registerUser,
  showAllUsers,
  loginUser,
  findSingleUser,
  deleteUser
} = require("../controllers/usersController");

router.get("/", showAllUsers);
router.get("/me", auth, findSingleUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/deleteUser",auth, deleteUser);

module.exports = router;
