import React from "react";
import "../App.css";
import Process from "../components/Process";
import Roles from "../components/Roles";

function Home() {
  return (
    <main className="info-container">
      <Roles />
      <Process />
      <section className="text-information-container">
        <article>
          <h1>Product Backlog</h1>
          <p></p>
        </article>
        <article>
          <h1>Sprint Planning</h1>
          <p></p>
        </article>
        <article>
          <h1>Sprint Backlog</h1>
          <p></p>
        </article>
        <article>
          <h1>Sprint And Daily Scrum</h1>
          <p></p>
        </article>
        <article>
          <h1>Product Increment</h1>
          <p></p>
        </article>
        <article>
          <h1>Sprint Review</h1>
          <p></p>
        </article>
        <article>
          <h1>Sprint Retrospective</h1>
          <p></p>
        </article>
        <article>
          <h1>Agile Estimation</h1>
          <p></p>
        </article>
        <article>
        <h1>Scrum Metrics</h1>
        <p></p>
      </article>
        <article></article>
      </section>
    </main>
  );
}

export default Home;
