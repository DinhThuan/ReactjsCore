// components/AddPost.js

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostForm extends Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <h3>Create Post</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input
                    required
                    type="text"
                    placeholder="Enter Post Title"
                    ref={input => (this.getTitle = input)}
                  />
                </td>
              </tr>
              <tr>
                <td>Post content</td>
                <td>
                  <textarea
                    required
                    rows="5"
                    cols="20"
                    placeholder="Enter Post"
                    ref={input => (this.getContent = input)}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button>Create</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const content = this.getContent.value;
    this.props.addPost(title, content);
    this.getTitle.value = "";
    this.getContent.value = "";
  };
}
