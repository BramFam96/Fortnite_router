import React from 'react';
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import Shop from './components/Shop'
import About from './components/About';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    
    <Router>
     <div className="App">
       <Nav/>
       <Switch>
       <Route path="/"        component={Home} exact/>
       <Route path="/about"   component={About} />
       <Route path="/shop"    component={Shop} exact/>
       <Route path="/shop/:id" component={ItemDetail} />
       </Switch>
     </div>
    </Router>
    
  );
}

export default App;
