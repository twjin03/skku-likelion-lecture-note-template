import { Link } from "react-router-dom";
import "../../css/notelist.css";
export function NoteCard({ note, id }) {
  return (
    <Link
      to={`/note/${id}`}
      className="note-card"
      style={{ textDecoration: "none" }}
    >
      <div className="note-card-header">
        <span className="icon">📘</span>
        <h2>{note.title}</h2>
      </div>
      <p className="note-card-description">{note.description}</p>
      <p className="note-card-date">작성일: {note.date}</p>
    </Link>
  );
}
