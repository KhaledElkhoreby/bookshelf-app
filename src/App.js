import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { ShelfContextProvider } from "./store/shelfContext";
import BookContext from "./store/bookContext";
import { useContext } from "react";
const BooksApp = () => {
  const bookCtx = useContext(BookContext);
  return (
    <ShelfContextProvider books={bookCtx.books}>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </div>
    </ShelfContextProvider>
  );
};

export default BooksApp;
