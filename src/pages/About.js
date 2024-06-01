import React from "react";
import about from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Our mission is to improve the health and well-being of individuals by offering a wide range of prescription medications, over-the-counter drugs, and health products. We strive to ensure that our customers receive safe and effective medications from licensed and reputable manufacturers.
      </p>

      <h2>Our Services</h2>
      <ul>
        <li>Prescription Medications: We offer a comprehensive selection of prescription drugs, including both brand-name and generic options. Our licensed pharmacists are available to answer any questions and provide guidance.</li>
        <li>Over-the-Counter Products: In addition to prescription medications, we carry a variety of over-the-counter products for common health concerns. From pain relief to allergy medication, we have you covered.</li>
        <li>Convenient Ordering: Our online platform allows you to order your medications from the comfort of your home. Simply browse our catalog, add items to your cart, and proceed to checkout. We offer secure payment options and discreet packaging.</li>
        <li>Fast and Reliable Shipping: We understand the importance of timely delivery when it comes to your health. We partner with trusted shipping carriers to ensure that your orders arrive safely and promptly.</li>
        <li>Customer Support: Our dedicated customer support team is available to assist you with any questions or concerns. We are committed to providing excellent service and ensuring your satisfaction.</li>
      </ul>

      <p>
        Thank you for choosing our online pharmacy. We appreciate your trust in us and look forward to serving your healthcare needs. If you have any feedback or suggestions, please don't hesitate to reach out to us.
      </p>
      </div>
    </div>
  );
}

export default About;