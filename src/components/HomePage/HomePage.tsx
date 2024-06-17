import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Post } from "../Post";

export type TPost = {
  content: string,
  created: number,
  id: number
}

export const HomePage = () => {
  const [posts, setPosts] = useState<TPost[] | []>([]);
  useEffect(() => {
    fetch('http://localhost:7070/posts')
      .then(res => res.text())
      .then((data) => setPosts(JSON.parse(data)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <NavLink to="/posts/new" >Создать пост</NavLink>
      {posts.map((post) =>
        <Post
          key={post.id}
          content={post.content}
          created={post.created}
          id={post.id}
        />
      )}
    </div>
  );
}
