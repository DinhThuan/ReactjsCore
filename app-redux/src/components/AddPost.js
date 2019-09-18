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
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                required
                className="form-control"
                type="text"
                placeholder="Enter Post Title"
                ref={input => (this.getTitle = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <textarea
                required
                className="form-control"
                rows="5"
                cols="20"
                placeholder="Enter Post"
                ref={input => (this.getContent = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
              <button>Create</button>
            </div>
          </div>
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
