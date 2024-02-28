import React, { useState } from "react";
import { submitAPI } from "../bookingAPI";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch }) {
  const date = `${new Date().getFullYear()}-${
    new Date().getMonth() < 9
      ? "0" + (new Date().getMonth() + 1).toString()
      : new Date().getMonth()
  }-${new Date().getDate()}`;
  const [formData, setFormData] = useState({
    resName: "",
    resPhone: "",
    resDate: date,
    resTime: "",
    guests: "1",
    occasion: ""
  });

  const handleChange = (value) => {
    if (value.target.id === "resDate") {
      const date = new Date(value.target.value);
      dispatch(date);
    }

    setFormData((prev) => {
      let data = prev;
      data[value.target.id] = value.target.value;
      return data;
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  };

  return (
    <>
      <form className="bookingForm" onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" id="resName" onChange={handleChange} />

        <label htmlFor="resPhone">Phone:</label>
        <input
          type="tel"
          id="resPhone"
          onChange={handleChange}
          style={{ textAlign: "left" }}
        />

        <label htmlFor="resDate">Choose Date:</label>
        <input
          type="date"
          id="resDate"
          onChange={handleChange}
        />

        <label htmlFor="resTime">Choose Time:</label>
        <select id="resTime" onChange={handleChange}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of Guest</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min={1}
          max={10}
          onChange={handleChange}
        />

        <label htmlFor="occasion">Occasion (optional)</label>
        <select id="occasion" onChange={handleChange}>
          <option>Select an Option</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
