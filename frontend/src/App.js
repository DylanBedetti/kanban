import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./views/pages/Home";
import User from "./views/pages/User";

import Header from "./views/components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/user" exact>
          <User/>
        </Route>
      </Header>
    </Router>

  );
};

export default App;
