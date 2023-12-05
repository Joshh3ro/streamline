import { useState } from "react";
import { nanoid } from 'nanoid';
import NoteList from "./components/NoteList";


function App() {

  const [note, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is some random text",
      date: "25/25/2005",
    },
    {
      id: nanoid(),
      text: "This is some random text plus more",
      date: "25/25/2035",
    },
    {
      id: nanoid(),
      text: "This is some random text plus less",
      date: "25/25/2065",
    },
    {
      id: nanoid(),
      text: "This is some random text plus somethiung",
      date: "25/25/2095",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text, 
      date: date.toLocaleDateString()
    }

    const newNotes = [...note, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="wrapper">
      <NoteList notes={note} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
