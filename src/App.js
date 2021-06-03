import React from 'react';
import './App.css';
import Home from './components/home'
import Nav from './components/nav';
import Shop from './components/shop';
import About from './components/about';
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
