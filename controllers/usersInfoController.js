const db = require("../db/db_config");


const getUserInfo =async(req,res)=>{
    try {
        const sql = `SELECT * FROM users_info
                    WHERE user_id=?`
        const {id}=req.body.user;
        console.log(id)

        db.query(sql,id,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })

    } catch (error) {
        res.status(500).send({'server error':error})
    }
}
const updateUserInfo =async(req,res)=>{
    try {
        res.status(299).send('updateUserInfo')
    } catch (error) {
        res.status(500).send({'server error':error})
    }
}


module.exports = {getUserInfo,updateUserInfo};


