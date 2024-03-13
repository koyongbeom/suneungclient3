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
import Testmap from './pages/testmap';
import WinterSchool from './pages/winterschool';
import RegisterWaiting from './pages/registerwaiting';
import WaitingRegisterFinish from './pages/waitingregisterfinish';
import RegisterWaitingCalendar from './pages/registerwaitingcalendar';
import WaitingRegisterSubmit from './pages/waitingregistersubmit';
import WaitingRegisterInstant from './pages/waitingregisterinstant';
import StudentCard from './studentcardform/studentcard';
import StudentCardFinish from './pages/studentcardfinish';
import Verification from './pages/verification/verification';
import DaechiMap from './pages/daechimap';
import RegisterWinter from './pages/registerwinter';
import WinterComplete from './pages/wintercomplete';
import Parkgaeul2 from './pages/parkgaeul2';
import JustPdfViewer from './pages/justpdfviewer';
import WinterWaitingRegisterFinish from './pages/winterwaitingregisterfinish';
import DailyReport from './pages/dailyreport';
import JustPdfViewer2 from './pages/justpdfviewer2';
import WaitingRegisterInstant2 from './pages/waitingregisterinstant2';
import JustPdfViewer3 from './pages/justpdfviewer3';
// import KioskMain from './kiosk/kioskmain';
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
const KioskMain = React.lazy(() => import("./kiosk/kioskmain"));



function App() {

  const ref = useRef<any>(null);
  const [pathName, setPathName] = useState<any>("/");
  const [isFirst, setIsFirst] = useState(true);


  useEffect(() => {
    console.log(window.location.pathname);
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    console.log(111);
    setTimeout(()=>{
      setIsFirst(false);
    }, 3200);


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
              {
                !isFirst &&
                <HeaderTwo />
              }
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
            <Route path="/daechimap" element={<DaechiMap />}></Route>
            <Route path="/teachers" element={<Teachers />}></Route>
            <Route path="/studysystem" element={<StudySystem />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/price" element={<Price />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/complete" element={<Complete />}></Route>
            <Route path="/wintercomplete" element={<WinterComplete />}></Route>
            <Route path="/parkgaeul" element={<Parkgaeul />}></Route>
            <Route path="/parkgaeul2" element={<Parkgaeul2 />}></Route>
            <Route path="/winterschool" element={<WinterSchool />}></Route>
            <Route path="/winterwaitingregisterfinish" element={<WinterWaitingRegisterFinish />}></Route>
            
            
            <Route path="/attendancetable" element={<AttendanceTable />}></Route>
            <Route path="/consultresult" element={<ReportToParent />}></Route>
            <Route path="/testmap" element={<Testmap />}></Route>
            <Route path="/registerwaiting" element={<RegisterWaiting />}></Route>
            {/* <Route path="/registerwinter" element={<RegisterWinter />}></Route> */}
            <Route path="/registerwaitingfinish" element={<WaitingRegisterFinish />}></Route>
            <Route path="/registerwaitingcalendar" element={<RegisterWaitingCalendar />}></Route>
            <Route path="/registerwaitingsubmit" element={<WaitingRegisterSubmit />}></Route>
            <Route path="/waitinginstant" element={<WaitingRegisterInstant />}></Route>
            <Route path="/waitingnewinstant" element={<WaitingRegisterInstant2 />}></Route>
            
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/notificationRead" element={<NotificationRead />}></Route>
            <Route path="/notificationRead7" element={<NotificationUpdate />}></Route>
            <Route path="/notificationwrite7" element={<NotificationWrite />}></Route>
            <Route path="/storys" element={<Storys />}></Route>
            <Route path="/storyread" element={<Storyread />}></Route>
            <Route path="/studentcard" element={<StudentCard />}></Route>
            <Route path="/studentcardfinish" element={<StudentCardFinish />}></Route>

            <Route path="/phonenumberverification" element={<Verification />}></Route>


            <Route path="/kiosk/kioskmain/157292/*" element={<KioskMain />}></Route>

            <Route path="/pdfviewer" element={<JustPdfViewer />}></Route>
            <Route path="/pdfviewer2" element={<JustPdfViewer2 />}></Route>
            <Route path="/pdfviewer3" element={<JustPdfViewer3 />} ></Route>
            <Route path="/dailyreport" element={<DailyReport />}></Route>

          </Routes>
        </Suspense>
      </div>

    </Router>
  );
}

export default App;
