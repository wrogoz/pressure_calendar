const db = require("../db/db_config");
var bcrypt = require('bcryptjs');

const registerUser = async(req,res)=>{
    try {
        const {email,password}= req.body;
        var hashedPassword =await bcrypt.hash(password, 8);

        const sql = `INSERT INTO USERS SET?`;
        const user_data={
            email,
            user_password:hashedPassword
        }

        db.query(sql,user_data,(err,result)=>{
            if(err)throw err;
            console.log(result.insertId)

            const user_data_query='INSERT INTO users_data SET?'
            const user_id={user_id:result.insertId}

            db.query(user_data_query,user_id,(err,user_data_res)=>{
                if(err)throw err;

            })
            const address_query='INSERT INTO addresses SET?'
            db.query(address_query,user_id,(err,addresses_res)=>{
                if(err)throw err;

            })
            res.send(result)
        })

            } catch (error) {
                res.status(500).send(`server error: ${error}`)
            }

}

module.exports=registerUser;