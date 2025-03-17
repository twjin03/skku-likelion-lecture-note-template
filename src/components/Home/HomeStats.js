import "../../css/home.css";
import { notelists } from "../../notes/config_notelists";
export default function HomeStats() {
  let size = Object.keys(notelists).length;
  return (
    <div className="homeStats">
      <h1>현재까지 작성한 강의 노트 수: {size}</h1>
    </div>
  );
}
