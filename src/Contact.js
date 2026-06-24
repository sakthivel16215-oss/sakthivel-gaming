import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully 🔥");

    console.log({
      name,
      email,
      message
    });
  };


  return (
    <section className="contact-page">

      <div className="contact-box">

        <h1>📞 Contact Us</h1>

        <p>
          Need help? Contact Free Fire Zone support team.
        </p>


        <form onSubmit={handleSubmit}>


          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />


          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />


          <textarea
            placeholder="Enter Your Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          ></textarea>


          <button type="submit">
            Send Message
          </button>


        </form>


        <div className="contact-info">

          <p>📧 support@freefirezone.com</p>

          <p>🎮 Gaming Support 24/7</p>

          <p>🌍 India</p>

        </div>


      </div>

    </section>
  );
}

export default Contact;