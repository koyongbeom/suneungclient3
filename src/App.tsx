import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom"
import Ceo from './pages/ceo';
import Complete from './pages/complete';
import Faq from './pages/faq';
import MainPage from "./pages/main";
import Map from './pages/map';
import Parkgaeul from './pages/parkgaeul';
import Price from './pages/price';
import Register from './pages/register';
import Review from './pages/review';
import StudySystem from './pages/studysystem';
import Teachers from './pages/teachers';
import ReactGa from "react-ga4";

function App() {

  useEffect(()=>{
    ReactGa.initialize("G-24CD6Z291K");
  }, []);

  return (
    <Router>
      <div id="routing-container">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/ceo" element={<Ceo />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/studysystem" element={<StudySystem />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/complete" element={<Complete />}></Route>
          <Route path="/parkgaeul" element={<Parkgaeul />}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
