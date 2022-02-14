import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      return setBooks(books);
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/reads" />
          <h1>Home page</h1>
        </Route>
        <Route path="/reads">
          <MainPage books={books} />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default BooksApp;
