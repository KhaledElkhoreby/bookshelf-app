import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "../Components/SearchResults";
import * as BooksAPI from "../BooksAPI";
import shelfContext from "../store/shelfContext";
import NoResults from "../UI/NoResults";
import Loading from "../UI/Loading";

const SearchPage = () => {
  /* ALTERNATIVE FOR Link
  const history = useHistory();
  const closeSearchHandler = () => {
    history.push("/reads");
  }; */
  const [resultedBooks, setResultedBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const shelfCtx = useContext(shelfContext);

  useEffect(() => {
    const checkIsInOurShelf = (book) => {
      try {
        if (shelfCtx.currentlyReading.findIndex((b) => b.id === book.id) > -1) {
          book.ourShelf = "currentlyReading";
          return book;
        } else if (
          shelfCtx.wantToRead.findIndex((b) => b.id === book.id) > -1
        ) {
          book.ourShelf = "wantToRead";
          return book;
        } else if (shelfCtx.read.findIndex((b) => b.id === book.id) > -1) {
          book.ourShelf = "read";
          return book;
        } else {
          book.ourShelf = "none";
          return book;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const identifer = setTimeout(() => {
      if (query) {
        setSearching(true);
        BooksAPI.search(query)
          .then((books) => {
            if (books.length > 0) {
              return books;
            } else {
              setSearching(false);
              throw Error("There are no books");
            }
          })
          .then((books) => {
            if (books)
              setResultedBooks(books.map((book) => checkIsInOurShelf(book)));
          })
          .catch((error) => {
            setSearching(false);
            setResultedBooks({ error: "empty query" });
            console.log(error);
          });
      }
    }, 500);

    return () => {
      clearTimeout(identifer);
    };
  }, [query, shelfCtx.currentlyReading, shelfCtx.read, shelfCtx.wantToRead]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        {/* ALTERNATIVE FOR Link
        <button className="close-search" onClick={closeSearchHandler}>
          Close
        </button> */}
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      {query &&
        (resultedBooks.error === "empty query" ? (
          !searching ? (
            <NoResults>{query}</NoResults>
          ) : (
            <Loading />
          )
        ) : (
          <SearchResults books={resultedBooks} />
        ))}
    </div>
  );
};

export default SearchPage;
