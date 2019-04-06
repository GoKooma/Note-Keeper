import React from 'react';
import axios from 'axios';

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      posted: ''
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  updateContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  handlePost(e) {
    e.preventDefault();
    axios
      .post('api/note', {
        title: this.state.title,
        content: this.state.content
      })
      .then((res) => {
        console.log(res);
        this.setState({
          title: '',
          content: '',
          posted: 'Posted!'
        });
        this.props.fetchNotes();
      })
      .catch(err => {
        console.error(err);
        this.setState({
          posted: 'Posting Failed...'
        })
      })

      setTimeout(() => {
        this.setState({ posted: '' })
      }, 5000)
    
      console.log("POST")
  }

  render() {
    return (
      <div>
        <form id="journal" onSubmit={this.handlePost}>
          <input
            className="title"
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
          />
          <input
            className="content"
            type="text"
            value={this.state.content}
            onChange={this.updateContent}
          />
          <button type="submit">Post</button>
        </form>
        {this.state.posted}
      </div>
    )
  }

}

export default Write;