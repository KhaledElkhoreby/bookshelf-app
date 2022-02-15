import { createContext, useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI.js";

const BookContext = createContext({
  books: [],
  changeShelfHandler: (book, shelf) => {},
});

export const BookContextProvider = (props) => {
  const [book, setBook] = useState({});
  const [shelf, setShelf] = useState({});
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  useEffect(() => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        setBooks(books);
      });
    });
  }, [book, shelf]);

  const OnChangeShelfHandler = (book, shelf) => {
    setBook(book);
    setShelf(shelf);
  };

  return (
    <BookContext.Provider
      value={{
        books: books,
        changeShelfHandler: OnChangeShelfHandler,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContext;
