import React, { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  // stato iniziale del componente
  const [comments, setComments] = useState([]);      // lista commenti ricevuti
  const [isLoading, setIsLoading] = useState(true);  // spinner di caricamento
  const [error, setError] = useState(null);          // eventuali errori fetch

  console.log("CommentArea montato con asin", asin);

  // recupera i commenti dall'API
  const fetchComments = () => {
    console.log("Inizio fetch commenti per asin:", asin);

    // reset stato iniziale prima della chiamata
    setIsLoading(true);
    setError(null);

    // chiamata fetch con autorizzazione
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjkzMTc4Y2RkZjAwMTU1ZDY3OWEiLCJpYXQiOjE3NTMzNTQyMTksImV4cCI6MTc1NDU2MzgxOX0.5FGAMHp9aTH_49GqwVABtjYeo5FC4gV_Iwf8gTotc9o",
      },
    })
      .then((response) => {
        console.log("Risposta ricevuta:", response.status);
        if (!response.ok) {
          throw new Error("Errore recupero commenti");
        }
        return response.json(); // converto la risposta in JSON
      })
      .then((data) => {
        console.log("Commenti ricevuti", data);
        // salvo i commenti nello stato e nascondo lo spinner
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Errore nella fetch dei commenti", err);
        // salvo errore nello stato per mostrarlo a schermo
        setError(err.message);
        setIsLoading(false);
      });
  };

  // useEffect si comporta come componentDidMount + componentDidUpdate per asin
  useEffect(() => {
    if (asin) {
      console.log("useEffect attivato con asin:", asin);
      fetchComments(); // carico i commenti se asin è valido
    }
  }, [asin]); // effetto si attiva solo se asin cambia

  console.log("stato corrente", { comments, isLoading, error });

  return (
    <div className="mt-3">
      {/* Spinner se stiamo caricando */}
      {isLoading && <Spinner animation="border" />}

      {/* Messaggio d'errore se c'è stato un problema */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Se tutto è andato bene, mostra i commenti e il form */}
      {!isLoading && !error && (
        <>
          <CommentList comments={comments} />
          <AddComment asin={asin} onCommentAdded={fetchComments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
