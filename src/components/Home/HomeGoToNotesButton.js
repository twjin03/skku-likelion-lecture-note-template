import { Link } from "react-router-dom";
import "../../css/home.css";
export default function HomeGoToNotesButton() {
  return (
    <div>
      <Link to="/notes">
        <button className="HomeGoToNotesButton">노트 보기</button>
      </Link>
    </div>
  );
}
