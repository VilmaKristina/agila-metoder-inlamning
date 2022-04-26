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
        <p>
          The meeting when product increment is shown and stakeholders give
          feedback about the product. Based on the feedback product backlog is
          updated immediately. Meetings focus – product.
        </p>
      </section>
    </section>
  );
}

export default SprintReview;
