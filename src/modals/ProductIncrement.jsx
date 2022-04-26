import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { ListContext } from "../components/Context";

function ProductIncrement() {
  let { setProductIncrement } = useContext(ListContext);
  return (
    <section className="modal-background">
      <section className="modal-content green-module-background">
        <div className="modal-button-container">
          <button onClick={() => setProductIncrement(false)} className="modal-button">X</button>
        </div>
        <h2>Product Increment</h2>
        <p>
        The total sum of work finished during a sprint and all the previous sprints. Product increment needs to meet definition of DONE – the items are finished, tested and documented.
        </p>
      </section>
    </section>
  );
}

export default ProductIncrement;
