import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/dailyreport.module.css";
import { entries } from "lodash";
import {ReactComponent as Crown} from "../../svg/daily_crown.svg"

// const myTotalStudyTime = 430;
// const averageTotalStudyTime = 515;
// const firstTotalStudyTime = 645;

// const data = [
//     {name : "고용범님", time : 430},
//     {name : "강남점 평균", time : 515},
//     {name : "김O태님", time : 645, subTitle : "강남점 1등"}
// ]


const Studytimebar: React.FC<any> = (props) => {

    const barRefs = useRef<any[]>([]);
    const [canSee, setCanSee] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [myTotalStudyTime, setMyTotalStudyTime] = useState(0);

    useEffect(() => {

        barRefs.current = barRefs.current.slice(0, data.length);

    }, [data]);

    useEffect(() => {

        if(!data || data.length === 0){
            return;
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log(entry.target);
                    console.log("intersecting");
                    setCanSee(true);
                }
            })
        }, {
            root : null,
            rootMargin : "0px",
            threshold : 0.8
        });

        barRefs.current.forEach(bar => {
            if(bar){
                observer.observe(bar);
            }
        }) 

        return () => {
            barRefs.current.forEach(bar => {
                if(bar){
                    observer.unobserve(bar);
                }
            }) 
        }

    }, [data]);

    useEffect(() => {

        if(!props.targetDate || !props.userId || !props.location || !props.name){
            return;
        }

        start(props.targetDate, props.userId, props.location, props.name);

    }, [props.targetDate, props.userId, props.location, props.name]);

    const start = async (targetDate : Date, userId : number, location : string, name : string) => {

        const result = await getInfo(targetDate, userId, location);
        console.log(result);

        var myTotalStudyTime = 0;
        var averageTotalStudyTime = 0;
        var firstTotalStudyTime = 0;
        var firstTotalStudyTimeName = "";

        if(result.myData){
            myTotalStudyTime = result.myData.totalTime;
            setMyTotalStudyTime(Math.floor(myTotalStudyTime/60000));
        }

        if(result.totalAverageStudyTime){
            averageTotalStudyTime = result.totalAverageStudyTime;
        }

        if(result.maxStudyTimeData){
            firstTotalStudyTime = result.maxStudyTimeData.totalTime;
            firstTotalStudyTimeName = result.maxStudyTimeData.name;
        }

        console.log("start");
        console.log(myTotalStudyTime, averageTotalStudyTime, firstTotalStudyTime);

        var locationString = "";

        switch(location){
            case "gangnam" : 
                locationString = "강남점";
                break;
            case "daechi" :
                locationString = "대치점";
                break;
        }

        const lastData = [
            {name : name, time : Math.floor(myTotalStudyTime/60000)},
            {name : locationString + " 평균", time : Math.floor(averageTotalStudyTime/60000)},
            {name : firstTotalStudyTimeName, time : Math.floor(firstTotalStudyTime/60000), subTitle : locationString + " 1등"}
        ]

        console.log(lastData);

        setData([...lastData]);


    }

    const getInfo = async (targetDate : Date, userId : number, location : string) => {

        try{

            if(!targetDate || !userId || !location){
                throw new Error("필수 데이터가 없습니다.");
            }

            const targetDateTime = targetDate.getTime();
            const data = {
                targetDateTime, userId, location
            }

            const response = await fetch("https://peetsunbae.com/dashboard/report/dailyreport/todaystudytimeinfo", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

            if (result.message !== "success") {
                throw new Error("서버와의 통신에 실패했습니다.");
            }

            return result.data

        }catch(e){
            console.log(e);
        }

    }


    return (
        <div className={styles.compBody}>
            <div className={`${styles.compTitle1} ${styles.compTitleBreak}`}>
                오늘의 순공부시간은<br />{Math.floor(myTotalStudyTime/60)}시간 {myTotalStudyTime%60}분 이에요
            </div>
            <div className={styles.compSubTitle3}>
                
            </div>
            <div style={{height : "1.25rem"}} />
            <div className={styles.barGraphBody}>
                {
                    (data && data.length > 0) && data.map((each, index) => {

                        var max = 0;

                        data.forEach((each) => {
                            if(each.time > max){
                                max = each.time;
                            }
                        })

                        if(max === 0){
                            return;
                        }

                        return (
                            <div key={index} className={`${styles.eachBarDiv} ${styles['eachBarDiv'+index]}`} ref={el => barRefs.current[index] = el}>
                                <div className={styles.eachBarCrownDiv}>
                                    {
                                        index === 2 &&
                                        <Crown />
                                    }
                                </div>
                                <div className={styles.eachBarTimeText}>
                                    {Math.floor(each.time/60)}시간 {each.time%60}분
                                </div>
                                <div className={styles.eachGraphDiv}>
                                    <div className={styles.eachGraph}
                                    style={{
                                        height : canSee ? `${each.time/max*100}%` : "0%",
                                    }}
                                    >
                                    </div>
                                </div>
                                <div className={styles.eachBarName}>
                                    {each.name}
                                </div>
                                <div className={styles.eachBarSubText}>
                                    {each.subTitle}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Studytimebar;