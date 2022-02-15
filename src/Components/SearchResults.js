import BookList from "./BookList";

const SearchResults = (props) => {
  return (
    <div className="search-books-results">
      <BookList books={props.books} />
    </div>
  );
};

export default SearchResults;
