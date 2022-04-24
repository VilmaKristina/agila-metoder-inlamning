import React from "react";
import "../App.css";
import Process from "../components/Process";
import Roles from "../components/Roles";

function Home() {
  return (
    <main className="info-container">
      <Roles />
      <Process />
      <section>Third Section</section>
    </main>
  );
}

export default Home;
