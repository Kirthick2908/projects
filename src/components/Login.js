import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import dk77 from "../assets/dk77.jpg";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
console.log({
  username,
  password

})

  const handleLogin = async (e) => {
    try {
      // Validate username and password here
      // You can add additional validation logic here according to your requirements

      if (username.trim() === "") {
        setErrorMessage("Please enter a username");
        return;
      }

      if(password.trim()==="")
      {
        setErrorMessage("Please enter a password");
        return;
      }

      // if (!/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}/.test(password)) {
      //   setErrorMessage("Password should contain 8 letters with at least one uppercase letter, one lowercase letter, one digit, and one special character");
      //   return;
      // }

      e.preventDefault();

      // Login user
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password
      });
      console.log(response.data);

      // Redirect to the dashboard page
      if(response.data==="Login Successful")
      {
      navigate("/h1");
      }
      else{
        setErrorMessage("You are not a registered user. Please sign up first.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occured while logging in.Please try again later");
    }
  };
  // const handleInputFocus = () => {
  //   setIsFlipped(true);
  // };

  // const handleInputBlur = () => {
  //   setIsFlipped(false);
  // };

  return (
    <div className="login-page">
   <div className={`login-container ${isFlipped ? "flipped" : ""}`}>
   <div class="swipe-message">
      <p><i class="fas fa-long-arrow-alt-right"></i> Swipe</p>
    </div>
      <div className={`card back`}>
      <h2>Login</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        // onFocus={handleInputFocus}
        //     onBlur={handleInputBlur}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        // onFocus={handleInputFocus}
        //     onBlur={handleInputBlur}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    <div className = "animated-background"></div>
    </div>
  );
};

export default Login;