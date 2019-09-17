// components/Post.js

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string
    }).isRequired,
    editPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  render() {
    console.log(this.props.post);
    return (
      <div>
        <table border="1">
          <tbody>
            <tr>
              <td>
                <span>{this.props.post.title}</span>
              </td>
              <td>
                <span>{this.props.post.content}</span>
              </td>
              <td>
                {" "}
                <button onClick={() => this.props.editPost(this.props.post.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.props.deletePost(this.props.post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
