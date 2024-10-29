const express = require('express')
const router = express.Router();
const connection = require('../db');
const jwtAuthentication = require('../jwtAuth');
const multer  = require('multer');
const path = require('path');


router.route("/")
    .get(jwtAuthentication,(req,res)=>{
        const query = `SELECT 
                            B.BOARD_NO, 
                            B.USER_ID, 
                            U.NICKNAME,
                            B.BOARD_CONTENTS,
                            DATE_FORMAT(B.CDATETIME, '%d.%m.%y.%H:%i') AS CDATETIME,
                            (SELECT COUNT(*) FROM REACT_BOARD_LIKE L WHERE L.BOARD_NO = B.BOARD_NO) AS LIKE_COUNT,
                            GROUP_CONCAT(A.ATTACH_PATH1) AS IMAGE_URLS
                        FROM 
                            REACT_BOARD B 
                        LEFT JOIN 
                            REACT_USER U ON B.USER_ID = U.USER_ID
                        LEFT JOIN 
                            REACT_BOARD_ATTACH A ON B.BOARD_NO = A.BOARD_NO
                        GROUP BY 
                            B.BOARD_NO, U.NICKNAME
                        ORDER BY 
    CDATETIME DESC`;
        connection.query(query,(err,results)=>{
            if(err){
                console.error('피드 조회 실패:', err);
                return res.json({ success: false, message: '서버 오류가 발생했습니다.' });
            };
            res.json({ success: true, list: results });
        });
    })
    .delete((req,res)=>{
        const {boardNo} = req.query;
        const query = `DELETE FROM REACT_BOARD WHERE BOARD_NO = ?`
        connection.query(query,[boardNo],(err,results)=>{
                if(err){
                    return res.json({success : false , message : "피드 삭제 실패"})
                };
                res.json({success : true, message : "게시글을 삭제하였습니다."});
            })
        })
router.route("/:boardNo")
    .put((req,res)=>{
        const boardNo = req.params.boardNo;
        const{ userId, contents } = req.body;
        const query ='INSERT INTO REACT_COMMENT(BOARD_NO,USER_ID,COMMENT_CONTENTS) VALUES(?,?,?)';
        connection.query(query,[boardNo,userId,contents],(err,results)=>{
            if(err){
                console.log("댓글입력 실패");
                return res.json({success : false , message : "댓글입력실패"});
            };
            res.json({success : true});
        })
    })
router.route("/like/:boardNo")
    .put((req,res)=>{
        const boardNo = req.params.boardNo;
        const {userId} = req.body;
        const checkquery = `SELECT COUNT(*) AS count FROM REACT_BOARD_LIKE WHERE BOARD_NO = ? AND USER_ID = ?`
        connection.query(checkquery,[boardNo,userId],(err,results)=>{
            if(results[0].count > 0){
                const deletequery = `DELETE FROM REACT_BOARD_LIKE WHERE BOARD_NO = ? AND USER_ID = ?`
                connection.query(deletequery,[boardNo,userId],(err,results)=>{
                    if(err){
                        return res.json({success : false , message : "좋아요취소 오류"});
                    }else{
                        return res.json({success : true , message : "좋아요가 취소 되었습니다."});
                    }
                })
            }else if(results[0].count == 0){
                const query = `INSERT INTO REACT_BOARD_LIKE(BOARD_NO,USER_ID) VALUES(?,?)`
                connection.query(query,[boardNo,userId],(err,results)=>{
                    if(err){
                        return res.json({success : false , message : "좋아요안눌림"});
                    }
                    res.json({success : true , message : "좋아요를 눌렀습니다."});
                })
            }
        })
    })
