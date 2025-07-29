import React from "react";
import { ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const { comment: text, rate } = comment;

  return (
    <ListGroup.Item>
      <div><strong>Rating:</strong> {rate}/5</div>
      <div>{text}</div>
    </ListGroup.Item>
  );
};

export default SingleComment;
