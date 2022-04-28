import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function SprintReview() {
  let { setSprintReview } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content purple-module-background">
        <div className="modal-button-container">
          <button onClick={() => setSprintReview(false)} className="modal-button">X</button>
        </div>
        <h2>Sprint Review</h2>
        <p className="sprint-explanation">(Scrum Event)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
              The meeting organized by PO when <strong>product increment is shown</strong> and <strong>stakeholders give
              feedback</strong> about the product.   
              </div>
              <div className="event-questions">
                <ul>
                  <li>
                  Stakeholders are very important in Sprint review. They are people who have an invested interest in the product and who would be the right people to give the feedback.
                  </li>
                  <li>Based on the feedback product backlog is
                  updated immediately.</li>
                  <li>Outlook to stakeholders of upcoming ST work.</li>
                </ul>
              </div>
            </article>
          </section>
          <section className="details-event-container">
            <article className="single-detail-event">
              <div>Participants:</div>
              <div>PO, DT, SM and stakeholders</div>
            </article>
            <article className="single-detail-event">
              <div>Duration:</div>
              <div>Proportional to Sprint long (1-month Sprint - 4 hour meeting)</div>
            </article>
            <article className="single-detail-event">
              <div>Meeting focus:</div>
              <div>On the product</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SprintReview;
