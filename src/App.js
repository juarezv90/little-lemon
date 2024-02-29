import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./Global.scss";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import { useReducer } from "react";
import { fetchAPI } from "./bookingAPI";
import Confirmed from "./components/Confirmed";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function BookingPage({ availableTimes, dispatch }) {
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
}

function App() {
  const updateTimes = (state, date) => {
    return (state = fetchAPI(date));
  };

  const initializeTime = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime);

  return (
    <>
      <BrowserRouter>
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/bookingpage"
              element={
                <BookingPage
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                />
              }
            />
            <Route path="/confirmed" element={<Confirmed />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
