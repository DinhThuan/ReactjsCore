// components/EditPost.js

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EditPost extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string
    }).isRequired,
    
    updatePost: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    required
                    type="text"
                    ref={input => (this.getTitle = input)}
                    defaultValue={this.props.post.title}
                    placeholder="Enter Post Title"
                  />
                </td>
              </tr>
              <tr>
                <td>Post content</td>
                <td>
                  {" "}
                  <textarea
                    required
                    rows="5"
                    cols="20"
                    ref={input => (this.getContent = input)}
                    defaultValue={this.props.post.content}
                    placeholder="Enter Post Content"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }

  handleEdit = e => {
    e.preventDefault();
    const id = this.props.post.id;
    const newTitle = this.getTitle.value;
    const newContent = this.getContent.value;
    this.props.updatePost(id, newTitle, newContent);
  };
}
