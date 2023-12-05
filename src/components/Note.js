import React, { Component } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

export class Note extends Component {
  render() {
    const { id, text, date } = this.props;
    return (
      <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <RiDeleteBinLine className='delete-icon' size='1.3em'/>
        </div>
      </div>

    )
  }
}

export default Note