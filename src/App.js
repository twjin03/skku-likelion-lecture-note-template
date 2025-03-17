import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import NoteList from "./pages/NoteList";
import NoteView from "./pages/NoteView";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/note/:noteId" element={<NoteView />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
