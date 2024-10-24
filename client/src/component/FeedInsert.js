import React, { useState } from 'react';
import axios from 'axios';
import '../add.css';

function FeedInsert(props) {
const [content, setContent] = useState('');
const [images, setImages] = useState([]);
const imageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('content', content);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      const response = await axios.post('http://localhost:3100/feed', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
      // 폼 초기화
      setContent('');
      setImages([]);
    } catch (error) {
      console.error('피드 등록 오류:', error);
    }
  };
    return (
        <div className="add-post-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>내용:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>이미지 첨부:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={imageChange}
            required
          />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
    );
}

export default FeedInsert;