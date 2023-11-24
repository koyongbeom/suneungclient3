import React, {useEffect, useState} from "react";
import styles from "../styles/dailyreport.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import { ReactComponent as Logo } from "../svg/newlogo.svg";
import PatrolResult from "./dailyreport/patrolresult";
import PatrolDemerit from "./dailyreport/patroldemerit";
import Studytimebar from "./dailyreport/studytimebar";
import StudytimeChart from "./dailyreport/studytimechart";
import StudytimeRanking from "./dailyreport/studytimeranking";
import PatrolViolateList from "./dailyreport/patrolviolatelist";
import AttendanceDemerit from "./dailyreport/attendancedemerit";
import EnglishTest from "./dailyreport/englishtest";
import PhoneInspect from "./dailyreport/phoneinspect";
import { ReactComponent as LightGrayLogo} from "../../src/svg/lightgraylogo.svg";
import { ReactComponent as MainSvg } from "../../src/svg/daily_main.svg"

const DailyReport : React.FC<any> = () => {

    const [name, setName] = useState("윤종웅");

    const location = useLocation();

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

        console.log(id, code, type)


        return {id, code, type}

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
            <div className={styles.logoHeader}>
                <div>
                    <LightGrayLogo className={styles.logo}/>
                </div>
                <div className={styles.logoDate}>
                    23년 10월 23일
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
                    <MainSvg className={styles.dailyMainSvg}/>
                </div>
            </div>
            <PatrolResult />
            <div className={styles.justGap}>
            </div>
            <PatrolDemerit />
            <div className={styles.justGap}>
            </div>
            <Studytimebar />
            <div className={styles.justGap}>
            </div>
            <StudytimeChart />
            <div className={styles.justGap}>
            </div>
            <StudytimeRanking />
            <div className={styles.justGap}>
            </div>
            <PatrolViolateList />
            <div className={styles.justGap}>
            </div>
            <AttendanceDemerit />
            <div className={styles.justGap}>
            </div>
            <EnglishTest />
            <div className={styles.justGap}>
            </div>
            <PhoneInspect />
        </div>
    )
}

export default DailyReport;