import '../popup.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CommentPopup({ boardNo, onClose }) {
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
            if(boardRes.data.success){
                console.log(boardRes.data.boardDetail);
                setFeeds(boardRes.data.boardDetail);
                console.log(feeds);
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
                <button className="close-button" onClick={onClose}>✖️</button>
                {feeds && (
                    <div className="post-details">
                        <p className="post-nickname">{feeds.NICKNAME}</p>
                        <p className="post-datetime">{feeds.CDATETIME}</p>
                        <img src="http://localhost:3100/img/selfimage6.jpg" alt="게시물" className="post-image" />
                        <p>{feeds.BOARD_CONTENTS}</p>
                    </div>
                )}
                <div className="comments-section">
                    <h3>댓글</h3>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <span className="comment-nickname">{comment.NICKNAME}: </span>
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