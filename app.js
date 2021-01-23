const express = require("express");
require("dotenv").config();
const userRoute = require('./routes/userRoutes')
const medicalDataRoute =require('./routes/medicalRoutes')
const addressRoute = require('./routes/addressRoutes')
const userInfoRoute = require('./routes/usersInfoRoutes')
const app = express();
app.use(express.json());

app.use('/',userRoute)
app.use('/medical',medicalDataRoute)
app.use('/address',addressRoute)
app.use('/userInfo',userInfoRoute)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port 3000!");
});
