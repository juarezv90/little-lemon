import React from "react";
import Menu from "./Menu";
import TestimonyCard from "./TestimonyCard";

function Main() {
  return (
    <main>
      <Menu />
      <section className="testimonies">
        <div className="container">
          <h3>Testimonies</h3>
          <div className="cardHolder">
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
