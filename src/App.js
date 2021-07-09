import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Admin from "./components/Admin";

import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <PrivateRoute2 path="/admin" component={Admin} />
          {/* <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute> */}
          {/* <Route path="/admin">
            <Admin />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
