import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const AddComment = ({ asin, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [error, setError] = useState(null);

  console.log("AddComment montato per asin", asin);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("invio commento", { comment, rate });

    const newComment = {
      comment,
      rate,
      elementId: asin,
    };

    console.log("dati del commento da inviare", newComment);

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjkzMTc4Y2RkZjAwMTU1ZDY3OWEiLCJpYXQiOjE3NTMzNTQyMTksImV4cCI6MTc1NDU2MzgxOX0.5FGAMHp9aTH_49GqwVABtjYeo5FC4gV_Iwf8gTotc9o",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        console.log("risposta post ricevuta", res.status);
        if (!res.ok) {
          throw new Error("Errore salvataggio commento");
        }
        return res.json();
      })
      .then((data) => {
        console.log("commento salvato", data);
        setComment("");
        setRate(1);
        setError(null);
        onCommentAdded(); // Notifica il genitore
      })
      .catch((err) => {
        console.log("errore chiamata post", err);
        setError(err.message); // non deve essere oggetto!
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Mostra messaggio di errore se presente */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Campo per scrivere la recensione */}
      <Form.Group>
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => {
            console.log("Modifica commento:", e.target.value);
            setComment(e.target.value);
          }}
          required
        />
      </Form.Group>

      {/* Select per il voto */}
      <Form.Group>
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => {
            console.log("Modifica voto:", e.target.value);
            setRate(e.target.value);
          }}
        >
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
  );
};

export default AddComment;
