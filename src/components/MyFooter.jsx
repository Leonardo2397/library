import { Container, Row, Col } from "react-bootstrap";

// const MyFooter = function() {
//     return(
//         <footer>
//             <div className="row">
// <div className="col">
//     <h5>il tuo sito</h5>
//     <p>© {new Date().getFullYear()} Tutti i diritti riservati.</p>
// </div>
// <div className="col">
//      <p>
//               Contattaci: <a href="mailto:info@iltuosito.com" className="text-white">info@iltuosito.com</a>
//             </p>
// </div>
//             </div>
//         </footer>
//     )
// }

// export default MyFooter

const MyFooter = function() {
    return(
        <footer className="bg-dark text-light mt-5 py-4">
       <Container>
        <Row>
            <Col>
            <h5>Il tuo sito</h5>
            <p>© {new Date().getFullYear()} Tutti i diritti riservati.</p>
            </Col>
            <Col>
             <p>
              Contattaci:{" "}
              <a href="mailto:info@iltuosito.com" className="text-white">
                info@iltuosito.com
              </a>
            </p>
            </Col>
        </Row>
       </Container>
        </footer>
    )
}

export default MyFooter