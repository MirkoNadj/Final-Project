import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { Home } from './components/Home';
import {Login} from './components/Login';
import {Candidate} from './components/Candidate';





function App() {  
  const [token, setToken] = useState('');

useEffect(() => {
  window.sessionStorage.setItem("token", token);
  console.log('token hook' ,token)
  }, [token]);


  return (
   
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
          <Route path="/" exact>
              {(token.length > 10) ? (
                  <Home />
              ) : (
                  <Login setToken={setToken} token={token}/>
              )}
          </Route>

          {(token.length > 10) && (
          <Route path="/candidate">
              <Candidate />
          </Route>)}
          <Route render={() => <Redirect to="/" />} />
      </Switch>
        <Footer />
    </Router>
  );
}

export default App;