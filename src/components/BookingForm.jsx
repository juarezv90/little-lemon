import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    resDate: "00/00/00",
    resTime: "00:00",
    guests: "1",
    occasion: "anniversary"
  });

  const handleChange = (value) => {
    if (value.target.id === "resTime") {
      dispatch({ type: value.target.value });
    }

    setFormData((prev) => {
      let data = prev;
      data[value.target.id] = value.target.value;
      return data;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="resDate">Choose Date:</label>
        <input type="date" id="resDate" onChange={handleChange} />
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
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
