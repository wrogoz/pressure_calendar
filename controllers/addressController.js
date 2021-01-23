const db = require("../db/db_config");

const getAddress = async (req, res) => {
  try {
    const sql = `SELECT * FROM addresses
                    WHERE user_id=?`;
    const { id } = req.body.user;
    console.log(id);

    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).send({ "server error": error });
  }
};

const updateAddress = async (req, res) => {
  try {
    const user_id = req.body.user.id;
    const params = req.body;
    delete params["user"];

    if (Object.keys(params).length === 0) {
      res.status(400).send("no data provided");
    } else {
      const sql = `UPDATE addresses
                    SET ? WHERE user_id=?`;
      db.query(sql, [params, user_id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ status: "success" });
      });
    }
  } catch (error) {
    res.status(500).send({ "server error": error });
  }
};

module.exports = { getAddress, updateAddress };
