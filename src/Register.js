import React, { useState } from "react";
import "./Register.css";

function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();

    alert("Account Created Successfully 🔥");

    console.log({
      username,
      email,
      password
    });
  };


  return (

    <section className="register-page">

      <div className="register-box">

        <h1>🔥 Create Account</h1>


        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />


          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />


          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />


          <button type="submit">
            Register
          </button>

        </form>


        <p>
          Already have an account?
          <a href="/login">
            Login
          </a>
        </p>


      </div>

    </section>

  );
}

export default Register;