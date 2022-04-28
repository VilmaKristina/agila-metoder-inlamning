import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function ProductBacklog() {
  let { setSprint } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content purple-module-background">
        <div className="modal-button-container">
          <button onClick={() => setSprint(false)} className="modal-button">
            X
          </button>
        </div>
        <h2>Sprint & Daily Scrum</h2>
        <p className="sprint-explanation">(Scrum Event)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
                <ul>
                  <li>
                    <h4>Sprint</h4> <i>product increment delivery phase</i> with a strict
                    time-box.
                  </li>
                  <li>
                  <h4>Daily scrum</h4> <i>a daily DT meeting</i> in order <i>to estimate its
                    work progress</i>.
                  </li>
                </ul>
              </div>
              <div className="event-questions">
                <ul>
                  <li>
                    Every sprint is an independent part of work. Planned amount
                    of work has to be completed by the team.
                  </li>
                  <li>
                    Sprint cycle repeats until enough items in the product
                    backlog have been completed.
                  </li>
                  <li>
                    Daily Scrum is a everyday time-boxed event when DT
                    creates its work plan for the day. The meeting creates
                    transparency during the Sprint. DT answers 3 questions: 1)
                    What did you achieve yesterday? 2) What are you going to do
                    today? 3) Are there any obstacles?
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="details-event-container">
            <article className="single-detail-event">
              <div>Participants:</div>
              <div>
                Daily Scrum - Generally DT meeting (PO - can observe, SM - can help to
                facilitate)
              </div>
            </article>
            <article className="single-detail-event">
              <div>Duration:</div>
              <div>Sprint - 3 to 30 days; Daily Scrum - about 15 minutes</div>
            </article>
            <article className="single-detail-event">
              <div>Meeting focus:</div>
              <div>On work progress toward the Sprint Goal</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductBacklog;
