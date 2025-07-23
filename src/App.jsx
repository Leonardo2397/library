import React from "react";
import fantasyBooks from "./books/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return <BookList books={fantasyBooks} />;
}

export default App;
