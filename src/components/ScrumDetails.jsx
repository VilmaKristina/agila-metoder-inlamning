import React from "react";

function ScrumDetails() {
  return (
    <section className="scrum-details-container">
      <section className="scrum-details">
        <article className="event-container"></article>
        <article className="concept-name event-color">
          <div>Scrum Events</div>
        </article>
        <article className="types-container">
          <div className="types-name event-name">
            <p>Sprint</p>
            <p>Sprint Planning</p>
            <p>Daily Scram</p>
            <p>Sprint Review</p>
            <p>Sprint Retrospective</p>
          </div>
          <div>
            <ul>
              <li>
                These time-boxed events in Scrum are used to <strong>create transparency</strong> and <strong>regularity</strong> in the product development process.
              </li>
              <li>
                The most effective is when the events occur <strong>at the same time</strong> and <strong>place</strong>.
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="scrum-details">
        <article className="artifact-container"></article>
        <article className="concept-name artifact-color">
          <div>Scrum Artifacts</div>
        </article>
        <article className="types-container">
          <div className="types-name artifact-name">
            <p>Product Backlog</p>
            <p>Sprint Backlog</p>
            <p>Sprint Increment</p>
          </div>
          <div>
            <ul>
              <li>Scrum Artifacts are <strong>representation of work</strong> or <strong>value</strong>.</li>
              <li>
                {" "}
                They <strong>define the work</strong> that must be completed, <strong>gives structure</strong> to
                the process and <strong>ensures</strong> that scrum team and stakeholders have a <strong>common understanding</strong> about how the product is being developed.
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="scrum-details">
        <article className="estimation-container"></article>
        <article className="concept-name estimation-color">
          <div>Sprint Tools</div>
        </article>
        <article className="types-container">
          <div className="types-name estimation-name">
            <p>Agile Estimation</p>
            <p>Metrics</p>
          </div>
          <div>
            <ul>
              <li>
                Agile estimation is the <strong>process estimate</strong> the required <strong>effort</strong> for completing product backlog task.
              </li>
              <li>
                Scrum metrics <strong>measure the effectiveness</strong> and <strong>improve efficiency</strong> of development team in project delivery.
              </li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  );
}

export default ScrumDetails;
