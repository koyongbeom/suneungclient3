import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderTwo from "../components/header2";
import styles from "../styles/complete.module.css";
import { ReactComponent as Check } from '../svg/check.svg';
import ReactGa from "react-ga4";



const Complete: React.FC<any> = (props) => {
    const [year, setYear] = useState<any>();
    const [month, setMonth] = useState<any>();
    const [date, setDate] = useState<any>();
    const [day, setDay] = useState<any>();
    const [ampm, setampm] = useState<any>();
    const [hours, setHours] = useState<any>();
    const [isMinutes, setIsMinutes] = useState<any>(true);
    const [minutes, setMinutes] = useState<any>();
    const [select, setSelect] = useState<any>();

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    //ga event------------------------------------------------
    useEffect(() => {
        ReactGa.event({
            category: "view",
            action: "completepageview"
        })
    }, []);
    //--------------------------------------------------------




    const start = (state : any) => {
        if(!state){
            return;
        }

        setYear(state.realSelectedDay.year);
        setMonth(state.realSelectedDay.month);
        setDate(state.realSelectedDay.date);
        switch (state.realSelectedDay.day) {
            case 0:
                setDay("일");
                break;
            case 1:
                setDay("월");
                break;
            case 2:
                setDay("화");
                break;
            case 3:
                setDay("수");
                break;
            case 4:
                setDay("목");
                break;
            case 5:
                setDay("금");
                break;
            case 6:
                setDay("토");
                break;
        }

        const time = +state.selectedTime;
        var hoursNumber = Math.floor(time/60);
        const minutesNumber = time%60;
        var isAmPm = "오전";
        if(hoursNumber >= 12){
            isAmPm = "오후"
        }
        if(hoursNumber > 12){
            hoursNumber = hoursNumber - 12;
        }
        setampm(isAmPm);
        setHours(hoursNumber);
        setMinutes(minutesNumber);
        if(minutesNumber === 0){
            setIsMinutes(false);
        }


        switch(state.select){
            case 0 :
                setSelect("방문 상담");
                break;
            case 1 :
                setSelect("전화 상담");
                break;
            case 2 :
                setSelect("시설 구경");
                break;
        }
    }


    useEffect(()=>{
        console.log(location.state);
        const state = location.state;
        start(state);

    }, [])

    const navigate = useNavigate();
    const location = useLocation();

    const goHome = () => {
        navigate("/");
    }

    return (
        <div>
            <HeaderTwo />
            <div className={styles.void}>

            </div>
            <div className={styles.main}>
                <div className={styles.topBoarder}>

                </div>
                <div className={styles.checkDiv}>
                    <Check />
                </div>
                <div className={styles.checkTitle}>
                    신청이 완료되었습니다.
                </div>
                <div className={styles.checkText}>
                    카카오톡으로 예약내역 및 지도링크를 보내드립니다.<br></br>상담 예약 취소는 카카오톡 및 전화로 연락주시기 바랍니다.<br></br><br></br><span className={styles.time}>상담 예약 시간 : {month+1}월 {date}일 {day}요일 {ampm} {hours}시 {isMinutes ? `${minutes}분` : ""}<br></br>({select})</span>
                </div>
                <div className={styles.toHomeBtnDiv}>
                    <Button onClick={goHome} variant="contained" sx={{backgroundColor : "#1b49af", width : "120px", height : "40px",fontWeight : 500}}>
                        홈으로
                    </Button>
                </div>
                <div className={styles.contactBox}>
                    수능선배 연락처 | 050-7871-3574<br></br>
                </div>

            </div>
        </div>
    )
}

export default Complete;