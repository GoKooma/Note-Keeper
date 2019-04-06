import React from 'react';

class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
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
    console.log("POST")
    this.setState({
      title: '',
      content: ''
    })
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
      </div>
    )
  }

}

export default Write;