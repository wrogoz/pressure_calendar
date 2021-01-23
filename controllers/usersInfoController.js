const db = require("../db/db_config");

const getUserInfo = async (req, res) => {
  try {
    const sql = `SELECT * FROM users_info
                    WHERE user_id=?`;
    const { id } = req.body.user;
    console.log(id);

    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(500).send({ "server error": error });
  }
};
const updateUserInfo = async (req, res) => {
  try {
    user_id = req.body.user.id;
    let params = req.body;
    delete params["user"];

    if (Object.keys(params).length === 0) {
      res.send("no data provided");
    } else {
      const sql = `UPDATE users_info
            SET ? WHERE user_id=?`;

      db.query(sql, [params, user_id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ status: "success" });
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getUserInfo, updateUserInfo };
