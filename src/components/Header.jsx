import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <section className="header">
      <img src="images/logo.png" alt="logo" className="logo-image"></img>
      <div className="header-links">
        <Link to="/" className="link-style">Home</Link>
        <Link to="/Quiz" className="link-style">Quiz</Link>
      </div>
      <article className="right-header">
        <div>We - IN SCRUM</div>
        <img src="images/team.png" alt="team" className="header-image"></img>
      </article>
    </section>
  );
}

export default Header;
