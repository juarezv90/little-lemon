import React from "react";

function About() {
  return (
    <section className="about">
      <div className="container">
        <article className="aboutDetails">
          <span className="aboutHeader">Little Lemon</span>
          <span className="aboutLocation">Chicago</span>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </article>
        <article className="aboutImages">
          <img
            src="./MarioandAdrianA.jpg"
            alt=""
            width={276}
            height={338}
            className="imageA"
          />
          <img
            src="./MarioandAdrianB.jpg"
            alt=""
            width={276}
            height={338}
            className="imageB"
          />
        </article>
      </div>
    </section>
  );
}

export default About;
