const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  getAddress,
  updateAddress,
} = require("../controllers/addressController");



router.get("/getAdress", auth, getAddress);
router.patch("/updateAdress", auth, updateAddress);

module.exports = router;
