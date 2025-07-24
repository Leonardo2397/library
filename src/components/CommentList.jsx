import React, { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
    render() {
        const {comments} = this.props;

        return (
             <div>
        <h5>Recensioni:</h5>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </div>
        )
    }
}

export default CommentList;