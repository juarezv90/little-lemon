import React from "react";

function TestimonyCard() {
  return (
    <article className="tcard">
      <p className="rating">10</p>
      <p className="name">
        <img
          src="./MarioandAdrianA.jpg"
          alt="reviewer"
          width={47}
          height={47}
        />{" "}
        Sandro
      </p>
      <p className="review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui
        magni dolorum aperiam deleniti quibusdam,
      </p>
    </article>
  );
}

export default TestimonyCard;