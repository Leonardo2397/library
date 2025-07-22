import { Container, Card, Row, Col } from "react-bootstrap"
import books from '../books/fantasy.json';

const AllTheBooks = function() {
   return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} lg={2} md={3} sm={6} xs={12} className="mb-4 d-flex">
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title}  style={{ height: '200px', objectFit: 'cover', width: '100%' }}  />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}

export default AllTheBooks