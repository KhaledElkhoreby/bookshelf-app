import { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import shelfContext from "../store/shelfContext";
import Bookshelf from "./../Components/Bookshelf";

const MainPage = () => {
  const shelfCtx = useContext(shelfContext);

  /* ALTERNATIVE FOR Link
  const history = useHistory();
  const openSearchHandler = () => {
    history.push("/search");
  }; */
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            shelf="currentlyReading"
            books={shelfCtx.currentlyReading}
          />
          <Bookshelf
            title="Want to Read"
            shelf="wantToRead"
            books={shelfCtx.wantToRead}
          />
          <Bookshelf title="Read" shelf="read" books={shelfCtx.read} />
        </div>
      </div>
      <div className="open-search">
        {/* ALTERNATIVE FOR Link
           <button onClick={openSearchHandler}>Add a book</button> */}
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
