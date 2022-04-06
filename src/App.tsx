import React from 'react';
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom"
import Ceo from './pages/ceo';
import Faq from './pages/faq';
import MainPage from "./pages/main";
import Map from './pages/map';
import Price from './pages/price';
import Register from './pages/register';
import Review from './pages/review';
import StudySystem from './pages/studysystem';
import Teachers from './pages/teachers';


function App() {

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
        </Routes>
      </div>

    </Router>
  );
}

export default App;
