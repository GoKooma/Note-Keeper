import React from 'react';

const NoteEntry = (props) => {
  return (
    <div className="note-entry">
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  )
}

export default NoteEntry;