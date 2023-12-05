import React, { Component } from 'react'

import AddNote from './AddNote';
import Note from './Note'

export class NoteList extends Component {
  render() {
    const { notes, handleAddNote } = this.props;
    return (
      <div className='note-list'>
        {notes.map((note)=>
          <Note id={note.id} text={note.text} date={note.date} />
        )}
        <AddNote handleAddNote={handleAddNote}/>
      </div>
    )
  }
}

export default NoteList