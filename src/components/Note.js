import React, { Component } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

export class Note extends Component {
  render() {
    const { id, title, text, date, handleDelete } = this.props;

    return (
      <div className='note'>
        <span>
          <p className='title'>{title}</p>
          <p>{text}</p>
        </span>
        <div className='note-footer'>
          <small>{date}</small>

          <RiDeleteBinLine
            onClick={() => handleDelete(id)}
            className='delete-icon'
            size='1.3em'
          />
        </div>
      </div>

    )
  }
}

export default Note