import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return ( 
    <BrowserRouter>
      <>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </> 
    </BrowserRouter>   
       
  );
}

export default App;
