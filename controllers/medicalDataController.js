const db = require("../db/db_config");


const getUserData = async(req,res)=>{
    try {

      const sql = `SELECT *
                  FROM medical_data
                  WHERE user_id=?`
      const user = req.body.user.id
      db.query(sql,user,(err,result)=>{
        if(err)throw err;

        if(result.length===0){
          res.status(200).send({data:'there is no data for this user'})
        }else{
          res.status(200).send(result)
        }

      })

    } catch (error) {
      res.status(500).send({error})
    }
  }

  module.exports={getUserData}