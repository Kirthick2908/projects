import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.jpg";
import "../styles/Home.css";

function Home1() {
  return (
    <div className="home" style={{ backgroundImage: `url(${home})` }}>
      <div className="headerContainer">
      <h1 style={{ marginBottom: '80px' }}>DK ONLINE PHARMACY</h1>
      <p style={{ marginTop: '80px' }}>WE CARE FOR YOUR HEALTH</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home1;