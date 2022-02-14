import { useHistory } from "react-router-dom";
import Bookshelf from "./../Components/Bookshelf";

const MainPage = (props) => {
  const currentlyReading = props.books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = props.books.filter((book) => book.shelf === "wantToRead");
  const read = props.books.filter((book) => book.shelf === "read");

  const history = useHistory();
  const openSearchHandler = () => {
    history.push("/search");
  };
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={currentlyReading} />
            <Bookshelf title="Want to Read" books={wantToRead} />
            <Bookshelf title="Read" books={read} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={openSearchHandler}>Add a book</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
