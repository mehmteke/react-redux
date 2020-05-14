import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import { 
  Switch,
  Route 
} from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component= {Dashboard}></Route>
          <Route path="/product" exact component= {Dashboard}></Route>
          <Route path="/cart" exact component= {CartDetail}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
