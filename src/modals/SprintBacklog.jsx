import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function SprintBacklog() {
  let { setSprintBacklog } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content green-module-background">
        <div className="modal-button-container">
          <button
            onClick={() => setSprintBacklog(false)}
            className="modal-button"
          >
            X
          </button>
        </div>
        <h2>Sprint Backlog</h2>
        <p className="sprint-explanation">(Scrum Artifact)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
                A set of chosen items from the product backlog that the team
                obligates to accomplish in a given sprint.
              </div>
              <div className="event-questions">
                <ul>
                  <li>It is the outcome of Sprint planning meeting.</li>
                  <li>A plan by and for the developers.</li>
                  <li>
                    Sprint backlog makes visible all the work that the DT
                    identifies as necessary to meet the Sprint goal.
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="details-event-container">
            <article className="single-detail-event">
              <div>Owner:</div>
              <div>The whole Scrum team</div>
            </article>
            <article className="single-detail-event">
              <div>Artifact focus:</div>
              <div>On individul sprint goals</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SprintBacklog;
