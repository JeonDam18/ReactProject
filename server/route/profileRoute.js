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
        res.json({ success: true, boardDetail: results[0] });
    })
})
.put((req,res)=>{
    const {follow , follower} = req.body;
    const query =`SELECT COUNT(*) AS count FROM REACT_FOLLOW WHERE FOLLOW_ID = ? AND FOLLOWER_ID =?`;
    connection.query(query,[follow,follower],(err,results)=>{
        if(results[0].count>0){
            const delquery = `DELETE FROM REACT_FOLLOW WHERE FOLLOW_ID=? AND FOLLOWER_ID = ?`
            connection.query(delquery,[follow,follower],(err,results)=>{
                if(err){
                    return res.json({message : "실패"})
                }
            })
            return res.json({success : true , message : "팔로우를 취소하였습니다."});
        }else{
            const folquery = `INSERT INTO REACT_FOLLOW(FOLLOW_ID,FOLLOWER_ID) VALUES(?,?)`;
            connection.query(folquery,[follow,follower],(err,results)=>{
                if(err){
                    return res.json({message : "실패"});
                }
                res.json({success : true,message :"팔로우 하였습니다."});
            })
        }
    })
})
router.route("/list")
.get((req,res)=>{
    const{ userId } = req.query;
    const query = `SELECT 
                        r.*, 
                        MIN(a.ATTACH_PATH1) AS ATTACH_PATH1
                    FROM 
                        react_board r
                    INNER JOIN 
                        react_board_attach a ON r.BOARD_NO = a.BOARD_NO
                    WHERE 
                        r.USER_ID = ?
                    GROUP BY 
                        r.BOARD_NO`;
    connection.query(query,[userId],(err,results)=>{
        if(err){
            console.log("실패");
            return res.json({success : false , message : "실패"});
        };
        res.json({ success: true, feedList: results });
    })
})
router.route("/follower")
    .get((req,res)=>{
        const {follower} = req.query;
        console.log({follower});
        const query = `SELECT 
                            COUNT(*) AS follow_id_count, 
                            (SELECT COUNT(*) FROM react_follow WHERE FOLLOWER_ID = ?) AS follower_id_count
                        FROM 
                            react_follow 
                        WHERE 
                            FOLLOW_ID = ?`;
        connection.query(query,[follower,follower],(err,results)=>{
            if(err){
                return res.json({success : false , mesaage :"실패"});
            };
            res.json({success : true , followCount : results[0]});
            console.log(results[0]);
        })
    })
module.exports = router; 