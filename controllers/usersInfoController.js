const db = require("../db/db_config");


const getUserInfo =async(req,res)=>{
    try {
        res.status(299).send('getUserInfo')
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


