import React from "react";
import "./Services.css";

function Services() {

  const services = [
    {
      icon: "🏆",
      title: "Free Fire Tournaments",
      text: "Join exciting tournaments and compete with skilled players."
    },

    {
      icon: "🎮",
      title: "Gaming Community",
      text: "Connect with Free Fire players and build your gaming squad."
    },

    {
      icon: "⚡",
      title: "Latest Updates",
      text: "Get new events, characters and game update information."
    },

    {
      icon: "🛡️",
      title: "Player Support",
      text: "Get help and support for your gaming experience."
    },

    {
      icon: "💎",
      title: "Diamond Events",
      text: "Participate in special events and rewards."
    },

    {
      icon: "🔥",
      title: "Battle Challenges",
      text: "Take part in challenging battles and improve your skills."
    }
  ];


  return (

    <section className="services-page">

      <h1>🔥 Our Services</h1>

      <p className="service-intro">
        Explore our Free Fire gaming services and enjoy the ultimate battle experience.
      </p>


      <div className="service-container">

        {
          services.map((service,index)=>(

            <div className="service-card" key={index}>

              <h2>{service.icon}</h2>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button>
                Explore
              </button>

            </div>

          ))
        }

      </div>


    </section>

  );

}

export default Services;