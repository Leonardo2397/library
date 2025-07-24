import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";

class AddComment extends Component {
    constructor(props) {
        super(props);

        //stato iniziale del form
        this.state= {
            comment: "",
            rate:1,
            error:null,
        };

        console.log("AddComment montato per asin", this.props.asin);
    }

    // gmetodo per invio del form
    handlesubmit = (e) => {
        e.preventDefault();
        console.log("invio commento", this.state);

        // oggetto che verrà inviato nel body della richiesta post
        const newComment = {
                   comment: this.state.comment,
                    rate: this.state.rate,
                     elementId: this.props.asin,
        };
        console.log("dati del commento da inviare", newComment);



          // Chiamata POST verso l'API Strive School
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST", // metodo POST per creare un nuovo commento
      headers: {
        "Content-Type": "application/json", // tipo di contenuto inviato
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjkzMTc4Y2RkZjAwMTU1ZDY3OWEiLCJpYXQiOjE3NTMzNTQyMTksImV4cCI6MTc1NDU2MzgxOX0.5FGAMHp9aTH_49GqwVABtjYeo5FC4gV_Iwf8gTotc9o"
      },
      body: JSON.stringify(newComment), // conversione dell'oggetto in JSON string
    })
       .then((res) => {
            console.log("risposta post ricevuta", res.status);
            if(!res.ok) {
                throw new Error("errore salvataggio commento")
            }
            return res.json()
       })
         .then((data) => {
            console.log("commento salvato", data);


            
        // Pulizia del form e reset errori
        this.setState({ comment: "", rate: 1, error: null });

         // Notifico CommentArea per aggiornare la lista dei commenti
        this.props.onCommentAdded();
         })
         .catch((err) => {
            console.log("errore chiamata post", err);
            //salvo errore per mostrarlo a utente
            this.setState({error: err.message});
         });
    };

    render() {
        console.log("render AddComment con stato", this.state)

        return(
            <Form onSubmit={this.handlesubmit}>
                    {/* Mostra messaggio di errore se presente */}
        {this.state.error && (
          <Alert variant="danger">{this.state.error}</Alert>
        )}

        {/* Campo per scrivere la recensione */}
        <Form.Group>
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.comment}
            onChange={(e) => {
              console.log("Modifica commento:", e.target.value);
              this.setState({ comment: e.target.value });
            }}
            required
          />
        </Form.Group>

        {/* Select per il voto */}
        <Form.Group>
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.rate}
            onChange={(e) => {
              console.log("Modifica voto:", e.target.value);
              this.setState({ rate: e.target.value });
            }}
          >
            {/* Genera dinamicamente le opzioni da 1 a 5 */}
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Bottone per inviare il form */}
        <Button variant="primary" type="submit" className="mt-2">
          Invia
        </Button>
            </Form>
        )
    }
}

export default AddComment;