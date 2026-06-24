import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Banner from "./Banner";
import Tournament from "./Tournament";
import LatestUpdates from "./LatestUpdates";
import Download from "./Download";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";


function Home() {
  return (
    <>
      <Banner />
      <Tournament />
      <LatestUpdates />
      <Download />
    </>
  );
}


function App() {

  const location = useLocation();

 const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>

      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideLayout && <Footer />}

    </>
  );
}

export default App;