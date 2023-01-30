import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";

import Search from "./components/Search.js";
import MovieView from "./components/MovieView.js";
import { Route, Switch } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=a9b14ca4e44146df74e49183d0560f3e&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/about" component={AboutView} />
        <Route path="/search">
          <Search keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route exact path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
