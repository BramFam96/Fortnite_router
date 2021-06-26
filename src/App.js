import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Nav from './components/Nav/Nav.jsx';
import Shop from './components/Shop/Shop.jsx'
import About from './components/About/About.jsx';
import ItemDetail from './components/Shop/ItemDetail.jsx';
import './App.css';


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
