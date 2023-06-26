import React, { useState } from "react";
import data from "../data-mobile";

export default function Creation() {
  const [cards, setCards] = useState(data);
  return (
    <section className="creation-mobile">
      <h2>Our Creations</h2>
      <section>
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id}>
              <div>
                <img src={image} alt="cards" />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button className="btn"> See all</button>
      </div>
    </section>
  );
}
