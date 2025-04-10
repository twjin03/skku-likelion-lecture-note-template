import Note1 from "./list/Note1";
import Note2 from "./list/Note2";

export const notelists = {
  1: {
    title: "Lecture Note 1",
    description: "리액트의 useState 훅을 사용한 카운터 예제입니다.",
    page: <Note1 />,
    date: "2017-08-31",
  },
  2: {
    title: "Lecture Note 2",
    description: "API와 useState를 이용한 예제입니다.",
    page: <Note2 />,
    date: "2025-04-10",
  },
};
