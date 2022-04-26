import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function ProductBacklog() {
  let { setProductBacklog } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content green-module-background">
        <div className="modal-button-container">
          <button onClick={() => setProductBacklog(false)} className="modal-button">X</button>
        </div>
        <h2>Product Backlog</h2>
        <p>
          An ordered list of product features, functions and requirements. PO
          creates product backlog prioritizing it after discussion with DT. This
          list is never complete and changes depending on user feedback.
        </p>
      </section>
    </section>
  );
}

export default ProductBacklog;
