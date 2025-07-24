import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
    render() {
        const {comment, rate} = this.props.comment;

        return(
            <ListGroup.Item>
                  <div><strong>Rating:</strong> {rate}/5</div>
        <div>{comment}</div>
            </ListGroup.Item>
        )
    }
}

export default SingleComment;