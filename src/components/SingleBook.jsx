import React, {Component} from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

// class SingleBook extends Component {
//     render() {
//         const {img, title, price} = this.props.book;
//         const { selected, onClick } = this.props;



//         return (
//             <Card
//             onClick={onClick}
//         style={{
//           cursor: "pointer",
//           border: selected ? "3px solid red" : "1px solid #ddd",
//         }}
//             >
//                 <Card.Img
//                  variant="top"
//           src={img}
//           alt={title}
//           style={{ height: '200px', objectFit: 'cover', width: '100%' }}
//                 />
//             <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{price} €</Card.Text>
//         </Card.Body>
//             </Card>
            
//         )
//     }
// }

class SingleBook extends Component {
  render() {
    const { img, title, price, asin } = this.props.book; // ← assicurati che `asin` sia presente
    const { selected, onClick } = this.props;

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
        {selected && (
          <CommentArea asin={asin} />
        )}
      </div>
    );
  }
}


export default SingleBook