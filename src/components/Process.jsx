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
    setTools,
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
          <img
            src="images/arrow-right.png"
            className="image-container"
            alt="Arrow Right"
          ></img>
        </article>
        <article
          className="sprint-events"
          onClick={() => {
            setSprintPlanning(true);
          }}
        >
          <div>Sprint Planning</div>
        </article>
        <article id="image-arrow">
          <img
            src="images/arrow-right.png"
            className="image-container"
            alt="Arrow Right"
          ></img>
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
          <img
            src="images/arrow-down.png"
            className="image-container"
            alt="Arrow Down"
          ></img>
        </article>
      </section>
      <section className="scrum-scheme">
        <article id="image-arrow">
          <img
            src="images/arrow-up.png"
            className="image-container"
            alt="Arrow Up"
          ></img>
        </article>
        <section className="tools-container">
          <article>
            <img
              src="images/tools.png"
              className="tools-image"
              alt="Tools"
            ></img>
          </article>
          <article
            className="sprint-tools scrum-scheme"
            onClick={() => {
              setTools(true);
            }}
          >
            <div>Agile Estimation & Metrics</div>
          </article>
        </section>
        <article
          id="image-arrow"
          className="sprint-image"
          onClick={() => {
            setSprint(true);
          }}
        >
          <div>
            <img
              src="images/sprint.png"
              className="image-container"
              alt="Sprint"
            ></img>
          </div>
        </article>
      </section>
      <section className="scrum-scheme">
        <article
          className="sprint-events"
          onClick={() => {
            setSprintRetrospective(true);
          }}
        >
          <div>Sprint Retrospective</div>
        </article>
        <article id="image-arrow">
          <img
            src="images/arrow-left.png"
            className="image-container"
            alt="Arrow Left"
          ></img>
        </article>
        <article
          className="sprint-events"
          onClick={() => {
            setSprintReview(true);
          }}
        >
          <div>Sprint Review</div>
        </article>
        <article id="image-arrow">
          <img
            src="images/arrow-left.png"
            className="image-container"
            alt="Arrow Left"
          ></img>
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
          <img
            src="images/arrow-to-left.png"
            className="image-container"
            alt="Arrow Left"
          ></img>
        </article>
      </section>
    </section>
  );
}

export default Process;
