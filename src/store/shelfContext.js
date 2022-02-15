import { createContext } from "react";

const shelfContext = createContext({
  currentlyReading: [],
  wantToRead: [],
  read: [],
});

export const ShelfContextProvider = (props) => {
  const currentlyReading = props.books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = props.books.filter((book) => book.shelf === "wantToRead");
  const read = props.books.filter((book) => book.shelf === "read");

  return (
    <shelfContext.Provider
      value={{
        currentlyReading: currentlyReading,
        wantToRead: wantToRead,
        read: read,
      }}
    >
      {props.children}
    </shelfContext.Provider>
  );
};
export default shelfContext;
