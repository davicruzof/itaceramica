import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Produto from "./pages/Produto";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/contato" children={<Contato />} />
        <Route path="/produto/:id" children={ <Produto /> } />
      </Switch>
      <footer>
          <span>© ItaCeramica 2021</span>
      </footer>
    </>
  </Router>
  );
}

export default App;
