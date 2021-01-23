const db = require("../db/db_config");


const getAddress = async(req, res) => {
    try {
        const sql = `SELECT * FROM addresses
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

const updateAddress = async(req, res) => {
    try {
        res.status(200).send('update address')
    } catch (error) {
        res.status(500).send({'server error':error})
    }

}

module.exports={getAddress,updateAddress}