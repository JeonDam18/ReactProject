import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../profile.css';
import { useNavigate } from 'react-router-dom';
import CommentPopup from './CommentPopup';

const token = localStorage.getItem("token");
const dToken = jwtDecode(token);

function Profile(props) {
const { userId } = useParams();
const [userDetail , setUserDetail] = useState({});
const [feedList ,setFeedList] = useState([]);
const [showPopup, setShowPopup] = useState(false);
const [currentBoardNo, setCurrentBoardNo] = useState(null);
const [followId , setFollowId] = useState();
const [followCount , setFollowCount] = useState([]);
const [feedCount,setFeedCount] = useState(0);
const navigate = useNavigate();

useEffect(()=>{
    profileDetail(userId);
    userFeedList(userId);
    handleFollowCount();
    feedCounts();
},[userId,followId])
async function profileDetail(userId){
    try {
        const res = await axios.get(`http://localhost:3100/profile`,{
            params : {userId}
        });
        if(res.data.success){
            setUserDetail(res.data.boardDetail);
            setFollowId(res.data.boardDetail.USER_ID);
        }
    } catch (error) {
        console.log("fail");
    }
}
async function userFeedList(userId){
    try {
        const res = await axios.get(`http://localhost:3100/profile/list`,{
            params : {userId}
        })
        setFeedList(res.data.feedList);
    } catch (error) {
        console.log("fail");
    }
}
async function handleFollowing(follower) {
    if(dToken.userId != userId){
        try {
            const res = await axios.put(`http://localhost:3100/profile`,{
                follow : dToken.userId , follower : follower
            })
            if(res.data.success){
                alert(res.data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log("error!!!!!!")
        }
    }else{
        alert("자기 자신을 팔로우 할수 없습니다.");
        return;
    }
}
async function handleFollowCount(){
    try {
        const res = await axios.get(`http://localhost:3100/profile/follower`,{
            params: { follower: followId }
        })
        if(res.data.success){
            setFollowCount(res.data.followCount);
        }else{
            console.log("에러")
        }
    } catch (error) {
        console.log("fail!");
    }
}
async function feedCounts(){
    try {
        const res = await axios.get(`http://localhost:3100/profile/feedcount`,{
            params : {userId}
        })
        if(res.data.success){
            setFeedCount(res.data.feedCount.cnt);
        }else{
            console.log("fail");
        }
    } catch (error) {
        
    }
}
const openPopup = (boardNo) => {
    setCurrentBoardNo(boardNo);
    setShowPopup(true);
};

const closePopup = () => {
    setShowPopup(false);
    setCurrentBoardNo(null);
};
    return (
        <div className="container">
        <aside className="sidebar">
            <a href="#" onClick={()=>{
                navigate(`/main`);
            }}>홈</a>
            <a href="#" onClick={() => {
                navigate(`/profile/${dToken.userId}`);
            }}>프로필</a>
            <a href="#" onClick={() => { navigate("/login"); }}>로그아웃</a>
            <a href="#" onClick={() => { navigate("/feedInsert"); }}>
                <img className="icon" src="http://localhost:3100/img/add.png" alt="추가" />
            </a>
        </aside>
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h2 className="nickname">{userDetail.NICKNAME}</h2>
                    <div className="follower-info">
                        <span className="followers">팔로워 <strong>{followCount.follower_id_count}</strong></span>
                        <span className="following">팔로우 <strong>{followCount.follow_id_count}</strong></span>
                        <span className="following">게시물 <strong>{feedCount}</strong></span>
                    </div>
                    <button className="follow-button" onClick={() => {
                        handleFollowing(userDetail.USER_ID);
                    }}>팔로잉</button>
                </div>
            </div>

            <div className="images-container">
                {feedList.map((feed, index) => (
                    <div key={index} className="image-item">
                        <img src={feed.ATTACH_PATH1} onClick={() => openPopup(feed.BOARD_NO)} style={{ cursor: 'pointer' }} />
                    </div>
                ))}
            </div>

            {showPopup && (
                <CommentPopup boardNo={currentBoardNo} onClose={closePopup} />
            )}
        </div>
    </div>                                  
    );
}

export default Profile;