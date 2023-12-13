import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import Header from "./components/Header";


function App() {

  const [note, setNotes] = useState([
    {
      id: nanoid(),
      title: "Some Title Text Here",
      text: "This is some random text",
      date: "25/25/2005",
    },
    {
      id: nanoid(),
      title: "Some Title Text Here",
      text: "This is some random text plus more",
      date: "25/25/2035",
    },
    {
      id: nanoid(),
      title: "Some Title Text Here",
      text: "This is some random text plus less",
      date: "25/25/2065",
    },
    {
      id: nanoid(),
      title: "Some Title Text Here",
      text: "This is some random text plus something",
      date: "25/25/2095",
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
