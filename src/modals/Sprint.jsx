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
          <button onClick={() => setSprint(false)} className="modal-button">X</button>
        </div>
        <h2>Sprint & Daily Scrum</h2>
        <p>
          Product increment delivery phase with a strict time-box. Every sprint
          is an independent part of work. Every day DT attends a daily scrum
          meeting in order to estimate their work progress. This type of meeting
          creates transparency during the sprint.
        </p>
      </section>
    </section>
  );
}

export default ProductBacklog;
