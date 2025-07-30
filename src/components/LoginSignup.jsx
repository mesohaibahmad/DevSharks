import React, { useState } from 'react';
import './LoginSignup.css'; // Assuming you have your CSS styles in App.css

export default function LoginSignup( {clicked, visibilityChng}) {
   
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <>
        <div className={`LS-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="LS-container" style={clicked?{}:{visibility: "hidden"}}>
      <div className="LS-form-container sign-up-container">
        <form className='LS-form' action="#">
          <h1 className='LS-h1'>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className='LS-span'>or use your email for registration</span>
          <input className='LS-input' type="text" placeholder="Name" />
          <input className='LS-input' type="email" placeholder="Email" />
          <input className='LS-input' type="password" placeholder="Password" />
          <button className='LS-button'>Sign Up</button>
        </form>
      </div>
      <div className="LS-form-container sign-in-container">
        <form className='LS-form' action="#">
          <h1 className='LS-h1'>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social LS-a"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social LS-a"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social LS-a"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className='LS-span'>or use your account</span>
          <input className='LS-input' type="email" placeholder="Email" />
          <input className='LS-input' type="password" placeholder="Password" />
          <a className='LS-a' href="#">Forgot your password?</a>
          <button className='LS-button'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className='LS-h1'>Welcome Back!</h1>
            <p className='LS-p'>To keep connected with us please login with your personal info</p>
            <button className="ghost LS-button" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className='LS-h1'>Hello, Friend!</h1>
            <p className='LS-p'>Enter your personal details and start your journey with us</p>
            <button  className="ghost LS-button" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <div id='LS-background' style={clicked?{}:{visibility: "hidden"}} onClick={visibilityChng}></div>
    
    </>
  );
}

