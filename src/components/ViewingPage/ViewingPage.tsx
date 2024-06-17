import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../Post";
import { EditPage } from "../EditPage";
import { TPost } from "../HomePage";

export const ViewingPage = () => {
  const [post, setPost] = useState<TPost | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${postId}`)
      .then(res => res.text())
      .then((data) => setPost(JSON.parse(data).post))
      .catch(err => console.log(err));
  }, [isEdit]);

  if (!post) return null;

  const removeItem = async (id: number) => {
    let response = await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    if (response.ok) {
      setPost(null);
      navigate('/');
    }
  };

  return (
    <div>
      {isEdit ? (
        <EditPage
          id={post.id}
          content={post.content}
          setIsEdit={setIsEdit}
        />
      ) : (
        <>
          <Post
            id={post.id}
            content={post.content}
            created={post.created}
          />
          <div className='container-btn'>
            <button onClick={() => setIsEdit(true)}>Изменить</button>
            <button onClick={() => removeItem(post.id)}>Удалить</button>
            <button onClick={() => navigate(`/`)}>Назад</button>
          </div>
        </>
      )}
    </div>
  );
};
