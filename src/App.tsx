import React, { useEffect, Suspense, useRef } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// import Ceo from './pages/ceo';
// import Complete from './pages/complete';
// import Faq from './pages/faq';
// import MainPage from "./pages/main";
// import Map from './pages/map';
// import Parkgaeul from './pages/parkgaeul';
// import Price from './pages/price';
// import Register from './pages/register';
// import Review from './pages/review';
// import StudySystem from './pages/studysystem';
// import Teachers from './pages/teachers';
import ReactGa from "react-ga4";
import { ReactComponent as Logo } from "./svg/newlogo.svg";


const Ceo = React.lazy(() => import("./pages/ceo"));
const Complete = React.lazy(() => import("./pages/complete"));
const Faq = React.lazy(() => import("./pages/faq"));
const MainPage = React.lazy(() => import("./pages/main"));
const Map = React.lazy(() => import("./pages/map"));
const Parkgaeul = React.lazy(() => import("./pages/parkgaeul"));
const Price = React.lazy(() => import("./pages/price"));
const Register = React.lazy(() => import("./pages/register"));
const Review = React.lazy(() => import("./pages/review"));
const StudySystem = React.lazy(() => import("./pages/studysystem"));
const Teachers = React.lazy(() => import("./pages/teachers"));





function App() {

  const ref = useRef<any>(null);


  useEffect(() => {
    ReactGa.initialize([
      {
        trackingId : "G-24CD6Z291K",
        gtagOptions : {sendPageView : false}
      }
    ]);
  }, [])

  return (
    <Router>
      <div id="routing-container">
        <Suspense
          fallback={
            <div ref={ref} className="loadingPageDiv" style={{width : "100%", display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
              <Logo className="loadingPageLogo" />
              <div>
                
              </div>
            </div>
          }
        >
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
        </Suspense>
      </div>

    </Router>
  );
}

export default App;
