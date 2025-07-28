import React, { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
    constructor(props) {
        super(props);


        //stato iniziale componente
        this.state={
            comments: [],  // lista commenti ricevuti
            isLoading: true, // spinner di caricamento
            error: null,   // eventuali errori fetch
        };
    
        console.log("CommentArea montato conasin", this.props.asin);
    }
      // recuperare i commenti da api
      fetchComments = () => {
        const { asin } = this.props;

        console.log(" Inizio fetch commenti per asin:", asin);
             
            //reset loading e errori
             this.setState({ isLoading: true, error: null });

            //chiamata fetch con autorizzazione
           fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYjkzMTc4Y2RkZjAwMTU1ZDY3OWEiLCJpYXQiOjE3NTMzNTQyMTksImV4cCI6MTc1NDU2MzgxOX0.5FGAMHp9aTH_49GqwVABtjYeo5FC4gV_Iwf8gTotc9o",
      },
    })

       .then((response) => {
            console.log(" Risposta ricevuta:", response.status);
            if(!response.ok) {
                throw new Error ("errore recuper commenti")
            }
            return response.json(); //converto in json
       })
       .then((data) => {
        console.log("commenti ricevuti", data);
        // salvo i commenti nello stato e nascondo lo spinner
        this.setState ({comments: data, isLoading: false});
       })
       .catch((err)=> {
        console.error("errore nella fetch dei commenti", err)
        //salvo errore nello stato per mostrarlo su schermo
        this.setState({error: err.message, isLoading: false});
       });
      };

//       componentDidMount() {
//         console.log("componentdidmount chiamato");
//         this.fetchComments(); //recupera i dati iniziali
//       }

//   // cambia il valore asin selezionando un altro libro
//   componentDidUpdate(prevProps) {
//     if (prevProps.asin !== this.props.asin) {
//     console.log ("asin cambiato", prevProps.asin,   this.props.asin);
//      this.fetchComments(); //ricarico commenti per nuovo asin
//   }
// }

componentDidMount() {
  if (this.props.asin) {
    console.log("componentDidMount chiamato con asin:", this.props.asin);
    this.fetchComments();
  }
}

componentDidUpdate(prevProps) {
  if (prevProps.asin !== this.props.asin && this.props.asin) {
    console.log("asin cambiato da", prevProps.asin, "a", this.props.asin);
    this.fetchComments();
  }
}



render() {
    const {comments, isLoading, error} = this.state;
    console.log("stato corrente", this.state)

 return (
      <div className="mt-3">
        {/* Spinner se stiamo caricando */}
        {isLoading && <Spinner animation="border" />}

         {/* Messaggio d'errore se c'è stato un problema  */}
        {error && <Alert variant="danger">{error}</Alert>}

        {/* Se tutto è andato bene, mostra i commenti e il form */}
        {!isLoading && !error && (
          <>
            <CommentList comments={comments} />
            <AddComment asin={this.props.asin} onCommentAdded={this.fetchComments} />
          </>
        )}
      </div>
    );
  }
}
 export default CommentArea;