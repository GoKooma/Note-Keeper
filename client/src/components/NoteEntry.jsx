import React from 'react';
import NoteStyle from './styles/NoteStyle.css'

const NoteEntry = (props) => {
  return (
    <div className={NoteStyle.noteEntryWrapper}>
      <div className={NoteStyle.noteEntry}>
        <div className={NoteStyle.noteTitle}>{props.title}</div>
        <div className={NoteStyle.noteDate}>{props.date}</div>
        <div className={NoteStyle.noteContent}>{props.content}</div>
      </div>
      <div className={NoteStyle.noteEntryControl} >
        <button 
          className={NoteStyle.button}
          onClick={(e) => props.handleUpdate(e, props.id)}
        >Edit</button>
        <button 
          className={NoteStyle.button}
          onClick={(e) => props.handleDelete(e, props.id)}
        >Delete</button>
      </div>
    </div>
  )
}

export default NoteEntry;