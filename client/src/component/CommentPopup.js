import '../popup.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode';

function CommentPopup({ boardNo, onClose }) {
const navigate = useNavigate();
const [comments, setComments] = useState([]);
const [feeds , setFeeds] = useState([]);
const token = localStorage.getItem("token");
const dToken = jwtDecode(token);
const [inputComment , setInputComment] = useState({});
const [nickname, setNickname] = useState('');
const [feedUserId , setFeedUserId] = useState('');

const handleChange = (boardNo, value) => {
    setInputComment(prev => ({ ...prev, [boardNo]: value })); // 각 피드의 댓글 상태 업데이트
};
useEffect(()=>{
    async function commentLists(){
        try {
            const commentRes = await axios.get(`http://localhost:3100/feed/comment/${boardNo}`);
           
            if(commentRes.data.success){
                setComments(commentRes.data.commentList);
            }
            const boardRes = await axios.get(`http://localhost:3100/feed/board/${boardNo}`);
            if (boardRes.data.success) {
                const postDetail = {
                    ...boardRes.data.boardDetail,
                    images: boardRes.data.boardDetail.IMAGE_URLS ? 
                        boardRes.data.boardDetail.IMAGE_URLS.split(',').map(url => ({ url })) : []
                };
                setFeeds(postDetail);
                setFeedUserId(postDetail.USER_ID);
                
            }
        } catch (error) {
            console.log("error");
        }
    }
    commentLists();
},[boardNo]);
useEffect(()=>{
},[feedUserId])
async function handleComment(boardNo) {
    try {
        const res = await axios.put(`http://localhost:3100/feed/${boardNo}`,{
            userId :  dToken.userId, contents : inputComment[boardNo]
        })
        if(res.data.success){
            const newComment = {
                NICKNAME: dToken.userId,
                COMMENT_CONTENTS: inputComment[boardNo]
            };
            setComments(prevComments => [...prevComments, newComment]);
            setInputComment(prev => ({ ...prev, [boardNo]: '' }));
        }
    } catch (error) {
        
    }
}
async function handleDelComments(commentNo){
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
            try {
                const res = await axios.delete(`http://localhost:3100/feed/commentDelete`,{
                    params: { commentNo: commentNo }
                })
                if(res.data.success){
                    alert(res.data.message);
                    onClose();
                }
            } catch (error) {
                console.log("err입니다");
            }
        } else {
            return;
    }
}
async function handleFeedDelete(){
    if(window.confirm("게시글을 삭제하시겠습니까?")){
        try {
            const res = await axios.delete(`http://localhost:3100/feed`,{
                params : {boardNo : boardNo}
            })
            if(res.data.success){
                alert(res.data.message);
                window.location.reload();
            }
        } catch (error) {
            
        }
    }else{
        return;
    }
}
    return (
        <div className="popup">
            <div className="popup-content">
                {feedUserId === dToken.userId && (
                    <button className="close-button" onClick={()=>{
                        handleFeedDelete();
                    }}>
                        <img className="icon" src="http://localhost:3100/img/delete.png" alt="Close" />
                    </button>
                )}
                <button className="close-button" onClick={onClose}><img className="icon" src="http://localhost:3100/img/x표시.png"/></button>
                {feeds && (
                    <div className="post-details">
                        <p className="post-nickname" onClick={()=>{
                            navigate(`/profile/${feeds.USER_ID}`);
                        }}>{feeds.NICKNAME}</p>
                        <p className="post-datetime">{feeds.CDATETIME}</p>
                        {feeds.images && feeds.images.length > 0 && (
                            <Swiper spaceBetween={10} pagination={{ clickable: true }} navigation>
                                {feeds.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image.url}
                                            alt={`게시물 이미지 ${index + 1}`}
                                            className="post-image"
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                        <p>{feeds.BOARD_CONTENTS}</p>
                    </div>
                )}
                <div className="comments-section">
                    <h3>댓글</h3>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <span className="comment-nickname" onClick={()=>{
                                    onClose();
                                    navigate(`/profile/${comment.USER_ID}`);
                                }}>{comment.NICKNAME}: </span>
                                <span className="comment-content">{comment.COMMENT_CONTENTS}</span>
                                {comment.USER_ID === dToken.userId && (
                                    <button className="close-button" onClick={()=>{
                                        handleDelComments(comment.COMMENT_NO);
                                    }}>
                                        <img className="icon" src="http://localhost:3100/img/x표시.png" alt="Close" />
                                    </button>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )}
                </div>
                    <div className="comment-input">
                    <input
                        type="text"
                        value={inputComment[boardNo] || ''}
                        onChange={(e) => handleChange(boardNo, e.target.value)}
                        placeholder='댓글달기'
                        className="comment-input-box" // 추가된 클래스
                    />
                    <button className="emoji-button" onClick={() => {
                        handleComment(boardNo);
                        handleChange(boardNo, '');
                    }}>
                        <img className="icon" src="http://localhost:3100/img/send.png" />
                    </button>
                </div>
            </div>
        </div>                              
    );
}

export default CommentPopup;