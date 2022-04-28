import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function ProductIncrement() {
  let { setProductIncrement } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content green-module-background">
        <div className="modal-button-container">
          <button
            onClick={() => setProductIncrement(false)}
            className="modal-button"
          >
            X
          </button>
        </div>
        <h2>Product Increment</h2>
        <p className="sprint-explanation">(Scrum Artifact)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
                The <strong>total sum of work finished</strong> during the Sprint and all the
                previous sprints.
              </div>
              <div className="event-questions">
                <ul>
                  <li>
                    Product increment needs to meet definition of DONE – the
                    items are finished, tested and documented.
                  </li>

                  <li>It is a step toward a vision or goal.</li>
                  <li>
                    Each product increment should be shippable and in an usable
                    condition in order to provide value.
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="details-event-container">
            <article className="single-detail-event">
              <div>Accountable:</div>
              <div>The entire Scrum team</div>
            </article>
            <article className="single-detail-event">
              <div>Commitment:</div>
              <div>Definition of DONE</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductIncrement;
