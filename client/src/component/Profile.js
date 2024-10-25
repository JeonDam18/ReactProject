import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../profile.css';
const token = localStorage.getItem("token");
const dToken = jwtDecode(token);

function Profile(props) {
const { userId } = useParams();
const [userDetail , setUserDetail] = useState({});
useEffect(()=>{
    profileDetail(userId);
    console.log(userId);
},[userId])
console.log(dToken.userId);
async function profileDetail(userId){
    try {
        const res = await axios.get(`http://localhost:3100/profile`,{
            params : {userId}
        });
        if(res.data.success){
            console.log("데이터가져옴");
            console.log(res.data.boardDetail);
            setUserDetail(res.data.boardDetail);
        }
    } catch (error) {
        console.log("fail");
    }
}
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h2 className="nickname">{userDetail.NICKNAME}</h2>
                    <div className="follower-info">
                        <span className="followers">팔로워: <strong>100</strong></span>
                        <span className="following">팔로잉: <strong>50</strong></span>
                    </div>
                    <button className="follow-button">팔로잉</button>
                </div>
            </div>

            <div className="images-container">
                <div className="image-item">
                    <img src="image1.jpg" alt="이미지 1" />
                </div>
                <div className="image-item">
                    <img src="image2.jpg" alt="이미지 2" />
                </div>
                <div className="image-item">
                    <img src="image3.jpg" alt="이미지 3" />
                </div>
                <div className="image-item">
                    <img src="image4.jpg" alt="이미지 4" />
                </div>
                <div className="image-item">
                    <img src="image5.jpg" alt="이미지 5" />
                </div>
                <div className="image-item">
                    <img src="image6.jpg" alt="이미지 6" />
                </div>
            </div>
        </div>                                  
    );
}

export default Profile;