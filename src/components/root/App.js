import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
function App() {
  debugger;
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
