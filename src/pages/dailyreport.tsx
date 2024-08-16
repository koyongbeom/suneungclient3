import React, { useEffect, useState } from "react";
import styles from "../styles/dailyreport.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../svg/newlogo.svg";
import { ReactComponent as DailySvg } from "../svg/dailysvg.svg";
import PatrolResult from "./dailyreport/patrolresult";
import PatrolDemerit from "./dailyreport/patroldemerit";
import Studytimebar from "./dailyreport/studytimebar";
import StudytimeChart from "./dailyreport/studytimechart";
import StudytimeRanking from "./dailyreport/studytimeranking";
import PatrolViolateList from "./dailyreport/patrolviolatelist";
import AttendanceDemerit from "./dailyreport/attendancedemerit";
import EnglishTest from "./dailyreport/englishtest";
import PhoneInspect from "./dailyreport/phoneinspect";
import { ReactComponent as LightGrayLogo } from "../../src/svg/lightgraylogo.svg";
import { ReactComponent as MainSvg } from "../../src/svg/newdaillymain.svg";

const DailyReport: React.FC<any> = () => {

    const [name, setName] = useState("");
    const [userId, setUserId] = useState();
    const [targetDate, setTargetDate] = useState<Date>();
    const [code, setCode] = useState();
    const [where, setWhere] = useState();

    const location = useLocation();
    const navigate = useNavigate();

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

        // if (!size) {
        //     console.log("noQuerySize");
        //     return;
        // }

        const id = query.get("id");
        const code = query.get("code");
        const date = query.get("date");
        const name = query.get("name");
        const where = query.get("location");

        if (!id) {
            console.log("noId");
            return;
        }

        if (!date) {
            console.log("noType");
            return;
        }

        if (!code) {
            console.log("noCode");
            return;
        }

        if (!name) {
            console.log("noName");
            return;
        }

        if (!where) {
            console.log("noWhere");
            return;
        }

        console.log(id, code, date, name)

        const newDate = new Date(date);

        setName(name);
        setUserId(id);
        setTargetDate(newDate);
        setCode(code);
        setWhere(where);

        //query 없애기
        // navigate("/dailyreport");

        return { id, code, date, name }

    }

    useEffect(() => {

        const link = document.createElement("link");
        link.href = "../styles/pretendard.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        link.onload = () => {
            console.log("font loaded");
        }

        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        }

    }, [])




    return (
        <div className={styles.dailyreport}>
            <div className={styles.mainFirstBack}>
                {/* <div className={styles.logoHeader}>
                    <div>
                        <LightGrayLogo className={styles.logo} />
                    </div>
                    <div className={styles.logoDate}>
                        {targetDate && targetDate.getFullYear().toString().slice(-2)}년 {targetDate && targetDate.getMonth() + 1}월 {targetDate && targetDate.getDate()}일
                    </div>
                </div>
                <div className={styles.titleDiv}>
                    <div className={styles.title}>
                        선배 리포트
                    </div>
                    <div className={styles.realTitle}>
                        {name}님을 위한
                    </div>
                    <div className={`${styles.realTitle} ${styles.realTitle2}`}>
                        수능선배 하루 기록이에요
                    </div>
                    <div className={styles.dailyMainSvgDiv}>
                        <MainSvg className={styles.dailyMainSvg} />
                    </div>
                </div> */}
                <div className={styles.mainTitle}>
                    {name}님의 수능선배<br />데일리 리포트
                </div>
                <div className={styles.mainDate}>
                    발행일자&nbsp;&nbsp;{targetDate && targetDate.getFullYear() + "년 "  + (targetDate.getMonth() + 1) + "월 " + targetDate.getDate() + "일"}
                </div>
                <div className={styles.mainSvgDiv}>
                    <MainSvg className={styles.mainSvg} />
                </div>
            </div>
            <PatrolResult targetDate={targetDate} userId={userId} name={name} where={where} />
            <div className={styles.justGap}>
            </div>
            <PatrolDemerit targetDate={targetDate} userId={userId} />
            <div className={styles.justGap}>
            </div>
            <Studytimebar targetDate={targetDate} userId={userId} location={where} name={name} />
            <div className={styles.justGap}>
            </div>
            <StudytimeChart targetDate={targetDate} userId={userId} location={where} name={name} />
            <div className={styles.justGap}>
            </div>
            <StudytimeRanking targetDate={targetDate} userId={userId} location={where} name={name} />
            <div className={styles.justGap}>
            </div>
            <PatrolViolateList targetDate={targetDate} userId={userId} location={where} name={name} code={code} />
            <div className={styles.justGap}>
            </div>
            <AttendanceDemerit targetDate={targetDate} userId={userId} location={where} name={name} />
            <div className={styles.justGap}>
            </div>
            <EnglishTest targetDate={targetDate} userId={userId} location={where} name={name} />
            <div className={styles.justGap}>
            </div>
            <PhoneInspect targetDate={targetDate} userId={userId} location={where} name={name} />
        </div>
    )
}

export default DailyReport;