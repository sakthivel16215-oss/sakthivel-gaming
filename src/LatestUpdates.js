import React from "react";
import "./LatestUpdates.css";

function LatestUpdates() {

  const updates = [
    {
      title: "🔥 New Season Update",
      text: "New characters, rewards and exciting events are available now."
    },
    {
      title: "🏆 Tournament Events",
      text: "Join upcoming Free Fire tournaments and win amazing prizes."
    },
    {
      title: "🎮 New Game Mode",
      text: "Experience new gameplay modes with your squad."
    }
  ];

  return (
    <section className="updates">

      <h2>Latest Updates</h2>

      <div className="update-container">

        {updates.map((item, index) => (
          <div className="update-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button>Read More</button>
          </div>
        ))}

      </div>

    </section>
  );
}

export default LatestUpdates;