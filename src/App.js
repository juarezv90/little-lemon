import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./Global.scss";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function BookingPage()
{
  return (
    <>
    <h1>BookingPage</h1>
    </>
  )
}
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
