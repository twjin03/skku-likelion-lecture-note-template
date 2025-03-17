import { NoteCard } from "../components/NoteList/NoteCard";
import { notelists } from "../notes/config_notelists";
import "../css/notelist.css";
function NoteList() {
  return (
    <div className="notelist">
      {Object.keys(notelists).map((key) => (
        <NoteCard key={key} note={notelists[key]} id={key} />
      ))}
    </div>
  );
}

export default NoteList;
