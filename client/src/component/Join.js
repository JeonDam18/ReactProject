import React, { useState , useRef } from 'react';
import '../join.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Join() {
    const navigate = useNavigate();
    const userIdRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const nameRef = useRef(null);
    const nicknameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const profileImageRef = useRef(null);
    const [idDuplicate , setIdDuplicate] = useState(false);
    // const handleFileChange = (event) => {
    //     setProfileImage(event.target.files[0]);
    // };
    async function handleSubmit(){
        if(!idDuplicate){
            alert("Please perform a duplicate ID check first.");
            return;
        }
        if(userIdRef.current.value =='' || userIdRef.current.value == null){
            alert("Please enter your ID");
            return;
        }
        if(passwordRef.current.value =='' || passwordRef.current.value == null){
            alert("Please enter yout PWD");
            return;
        }
        if(confirmPasswordRef.current.value == '' || confirmPasswordRef.current.value == null){
            alert("Please enter your PWDcheck");
            return;
        }
        if(passwordRef.current.value != confirmPasswordRef.current.value){
            alert("The entered password does not match.");
            return;
        }
        if(nameRef.current.value == '' || nameRef.current.value == null){
            alert("Please enter your Name")
            return;
        }
        if(nicknameRef.current.value =='' || nicknameRef.current.value == null){
            alert("Please enter your Nickname");
            return;
        }
        try {
            const res = await axios.post("http://localhost:3100/user/join",{
                userId : userIdRef.current.value,
                password : passwordRef.current.value,
                name : nameRef.current.value,
                nickname : nicknameRef.current.value,
                phone : phoneRef.current.value,
                email : emailRef.current.value
            })
                if(res.data.success){
                    alert("You have successfully registered");
                    navigate('/login');
                }
            
        } catch (error) {
            alert("문제발생");
        }


    }
    async function handleIdCheck(){
        if(userIdRef.current.value =='' || userIdRef.current.value == null){
            alert("아이디를 먼저 입력해주세요");
            return;
        }
        try {
            const res = await axios.post("http://localhost:3100/user/idcheck",{userId : userIdRef.current.value});
            if(res.data.success){
                alert("The ID is duplicated. Please check the ID");
                return;
            }else{
                alert("This ID is avalialbe for use");
                setIdDuplicate(true);
            }
        } catch (error) {
            
        }
    }
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>회원가입</h1>
                    <div className="input-group">
                        <input type="text" placeholder="*아이디" ref={userIdRef} onChange={()=>{
                            setIdDuplicate(false);
                        }} required/>
                         <button type="button" className="check-duplication" onClick={handleIdCheck}>중복 체크</button>
                    </div>
                    <input type="password" placeholder="*비밀번호" ref={passwordRef} required/>
                    <input type="password" placeholder="*비밀번호 확인" ref={confirmPasswordRef} required/>
                    <input type="text" placeholder="*이름" ref={nameRef} required />
                    <input type="text" placeholder="*닉네임" ref={nicknameRef} />
                    <input type="tel" placeholder="전화번호" ref={phoneRef} />
                    <input type="email" placeholder="이메일" ref={emailRef} />
                    {/* <input type="file" accept="image/*" /> */}
                    <button type="submit" onClick={handleSubmit}>회원가입</button>
            </div>
        </div>
    );
}

export default Join;