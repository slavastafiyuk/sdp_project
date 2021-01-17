import React from 'react';
//import ReactDom from 'react-dom'
import {Route, Switch, NavLink} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Armazem from "./Armazem";
import EditarArmazem from './EditarArmazem';
import EditarEntrega from './EditarEntrega';
import Entregas from "./Entregas";
import InvalidPath from "./InvallidURL";

function App(){

  return(
    <Router>
      <div>
        <h2>
          <ul>
            <li><NavLink to= "/" >Home</NavLink></li>
            <li><NavLink to= "/Armazem" activeClassName="Armazem">Armazem</NavLink></li>
            <li><NavLink to= "/Entregas" activeClassName="Entrega">Entregas</NavLink></li>
          </ul>
          <Switch>
            <Route path="/Armazem/:id" component={EditarArmazem}></Route>
            <Route path="/Entregas/:id" component={EditarEntrega}></Route>
            <Route exact path="/Armazem" component={Armazem}></Route>
            <Route exact path="/Entregas" component={Entregas}></Route>
            <Route path="/" ></Route>
            <Route component={InvalidPath}></Route>
          </Switch>
        </h2>
      </div>
    </Router>
  )
}
export default App;
//ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById("root"))
