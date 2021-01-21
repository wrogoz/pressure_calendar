const express = require("express");

require("dotenv").config();
require("./db/db_config");
const userRoute = require('./routes/userRoutes')
const getUserData =require('./routes/medicalRoutes')
const app = express();
app.use(express.json());

app.use('/',userRoute)
app.use('/medical',getUserData)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port 3000!");
});
