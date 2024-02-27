import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./Global.scss";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import { useReducer } from "react";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function BookingPage({availableTimes, dispatch}) {
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
}

function App() {
  
  const updateTimes = (state, action) => {
    return state;
  };

  const initializeTime = () => {
    
    let item =[]

    for(let i = 16; i < 23 ; i++){
      if(Math.random() < 0.5){
        item.push(i + ":00")
      }
      if(Math.random() > .5) {
        item.push(i + ":30")
      }
    }
    return item;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime())

  return (
    <>
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookingpage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
