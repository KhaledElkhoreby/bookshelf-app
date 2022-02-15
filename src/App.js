import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

const BooksApp = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/reads" />
          <h1>Home page</h1>
        </Route>
        <Route path="/reads">
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
  );
};

export default BooksApp;
