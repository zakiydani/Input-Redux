import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./pages/Header";
import Input from "./pages/Input";
import List from "./pages/components/List";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Input />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
