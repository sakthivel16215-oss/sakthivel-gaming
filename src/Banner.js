import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">

      <div className="banner-content">

        <h1>🔥 Enter The Free Fire Arena</h1>

        <p>
          Join tournaments, compete with players and become the next champion.
        </p>

        <Link to="/tournament" className="start-btn">
          Start Playing
        </Link>

      </div>

    </section>
  );
}

export default Banner;