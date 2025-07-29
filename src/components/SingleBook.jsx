import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({ book, selected, onClick }) => {
  const { img, title, price, asin } = book; // ← assicurati che `asin` sia presente

  return (
    <div>
      <Card
        onClick={onClick}
        style={{
          cursor: "pointer",
          border: selected ? "3px solid red" : "1px solid #ddd",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          alt={title}
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} €</Card.Text>
        </Card.Body>
      </Card>

      {/* Mostra CommentArea solo se il libro è selezionato */}
      {selected && <CommentArea asin={asin} />}
    </div>
  );
};

export default SingleBook;
