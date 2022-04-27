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
          <button onClick={() => setTools(false)} className="modal-button">
            X
          </button>
        </div>
        <h2>Sprint Tools (Agile Estimation & Metrics)</h2>
        <section className="event-info-container">
          <section className="modal-event-container">
            <article className="estimation-info">
              <div className="main-description-info2 border-info">
                <h4>Story Points (Estimation)</h4>
                <p>
                  It is a relative estimation of the effort required to
                  implement a certain user story (given by DT). Other ST members
                  can’t influence DT decision. An estimate of the effort depends
                  on risk, amount of work to do and complexity.
                </p>
                <ul>
                  <li>
                    For estimating agile story points DT use Fibonacci sequence
                    (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89). The higher the
                    number of points, the more effort team believes it to
                    complete the task.
                  </li>
                </ul>
              </div>
              <div className="main-description-info2">
                <h4>Ideal Days (Estimation)</h4>
                <p>
                  It is an estimate of number days for the team to complete the
                  project without interruptions (anything that stop the team to
                  work on the project).
                </p>
                <ul>
                  <li>
                    One of the biggest disatvantages of this method is that
                    people bad at estimating time. Therefore it is a huge risk
                    for project teams to miss deadlines.
                  </li>
                </ul>
              </div>
            </article>
          </section>

          <section className="modal-event-container">
            <article className="estimation-info">
              <div className="main-description-info2  border-info">
                <h4>Velocity (Metric)</h4>
                <p>
                  Velocity – a sum of completely finished user stories points
                  that is calculated at the end of each sprint. It is a tool to
                  predict DTs efficiency for the future sprints.
                </p>
                <div>
                  <img src="images/velocity.png" className="bn-chart"></img>
                </div>
              </div>
              <div className="main-description-info2">
                <h4>Burndown Chart (Metric)</h4>
                <p>
                  Burndown Chart – a tool to track DT progress during the
                  sprint. It shows how fast the team is implementing user
                  stories from the current sprint backlog.
                </p>

                <div>
                  <img
                    src="images/burndownchart.png"
                    className="bn-chart"
                  ></img>
                </div>
              </div>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
}

export default SprintTools;
