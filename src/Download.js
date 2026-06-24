import React from "react";
import "./Download.css";

function Download() {
  return (
    <section className="download">

      <h2>🔥 Download Free Fire</h2>

      <p>
        Play Free Fire on your favorite device and join the battle.
      </p>

      <div className="download-buttons">

        <a
          href="https://play.google.com/store/apps/details?id=com.dts.freefireth"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          📱 Android Download
        </a>


        <a
          href="https://apps.apple.com/app/garena-free-fire/id1300146617"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          🍎 iOS Download
        </a>


        <a
          href="#"
          className="download-btn"
        >
          💻 Windows Download
        </a>

      </div>

    </section>
  );
}

export default Download;