import React from "react";

function Roles() {
  return (
    <section className="roles-container">
      <h2 className="roles">Scrum Team</h2>
      <section className="individual-roles">
        <section>
          <h3>Product Owner (PO)</h3>
          <article>
            <img
              src="images/productowner.png"
              className="image-container"
            ></img>
          </article>
          <article className="role-main">
            <div>Manages Product Backlog</div>
            <div>Works With The Stakeholders</div>
            <div>Owns Project Vision </div>
          </article>
          <article>
            <button>More Info</button>
          </article>
        </section>
        <section>
          {" "}
          <h3>Development Team (DT)</h3>
          <article>
            <img src="images/devteam.png" className="image-container"></img>
          </article>
          <article className="role-main">
            <div>Self-Organized Group</div>
            <div>Builds The Product Increment</div>
            <div>Responsible For Transparency</div>
          </article>
          <article>
            <button>More Info</button>
          </article>
        </section>
        <section>
          <h3>Scrum Master (SM)</h3>
          <article>
            <img src="images/scrummaster.png" className="image-container"></img>
          </article>
          <article className="role-main">
            <div>Facilitater And Coach</div>
            <div>Protects The Team From Distractions</div>
            <div>Scrum Expert</div>
          </article>
          <article>
            <button>More Info</button>
          </article>
        </section>
      </section>
    </section>
  );
}

export default Roles;
