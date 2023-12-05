import React, {  useState } from 'react'

export const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
  
    const handleChange = (event) => {
      setNoteText(event.target.value);
    };

    const handleSave = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }
  
    return (
      <div className='note new'>
        <textarea 
          rows="8" 
          cols="10" 
          placeholder="Type here ..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
  
        <div className='note-footer'>
          <small>200 Remaining</small>
          <button className='save' onClick={handleSave}>Save</button>
        </div>
      </div>
    )
  }

export default AddNote