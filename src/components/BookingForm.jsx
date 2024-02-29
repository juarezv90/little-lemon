import React, { useEffect } from "react";
import { submitAPI } from "../bookingAPI";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      resName: "",
      resEmail: "",
      resPhone: "",
      resDate: "",
      resTime: "",
      guests: 1,
      occasion: ""
    },
    validationSchema: Yup.object({
      resName: Yup.string()
        .min(3, "Cannot be less then 3 characters long")
        .required("Required"),
      resEmail: Yup.string().email("Invalid Email").required("Required"),
      resPhone: Yup.string()
        .matches(/^\(\d{3}\)\d{3}-\d{4}$/g, "Invalid phone")
        .min(13, "Not valid number")
        .required("Required"),
      resDate: Yup.date("Pick Date").required("Date Required"),
      resTime: Yup.string().required("Required"),
      guests: Yup.number().min(2, "Guest Count to Low").max(10, 'Cannot accommodate more the 10 guest').required('Required')
    }),
    onSubmit: (values) => {
      if (submitAPI(values)) {
        navigate("/confirmed");
      }
    }
  });

  useEffect(() => {
    dispatch(new Date(formik.values.resDate));
  }, [formik.values.resDate]);

  function formatPhoneNumber(value) {
    let number = value;
    if (!number) return number;
    const phoneNumber = number.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumber < 7) {
      return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 9)}`;
  }

  useEffect(() => {
    const phoneInput = document.getElementById("resPhone");
    const formatNumber = (item) => {
      if (item.key === "Backspace") return;
      const obj = formatPhoneNumber(item.target.value);
      item.target.value = obj;
    };

    phoneInput.addEventListener("keydown", formatNumber);
    return () => phoneInput.removeEventListener("keydown", formatNumber);
  }, []);

  return (
    <>
      <form className="bookingForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="resName" {...formik.getFieldProps("resName")} />
        {formik.touched.resName && formik.errors.resName ? (
          <p className="error">{formik.errors.resName}</p>
        ) : (
          ""
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="resEmail"
          {...formik.getFieldProps("resEmail")}
        />
        {formik.touched.resEmail && formik.errors.resEmail ? (
          <p className="error">{formik.errors.resEmail}</p>
        ) : (
          ""
        )}

        <label htmlFor="resPhone">Phone:</label>
        <input
          type="text"
          id="resPhone"
          {...formik.getFieldProps("resPhone")}
        />
        {formik.touched.resPhone && formik.errors.resPhone ? (
          <p className="error">{formik.errors.resPhone}</p>
        ) : (
          ""
        )}

        <label htmlFor="resDate">Choose Date:</label>
        <input type="date" id="resDate" {...formik.getFieldProps("resDate")} />
        {formik.touched.resDate && formik.errors.resDate ? (
          <p className="error">{formik.errors.resDate}</p>
        ) : (
          ""
        )}

        <label htmlFor="resTime">Choose Time:</label>
        <select id="resTime" {...formik.getFieldProps("resTime")}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {formik.touched.resTime && formik.errors.resTime ? (
          <p className="error">{formik.errors.resTime}</p>
        ) : (
          ""
        )}

        <label htmlFor="guests">Number of Guest</label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min={1}
          max={10}
          {...formik.getFieldProps("guests")}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <p className="error">{formik.errors.guests}</p>
        ) : (
          ""
        )}

        <label htmlFor="occasion">Occasion (optional)</label>
        <select id="occasion" {...formik.getFieldProps("occasion")}>
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
