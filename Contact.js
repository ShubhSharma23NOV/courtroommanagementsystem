import React, { useState } from "react";
import "../styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
