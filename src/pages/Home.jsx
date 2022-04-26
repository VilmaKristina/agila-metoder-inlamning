import React, { useContext } from "react";
import "../App.css";
import Process from "../components/Process";
import Roles from "../components/Roles";
import ScrumBenefits from "../components/ScrumBenefits";
import ScrumDetails from "../components/ScrumDetails";
import ProductBacklog from "../modals/ProductBacklog";
import SprintPlanning from "../modals/SprintPlanning";
import SprintBacklog from "../modals/SprintBacklog";
import SprintRetrospetive from "../modals/SprintRetrospective";
import Sprint from "../modals/Sprint";
import ProductIncrement from "../modals/ProductIncrement";
import SprintTools from "../modals/SprintTools";
import SprintReview from "../modals/SprintReview";
import { ListContext } from "../components/Context";

function Home() {
  let { openProductBacklog, openSprintPlanning, openSprintBacklog, openSprint, openProductIncrement, openSprintReview, openSprintRetrospective, openTools} = useContext(ListContext);
  return (
    <main className="info-container">
      <section className="intro-section">
        <Roles />
        <ScrumBenefits />
      </section>
      <Process />
      <ScrumDetails />
      {openProductBacklog && <ProductBacklog />}
      {openSprintPlanning && <SprintPlanning />}
      {openSprintBacklog && <SprintBacklog />}
      {openSprint && <Sprint />}
      {openProductIncrement && <ProductIncrement />}
      {openSprintReview && <SprintReview />}
      {openSprintRetrospective && <SprintRetrospetive />}
      {openTools && <SprintTools />}
    </main>
  );
}

export default Home;
