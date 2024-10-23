const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');
const connection = require('../db');
const bcypt = require('bcrypt');

const JWT_KEY ="secret_key";


router.route("/idcheck")
    .post((req,res)=>{
        const {userId} =req.body;
        console.log(req.body);
        const query ='SELECT * FROM REACT_USER WHERE USER_ID = ?';
        connection.query(query,[userId],(err,results)=>{
            if(results.length > 0){
                res.json({success : true ,message : "ID Duplicated"});
            }else{
                res.json({success : false, message : "Query retrieval failed"});
            }
        })
    })
router.route("/join")
    .post((req,res)=>{
        const {userId,password,name,nickname,phone,email} = req.body;
        console.log(req.body);
        const query = 'INSERT INTO REACT_USER(USER_ID,PASSWORD,NAME,NICKNAME,PHONE,EMAIL) VALUES (?,?,?,?,?,?)';
        connection.query(query,[userId,password,name,nickname,phone,email],(err,results)=>{
            if(err){
                return res.json({success : false , message : "db오류"})
            }else{
                res.json({success : true});
            }
        })
    })
router.route("/login")
    .post((req,res)=>{
        const {userId,password} =req.body;
        console.log(req.body);
        const query ='SELECT * FROM REACT_USER WHERE USER_ID = ? AND PASSWORD = ?';
        connection.query(query,[userId,password],(err,results)=>{
            if(err) throw err;
            if(results.length > 0){
                const user = results[0];
                const token = jwt.sign({userId : user.USER_ID,name : user.NAME,nickname : user.NICKNAME},JWT_KEY,{expiresIn : '1h'})
                console.log(token);
                res.json({success : true ,message : "Login success" , token : token});
            }else{
                res.json({success : false, message : "Login fail"});
            }
        })
    })
module.exports = router; 