const express = require("express");
require("dotenv").config();
const db = require("./db/db_config");

const auth = require("./middlewares/auth");
const registerUser = require("./controllers/usersController");
const app = express();
app.use(express.json());

app.get("/", auth, (req, res) => {

  const sql = "SELECT * FROM users ";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if(result.length===0){

        res.send('no user found')
    }else{

        res.send(result);
    }

  });
});




app.post("/register", registerUser);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port 3000!");
});
