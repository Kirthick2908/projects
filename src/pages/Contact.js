import React from "react";
import contaact from "../assets/image.jpg";
import "../styles/Contact.css";

const login = () =>alert("Thankyou for your feedback");
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contaact})` }}
      ></div>
      <div className="rightSide">
        <h1>Feedback</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" onClick={login}> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;