import React, { useEffect, Suspense, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
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
import AttendanceTable from './pages/attendancetable';
import ReportToParent from './pages/reporttoparent';
import NotificationRead from './pages/notificationread';
import NotificationWrite from './pages/notificationwrite';
import NotificationUpdate from './pages/notificationupdate';
import Storys from './pages/storys';
import Storyread from './pages/storyread';
import HeaderTwo from './components/header2';
// import Notification from './pages/notification';


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
const Notification = React.lazy(() => import("./pages/notification"));





function App() {

  const ref = useRef<any>(null);
  const [pathName, setPathName] = useState<any>("/");



  useEffect(() => {
    console.log(window.location.pathname);
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

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
            <>
              <HeaderTwo />
              <div ref={ref} className="loadingPageDiv" style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Logo className="loadingPageLogo" />
                <div>

                </div>
              </div>
            </>
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
            
            
            <Route path="/attendancetable" element={<AttendanceTable />}></Route>
            <Route path="/consultresult" element={<ReportToParent />}></Route>
            
            
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/notificationRead" element={<NotificationRead />}></Route>
            <Route path="/notificationRead7" element={<NotificationUpdate />}></Route>
            <Route path="/notificationwrite7" element={<NotificationWrite />}></Route>
            <Route path="/storys" element={<Storys />}></Route>
            <Route path="/storyread" element={<Storyread />}></Route>
          </Routes>
        </Suspense>
      </div>

    </Router>
  );
}

export default App;
