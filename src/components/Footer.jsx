import React from "react";

function Footer() {
  return (
    <section className="footer">
      <article className="left-footer-container">
        <div>About Skogis AB</div>
        <ul className="left-footer">
          <li>Who are we?</li>
          <li>Our projects</li>
          <li>Be a part of our team!</li>
        </ul>
      </article>
      <article className="right-footer-container">
        <div>Our Subcontractors</div>
        <ul className="right-footer">
          <li>vandringsleder.nu</li>
          <li>kottar.se</li>
          <li>svampentusiasterna.com</li>
        </ul>
      </article>
    </section>
  );
}

export default Footer;
