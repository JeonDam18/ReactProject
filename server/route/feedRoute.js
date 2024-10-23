const express = require('express')
const router = express.Router();
const connection = require('../db');
const jwtAuthentication = require('../jwtAuth');

router.route("/")
    .get(jwtAuthentication,(req,res)=>{
        const query = `SELECT 
                        B.BOARD_NO, 
                        B.USER_ID, 
                        U.NICKNAME,
                        B.BOARD_CONTENTS,
                        B.HASHTAG1, 
                        B.HASHTAG2, 
                        B.HASHTAG3, 
                        B.HASHTAG4, 
                        B.HASHTAG5, 
                        B.HASHTAG6,
                        DATE_FORMAT(B.CDATETIME, '%d.%m.%y.%H:%i') AS CDATETIME,
                        COUNT(L.USER_ID) AS LIKE_COUNT 
                    FROM 
                        REACT_BOARD B 
                    LEFT JOIN 
                        REACT_BOARD_LIKE L ON B.BOARD_NO = L.BOARD_NO 
                    LEFT JOIN 
                        REACT_USER U ON B.USER_ID = U.USER_ID  -- REACT_USER 테이블 조인
                    GROUP BY 
                        B.BOARD_NO, U.NICKNAME`;
        connection.query(query,(err,results)=>{
            if(err){
                console.error('피드 조회 실패:', err);
                return res.json({ success: false, message: '서버 오류가 발생했습니다.' });
            };
            res.json({ success: true, list: results });
        });
    });
router.route("/:boardNo")
    .put((req,res)=>{
        const boardNo = req.params.boardNo;
        const{ userId, contents } = req.body;
        console.log("boardNo : "+boardNo+"아이디랑 내용 : "+req.body);
        const query ='INSERT INTO REACT_COMMENT(BOARD_NO,USER_ID,COMMENT_CONTENTS) VALUES(?,?,?)';
        connection.query(query,[boardNo,userId,contents],(err,results)=>{
            if(err){
                console.log("댓글입력 실패");
                return res.json({success : false , message : "댓글입력실패"});
            };
            res.json({success : true});
        })
    })
// router.route("/likeCheck")



module.exports = router;