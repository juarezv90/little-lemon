import React from "react";
import { useNavigate } from "react-router-dom";

function Confirmed() {
    const navigate = useNavigate();

  return (
  <section className="confirmed">
    <h3>Reservation Confirmed</h3>
    <p>Thank you for reserving ahead of time</p>
    <button onClick={() => navigate("/")}>Return</button>
  </section>
  )
}

export default Confirmed;
