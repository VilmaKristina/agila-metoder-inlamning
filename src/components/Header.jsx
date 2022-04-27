import React from "react";

function Header() {

  return (
    <section className="header">
      <img src="images/logo.png" alt="logo" className="logo-image"></img>
      <article className="right-header">
        <div>We - IN SCRUM</div>
        <img src="images/team.png" alt="team" className="header-image"></img>
      </article>
    </section>
  );
}

export default Header;
