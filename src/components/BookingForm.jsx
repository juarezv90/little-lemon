import React, { useState } from "react";

function BookingForm({availableTimes, dispatch}) {
  const [formData, setFormData] = useState({
    resDate: "00/00/00",
    resTime: "00:00",
    guests: "1",
    occasion: ""
  });
 
  const handleChange = (value) => {
    if(value.target.id = "resTime"){
      dispatch({type:value.target.value})
    }
    setFormData((prev) => {
      let data = prev;
      data[value.target.id] = value.target.value;
      return data;
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }



  return (
    <>
      <form className="bookingForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="resDate">Choose Date:</label>
        <input type="date" id="resDate" onChange={(e)=> handleChange(e)}/>
        <label htmlFor="resTime">Choose Time:</label>
        <select id="resTime" onChange={(e)=> handleChange(e)}>
          {availableTimes.map(time => <option key={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of Guest</label>
        <input type="number" id="guests" placeholder="1" min={1} max={10} onChange={(e)=> handleChange(e)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e)=> handleChange(e)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" aria-roledescription='button' />
      </form>
    </>
  );
}

export default BookingForm;
