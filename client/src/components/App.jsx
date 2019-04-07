import React from 'react';
import NotesList from './NotesList.jsx';
import Write from './Write.jsx'
import axios from 'axios';
import BodyStyle from './styles/BodyStyle.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{title: "Welcome to Note Keeper!", content: "Loading..."}],
      myNotesTabVisibility: true,
      writeTabVisibility: false
    }
    this.handleMyNotesTab = this.handleMyNotesTab.bind(this);
    this.handleWriteTab = this.handleWriteTab.bind(this);
    this.fetchNotes = this.fetchNotes.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchNotes();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  fetchNotes() {
    axios.get('/api/notes')
      .then((notes) => {
        console.log(notes)
        this.setState({
          notes: notes.data
        })
      })
      .catch(err => console.error(err))
  }

  handleMyNotesTab(e) {
    this.setState({
      myNotesTabVisibility: true,
      writeTabVisibility: false
    })
  }

  handleWriteTab(e) {
    this.setState({
      writeTabVisibility: true,
      myNotesTabVisibility: false
    })
  }

  handleDelete(e, id) {
    let noteID = this.state.notes[id]._id
    e.preventDefault();
    axios
      .delete(`/api/note/${noteID}`, { params: { id: noteID }})
      .then(() => {
        this.fetchNotes();
      })
      .catch(err => console.error(err));
  }

  handleUpdate(e, id) {
    e.preventDefault();
    console.log("EDIT THE NOTE")
  }

  render() {
    let myNotes, writeForm;
    this.state.myNotesTabVisibility ? myNotes = <NotesList 
      notes={this.state.notes} 
      handleDelete={this.handleDelete}
      handleUpdate={this.handleUpdate}
    /> : null;
    this.state.writeTabVisibility ? writeForm = <Write fetchNotes={this.fetchNotes} /> : null;

    return (
      <div className={BodyStyle.notekeeper}>
        <div className={BodyStyle.logo}>Note Keeper</div>
        <nav className={BodyStyle.navBar}>
          <button 
          className={BodyStyle.tab}
          onClick={this.handleMyNotesTab}
          >My Notes</button>
          <button 
          className={BodyStyle.tab}
          onClick={this.handleWriteTab}
          >Write</button>
        </nav>
        <div className={BodyStyle.contentBody}>
          {myNotes}
          {writeForm}
        </div>
      </div>
    )
  }
}

export default App;