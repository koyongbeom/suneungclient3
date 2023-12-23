import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/dailyreport.module.css";
import MenuBar from "./components/menubar";

import { ReactComponent as ViolateBlue } from "../../svg/daily_violate_blue.svg";
import { ReactComponent as ViolateYellow } from "../../svg/daily_violate_yellow.svg";
import { ReactComponent as ViolateRed } from "../../svg/daily_violoate_red.svg";
import { ReactComponent as NoViolation } from "../../svg/daily_no_violation.svg";

import { ReactComponent as Yellow } from "../../svg/daily_yellow.svg";
import { ReactComponent as Red } from "../../svg/daily_red.svg";
import { ReactComponent as School } from "../../svg/daily_school.svg";

const locationViolationList = [62, 6, 3];

const myViolationList: any = [
    {
        color: "yellow", kind: "사유지각", demerit: 3, description: "없음", titleTable:
            [
                {
                    time : "08:00", content : {status : [{kind : "지각", sort : "start"}], sudden : [{kind : "결석", sort : "start"}, {kind : "지각", sort : "start"}], regular : []}, deep : {status : 1, sudden : 2, regular : 0}
                },
                {
                    time : "11:50", content : {status : [], sudden : [], regular : [{kind : "외출", sort : "exit"}]}, deep : {status : 1, sudden : 2, regular : 1}
                },
                {
                    time : "13:20", content : {status : [], sudden : [], regular : [{kind : "외출", sort : "enter"}]}, deep : {status : 1, sudden : 2, regular : 1}
                },
                {
                    time : "13:30", content : {status : [], sudden : [{kind : "지각", sort : "enter"}], regular : []}, deep : {status : 1, sudden : 2, regular : 0}
                },
                {
                    time : "17:20", content : {status : [], sudden : [], regular : [{kind : "외출", sort : "exit"}]}, deep: {status : 1, sudden : 1, regular : 1}
                },
                {
                    time : "18:35", content : {status : [{kind : "지각", sort : "enter"}], sudden : [], regular : []}, deep : {status : 1, sudden : 1, regular : 1}
                },
                {
                    time : "18:40", content : {status : [], sudden : [], regular : [{kind : "외출", sort : "enter"}]}, deep : {status : 0, sudden : 1, regular : 1}
                },
                {
                    time : "22:00", content : {status : [], sudden : [{kind : "결석", sort : "end"}], regular : []}, deep : {status : 0, sudden : 1, regular : 0}
                }
            ]
    }
];

const tailoredViolationList: any = [
    { bigKind : "status", kind: "지각", start: "08:00", end: "18:35", startIndex: 0, endIndex: 5 },
    { bigKind : "sudden", kind: "결석", start: "08:00", end: "22:00", startIndex: 0, endIndex: 7 },
    // { bigKind : "sudden", kind: "지각", start: "08:00", end: "13:30", startIndex: 0, endIndex: 3 },
    { bigKind : "regular", kind: "외출", start: "11:50", end: "13:20", startIndex: 1, endIndex: 2 },
    { bigKind : "regular", kind: "외출", start: "17:20", end: "18:40", startIndex: 4, endIndex: 6 },
];


