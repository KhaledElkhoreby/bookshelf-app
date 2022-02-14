import BookItem from "./BookItem";

const BookList = (props) => {
  const books = props.books.map((book) => (
    <li key={book.id}>
      <BookItem book={book} />
    </li>
  ));
  return <ol className="books-grid">{books}</ol>;
};

export default BookList;
