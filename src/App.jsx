import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { Home } from './components/Home';
import {Login} from './components/Login';
import {Candidate} from './components/Candidate';
import { Reports } from './components/Reports';


function App() {  
  const [token, setToken] = useState(window.sessionStorage.getItem("token") !== null ? window.sessionStorage.getItem("token") : "");

useEffect(() => {
  window.sessionStorage.setItem("token", token);
  //console.log('token hook' ,token)
  }, [token]);


  return (
    <Router>
      <div className="App">
        <Header setToken={setToken} token={token} />
      </div>
      <Switch>
        <Route path="/" exact>
          {token.length > 10 ? (
            <Home setToken={setToken} token={token} />
          ) : (
            <Login setToken={setToken} token={token} />
          )}
        </Route>

        {token.length > 10 && (
          <Route exact path="/candidate/:id">
            <Candidate setToken={setToken} token={token} />
          </Route>
        )}
        {token.length > 10 && (<Route path='/reports'>
          <Reports/>
        </Route>
        )}
        <Route render={() => <Redirect to="/" />} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;