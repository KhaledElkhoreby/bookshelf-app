import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "../Components/SearchResults";
import * as BooksAPI from "../BooksAPI";
import shelfContext from "../store/shelfContext";
import NoResults from "../UI/NoResults";
import Loading from "../UI/Loading";
import Keywords from "../Components/KeyWords";

const SearchPage = () => {
  const [resultedBooks, setResultedBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef();

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const shelfCtx = useContext(shelfContext);

  const checkIsInOurShelf = useCallback(
    (book) => {
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
    },
    [shelfCtx.currentlyReading, shelfCtx.read, shelfCtx.wantToRead]
  );

  useEffect(() => {
    inputRef.current.focus();
    const identifer = setTimeout(async () => {
      if (query) {
        try {
          const response = await BooksAPI.search(query);

          if (response.length > 0) {
            setNotFound(false);
            setResultedBooks(response.map((book) => checkIsInOurShelf(book)));
          } else {
            setNotFound(true);
            throw Error("There are no books");
          }
        } catch (error) {
          setResultedBooks({ error: "empty query" });
          console.log(error);
        }
      }
    }, 500);

    return () => {
      setNotFound(false);
      clearTimeout(identifer);
    };
  }, [checkIsInOurShelf, query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={onChangeHandler}
            ref={inputRef}
          />
        </div>
      </div>
      {query &&
        (resultedBooks.error === "empty query" ? (
          notFound ? (
            <>
              <NoResults>{query}</NoResults>
              <Keywords />
            </>
          ) : (
            <Loading />
          )
        ) : (
          <SearchResults books={resultedBooks} />
        ))}
      {query === "" ? <Keywords /> : null}
    </div>
  );
};

export default SearchPage;
