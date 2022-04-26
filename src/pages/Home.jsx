import React from "react";
import "../App.css";
import Process from "../components/Process";
import Roles from "../components/Roles";
import ScrumBenefits from "../components/ScrumBenefits";
import ScrumDetails from "../components/ScrumDetails";

function Home() {
  return (
    <main className="info-container">
      <section className="intro-section">
        <Roles />
        <ScrumBenefits />
      </section>
      <Process />
      <ScrumDetails />
      <section className="text-information-container">
        <article>
          <h1>Product Backlog</h1>
          <p>
            An ordered list of product features, functions and requirements. PO
            creates product backlog prioritizing it after discussion with DT.
            This list is never complete and changes depending on user feedback.
          </p>
        </article>
        <article>
          <h1>Sprint Planning</h1>
          <p>
            The meeting when the team defines the sprint goal - the set of
            product backlog items to work on during the upcoming sprint. Two
            questions are being answered: 1) What needs to be done in order to
            achieve sprint goal? 2) How are we going to achieve it?
          </p>
        </article>
        <article>
          <h1>Sprint Backlog</h1>
          <p>
            A set of chosen items from the product backlog that the team
            obligates to accomplish in a given sprint. It is the outcome of
            Sprint planning meeting.
          </p>
        </article>
        <article>
          <h1>Sprint And Daily Scrum</h1>
          <p>
            Product increment delivery phase with a strict time-box. Every
            sprint is an independent part of work. Every day DT attends a daily
            scrum meeting in order to estimate their work progress. This type of
            meeting creates transparency during the sprint.
          </p>
        </article>
        <article>
          <h1>Product Increment</h1>
          <p>
            The total sum of work finished during a sprint and all the previous
            sprints. Product increment needs to meet definition of DONE – the
            items are finished, tested and documented.
          </p>
        </article>
        <article>
          <h1>Sprint Review</h1>
          <p>
            The meeting when product increment is shown and stakeholders give
            feedback about the product. Based on the feedback product backlog is
            updated immediately. Meetings focus – product.
          </p>
        </article>
        <article>
          <h1>Sprint Retrospective</h1>
          <p>
            Sprint retrospective. The meeting that happens after the sprint
            review before the next sprint planning. ST discusses how to improve
            their tools and collaboration. Meetings focus – process.
          </p>
        </article>
        <article>
          <h1>Agile Estimation</h1>
          <p>
            Story points: It is a relative estimation of the effort required to
            implement a certain user story. The estimation is given by DT. Other
            ST members can’t influence DTs decision. Ideal days: It is an
            estimate of number days for the team to complete the project without
            interruptions.
          </p>
        </article>
        <article>
          <h1>Scrum Metrics</h1>
          <p>
            Velocity – a sum of completely finished user stories points that is
            calculated at the end of each sprint. It is a tool to predict DTs
            efficiency for the future sprints. Burndown Chart – a tool to track
            DTs progress during the sprint. It shows how fast the team is
            implementing user stories from the current sprint backlog.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
