const express = require('express');
require('dotenv').config()
const db = require('./db/db_config')



const app=express();



app.get('/', (req, res) => {
    const sql = 'SELECT * FROM test'
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result)
    })

});



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App listening on port 3000!');
});