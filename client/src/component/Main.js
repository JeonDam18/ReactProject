import React, { useEffect, useRef, useState } from 'react';
import '../styles.css'; // CSS 파일 임포트
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const App = () => {
const [inputComment , setInputComment] = useState({});
const [feeds,setFeedLists] = useState([]);
const commentRef = useRef();
const token = localStorage.getItem("token");
const dToken = jwtDecode(token);
useEffect(()=>{
    feedList();
    // likeList();
},[])
// async function likeList(){
//     try {
//         const res = await axios.get("http://localhost:3100/feed/likeCheck")
//     } catch (error) {
        
//     }
// }
const handleChange = (boardNo, value) => {
    setInputComment(prev => ({ ...prev, [boardNo]: value })); // 각 피드의 댓글 상태 업데이트
};
async function feedList(){
    const token =localStorage.getItem("token");
    try {
        console.log("토큰 가져온거" + token);
        const res = await axios.get("http://localhost:3100/feed",{
            headers : {token : token}
        })
        console.log(res.data.list);
        setFeedLists(res.data.list);
    } catch (error) {
        console.log("피드 오류:", error.response ? error.response.data : error.message);
    }
}
async function handleComment(boardNo) {
    console.log(dToken.userId);
    console.log(inputComment);
    try {
        const res = await axios.put(`http://localhost:3100/feed/${boardNo}`,{
            userId :  dToken.userId, contents : inputComment[boardNo]
        })
        if(res.data.success){
            console.log("댓글입력함");
        }
    } catch (error) {
        
    }
    
}
    return (
        <div className="container">
            <aside className="sidebar">
                <a href="#">홈</a>
                <a href="#">프로필</a>
                <a href="#">검색</a>
            </aside>
            <main className="main">
                <div className="feed">
                {feeds.map((feed) => (
    <div key={feed.BOARD_NO} className="post">
        <div className="content">
            <div className="header">
                <a href="#"><p className="nickname">{feed.NICKNAME}</p></a>
                <p className="datetime">{feed.CDATETIME}</p>
            </div>
            <img
                src="http://localhost:3100/img/selfimage6.jpg"
                alt="게시물 이미지"
                style={{ width: '100%', maxWidth: '1080px', height: 'auto' }}
            />
            <span className="nickname">{feed.NICKNAME}</span>
            <p className="board-contents">{feed.BOARD_CONTENTS}</p>
            <div className="actions">
                <span className="like">❤️</span>
                <span>{feed.LIKE_COUNT}</span>
            </div>
            <a href="#">댓글보기</a>
            <input type="text" value={inputComment[feed.BOARD_NO] || ''} onChange={(e) => handleChange(feed.BOARD_NO,e.target.value)} placeholder='댓글달기' />
            <button className="emoji-button" onClick={()=>{
                handleComment(feed.BOARD_NO);
                handleChange(feed.BOARD_NO,'');
            }}>😊</button>
        </div>
    </div>
))}
                </div>
            </main>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Instagram</p>
        </footer>
    );
};

export default () => (
    <>
        <App />
        <Footer />
    </>
);