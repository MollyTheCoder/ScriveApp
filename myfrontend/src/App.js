import React from 'react';
import Login from './Login';
import './App.css';
import List from './List';
import {Route, Link} from 'react-router-dom';


const App = () => {  
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login} />
        <Route exact path="/list" component={List} />
      </header>
    </div>
  );
}

export default App;
