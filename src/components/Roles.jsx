import React from "react";
import { useState } from "react";
import "../modals/Modal.css";

function Roles() {
  const [roles] = useState([
    {
      id: 1,
      title: "Product Owner (PO)",
      count: "1",
      image: "images/productowner.png",
      work: [
        "Manages Product Backlog",
        "Works With Stakeholders",
        "Communicates Project Vision",
      ],
      details: [
        "Defines what the product will look like and what features it should contain.",
        "With anyone who cares about the work of the product (e.g. customers, funders).",
        "To the team to help set priorities.",
      ],
    },
    {
      id: 2,
      title: "Development Team (DT)",
      count: "3 - 9",
      image: "images/devteam.png",
      work: [
        "Self-Organized Group",
        "Cross-disciplinary Members",
        "Builds The Product Increment",
        "Responsible For Transparency",
      ],
      details: [
        "They have the authority to set their own capacity for work.",
        "They are engineers, designers, architects and testers.",
        "Adapting their plan each day toward the Sprint Goal.",
      ],
    },
    {
      id: 3,
      title: "Scrum Master (SM)",
      count: "1",
      image: "images/scrummaster.png",
      work: [
        "Serves The Team",
        "Serves The Product Owner",
        "Serves The Organization",
      ],
      details: [
        "e.g, coaches the team members in self-management, is responsible for helping everyone in the team understand Scrum theory, practices and values.",
        "e.g, finding techniques for effective Product Backlog management, facilitating Scrum events as requested or needed.",
        "training and coaching the organization in its Scrum adoption.",
      ],
    },
  ]);

  const [roleModal, setRoleModal] = useState([]);
  const [roleClose, setRoleClose] = useState(false);

  const moduleContainer = (role) => {
    setRoleModal([role]);
    setRoleClose(!roleClose);
  };

  return (
    <section className="roles-container">
      <h3 className="scrum-title">Scrum Team</h3>
      <p>
        The <strong>whole team</strong> is accountable for creating <strong>the product increment</strong> every Sprint.
      </p>
      <section className="individual-roles">
        {roles.map((role) => (
          <section className="role" key={role.id}>
            <h3>{role.title}</h3>
            <article>
              <img className="image-container" src={role.image} alt="Scrum team Members"></img>
            </article>
            <article className="role-main">
              <div>⁕ {role.work[0]}</div>
              <div>⁕ {role.work[1]}</div>
              <div>⁕ {role.work[2]}</div>
            </article>
            <article>
              <button
                className="role-button"
                onClick={() => moduleContainer(role)}
              >
                More Info
              </button>
            </article>
          </section>
        ))}
        {roleClose && (
          <article className="modal-background">
            <article className="modal-content role-module-container">
              <div className="modal-button-container">
                <button onClick={moduleContainer} className="modal-button">
                  X
                </button>
              </div>
              <div>
                {roleModal.map((modal) => {
                  return (
                    <div key={modal.id}>
                      <article className="roles-header">
                        <h3>{modal.title}</h3>
                        <div>
                          <h4>How many members?</h4>
                          <p>{modal.count}</p>
                        </div>
                      </article>
                      <article className="roles-explanation">
                        <article className="single-detail">
                          <div>{modal.work[0]}</div>
                          <div>{modal.details[0]}</div>
                        </article>
                        <article className="single-detail">
                          <div>{modal.work[1]}</div>
                          <div>{modal.details[1]}</div>
                        </article>
                        <article className="single-detail">
                          <div>{modal.work[2]}</div>
                          <div>{modal.details[2]}</div>
                        </article>
                      </article>
                    </div>
                  );
                })}
              </div>
            </article>
          </article>
        )}
      </section>
    </section>
  );
}

export default Roles;
