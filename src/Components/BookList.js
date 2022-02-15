import BookItem from "./BookItem";

const BookList = (props) => {
  const books = props.books.map((book) => {
    return (
      <li key={book.id}>
        <BookItem shelf={props.shelf} book={book} />
      </li>
    );
  });
  return <ol className="books-grid">{books}</ol>;
};

export default BookList;
