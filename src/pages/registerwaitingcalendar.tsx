import React, { useState, useEffect, useRef } from "react";
import HeaderTwo from "../components/header2";
import styles from "../styles/register.module.css";
import { ReactComponent as ChevronRight } from '../svg/chevron-right-solid-black.svg';
import { ReactComponent as ChevronLeft } from '../svg/chevron-left-solid-black.svg';
import { Backdrop, Button } from "@mui/material";
import Footer from "../components/footer";
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation, useNavigate } from "react-router-dom";
import SpeedDialComponent from "../control/speeddial";
import { useMediaQuery } from "react-responsive";
import ReactGa from "react-ga4";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// const startDate = new Date();


const weeks = [1, 2, 3, 4, 5, 6];
const ampm = [600, 630, 660, 690, 720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290];
const pm = [720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290, 1320]
const am = [600, 630, 660, 690];
var intervalId: any;

const RegisterWaitingCalendar: React.FC<any> = (props) => {

    const today = new Date();
    const todayFirstTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    const todayLastTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    const currentTime = today.getHours() * 60 + today.getMinutes();

    const [startDate, setStartDate] = useState(new Date());


    const [select, setSelect] = useState(0);
    const [dateValue, setDateValue] = useState();
    const [showingDate, setShowingDate] = useState(startDate.getTime());
    const [month, setMonth] = useState<any>();
    const [year, setYear] = useState<any>();
    const [calendar, setCalendar] = useState<any>();
    const [selectedDay, setSelectedDay] = useState(today.getFullYear() * 10000 + today.getMonth() * 100 + today.getDate());
    const [realSelectedDay, setRealSelectedDay] = useState({ year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() });
    const [selectedTime, setSelectedTime] = useState(0);

    const [minusMonthDisable, setMinusMonthDisable] = useState(true);

    const location = useLocation();
    const [loading, setLoading] = useState(false);




    const navigate = useNavigate();


    const eachRef = useRef<any>(new Array());

    //가로 세로 길이 같게 만드는-----------------------------------------
    const isMobile = useMediaQuery({ query: '(max-width : 500px)' });


    const [isConstructionDay, setIsConstructionDay] = useState(false);




    useEffect(() => {

        fromQuery();

    }, []);

    const fromQuery = () => {

        const query: any = new URLSearchParams(location.search);
        console.log("query");

        if (!query) {
            console.log("noQuery");
            return;
        }

        const size = query.size;

        if (!size) {
            console.log("noQuerySize");
            return;
        }

        const id = query.get("id");
        console.log(id);
        const code = query.get("code");
        const type = query.get("type");

        if(!id){
            console.log("noId");
            return;
        }

        if(!type){
            console.log("noType");
            return;
        }

        if(!code){
            console.log("noCode");
            return;
        }


        return {id, code, type}

    }




    useEffect(() => {
        if (isMobile) {
            if (eachRef.current) {
                const height = eachRef.current[0].clientWidth;
                eachRef.current.forEach((each: any) => {
                    if (each) {
                        each.style.height = `${height}px`;
                    }
                })
            }
        }
    }, [calendar]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    //달력 만드는기능----------------------------------------------

    useEffect(() => {

        console.log("change");
        const month = new Date(showingDate).getMonth();
        const year = new Date(showingDate).getFullYear();


        setMonth(month);
        setYear(year);

        if (month === today.getMonth() && year === today.getFullYear()) {
            setMinusMonthDisable(true);
        } else {
            setMinusMonthDisable(false);
        }

        const firstDate = new Date(year, month, 1);
        const firstDateDay = firstDate.getDay();
        firstDate.setDate(firstDate.getDate() - firstDateDay);

        const lastDate = new Date(year, month + 1, 0);
        const lastDateDay = lastDate.getDay();
        lastDate.setDate(lastDate.getDate() + (6 - lastDateDay));

        console.log(firstDate.getDate());
        console.log(lastDate.getDate());

        const calendarData: any = [];
        var week = 1;

        while (firstDate.getTime() <= lastDate.getTime()) {
            var isPast = false;
            var isToday = false;


            if (firstDate.getTime() < todayFirstTime.getTime()) {
                isPast = true;
            }

            if ((firstDate.getTime() >= todayFirstTime.getTime()) && (firstDate.getTime() <= todayLastTime.getTime())) {
                isToday = true;
            }


            const oneDay = {
                year: firstDate.getFullYear(),
                month: firstDate.getMonth(),
                date: firstDate.getDate(),
                day: firstDate.getDay(),
                week,
                isPast,
                isToday
            }
            calendarData.push(oneDay);

            if (oneDay.day === 6) {
                week++;
            }

            firstDate.setDate(firstDate.getDate() + 1);
        }

        console.log(calendarData);

        setCalendar(calendarData);
        setSelectedTime(0);

    }, [showingDate]);

    const monthChange = (type: string) => {
        if (type === "plus") {
            startDate.setMonth(startDate.getMonth() + 1);
            setShowingDate(startDate.getTime());
        } else if (type === "minus") {
            startDate.setMonth(startDate.getMonth() - 1);
            setShowingDate(startDate.getTime());
        }
    }

    //----------------------------------------------------------------------

    //날짜 선택하는 기능----------------------------------------------------------------------------------
    const dateClick = (year: number, month: number, date: number, day: number, isPast: boolean) => {
        if (isPast) {
            return;
        }
        setSelectedDay(year * 10000 + month * 100 + date);
        setRealSelectedDay({ year, month, date, day });
    }
    //-----------------------------------------------------------------------------------------------------



    const submit = () => {

        setLoading(true);

        const queryResult = fromQuery();

        if(!queryResult){
            console.log("noQueryResult");
            return;
        }
        
        const {id, code, type} = queryResult;

        if(!id || !code || !type){
            console.log("noIdOrCodeOrType");
            return;
        }

        const data = {
            date: realSelectedDay,
            id,
            code,
            type
        }

        console.log(data);

        fetch(`https://peetsunbae.com/waiting/calendar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result.message);
                    if (result.message === "fail" || result.message === "error") {
                        alert("오류 관리자 문의(010-9880-0489)")
                    }
                    if(result.message === "canceled"){
                        alert("이미 대기가 취소되었습니다.");
                        return;
                    }
                    if(result.message === "already"){
                        notify2();
                        return;
                    }
                    if (result.message === "success") {
                        notify1();
                    }

                    setLoading(false);
                })
        })

    }

    const notify1 = () => toast.success("저장 성공!", {
        position : "bottom-right",
        autoClose : 3500,
        hideProgressBar : true,
        theme : "colored"
    });

    

    const notify2 = () => toast.warning("이미 제출되었습니다!", {
        position : "bottom-right",
        autoClose : 3500,
        hideProgressBar : true,
        theme : "colored"
    });

    return (
        <div>

            <div className={styles.itsmain}>

                <div className={styles.formBody}>

                    <div className={`${styles.questionText} ${styles.second}`}>
                        등원 희망일을 선택해주세요
                    </div>

                    <div className={styles.calendarBox}>
                        <div className={styles.calendarWrap}>
                            <div className={styles.firstRow}>
                                <Button sx={{ width: "auto", padding: "0px", minWidth: "0px", paddingRight: "10px" }} disabled={minusMonthDisable} onClick={(e: any) => { monthChange("minus") }}>
                                    <ChevronLeft className={styles.left} fill={minusMonthDisable ? "#dedede" : "black"} />
                                </Button>
                                <div className={styles.month}>
                                    {year && year}년 {(month || month === 0) && month + 1}월
                                </div>
                                <Button sx={{ width: "auto", padding: "0px", minWidth: "0px", paddingLeft: "10px" }} onClick={(e: any) => { monthChange("plus") }}>
                                    <ChevronRight className={styles.right} />
                                </Button>
                            </div>
                            <div className={styles.row}>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    일
                                </div>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    월
                                </div>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    화
                                </div>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    수
                                </div>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    목
                                </div>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    금
                                </div>
                                <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                    토
                                </div>
                            </div>
                            {
                                weeks && weeks.map((eachWeek: number) => {
                                    return (
                                        <div key={eachWeek} className={styles.row}>
                                            {
                                                calendar && calendar.map((eachDay: any) => {
                                                    if (eachWeek === eachDay.week) {
                                                        return (
                                                            <div key={eachDay.month * 100 + eachDay.date} ref={(element) => { eachRef.current.push(element) }} onClick={(e: any) => { dateClick(eachDay.year, eachDay.month, eachDay.date, eachDay.day, eachDay.isPast) }} className={`${styles.date} ${eachDay.day === 0 ? styles.sunday : ""} ${eachDay.isToday ? styles.todayDate : ""} ${eachDay.isPast ? styles.pastDate : ""} ${eachDay.day === 6 ? styles.saturday : ""} ${selectedDay === eachDay.year * 10000 + eachDay.month * 100 + eachDay.date ? styles.active : ""}`}>
                                                                <div className={styles.eachDate}>
                                                                    {eachDay.date}
                                                                </div>
                                                                <div className={`${eachDay.isToday ? styles.today : styles.none}`}>
                                                                    오늘
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div style={{ height: "60px" }}>

                    </div>


                    <div className={styles.submitBtnDiv}>
                        <Button variant="contained" onClick={submit} fullWidth sx={{ height: "72px", backgroundColor: "#3c3c3c", color: "white", fontWeight: 700, fontSize: "20px", "&:hover": { backgroundColor: "rgb(100,100,100)" }, "@media (max-width : 1024px)": { fontSize: "16px", height: '55.5px' } }}>
                            신청서 제출
                        </Button>
                    </div>
                </div>

            </div>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ToastContainer />

        </div>
    )
}

export default RegisterWaitingCalendar;