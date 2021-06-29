import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "@material-ui/core/Container";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Users from "./components/users";
import Login from "./components/login";
import Register from "./components/register";
import PageNotFound from "./components/pagenotfound";

import { Route, Switch, Redirect } from "react-router-dom";

import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Container>
        <Cart />
      </Container>
    </div>
  );
}

export default App;
