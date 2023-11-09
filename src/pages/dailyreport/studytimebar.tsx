import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/dailyreport.module.css";
import { entries } from "lodash";
import {ReactComponent as Crown} from "../../svg/daily_crown.svg"

const myTotalStudyTime = 430;
const averageTotalStudyTime = 515;
const firstTotalStudyTime = 645;

const data = [
    {name : "윤종웅님", time : 430},
    {name : "강남점 평균", time : 515},
    {name : "박O을님", time : 645, subTitle : "강남점 1등"}
]


const Studytimebar: React.FC<any> = (props) => {

    const barRefs = useRef<any[]>([]);
    const [canSee, setCanSee] = useState(false);

    useEffect(() => {

        barRefs.current = barRefs.current.slice(0, data.length);

    }, [data]);

    useEffect(() => {

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

    }, [])



    return (
        <div className={styles.compBody}>
            <div className={`${styles.compTitle1} ${styles.compTitleBreak}`}>
                오늘의 순공부시간은<br />{Math.floor(myTotalStudyTime/60)}시간 {myTotalStudyTime%60}분 이에요
            </div>
            <div className={styles.compSubTitle3}>
                08:00 ~ 22:00 기준
            </div>
            <div style={{height : "1.25rem"}} />
            <div className={styles.barGraphBody}>
                {
                    data.map((each, index) => {

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