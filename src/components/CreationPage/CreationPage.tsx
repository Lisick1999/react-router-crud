import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreationPage = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const publishHandle = async () => {
    let response = await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ content })
    });

    if (response.ok) {
      setContent('');
      navigate('/');
    }
  }

  return (
    <div className='container-creation'>
      <button className='btn-close' onClick={() => navigate('/')}>x</button>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className='btn-publish' onClick={publishHandle}>Опубликовать</button>
    </div>
  );
};
