import React from "react";
import '../App.css';
import lg from '../vector/default-monochrome-white.svg';
const Login = () => {
  return (
    <div>
<body>
    <header>
        <div class="main">
            <div class="logo">
                <img src={lg}/>
            </div>
            <ul>

            <li><a href="/home">Home</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
            </ul>
        </div>
        <br/>
    </header>
    <div class="log-head"><h1>Phoenix Login</h1></div>
    <div class="login-box">
        <div class="cont">
          <div class="form sign-in">
            <h2>Sign In</h2>
            <form method="post" >
            <label>
              <span>Orphanage Id</span>
              <input type="text" name="orphanageid"/>
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password"/>
            </label>
            <button class="submit" type="submit">Sign In</button>
            <p class="forgot-pass">Forgot Password ?</p>
            </form>
          </div>
      
          
        </div>
      </div>
      <script type="text/javascript" src="static/js/script.js"></script>
</body>

    </div>
  );
};
  
export default Login;