import React, { Component } from 'react'

import AddNote from './AddNote';
import Note from './Note'

export class NoteList extends Component {
  render() {
    const { notes, handleAddNote, handleDelete } = this.props;
    return (
      <div className='note-list'>
        {notes.map((note)=>
          <Note
            key={note.id}
            id={note.id}
            title={note.title} 
            text={note.text} 
            date={note.date}
            handleDelete={handleDelete}
            />
        )}
        <AddNote handleAddNote={handleAddNote}/>
      </div>
    )
  }
}

export default NoteList