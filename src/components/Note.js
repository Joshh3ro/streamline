import React, { Component } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

export class Note extends Component {
  render() {
    return (
      <div className='note'>
        <span>ur gay</span>
        <div className='note-footer'>
            <small>25/25/2025</small>
            <RiDeleteBinLine className='delete-icon' size='1.3em'/>
        </div>
      </div>

    )
  }
}

export default Note