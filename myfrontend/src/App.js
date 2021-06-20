import React, {useState} from 'react';
import Login from './Pages/Login';
import './App.css';
import List from './Pages/DocumentsList';
import DocumentDetails from './Pages/DocumentDetails';
import {Switch, Route} from 'react-router-dom';


const App = () => {  
  const [authCredentials, setAuthCredentials] = useState({});    
  const [docID, getDocID] = useState("");    

  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/">
          <Login saveAuthCredentials={setAuthCredentials}/>
        </Route>

        <Route exact path="/List">
          <List authCredentials={authCredentials} getDocID={getDocID}/>
        </Route>
        
        <Route exact path="/DocumentDetail">
          <DocumentDetails authCredentials={authCredentials} documentID={docID}/>
        </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;
