import React from "react";
import { RoutesList } from "@router/";
import { BrowserRouter as Router } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Router>
      <RoutesList />
    </Router>
  );
}

export default App;
