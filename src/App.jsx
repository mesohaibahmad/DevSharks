import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup'
import { useState } from 'react';
import Header from './Header';
import UserService from './UserService';
import Home from './Home';
import Query from './Query';
import Footer from './Footer';
import './App.css'
import { Margin } from '@mui/icons-material';

function App () {
  let [signInClicked, setsignInClicked] = useState(false);  
  function signIn(){
    setsignInClicked(true);
    document.body.style.overflow = "hidden";
  }
 function visibilityChng(){
  setsignInClicked(false);
  document.body.style.overflow = "visible";
 }

  return (
     <Router>
    <div className='App'>
       <LoginSignup clicked= {signInClicked} visibilityChng={visibilityChng}/>
      <Header signIn={signIn}/>
      <main>
        
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserService" element={<UserService/>} />
            <Route path="/Query" element={<Query />} />
          </Routes>
      </main>
    <Footer/>
  </div>
   </Router>
  );
}

export default App
