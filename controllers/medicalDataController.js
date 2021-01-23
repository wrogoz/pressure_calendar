const db = require("../db/db_config");

const getData = async (req, res) => {
  try {
    const sql = `SELECT *
                  FROM medical_data
                  WHERE user_id=?`;
    const user = req.body.user.id;
    db.query(sql, user, (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        res.status(200).send({ data: "there is no data for this user" });
      } else {
        res.status(200).send(result);
      }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const addData = async (req, res) => {
  try {
    const { systolic_pressure, diastolic_pressure, pulse } = req.body;
    const medical_data = {
      systolic_pressure,
      diastolic_pressure,
      pulse,
      user_id: req.body.user.id,
    };


    const sql = `INSERT INTO medical_data SET ?`;
    db.query(sql, medical_data, (err, result) => {
      if (err) throw err;
      res.send({result:'data added'});
    });
  } catch (error) {
    res.status(500).send({ "server error": error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.body;
    const sql = `DELETE FROM medical_data
                  WHERE id=?`;
                  console.log(id)
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send({result:'data deleted'});
    });
  } catch (error) {
    res.status(500).send({ "server error": error });
  }
};
module.exports = { getData, addData, deleteData };
