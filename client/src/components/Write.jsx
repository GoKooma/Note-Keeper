import React from 'react';
import axios from 'axios';
import FormStyle from './styles/FormStyle.css'

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
      }, 3500)
    
  }

  render() {
    return (
      <div className={FormStyle.formWrapper}>
        <div className={FormStyle.postStatus}>{this.state.posted}</div>
        <form className={FormStyle.journal} onSubmit={this.handlePost}>
          <textarea
            className={FormStyle.formTitle}
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
            placeholder="Title"
          />
          <textarea
            className={FormStyle.formContent}
            value={this.state.content}
            onChange={this.updateContent}
            placeholder="Note"
          />
          <div className={FormStyle.buttonWrapper}>
            <button 
              type="submit"
              className={FormStyle.formButton}
            >Post</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Write;