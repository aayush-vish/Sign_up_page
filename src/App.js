import React from 'react';
import './App.css';
import Logo from "./logo.png";
import SignUp from "./login-illustration.svg";
import user from "./user.svg";
import msg from "./message.svg";
import pass from "./padlock.svg";
import dob from "./calendar.svg";
import fb from "./facebook.svg";
import ld from "./linkedin.svg";
import gg from "./google.svg";
function App() {
  
  return (
    <div className="App">
      <div className="App__head">
       <img src={Logo} alt="Logo"/>
      </div>
      <div className="App__content">
        <div className="App__illus">
          <img src={SignUp} alt="Sign Up Illustration"/>
        </div>
        <div className="App__form">
          <h1>Sign Up</h1>
          <form>
            <div className="App__name">
              <img src={user} alt="User"/>
              {/* <label>First Name</label> */}
              <input type="text" placeholder="First Name"></input>
              {/* <label className="ln">Last Name</label> */}
              <input type="text" placeholder="Last Name"></input><br></br>
            </div>
            <img src={msg} id="msg" alt="Email Box"/>
            {/* <label>Email</label> */}
            <input type="email" className="form-control" id="email" placeholder="Email"></input><br></br>
            <img src={pass} id="pass" alt="Lock"/>
            {/* <label>Password</label> */}
            <input type="password" placeholder="Password"></input><br></br>
            <div className="App__dob">
              <img src={dob} alt="Calender"/>
              <input type="number" placeholder="1" min="1" max="31"></input>
              <select id="months" name="months">
                  <option value="jab">January</option>
                  <option value="feb">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="aug">August</option>
                  <option value="sept">September</option>
                  <option value="oct">October</option>
                  <option value="nov">November</option>
                  <option value="dec">December</option>  
              </select>
              <input type="number" placeholder="2020" min="1965" max="2050"></input> 
            </div>
            <p>By signing up you agree to our privacy policy and terms of service</p>
            <button>Sign Up</button>
            <div className="App__sign">
              <p>Or Sign up with</p>
              <div className="social">
                <img src={fb} alt="Facebook Logo"/>
                <img src={ld} alt="LinkedIn Logo"/>
                <img src={gg} alt="Google Logo"/>
              </div>
              <p>Are you an instructor? <a href="#">Click here to register</a></p>
              <p>Already have an account? <a href="#">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
 