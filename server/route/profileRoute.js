const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');
const connection = require('../db');

router.route("/")
.get((req,res)=>{
    const{ userId } = req.query;
    const query = `SELECT * FROM REACT_USER WHERE USER_ID=?`;
    connection.query(query,[userId],(err,results)=>{
        if(err){
            console.log("실패");
            return res.json({success : false , message : "실패"});
        };
        console.log(results[0]);
        res.json({ success: true, boardDetail: results[0] });
    })
})

module.exports = router; 