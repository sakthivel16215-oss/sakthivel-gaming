import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login Successful 🔥");

    console.log({
      email,
      password
    });
  };


  return (
    <section className="login-page">

      <div className="login-box">

        <h1>🔥 Free Fire Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />


          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />


          <button type="submit">
            Login
          </button>


        </form>

        <p>
  New Player? 
  <Link to="/register" className="register-link">
    Create Account
  </Link>
</p>
        
      </div>

    </section>
  );
}

export default Login;