const express = require("express");
require("dotenv").config();
const db = require("./db/db_config");

const auth = require("./middlewares/auth");
const {registerUser,showAllUsers,loginUser} = require("./controllers/usersController");
const app = express();
app.use(express.json());

app.get("/", auth, showAllUsers);
app.post("/register", registerUser);
app.post('/login', loginUser);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port 3000!");
});
