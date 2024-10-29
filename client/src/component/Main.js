import React, { useEffect, useRef, useState } from 'react';
import '../styles.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import CommentPopup from './CommentPopup';
import { useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


const App = () => {
const [inputComment , setInputComment] = useState({});
const [feeds,setFeedLists] = useState([]);
const [comments , setComments] = useState([]);
const commentRef = useRef();
const [showPopup, setShowPopup] = useState(false);
const [currentBoardNo, setCurrentBoardNo] = useState(null);
const navigate = useNavigate();
const token = localStorage.getItem("token");
const dToken = jwtDecode(token);
useEffect(()=>{
    feedList();
},[])
const openComments = (boardNo) => {
    setCurrentBoardNo(boardNo);
        setShowPopup(true);
};

const closePopup = () => {
    setShowPopup(false);
    setCurrentBoardNo(null);
};
const handleChange = (boardNo, value) => {
    setInputComment(prev => ({ ...prev, [boardNo]: value })); // 각 피드의 댓글 상태 업데이트
};
async function feedList(){
    const token =localStorage.getItem("token");
    try {
        const res = await axios.get("http://localhost:3100/feed",{
            headers : {token : token}
        })
        const postsWithImages = res.data.list.map(post => ({
            ...post,
            images: post.IMAGE_URLS ? post.IMAGE_URLS.split(',').map(url => ({ url })) : [] // 이미지 URL 배열 생성
        }));
        setFeedLists(postsWithImages);
    } catch (error) {
        console.log("피드 오류:", error.response ? error.response.data : error.message);
    }
}
async function likes(boardNo){
    try {
        const res = await axios.put(`http://localhost:3100/feed/like/${boardNo}`,{
            userId : dToken.userId , boardNo : boardNo
        })
        if(res.data.success){
            alert(res.data.message);
            window.location.reload();
        }
    } catch (error) {
        console.log("좋아요 오류");
    }
}

async function handleComment(boardNo) {
    try {
        const res = await axios.put(`http://localhost:3100/feed/${boardNo}`,{
            userId :  dToken.userId, contents : inputComment[boardNo]
        })
        if(res.data.success){
            openComments(boardNo);
        }
    } catch (error) {
        
    }
    
}
    return (
        <div className="container">
            <main className="main">
            <aside className="sidebar">
                <a href="#">홈</a>
                <a href="#" onClick={()=>{
                    navigate(`/profile/${dToken.userId}`);
                    }}>프로필</a>
                <a href="#" onClick={()=>{navigate("/login")}}>로그아웃</a>
                <a href="#" onClick={()=>{navigate("/feedInsert")}}><img className="icon" src="http://localhost:3100/img/add.png"/></a>
            </aside>
                <div className="feed">
                    {feeds.map((feed) => (
                        <div key={feed.BOARD_NO} className="post">
                            <div className="content">
                                <div className="header">
                                    <a href={`/profile/${feed.USER_ID}`}><p className="nickname">{feed.NICKNAME}</p></a>
                                    <p className="datetime">{feed.CDATETIME}</p>
                                </div>
                                {feed.images && feed.images.length > 0 && (
                                    <Swiper
                                        spaceBetween={10}
                                        pagination={{ clickable: true }}
                                        navigation
                                        style={{ width: '100%', height: '300px' }} // 스와이퍼의 높이 설정
                                    >
                                        {feed.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <a href="#" onClick={()=> openComments(feed.BOARD_NO)}><img
                                                    src={image.url}
                                                    alt={`게시물 이미지 ${index + 1}`}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // 가로 100%, 세로 100%로 설정
                                                /></a>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                )}
                                <span className="nickname">{feed.NICKNAME}</span>
                                <p className="board-contents">{feed.BOARD_CONTENTS}</p>
                                <div className="actions">
                                    <span className="like" onClick={()=>{
                                        likes(feed.BOARD_NO);
                                    }}><img className="icon" src="http://localhost:3100/img/fullheart.png"/></span>
                                    <span>{feed.LIKE_COUNT}</span>
                                </div>
                                <a className="comment-link" href="#" onClick={()=> openComments(feed.BOARD_NO)}>댓글보기</a>
                                <input type="text" value={inputComment[feed.BOARD_NO] || ''} onChange={(e) => handleChange(feed.BOARD_NO,e.target.value)} placeholder='댓글달기' />
                                <button className="emoji-button" onClick={()=>{
                                    handleComment(feed.BOARD_NO);
                                    handleChange(feed.BOARD_NO,'');
                                }}><img className="icon" src="http://localhost:3100/img/send.png"/></button>
                            </div>
                        </div>
                    ))}  
                </div>
                {showPopup && <CommentPopup boardNo={currentBoardNo} onClose={closePopup} />}
            </main>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Catch up</p>
        </footer>
    );
};

export default () => (
    <>
        <App />
        <Footer />
    </>
);