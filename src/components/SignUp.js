import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "../styles/signup.css";
import {Card} from '@mui/material';
const SignUp = () => {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async () => {
    try {
      // Check if user is already signed in
      if (isUserSignedIn()) {
        setErrorMessage("You are already signed in.");
        return;
      }

      // Validate form inputs
      if (username.trim() === "") {
        setErrorMessage("Please enter a username.");
        return;
      }

      if (password.trim() === "") {
        setErrorMessage("Please enter a password.");
        return;
      }

      // if (password.length < 8 || !/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}/.test(password)) {
      //   setErrorMessage(
      //     "Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special character."
      //   );
      //   return;
      // }

      if (confirmPassword.trim() === "") {
        setErrorMessage("Please confirm your password.");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }

      if (gender.trim() === "") {
        setErrorMessage("Please enter your gender.");
        return;
      }

      if (age.trim() === "" || isNaN(parseInt(age))) {
        setErrorMessage("Please enter a valid age.");
        return;
      }

      // Create a new user
      await axios.post("http://localhost:8080/signup", {
        username,
        password,
        email,
        gender,
        age: parseInt(age),
      });

      // Redirect to the login page
    navigate("/login");
      
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const isUserSignedIn = () => {
    // Implement the logic to check if the user is already signed in
    // Return true if signed in, otherwise false
    // You can use the appropriate authentication mechanism or state management library for this check
    // For demonstration purposes, let's assume a variable named 'isSignedIn' holds the sign-in status
    const isSignedIn = false;
    return isSignedIn;
  };

  return (
    
    <div  className="signup-container">
      <Card style={{backgroundColor:'yellow',marginRight:500,marginLeft:500,margintop:200,}}>

      <h2>Sign Up</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
        </Card>
    </div>
  );
};

export default SignUp;