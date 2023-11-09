import React, {useEffect, useState} from "react";
import styles from "../styles/dailyreport.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import { ReactComponent as Logo } from "../svg/newlogo.svg";
import PatrolResult from "./dailyreport/patrolresult";
import PatrolDemerit from "./dailyreport/patroldemerit";
import Studytimebar from "./dailyreport/studytimebar";
import StudytimeChart from "./dailyreport/studytimechart";
import StudytimeRanking from "./dailyreport/studytimeranking";

const DailyReport : React.FC<any> = () => {

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
                <Logo className={styles.logo}/>
            </div>
            <div className={styles.titleDiv}>
                <div className={styles.title}>
                    Daily Report
                </div>
                <div className={styles.titleDate}>
                    2023년 10월 11일
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
        </div>
    )
}

export default DailyReport;