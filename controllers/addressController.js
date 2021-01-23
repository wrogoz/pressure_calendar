const db = require("../db/db_config");


const getAddress = async(req, res) => {
    try {
        res.status(200).send('get address')
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