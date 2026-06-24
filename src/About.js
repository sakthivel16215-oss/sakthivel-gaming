import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-content">

        <h1>🔥 About Free Fire Zone</h1>

        <p>
          Welcome to Free Fire Zone, a dedicated platform created for
          passionate Free Fire players. We bring gaming events, tournaments,
          latest updates and a strong gaming community together.
        </p>

        <p>
          Our mission is to provide an exciting experience for players by
          connecting gamers, sharing updates and creating competitive battles.
        </p>


        <div className="about-cards">

          <div className="about-card">
            <h3>🏆 Competitive Gaming</h3>
            <p>
              Participate in exciting tournaments and challenge skilled
              players from different communities.
            </p>
          </div>


          <div className="about-card">
            <h3>🎮 Gaming Community</h3>
            <p>
              Join a growing community of Free Fire lovers and share your
              gaming achievements.
            </p>
          </div>


          <div className="about-card">
            <h3>⚡ Fast Updates</h3>
            <p>
              Stay updated with new events, characters, rewards and game
              features.
            </p>
          </div>

        </div>


        <div className="stats">

          <div>
            <h2>10K+</h2>
            <p>Players</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Tournaments</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>


      </div>

    </section>
  );
}

export default About;