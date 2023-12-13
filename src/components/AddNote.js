import React, { useState } from 'react'

export const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  // Note Length Counter
  const characterLimit = 200;

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChange = (event) => {
    // Note Validation
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteTitle);
      setNoteText('');
      setNoteTitle('');
    }
  }

  return (
    <div className='note new'>

      <input
        type='text'
        placeholder='Title here...'
        value={noteTitle}
        onChange={handleTitleChange}
      />

      <textarea
        rows="8"
        cols="10"
        placeholder="Type here..."
        value={noteText}
        onChange={handleChange}
      ></textarea>

      <div className='note-footer'>
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className='save' onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default AddNote