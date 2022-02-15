import { useContext } from "react";
import BookContext from "../store/bookContext";

const BookshelfChanger = (props) => {
  const bookCtx = useContext(BookContext);
  const onChangeValueHandler = (event) => {
    const selectedShelf = event.target.value;
    bookCtx.changeShelfHandler(props.book, selectedShelf);
  };
  return (
    <div className="book-shelf-changer">
      <select
        onChange={onChangeValueHandler}
        defaultValue={props.shelf || props.book.ourShelf}
      >
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
