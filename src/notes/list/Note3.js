import React, { useEffect, useState } from "react";
import styles from "../css/PropsPractice.module.css";

// UserCard 컴포넌트를 완성하세요
function UserCard({ name, age, likes, onLike }) {
  return (
    /*************** EDIT START ***************/
    <div className={styles.userCard}>
      <h2>{name}</h2> {/* name */}
      <p>Age: {age}</p> {/* age */}
      <p>Likes: {likes}</p> {/* likes */}
      <button className={styles.button} onClick={onLike}>
        좋아요❤️
      </button>
    </div>
  );
  /*************** EDIT END ***************/
}

function PropsPractice(props) {
  const [alike, setAlike] = useState(0);
  const [blike, setBlike] = useState(0);
  /*************** EDIT START ***************/
  // Alice와 Bob의 likes를 위한 state를 선언하세요

  // Alice의 좋아요를 2씩 증가시키는 함수
  const inAlike = () => {
    setAlike(alike + 2);
  };
  // Bob의 좋아요를 1씩 증가시키는 함수
  const inBlike = () => {
    setBlike(blike + 1);
  };

  // useEffect를 사용하여  Bob과 Alice의 좋아요 수가 10이 넘고 동시에 같다면 alert을 띄우세요
  useEffect(() => {
    if (blike > 10 && alike > 10 && blike === alike) {
      alert("Bob and Alice are friends");
    }

  }, [alike, blike]);

  /*************** EDIT END ***************/
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/*************** EDIT START ***************/}
      {/* 각각 UserCard에 맞는 props를 전달하세요 */}
      {/*************** EDIT END ***************/}
      <UserCard
        name='Alice'
        age={22}
        likes={alike}
        onLike={inAlike}
      />
      <UserCard
        name='Bob'
        age={20}
        likes={blike}
        onLike={inBlike}
      />
    </div>
  );
}

export default PropsPractice;
