import React, { useState } from "react";
import style from '../css/ApiPractice.module.css';

export default function ApiPractice() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [post, setPost] = useState('');

  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  const handleGetUser = () => {
    console.log("userId:", userId);
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((res) => {
        if (!res.ok) throw new Error('no user')
        return res.json();
      })
      .then((data) => {
        setUser(data);
        console.log("fetched user:", data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("fetch error:", error);
      });
  };
  const handlePostBlog = () => {
    console.log("userId:", userId);
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(
        {
          title: postTitle,
          body: post,
          userId: 1
        }
      )
    })
      .then((res) => {
        // if(!res.ok) throw new Error('no user')
        return res.json();
      })
      .then((data) => {
        // setUser(data);
        // console.log("fetched user:", data);
        console.log(data);
        setResponse(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("fetch error:", error);
      });
  };


  return (
    <div className={style.container}>
      <h1 className={style.heading}>API 연습</h1>

      <div className={style.section}>
        <input
          className={style.input}
          type='number'
          min='1'
          max='10'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="user ID 1 ~ 10"
        />
        <button
          className={style.button}
          onClick={handleGetUser}>
          유저 정보 GET
        </button>
        <div className={style.card}>
          <p><strong>유저 이름:</strong> {user.name}</p>
          <p><strong>유저 이메일:</strong> {user.email}</p>
          <p><strong>유저 전화번호:</strong> {user.phone}</p>
        </div>
      </div>

      <hr />

      <div className={style.section}>
        <input
          className={style.input}
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="게시글 제목"
        />
        <textarea
          className={style.textarea}
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="게시글 내용"
          rows="4"
        />
        <button className={style.button} onClick={handlePostBlog}>
          게시글 작성하기 POST
        </button>
      </div>
      {response && <div className={`${style.response} ${style.success}`} >
        게시글이 생성되었습니다: {response.id}
      </div>}

      {error && <div className={`${style.response} ${style.success}`} >
        오류: {error}
      </div>}
    </div>
  );
}
