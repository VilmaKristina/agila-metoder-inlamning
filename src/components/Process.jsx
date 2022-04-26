import React, { useContext } from "react";
import { ListContext } from "./Context";

function Process() {
  let {
    setProductBacklog,
    setSprintPlanning,
    setSprintBacklog,
    setSprint,
    setProductIncrement,
    setSprintReview,
    setSprintRetrospective,
    setTools
  } = useContext(ListContext);

  return (
    <section className="scrum-scheme-container">
      <h3 className="scrum-title">Scrum Process</h3>
      <section className="scrum-scheme">
        <article
          className="scrum-artifacts"
          onClick={() => {
            setProductBacklog(true);
          }}
        >
          <div>Product Backlog</div>
        </article>

        <article id="image-arrow">
          <img src="images/arrow-right.png" className="image-container"></img>
        </article>
        <article
          class="sprint-events"
          onClick={() => {
            setSprintPlanning(true);
          }}
        >
          <div>Sprint Planning</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-right.png" className="image-container"></img>
        </article>
        <article
          className="scrum-artifacts"
          onClick={() => {
            setSprintBacklog(true);
          }}
        >
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
          <article className="sprint-tools scrum-scheme" onClick={() => {
            setTools(true);
          }}>
            <div>Agile Estimation & Metrics</div>
          </article>
        </section>
        <article
          id="image-arrow"
          onClick={() => {
            setSprint(true);
          }}
        >
          <img src="images/sprintnew.png" className="image-container"></img>
        </article>
      </section>
      <section className="scrum-scheme">
        <article
          class="sprint-events"
          onClick={() => {
            setSprintRetrospective(true);
          }}
        >
          <div>Sprint Retrospective</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-left.png" className="image-container"></img>
        </article>
        <article
          class="sprint-events"
          onClick={() => {
            setSprintReview(true);
          }}
        >
          <div>Sprint Review</div>
        </article>
        <article id="image-arrow">
          <img src="images/arrow-left.png" className="image-container"></img>
        </article>
        <article
          className="scrum-artifacts"
          onClick={() => {
            setProductIncrement(true);
          }}
        >
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
