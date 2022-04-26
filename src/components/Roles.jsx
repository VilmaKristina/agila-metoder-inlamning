import React from "react";
import { useState } from "react";
import "../modals/Modal.css";

function Roles() {
  const [roles] = useState([
    {
      id: 1,
      title: "Product Owner (PO)",
      image: "images/productowner.png",
      work: [
        "Manages Product Backlog",
        "Works With Stakeholders",
        "Owns Project Vision",
      ],
    },
    {
      id: 2,
      title: "Development Team (DT)",
      image: "images/devteam.png",
      work: [
        "Self-Organized Group",
        " Builds The Product Increment",
        "Responsible For Transparency",
      ],
    },
    {
      id: 3,
      title: "Scrum Master (SM)",
      image: "images/scrummaster.png",
      work: [
        "Facilitater And Coach",
        "Protects Team From Distractions",
        "Scrum Framework Expert",
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
      <section className="individual-roles">
        {roles.map((role) => (
          <section className="role" key={role.id}>
            <h3>{role.title}</h3>
            <article>
              <img className="image-container" src={role.image}></img>
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
                <button onClick={moduleContainer} className="modal-button">X</button>
              </div>
              <div>
                {roleModal.map((modal) => {
                  return (
                    <div key={modal.id}>
                      <h3>{modal.title}</h3>
                      <article>
                        <div>{modal.work[0]}</div>
                        <div>{modal.work[1]}</div>
                        <div>{modal.work[2]}</div>
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
