import { useContext } from "react";
import BookContext from "../store/bookContext";

const BookshelfChanger = ({ book }) => {
  const bookCtx = useContext(BookContext);
  const onChangeValueHandler = (event) => {
    const selectedShelf = event.target.value;
    bookCtx.changeShelfHandler(book, selectedShelf);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={onChangeValueHandler} defaultValue={book.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookshelfChanger;
