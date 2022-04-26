import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function ProductBacklog() {
  let { setSprintPlanning } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content">
        <div className="modal-button">
          <button onClick={() => setSprintPlanning(false)}>X</button>
        </div>
        <h2>Sprint Planning</h2>
        <p>
          The meeting when the team defines the sprint goal - the set of product
          backlog items to work on during the upcoming sprint. Two questions are
          being answered: 1) What needs to be done in order to achieve sprint
          goal? 2) How are we going to achieve it?
        </p>
      </section>
    </section>
  );
}

export default ProductBacklog;
