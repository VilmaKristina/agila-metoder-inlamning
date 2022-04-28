import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function SprintPlanning() {
  let { setSprintPlanning } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content purple-module-background">
        <div className="modal-button-container">
          <button
            onClick={() => setSprintPlanning(false)}
            className="modal-button"
          >
            X
          </button>
        </div>
        <h2>Sprint Planning</h2>
        <p className="sprint-explanation">(Scrum Event)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
                The meeting runs by SM when <strong>the team defines the Sprint goal</strong> - the set of
                product backlog items to work on during the upcoming Sprint.
              </div>
              <div className="event-questions">
                <p>Two questions are being answered:</p>
                <ul>
                  <li>
                    What needs to be done in order to achieve Sprint goal?
                  </li>
                  <li>How are we going to achieve it?</li>
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
              <div>Proportional to Sprint long (1-month Sprint - 8 hour meeting)</div>
            </article>
            <article className="single-detail-event">
              <div>Meeting focus:</div>
              <div>Backlog and plan for the next sprint</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SprintPlanning;
