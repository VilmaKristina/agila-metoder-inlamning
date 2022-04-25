import React from "react";

function Process() {
  return (
    <section className="scrum-scheme-container">
    <h3 className="scrum-title">Scrum Process</h3>
      <section className="scrum-scheme">
        <article className="scrum-artifacts">
          <div>Product Backlog</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-right.png" className="image-container"></img>
        </article>
        <article class="sprint-events">
          <div>Sprint Planning</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-right.png" className="image-container"></img>
        </article>
        <article className="scrum-artifacts">
          <div>Sprint Backlog</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-down.png" className="image-container"></img>
        </article>
      </section>
      <section className="scrum-scheme">
        <article id="image-arrow">
          <img src="images/arrow-up.png" className="image-container"></img>
        </article>
        <section className="tools-container">
          <article>
          
            <img src="images/tools.png" className="tools-image"></img>
          </article>
          <article className="sprint-tools scrum-scheme">
            <div>Agile Estimation</div>
            <div>Metrics</div>
          </article>
        </section>
        <article id="image-arrow">
          <img src="images/sprintnew.png" className="image-container"></img>
        </article>
      </section>
      <section className="scrum-scheme">
        <article class="sprint-events">
          <div>Sprint Retrospective</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-left.png" className="image-container"></img>
        </article>
        <article class="sprint-events">
          <div>Sprint Review</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-left.png" className="image-container"></img>
        </article>
        <article className="scrum-artifacts">
          <div>Product Increment</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-to-left.png" className="image-container"></img>
        </article>
      </section>
    </section>
  );
}

export default Process;