router.route("/comment/:boardNo")
    .get((req,res)=>{
        const boardNo = req.params.boardNo;
        const query = `SELECT * FROM 
                        REACT_COMMENT C
                        INNER JOIN REACT_USER U ON C.USER_ID = U.USER_ID WHERE BOARD_NO = ?`;
        connection.query(query,[boardNo],(err,results)=>{
            if(err){
                console.log("실패");
                return res.json({success : false , message : "실패"});
            };
            res.json({ success: true, commentList: results });
        })    
    })
router.route("/commentDelete")
    .delete((req,res)=>{
        const {commentNo} = req.query;
        const query = `DELETE FROM REACT_COMMENT WHERE COMMENT_NO = ?`;
        connection.query(query,[commentNo],(err,results)=>{
            if(err){
                return res.json({success : false , message : "댓글삭제 실패"});
            };
            res.json({success : true , message : "댓글을 삭제하였습니다."});
        })
    })
router.route("/board/:boardNo")
    .get((req,res)=>{
        const boardNo = req.params.boardNo;
        const query = `SELECT 
                        B.BOARD_NO, 
                        B.USER_ID, 
                        U.NICKNAME,
                        B.BOARD_CONTENTS,
                        DATE_FORMAT(B.CDATETIME, '%d.%m.%y.%H:%i') AS CDATETIME,
                        (SELECT COUNT(*) FROM REACT_BOARD_LIKE L WHERE L.BOARD_NO = B.BOARD_NO) AS LIKE_COUNT,
                        (SELECT GROUP_CONCAT(A.ATTACH_PATH1) FROM REACT_BOARD_ATTACH A WHERE A.BOARD_NO = B.BOARD_NO) AS IMAGE_URLS
                    FROM 
                        REACT_BOARD B 
                    LEFT JOIN 
                        REACT_USER U ON B.USER_ID = U.USER_ID
                    WHERE 
                        B.BOARD_NO = ?
                    GROUP BY 
                        B.BOARD_NO, U.NICKNAME`
        connection.query(query,[boardNo],(err,results)=>{
            if(err){
                console.log("실패");
                return res.json({success : false , message : "실패"});
            };
            res.json({ success: true, boardDetail: results[0] });
        })
    })
//파일등록
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, '../server/img/'); // 서버 내 img 폴더
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // 파일 확장자
        cb(null, Date.now() + ext); // 날짜 데이터를 이용해서 파일 이름으로 저장
    },
});
    
// 파일 업로드 미들웨어 설정
const upload = multer({ storage: storage });
    
    
    // 이미지 및 피드 업로드 API
router.route("/insert")
    .post(upload.array('images'), (req, res) => {
        const { content,userId } = req.body; // 피드의 내용
    
        // 피드 먼저 등록
        const feedQuery = 'INSERT INTO REACT_BOARD (USER_ID, BOARD_CONTENTS) VALUES (?, ?)';
    
        connection.query(feedQuery, [userId, content], (err, feedResult) => {
        if (err) {
            console.error('피드 등록 실패:', err);
            return res.json({ success: false, message: "피드 등록 실패" });
        }
    
        const boardNo = feedResult.insertId; // 등록된 피드의 ID 가져오기
    
        // 이제 이미지를 등록할 차례
        const files = req.files;
    
        if (!files || files.length === 0) {
            return res.json({ success: false, message: "파일이 업로드되지 않았습니다." });
        }
    
        // 이미지 경로들을 DB에 저장
        const imgQuery = 'INSERT INTO REACT_BOARD_ATTACH (BOARD_NO, ATTACH_PATH1) VALUES ?';
        const imgData = files.map(file => {
            const imagePath = `http://localhost:3100/img/${file.filename}`;
            return [boardNo, imagePath]
        });
        console.log(imgData);
    
        connection.query(imgQuery, [imgData], (err, imgResult) => {
            if (err) {
            console.error('이미지 저장 실패:', err);
            return res.status(500).json({ success: false, message: "이미지 저장 실패" });
            }
    
            res.json({ success: true, message: "피드 및 파일이 성공적으로 저장되었습니다!" });
        });
        });
    });
module.exports = router;