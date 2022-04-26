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
          <button onClick={() => setSprintRetrospective(false)} className="modal-button">X</button>
        </div>
        <h2>Sprint Retrospective</h2>
        <p>
        Sprint retrospective. The meeting that happens after the sprint
        review before the next sprint planning. ST discusses how to improve
        their tools and collaboration. Meetings focus – process.
        </p>
      </section>
    </section>
  );
}

export default SprintRetrospetive;