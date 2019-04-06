import React from 'react';
import NoteEntry from './NoteEntry.jsx'

const NotesList = (props) => {
  return (
    <div className="notes-list">
      {props.notes.map((note) => {
        return (
          <NoteEntry 
            title={note.title} 
            content={note.content} 
            date={note.date} 
          />
        )
      })}
    </div>
  )
}

export default NotesList;