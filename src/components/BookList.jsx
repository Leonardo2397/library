import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";



const BookList = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Container fluid>
      <Row>
        {/* Colonna di sinistra: griglia dei libri */}
        <Col md={8}>
          <Row>
            {books.map((book) => (
              <Col
                key={book.asin}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className="mb-4 d-flex"
              >
                <SingleBook
                  book={book}
                  selected={book.asin === selectedAsin}
                  onClick={() =>
                    setSelectedAsin(book.asin === selectedAsin ? null : book.asin)
                  }
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Colonna di destra: commenti */}
        <Col md={4}>
          {selectedAsin ? (
            <CommentArea asin={selectedAsin} />
          ) : (
            <Alert variant="info" className="mt-3">
              Seleziona un libro per visualizzare i commenti.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};


export default BookList