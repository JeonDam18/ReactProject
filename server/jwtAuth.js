const jwt = require('jsonwebtoken');

const jwtAuthentication = (req,res,next)=>{
    const token = req.headers.token
    console.log(req.headers.token);
    if(!token){
        return res.json({success : false,message : "로그인 후 이용해주세요"});
    }
    jwt.verify(token ,"secret_key",(err,user)=>{
        if(err){
            return res.json({success : false , message : "토큰이 유효하지 않습니다."});
        }
        console.log("인증 성공:", user);
        next();//이부분이(next) 있어야 쿼리 실행
    });
}

module.exports = jwtAuthentication;