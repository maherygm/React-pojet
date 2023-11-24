import React from "react";
import "./__horizontalNavBar.css";

const HorizontalNavBar = () => {
  const navData = [
    {
      title: "Acceuil",
      link: "/acceuil",
    },
    {
      title: "A propos",
      link: "/acceuil",
    },
    {
      title: "Contact",
      link: "/acceuil",
    },
    {
      title: "Services",
      link: "/acceuil",
    },
  ];
  return (
    <div className="horizontal-nav-bar">
      <nav>
        <h1 className="horizontal-nav-title">Title</h1>
        <div className="nav-content">
          <ul>
            {navData.map((nav, index) => (
              <li key={index}>{nav.title}</li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HorizontalNavBar;
