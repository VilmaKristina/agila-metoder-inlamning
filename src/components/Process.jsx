import React from 'react'

function Process() {
  return (
    <section className="scrum-scheme-container">
        <section className="scrum-scheme">
          <article>
            <div>Product Backlog</div>
          </article>
          <article id="image-arrow">
            <img src="images/arrow-right.png" className="image-container"></img>
          </article>
          <article>
            <div>Sprint Planning</div>
          </article>
          <article id="image-arrow">
            <img src="images/arrow-right.png" className="image-container"></img>
          </article>
          <article>
            <div>Sprint Backlog</div>
          </article>
          <article id="image-arrow">
            <img src="images/arrow-down.png" className="image-container"></img>
          </article>
        </section>
        <section className="scrum-scheme">
          <article id="image-arrow">
            <img src="images/arrow-up.png" className="image-container"></img>
          </article>
          <article>
            <div>Estimation</div>
          </article>
          <article>
            <div>Metrics</div>
          </article>
          <article id="image-arrow">
          <img src="images/sprint-image.png" className="image-container"></img>
        </article>
        </section>
        <section className="scrum-scheme">
          <article>
            <div>Sprint retrospective</div>
          </article>
          <article id="image-arrow">
            <img src="images/arrow-left.png" className="image-container"></img>
          </article>
          <article>
            <div>Sprint review</div>
          </article>
          <article id="image-arrow">
            <img src="images/arrow-left.png" className="image-container"></img>
          </article>
          <article>
            <div>Product increment</div>
          </article>
          <article id="image-arrow">
            <img src="images/arrow-to-left.png" className="image-container"></img>
          </article>
        </section>
      </section>
  )
}

export default Process