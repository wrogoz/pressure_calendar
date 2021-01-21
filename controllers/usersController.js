const db = require("../db/db_config");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const showAllUsers =async (req, res) => {
  try {
    const sql = `SELECT
    *
FROM users `;
db.query(sql, (err, result) => {
if (err) throw err;
if (result.length === 0) {
res.send("no user found");
} else {
res.status(200).send(result);
}
});
  } catch (error) {
    res.status(500).send({'error':error})
  }

};

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    var hashedPassword = await bcrypt.hash(password, 8);

    const sql = `INSERT INTO USERS SET?`;
    const user_data = {
      email,
      user_password: hashedPassword,
    };

    db.query(sql, user_data, (err, result) => {
      if (err) throw err;

      const user_data_query = `INSERT INTO users_data SET?`;
      const user_id = { user_id: result.insertId };

      db.query(user_data_query, user_id, (err, user_data_res) => {
        if (err) throw err;
      });
      const address_query = `INSERT INTO addresses SET?`;
      db.query(address_query, user_id, (err, addresses_res) => {
        if (err) throw err;
      });

      console.log(result.insertId);
      const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET);
      res.status(200).send(token);
    });
  } catch (error) {
    res.status(500).send(`server error: ${error}`);
  }
};

const loginUser =async (req, res) => {
  try {
    const sql = `SELECT
                       *
                  FROM users
                  WHERE email = ? `;
    const user = req.body.email;

    const query = db.query(sql, user, async (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.send("user not found");
      } else {
        console.log(result);
        const checkPassword = await bcrypt
          .compare(req.body.password, result[0].user_password)
          .then((res) => {
            return res;
          });

        if (!checkPassword) {
          res.send("invalid password");
        } else {
          const token = jwt.sign(
            { id: result[0].id, email: result[0].email },
            process.env.JWT_SECRET
          );
          res.status(200).send(token);
        }
      }
    });
  } catch (error) {
    res.status(500).send(`server error:${error}`);
  }
};

const findSingleUser =async (req, res) => {
  try {
    const sql = `SELECT
    *
  FROM users
  JOIN users_data
    ON users.id = users_data.user_id
  JOIN addresses
    ON users.id = addresses.user_id
  WHERE users.id = ?`;
const user = req.body.user.id;
db.query(sql, user, (err, result) => {
if (err) throw err;
res.status(200).send(result);
});
  } catch (error) {
    res.status(500).send({'server error':error})
  }

};



module.exports = { registerUser, showAllUsers, loginUser, findSingleUser};
