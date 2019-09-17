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
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>content</th>
              <th className="btn-action">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>{this.props.post.title}</span>
              </td>
              <td>
                <span>{this.props.post.content}</span>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => this.props.editPost(this.props.post.id)}
                >
                  Edit
                </button>
                <button
                  className="ml-2 btn btn-danger"
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
