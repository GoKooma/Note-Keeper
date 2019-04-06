import React from 'react';
import NotesList from './NotesList.jsx';
import Write from './Write.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{title: "Hello World", content: "display example"}, {title: "Need vacation", content: "To San Diego!"}],
      myNotesTabVisibility: true,
      writeTabVisibility: false
    }
    this.handleMyNotesTab = this.handleMyNotesTab.bind(this);
    this.handleWriteTab = this.handleWriteTab.bind(this);
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

  render() {
    let myNotes, writeForm;
    this.state.myNotesTabVisibility ? myNotes = <NotesList notes={this.state.notes}/> : null;
    this.state.writeTabVisibility ? writeForm = <Write /> : null;

    return (
      <div className="notekeeper">
        <div className="logo">Note Keeper</div>
        <nav className="nav-bar">
          <button 
          className="mynotes-tab"
          onClick={this.handleMyNotesTab}
          >My Notes</button>
          <button 
          className="write-tab"
          onClick={this.handleWriteTab}
          >Write</button>
        </nav>
        <div className="form">
          {myNotes}
          {writeForm}
        </div>
      </div>
    )
  }
}

export default App;