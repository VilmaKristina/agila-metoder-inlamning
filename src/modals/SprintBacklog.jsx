import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function SprintBacklog() {
  let { setSprintBacklog } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content">
        <div className="modal-button">
          <button onClick={() => setSprintBacklog(false)}>X</button>
        </div>
        <h2>Sprint Backlog</h2>
        <p>
        A set of chosen items from the product backlog that the team obligates to accomplish in a given sprint. It is the outcome of Sprint planning meeting.
        </p>
      </section>
    </section>
  );
}

export default SprintBacklog;