const PatrolViolateList: React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const graphWrapper = useRef<HTMLDivElement>(null);
    const [graphWrapperWidth, setGraphWrapperWidth] = useState(0);
    const barRefs = useRef<any[]>([]);
    const [canSee, setCanSee] = useState(false);

    useEffect(() => {

        barRefs.current = barRefs.current.slice(0, tailoredViolationList.length);

    }, [tailoredViolationList]);

    useEffect(() => {

        if(!graphWrapper.current){
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
            threshold : 0.5
        });

        // barRefs.current.forEach(bar => {
        //     if(bar){
        //         observer.observe(bar);
        //     }
        // }) 

        observer.observe(graphWrapper.current);

        return () => {
            if(graphWrapper.current)
            observer.unobserve(graphWrapper.current);
        }

    }, [graphWrapper, graphWrapper.current])

    useEffect(() => {

        if(!graphWrapper.current){
            return;
        }

        if(!myViolationList){
            return;
        }


        const graphWrapperDiv = graphWrapper.current;
        const clientRect = graphWrapperDiv.getBoundingClientRect();
        const graphWrapperWidth = clientRect.width;

        setGraphWrapperWidth(graphWrapperWidth);

    }, [graphWrapper, graphWrapper.current, myViolationList]);


    const changeCurrentMenu = (menu: number) => {
        setCurrentMenu(menu);
    }


    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                오늘 출석 위반 내역이 2건 있어요
            </div>
            <div className={styles.compSubTitle1}>
                윤종웅 님의 10월 17일 출석 위반 내역
            </div>

            <MenuBar text={["나의 위반 내역", "지점별 위반내역"]} changeCurrentMenu={changeCurrentMenu} />
            {
                (currentMenu === 1 && myViolationList && myViolationList.length > 0) &&
                <div className={styles.myViolationList}>
                    {
                        myViolationList.map((item: any, index : number) => {

                            const height = item.titleTable.length * 1.5;


                            return (
                                <div className={styles.eachMyViolation} key={index}>
                                    <div className={styles.eachViolationTitle}>
                                        {
                                            item.color === "yellow" &&
                                            <Yellow className={styles.eachViolationTitleIcon} />
                                        }
                                        {
                                            item.color === "red" &&
                                            <Red className={styles.eachViolationTitleIcon} />
                                        }
                                        <div className={styles.eachViolationTitleText}>
                                            {item.kind}
                                        </div>
                                    </div>
                                    <div className={styles.eachViolationWrapper}>
                                        <div className={styles.eachViolationLineWrapper}>
                                            <div className={styles.eachViolationLine} />
                                        </div>
                                        <div className={styles.eachViolationContent}>
                                            <div className={styles.eachViolationDemerit}>
                                                벌점 : {item.demerit}점
                                            </div>
                                            <div className={styles.eachViolationDescription}>
                                                기타내역 : {item.description}
                                            </div>
                                            <div className={styles.eachViolationGraphDiv}>
                                                <div className={styles.eachViolationGraphWrapper} ref={graphWrapper} style={{height : `${height}rem`}}>
                                                    {
                                                        (tailoredViolationList && tailoredViolationList.length > 0) &&
                                                        tailoredViolationList.map((eachGraph : any, index : number) => {

                                                            const bigKind = eachGraph.bigKind;

                                                            console.log(bigKind);

                                                            var maxDeep = 0;

                                                            item.titleTable.forEach((eachTitle : any) => {
                                                                if(eachTitle.deep[bigKind] > maxDeep){
                                                                    maxDeep = eachTitle.deep[bigKind];
                                                                }
                                                            });

                                                            console.log(maxDeep);

                                                            const graphLengthNumber = eachGraph.endIndex - eachGraph.startIndex + 1 ;
                                                            const grpahLength = graphLengthNumber *  1.5;

                                                            const startIndex = eachGraph.startIndex;

                                                            var startKind = true;
                                                            var startTime = true;
                                                            var endTime = true;
                                                            var endKind = true;

                                                            switch(eachGraph.kind){
                                                                case "지각" :
                                                                    startKind = false;
                                                                    startTime = false;
                                                                    break;
                                                                case "결석" :
                                                                    startTime = false;
                                                                    endTime = false;
                                                                    break;
                                                                case "조퇴" :
                                                                    endTime = false;
                                                                    endKind = false;
                                                                    break;
                                                            }
        
                                                            return (
                                                                <div key={index} className={`${styles.eachViolationGraph} ${styles[eachGraph.bigKind]}`} style={{height : canSee ? `${grpahLength}rem` : "0rem", top : `${startIndex * 1.5}rem`}}>
                                                                    <div className={`${styles.eachViolationGraphStart} ${styles[eachGraph.kind]}`}>
                                                                        {startKind && eachGraph.kind} {startTime && eachGraph.start}
                                                                    </div>
                                                                    <div className={`${styles.eachViolationGraphEnd} ${styles[eachGraph.kind]}`}>
                                                                        {endKind && eachGraph.kind} {endTime && eachGraph.end}
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className={styles.eachViolationGraphTitle}>
                                                    <div className={styles.eachViolationGraphTitleText}>
                                                        실제출입
                                                    </div>
                                                    <div className={styles.eachViolationGraphTitleText}>
                                                        사유제출
                                                    </div>
                                                    <div className={styles.eachViolationGraphTitleText}>
                                                        정기일정
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                (currentMenu === 1 && (!myViolationList || myViolationList.length === 0)) &&
                <div className={styles.noViolationDiv}>
                    <NoViolation />
                    <div className={styles.noViolationText}>
                        오늘 출석 위반 내역이 없어요
                    </div>
                </div>
            }
            {
                currentMenu === 2 &&
                <div className={styles.locationViolation}>
                    <div className={styles.locationViolationTitle}>
                        <School className={styles.locationViolationTitleIcon} />
                        <div className={styles.locationViolationTitleText}>
                            강남점
                        </div>
                    </div>
                    <div className={styles.locationViolationSubTitle}>
                        0점 벌점은 위반 건수에 미포함
                    </div>
                    <div className={styles.locationViolationList}>
                        {
                            locationViolationList.map((item, index) =>
                                <div className={styles.locationViolationItem} key={index}>
                                    <div>
                                        <div className={styles.locationViolationItemTitle}>
                                            위반 {index}건 {index === 2 ? "이상" : ""}
                                        </div>
                                        <div className={styles.locationViolationItemSubTitle}>
                                            {item}명
                                        </div>
                                    </div>
                                    <div className={styles.locationViolationItemIcon}>
                                        {
                                            index === 0 &&
                                            <ViolateBlue />
                                        }
                                        {
                                            index === 1 &&
                                            <ViolateYellow />
                                        }
                                        {
                                            index === 2 &&
                                            <ViolateRed />
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )

}

export default PatrolViolateList;