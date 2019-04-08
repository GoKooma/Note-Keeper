import React from 'react';
import axios from 'axios';
import FormStyle from './styles/FormStyle.css'

let writeTitle, writeContent, updateMsg;

class Write extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.title) {
      writeTitle = '';
      writeContent = '';
    } else {
      writeTitle = this.props.title;
      writeContent = this.props.content;
    }

    if (this.props.editMsg) {
      updateMsg = this.props.editMsg;
    } else {
      updateMsg = '';
    }

    this.state = {
      title: writeTitle,
      content: writeContent,
      posted: updateMsg
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUpdate() {

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
      .then(() => {
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
          posted: 'Posting Failed... Please fill in both title and content'
        })
      })

      setTimeout(() => {
        this.setState({ posted: '' })
      }, 3500)
  }
  
  render() {
    let writeFormButton;

    if (this.props.editing) {
      writeFormButton = <button 
        type="submit"
        className={FormStyle.formButton}
        onClick={(e) => this.props.handleUpdate(e, this.props.id, this.state.title, this.state.content)}
      >Edit</button>
    } else {
      writeFormButton = <button 
        type="submit"
        className={FormStyle.formButton}
        onClick={this.handlePost}
      >Post</button>
    }
    return (
      <div className={FormStyle.formWrapper}>
        <div className={FormStyle.postStatus}>{this.state.posted}</div>
        <form className={FormStyle.journal}>
          <textarea
            className={FormStyle.formTitle}
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
            placeholder="Title"
          />
          <br />
          <textarea
            className={FormStyle.formContent}
            value={this.state.content}
            onChange={this.updateContent}
            placeholder="Note"
          />
          <div className={FormStyle.buttonWrapper}>
            {writeFormButton}
          </div>
        </form>
      </div>
    )
  }

}

export default Write;