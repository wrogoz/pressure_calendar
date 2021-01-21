const express = require("express");
require("dotenv").config();
require("./db/db_config");

const auth = require("./middlewares/auth");
const {
  registerUser,
  showAllUsers,
  loginUser,
  findSingleUser
} = require("./controllers/usersController");

const app = express();
app.use(express.json());

app.get("/",  showAllUsers);
app.get('/me',auth, findSingleUser);
app.post("/register", registerUser);
app.post("/login", loginUser);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port 3000!");
});
