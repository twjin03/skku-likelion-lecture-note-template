import { useParams } from "react-router-dom";
import { notelists } from "../notes/config_notelists";
import "../css/noteview.css";
function NoteView() {
  const { noteId } = useParams();
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{notelists[noteId].title}</h1>
      </div>
      <div className="date">
        <p>작성일: {notelists[noteId].date}</p>
      </div>
      <div className="section">
        <h2>강의 설명</h2>
        <p className="section-description">{notelists[noteId].description}</p>
      </div>
      <div className="section">
        <h2>강의 코드 실행 화면</h2>
        <p className="section-description">
          <div className="code-page">{notelists[noteId].page}</div>
        </p>
      </div>
    </div>
  );
}

export default NoteView;
