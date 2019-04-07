import React from 'react';
import NoteEntry from './NoteEntry.jsx'
import BodyStyle from './styles/BodyStyle.css'

const NotesList = (props) => {
  return (
    <div className={BodyStyle.notesList}>
      {props.notes.map((note, index) => {
        return (
          <NoteEntry 
            title={note.title} 
            content={note.content} 
            date={note.date} 
            id={index}
            handleDelete={props.handleDelete}
            handleUpdate={props.handleUpdate}
          />
        )
      })}
    </div>
  )
}

export default NotesList;