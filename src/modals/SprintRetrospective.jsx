import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function SprintRetrospetive() {
  let { setSprintRetrospective } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content purple-module-background">
        <div className="modal-button-container">
          <button
            onClick={() => setSprintRetrospective(false)}
            className="modal-button"
          >
            X
          </button>
        </div>
        <h2>Sprint Retrospective</h2>
        <p className="sprint-explanation">(Scrum Event)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
                The meeting that happens after the Sprint review before the next
                Sprint planning. <strong>ST discusses how to improve their tools</strong> and <strong>collaboration</strong>.
              </div>
              <div className="event-questions">
                <ul>
                  <li>Discuss what went right or wrong and areas for improvements for further Sprints.</li>
                  <li>The purpose of this meeting - to improve the way ST work.</li>
                  <li>SM facilitates the meeting and summarizes the Sprint retrospective.</li>
                </ul>
              </div>
            </article>
          </section>
          <section className="details-event-container">
            <article className="single-detail-event">
              <div>Participants:</div>
              <div>PO, DT and SM</div>
            </article>
            <article className="single-detail-event">
              <div>Duration:</div>
              <div>
                Proportional to Sprint long (1-month Sprint - 3 hour meeting)
              </div>
            </article>
            <article className="single-detail-event">
              <div>Meeting focus:</div>
              <div>On the process</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SprintRetrospetive;
