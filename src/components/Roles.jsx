import React from "react";

function Roles() {
  return (
    <section className="roles-container">
      <h3 className="scrum-title">Scrum Team</h3>
      <section className="individual-roles">
        <section className="role">
          <h3>Product Owner (PO)</h3>
          <article>
            <img
              src="images/productowner.png"
              className="image-container"
            ></img>
          </article>
          <article className="role-main">
            <div>Manages <strong>Product Backlog</strong></div>
            <div>Works With <strong>Stakeholders</strong></div>
            <div>Owns <strong>Project Vision</strong></div>
          </article>
          <article>
            <button className="role-button">More Info</button>
          </article>
        </section>
        <section className="role">
          {" "}
          <h3>Development Team (DT)</h3>
          <article>
            <img src="images/devteam.png" className="image-container"></img>
          </article>
          <article className="role-main">
            <div><strong>Self-Organized</strong> Group</div>
            <div>Builds The <strong>Product Increment</strong></div>
            <div>Responsible For <strong>Transparency</strong></div>
          </article>
          <article>
            <button className="role-button">More Info</button>
          </article>
        </section>
        <section className="role">
          <h3>Scrum Master (SM)</h3>
          <article>
            <img src="images/scrummaster.png" className="image-container"></img>
          </article>
          <article className="role-main">
            <div>Facilitater And <strong>Coach</strong></div>
            <div><strong>Protects Team</strong> From Distractions</div>
            <div><strong>Scrum Expert</strong></div>
          </article>
          <article>
            <button className="role-button">More Info</button>
          </article>
        </section>
      </section>
    </section>
  );
}

export default Roles;
