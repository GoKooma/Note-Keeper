import React from 'react';
import NoteEntry from './NoteEntry.jsx'
import BodyStyle from './styles/BodyStyle.css'
import Write from './Write.jsx';

const NotesList = (props) => {
  return (
    <div className={BodyStyle.notesList}>
      {props.notes.map((note, index) => {
        if (props.noteToEdit !== index) {
          return (
            <NoteEntry 
              title={note.title} 
              content={note.content} 
              date={note.date} 
              id={index}
              handleDelete={props.handleDelete}
              notifyUpdate={props.notifyUpdate}
            />
          )
        } else {
          return (
            <Write
              fetchNotes={props.fetchNotes}
              title={note.title}
              content={note.content}
              noteToEdit={props.noteToEdit}
              editing={props.editing}
              handleUpdate={props.handleUpdate}
              id={index}
            />
          )
        }
      })}
    </div>
  )
}

export default NotesList;