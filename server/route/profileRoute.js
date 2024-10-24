const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');
const connection = require('../db');

// router.route("/")
// .get((req,res)=>{
//     const userId = req.params.userId;
//     const query = `SELECT 
//                     B.BOARD_NO, 
//                     B.USER_ID, 
//                     U.NICKNAME,
//                     B.BOARD_CONTENTS,
//                     B.HASHTAG1, 
//                     B.HASHTAG2, 
//                     B.HASHTAG3, 
//                     B.HASHTAG4, 
//                     B.HASHTAG5, 
//                     B.HASHTAG6,
//                     DATE_FORMAT(B.CDATETIME, '%d.%m.%y.%H:%i') AS CDATETIME,
//                     COUNT(L.USER_ID) AS LIKE_COUNT 
//                 FROM 
//                     REACT_BOARD B 
//                 LEFT JOIN 
//                     REACT_BOARD_LIKE L ON B.BOARD_NO = L.BOARD_NO 
//                 LEFT JOIN 
//                     REACT_USER U ON B.USER_ID = U.USER_ID
//                 WHERE B.BOARD_NO = ?
//                 GROUP BY 
//                     B.BOARD_NO, U.NICKNAME`
//     connection.query(query,[boardNo],(err,results)=>{
//         if(err){
//             console.log("실패");
//             return res.json({success : false , message : "실패"});
//         };
//         res.json({ success: true, boardDetail: results[0] });
//     })
// })

module.exports = router; 