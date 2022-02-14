import BookList from "./BookList";

const Bookshelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BookList books={props.books} />
      </div>
    </div>
  );
};

export default Bookshelf;
