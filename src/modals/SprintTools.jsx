import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function SprintTools() {
  let { setTools } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content orange-module-background">
        <div className="modal-button-container">
          <button onClick={() => setTools(false)} className="modal-button">X</button>
        </div>
        <h2>Sprint Tools</h2>
        <ul>
          <li>Story points: It is a relative estimation of the effort required to
          implement a certain user story. The estimation is given by DT. Other
          ST members can’t influence DTs decision. Ideal days: It is an
          estimate of number days for the team to complete the project without
          interruptions.</li>
          <li>Velocity – a sum of completely finished user stories points that is
          calculated at the end of each sprint. It is a tool to predict DTs
          efficiency for the future sprints. Burndown Chart – a tool to track
          DTs progress during the sprint. It shows how fast the team is
          implementing user stories from the current sprint backlog.</li>
        </ul>
      </section>
    </section>
  );
}

export default SprintTools;
