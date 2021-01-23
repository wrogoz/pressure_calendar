const express = require('express')
const router = express.Router()
const auth = require("../middlewares/auth");
const {
    addData,
    getData,
    deleteData
  } = require("../controllers/medicalDataController");


  router.get('/getData',auth, getData);
  router.post('/addData',auth,addData)
  router.delete('/deleteData',auth,deleteData)
  module.exports=router