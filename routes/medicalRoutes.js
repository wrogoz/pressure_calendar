const express = require('express')
const router = express.Router()
const auth = require("../middlewares/auth");
const {

    getUserData
  } = require("../controllers/medicalDataController");


  router.get('/getUserData',auth, getUserData);

  module.exports=router