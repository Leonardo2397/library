import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
    // stato locale per selezione libri, inizialmente niente è selezionato
    const [ selectedBooks, setSelected ] = useState({})


const toggleSelected =(asin) => {
    setSelected((prevSelected) => ({
        ...prevSelected,
        [asin]: !prevSelected[asin],
    }));
};



  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col
            key={book.asin}
            lg={2}
            md={3}
            sm={6}
            xs={12}
            className="mb-4 d-flex"
          >
            <SingleBook
             book={book}
             selected={!!selectedBooks[book.asin]}
             onClick={() => toggleSelected(book.asin)}
             />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList