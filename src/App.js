import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import Header from "./components/Header";


function App() {

  const [note, setNotes] = useState([
    {
      id: nanoid(),
      title: "Note app by joshua S.",
      text: "To use this app all you have to do is\n\n#1 type in the grey note box\n#2 the box will tell you how many words you have\n#3 The box includes a save field that will save the note on page and browser data",
      date: "25/25/2035",
    },
    {
      id: nanoid(),
      title: "Example Note",
      text: "This is an example note feel free to delete it\n#1 How to delete? click the delete icon\n#2 How to turn on dark mode: click the sun icon\n#3 How to save: click the save button",
      date: "25/25/2065",
    },
    {
      id: nanoid(),
      title: "Search",
      text: "These are just words to fill out the page\nthe page will span to as many notes\nas you need without question \n\nso make as many as you need\nand search keywords to find them again",
      date: "25/25/2069",
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('streamliner'));
  
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'streamliner',
      JSON.stringify(note)
    );
  }, [note]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    }    

    const newNotes = [...note, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = note.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="wrapper">
        <Header
          handleDarkMode={setDarkMode}
        />
        <Search
          handleSearch={setSearchText}
        />
        <NoteList
          notes={note.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDelete={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
