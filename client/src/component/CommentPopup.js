import '../popup.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom'; 

function CommentPopup({ boardNo, onClose }) {
const navigate = useNavigate();
const [comments, setComments] = useState([]);
const [feeds , setFeeds] = useState([]);
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
            }
        } catch (error) {
            console.log("error");
        }
    }
    commentLists();
},[boardNo]);
    return (
        <div className="popup">
            <div className="popup-content">
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
                            </div>
                        ))
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )}
                </div>
            </div>
        </div>                              
    );
}

export default CommentPopup;