import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function ProductBacklog() {
  let { setProductBacklog } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content green-module-background">
        <div className="modal-button-container">
          <button
            onClick={() => setProductBacklog(false)}
            className="modal-button"
          >
            X
          </button>
        </div>
        <h2>Product Backlog</h2>
        <p className="sprint-explanation">(Scrum Artifact)</p>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="extra-event-info">
              <div className="main-description-info">
              An <strong>ordered list</strong> of product features, functions and requirements.
              </div>
              <div className="event-questions">
                <ul>
                <li>PO represents the needs of many stakeholders in the Product Backlog.</li>
                  <li>
                  PO
                  creates Product Backlog prioritizing it after discussion with DT and is responsible for Backlog’s content and availability.
                  </li>
                  <li>
                  This list is never complete and changes depending on user feedback.
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="details-event-container">
            <article className="single-detail-event">
              <div>Owner:</div>
              <div>
              PO
              </div>
            </article>
            <article className="single-detail-event">
              <div>Artifact focus:</div>
              <div>On stakeholders desires, specific product</div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductBacklog;
