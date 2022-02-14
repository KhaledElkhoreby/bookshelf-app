import BookshelfChanger from "./BookshelfChanger";

const BookItem = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
          }}
        ></div>
        <BookshelfChanger />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors.join(" ")}</div>
    </div>
  );
};

export default BookItem;
