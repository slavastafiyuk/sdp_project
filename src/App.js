import React from 'react';
//import ReactDom from 'react-dom'
import {Route, Link, Switch, NavLink} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Armazem from "./Armazem";
import Entregas from "./Entregas";

function App(){

  return(
    <Router>
      <div>
        <h2>
          <ul>
            <li><NavLink to= "/Armazem" activeClassName="Armazem">Armazem</NavLink></li>
            <li><NavLink to= "/Entregas" activeClassName="Entrega">Entregas</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/Armazem" component={Armazem}></Route>
            <Route exact path="/Entregas" component={Entregas}></Route>
          </Switch>
        </h2>
      </div>
    </Router>
  )

}
export default App;
//ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById("root"))
