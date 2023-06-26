import React from "react";
import interactive from "../images/desktop/image-interactive.jpg";
export default function Interactive() {
  return (
    <>
      <section className="interactive">
        <div>
          <img src={interactive} alt="" />
        </div>
        <div className="interactive-text">
          <h2> The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
}
