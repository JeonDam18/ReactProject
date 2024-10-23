import React, { useEffect, useRef } from 'react';
import '../login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';

function Login(props) {
    const idRef = useRef(); 
    const pwdRef = useRef();
    const navigate = useNavigate();
    useEffect(()=>{
        idRef.current.focus();
      },[]);
    async function handleLogin() {
        if(idRef.current.value =='' || idRef.current.value == null){
            alert("Please enter ID");
            return;
        }
        if(pwdRef.current.value =='' || pwdRef.current.value == null){
            alert("Please enter PWD");
            return;
        }
        try {
            const res = await axios.post("http://localhost:3100/user/login",{userId : idRef.current.value , password : pwdRef.current.value});
            if(res.data.success){
                const token = res.data.token;
                localStorage.setItem("token",res.data.token);
                const decodedToken = jwtDecode(token);
                navigate("/main")
                return;
            }else{
                alert("Please check your username and password");
            }
        } catch (error) {
            
        }
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>CatchUp</h1>
                    <input type="text" ref={idRef} placeholder="사용자 아이디" required />
                    <input type="password" ref={pwdRef} placeholder="비밀번호" required />
                    <button type="submit" onClick={handleLogin}>로그인</button>
                <div className="footer">
                    <p>계정이 없으신가요? <a href="#" onClick={()=>{
                        navigate("/join");
                    }}>회원가입</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;