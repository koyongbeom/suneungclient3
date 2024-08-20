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
import { classifyViolation, demeritAddWithDb, drawingAccessChart, exceptRegularViolation, judgeViolation } from "./functions/calcdemerit";
import { fil } from "date-fns/locale";

const locationViolationList = [62, 6, 3];

const myViolationList: any = [
    {
        color: "yellow", determinedKind: "사유지각", demerit: 3, description: "", titleTable:
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
    },
    {
        color: "yellow", determinedKind: "사유지각", demerit: 3, description: "", titleTable: []
    }
];

const tailoredViolationList: any = [
    [
        { bigKind: "status", kind: "지각", start: "08:00", end: "18:35", startIndex: 0, endIndex: 5 },
        { bigKind: "sudden", kind: "결석", start: "08:00", end: "22:00", startIndex: 0, endIndex: 7 },
        //{ bigKind : "sudden", kind: "지각", start: "08:00", end: "13:30", startIndex: 0, endIndex: 3 },
        { bigKind: "regular", kind: "외출", start: "11:50", end: "13:20", startIndex: 1, endIndex: 2 },
        { bigKind: "regular", kind: "외출", start: "17:20", end: "18:40", startIndex: 4, endIndex: 6 },
    ],
    [
        { bigKind: "status", kind: "지각", start: "08:00", end: "18:35", startIndex: 0, endIndex: 5 },
        { bigKind: "sudden", kind: "결석", start: "08:00", end: "22:00", startIndex: 0, endIndex: 7 },
        //{ bigKind : "sudden", kind: "지각", start: "08:00", end: "13:30", startIndex: 0, endIndex: 3 },
        { bigKind: "regular", kind: "외출", start: "11:50", end: "13:20", startIndex: 1, endIndex: 2 },
        { bigKind: "regular", kind: "외출", start: "17:20", end: "18:40", startIndex: 4, endIndex: 6 },
    ]
];


const PatrolViolateList: React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const graphWrapper = useRef<HTMLDivElement>(null);
    const [graphWrapperWidth, setGraphWrapperWidth] = useState(0);
    const barRefs = useRef<any[]>([]);
    const [canSee, setCanSee] = useState(false);
    const [loading, setLoading] = useState(false);
    const [drawingList, setDrawingList] = useState<any[]>();
    const [violationList, setViolationList] = useState<any[]>();
    const [suddentNotice, setSuddenNotice] = useState<any[]>();
    const [regularSchedule, setRegularSchedule] = useState<any[]>();

    const [myViolationList, setMyViolationList] = useState<any[]>([]);
    const [tailoredViolationList, setTailoredViolationList] = useState<any[]>([]);

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

    useEffect(() => {

        if (!props.targetDate || !props.userId || !props.location || !props.code || !props.name) {
            return;
        }

        console.log(props.targetDate, props.userId, props.location, props.code, props.name);

        const targetDate = props.targetDate;
        const selectedUserId = props.userId;
        const code = props.code;

        makeUserInfo(selectedUserId, targetDate, code);


    }, [props.targetDate, props.userId, props.location, props.code, props.name]);

    const makeUserInfo = async (selectedUserId : number, targetDate : Date, code : any) => {

        //getUserInfo로부터 받아온 정보를 바탕으로
        //DemeritList, DemeritMemo, DemeritRegularData, DemeritSuddenData를 만들어야 함

        const targetDateTime = targetDate.getTime();

        const userInfo = await getUserInfo(selectedUserId, targetDateTime, code);

        console.log("userInfo");
        console.log(userInfo);

        if (!userInfo) {
            console.log("userInfo2");
            return;
        }

        const accessControlData = userInfo.accessControlData;
        const regularScheduleData = userInfo.regularScheduleData;
        const regularScheduleFormatData = userInfo.regularScheduleFormatData;
        const suddenNoticeData = userInfo.suddenNoticeData;
        const userData = userInfo.userData;
        const demeritListData = userInfo.demeritListData;
        const regularScheduleMemoData = userInfo.regularScheduleMemoData;
        const demeritData = userInfo.demeritData;

        const userViolationList = judgeViolation(accessControlData, targetDate);

        classifyViolation(userViolationList, suddenNoticeData, regularScheduleFormatData, targetDate);


        demeritAddWithDb(userViolationList, demeritListData);


        const filteredViolationList = exceptRegularViolation(userViolationList);

        console.log("filteredViolationList1111111111");
        console.log(filteredViolationList);

        filteredViolationList.forEach((eachViolation : any) => {
            eachViolation.userId = selectedUserId;
            eachViolation.targetDate = targetDate;
        });

        const refilteredViolationList = filteredViolationList.filter((eachViolation : any) => {
            //벌점 부여된 내역만 필터링
            if(eachViolation.sendDemerit){

                const sendDemerit = eachViolation.sendDemerit;
                //sendDemerit을 __별로 나눈다.
                const sendDemeritArray = sendDemerit.split("__");

                const demerit = sendDemeritArray[4];
                const isCancel = sendDemeritArray[6];

                eachViolation.demerit = +demerit;
                eachViolation.isCancel = isCancel;
                var isCanceled = false;

                if(isCancel === "canceled"){
                    isCanceled = true;
                }

                if(!isCanceled){
                    return true;
                }else{
                    return false;
                }
                
            }else{
                return false;
            }
        });

        const drawingList = drawingAccessChart(filteredViolationList, suddenNoticeData, regularScheduleFormatData, targetDate);
        setDrawingList([...drawingList]);

        setViolationList([...refilteredViolationList]);
        setSuddenNotice([...suddenNoticeData]);
        setRegularSchedule(regularScheduleData);
        
        console.log("refilteredViolationList");
        console.log(refilteredViolationList);


        refilteredViolationList.forEach((eachViolation : any) => {

            if(!eachViolation.determinedKind){
                const decided = eachViolation.decided;
                const decidedArray = decided.split("__");
                const decidedKind = decidedArray[3];
                eachViolation.determinedKind = decidedKind;

                if(!eachViolation.determinedKind){
                    eachViolation.determinedKind = "미확정";
                }
            }

            //determinedKind 단어에 "사유", "정기"를 포함하고 있으면 color를 yellow로 바꿔준다.
            if(eachViolation.determinedKind && (eachViolation.determinedKind.includes("사유") || eachViolation.determinedKind.includes("정기"))){
                eachViolation.color = "yellow";
            }else{
                eachViolation.color = "red";
            }

            console.log(eachViolation.drawingList);
            //drawingList kind를 bigKind로 바꿔주고. 만약 access라면 kind를 status로 바꿔준다.
            // eachViolation.drawingList.forEach((eachDrawing : any) => {
            //     console.log(eachDrawing);
            //     console.log("eachDrawing");
            //     if(eachDrawing.kind === "access"){
            //         eachDrawing.bigKind = "status";
            //     }else{
            //         eachDrawing.bigKind = eachDrawing.kind;
            //     }
            // });

            //drawingList의 type이 early면 kind를 조퇴로, type이 late나 long이면 kind를 지각으로, type이 absent면 kind를 결석으로 바꾸고, type이 among이면 kind를 외출로 바꾸고, lunch나 dinner면 늦은 도착으로 바꾼다.
            eachViolation.drawingList.forEach((eachDrawing : any) => {
                if(eachDrawing.type === "early"){
                    eachDrawing.kind = "조퇴";
                }else if(eachDrawing.type === "late" || eachDrawing.type === "long"){
                    eachDrawing.kind = "지각";
                }else if(eachDrawing.type === "absent"){
                    eachDrawing.kind = "결석";
                }else if(eachDrawing.type === "among"){
                    eachDrawing.kind = "외출";
                }else if(eachDrawing.type === "lunch" || eachDrawing.type === "dinner"){
                    eachDrawing.kind = "늦은 도착";
                }
            });

        });

        

        console.log("--------------------");
        console.log("refilteredViolationList");
        console.log(refilteredViolationList);

        const newMyViolationList : any = [];

        refilteredViolationList.forEach((eachViolation : any) => {

            const oneRow : any = {};

            if(!eachViolation.determinedKind){
                const decided = eachViolation.decided;
                const decidedArray = decided.split("__");
                const decidedKind = decidedArray[3];
                eachViolation.determinedKind = decidedKind;

                if(!eachViolation.determinedKind){
                    eachViolation.determinedKind = "미확정";
                }
            }

            //eachViolation의 determinedKind에 "일반"이라는 표시가 있으면 color를 red로 바꿔준다. 없으면 yellow로 바꿔준다.
            oneRow.color = (eachViolation.determinedKind && eachViolation.determinedKind.includes("일반")) ? "red" : "yellow";
            oneRow.determinedKind = eachViolation.determinedKind;
            oneRow.demerit = eachViolation.demerit;
            oneRow.description = eachViolation.description ? eachViolation.description : "";
            
            const newTitleTable : any = [];

            console.log(eachViolation.drawingList);

            if(!eachViolation.drawingList[0]){
                eachViolation.drawingList[0] = [];
            }

            eachViolation.drawingList[0].forEach((eachDrawing : any) => {

                const time = eachDrawing.time;

                var isAlready = false;

                newTitleTable.forEach((eachTitle : any) => {
                    if(eachTitle.time === time){
                        isAlready = true;
                    }
                });
                console.log(isAlready);

                if(isAlready){
                    return;
                }

                const newRow : any = {};
                newRow.time = time;

                newRow.content = {
                    status : [],
                    sudden : [],
                    regular : []
                };

                newTitleTable.push(newRow);

            });

            oneRow.titleTable = newTitleTable;

            newMyViolationList.push(oneRow);

        });

        console.log("newMyViolationList");
        console.log(newMyViolationList);

        newMyViolationList.forEach((eachViolation : any, index : number) => {

            const violationList : any = refilteredViolationList[index];

            const titleTable = eachViolation.titleTable;
            titleTable.forEach((eachTitle : any) => {

                violationList.drawingList[0].forEach((eachDrawing : any) => {

                    if(eachTitle.time !== eachDrawing.time){
                        return;
                    }

                    var value = eachDrawing.kind;

                    if(value === "access"){
                        value = "status";
                    }

                    var kind = "";

                    switch(eachDrawing.type){
                        case "absent" :
                            kind = "결석";
                            break;
                        case "late":
                            kind = "지각";
                            break;
                        case "long" :
                            kind = "지각";
                            break;
                        case "among" :
                            kind = "외출";
                            break;
                        case "early" :
                            kind = "조퇴";
                            break;
                    }

                    const newRow : any = {
                      kind : kind,
                      sqlId : eachDrawing.sqlId,
                      indexNumber : eachDrawing.indexNumber,  
                    };

                    eachTitle.content[value].push(newRow);

                });

            });

        });

        console.log("newMyViolationList");
        console.log(newMyViolationList);

        const tailoredViolationList: any = [];

        newMyViolationList.forEach((eachViolation: any) => {

            const newRow: any = [];

            eachViolation.titleTable.forEach((eachTitle: any, index : number) => {

                const time = eachTitle.time;

                const hours = Math.floor(time / 60);
                const minutes = time % 60;

                const timeString = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;

                const content = eachTitle.content;

                console.log(111111111);

                for (var key in content) {

                    console.log(222222222);

                    content[key].forEach((eachContent: any) => {

                        console.log(333333333);

                        const bigKind = key;
                        const kind = eachContent.kind;

                        var matchingKey = "0";

                        if (bigKind === "sudden") {
                            matchingKey = `${eachContent.sqlId}`
                        }

                        if (bigKind === "regular") {
                            matchingKey = `${eachContent.sqlId}_${eachContent.indexNumber}`;
                        }

                        eachContent.matchingKey = matchingKey;

                        //이제부터 newRow에 넣어보자 !!!
                        var isAlready = false;

                        newRow.forEach((eachRow: any) => {
                            if(eachRow.bigKind === bigKind && eachRow.matchingKey === matchingKey){
                                isAlready = true;
                                eachRow.end = timeString;
                                eachRow.endIndex = index;
                            }
                        });

                        if(isAlready){
                            return;
                        }

                        const oneRow = {
                            bigKind,
                            kind,
                            start: timeString,
                            startIndex: index,
                            matchingKey
                        }

                        newRow.push(oneRow);

                    });

                }

            });

            tailoredViolationList.push(newRow);

        });

        console.log("newMyViolationList");
        console.log(newMyViolationList);
        console.log("tailoredViolationList");
        console.log(tailoredViolationList);

        setMyViolationList([...newMyViolationList]);
        setTailoredViolationList([...tailoredViolationList]);

        setLoading(false);


    }

    const getUserInfo = async (selectedUserId : number, targetDateTime : number, code : any) => {

        try{

            const response = await fetch(`https://peetsunbae.com/dashboard/report/demeritdailyreport/studentinfo?userId=${selectedUserId}&targetDateTime=${targetDateTime}&code=${code}`, {
                method: "GET",
                credentials: "include"
            });

            const result = await response.json();

            console.log(result);

            if (result.message === "success") {

                const accessControlData = result.accessControlData;
                const regularScheduleData = result.regularScheduleData;
                const regularScheduleFormatData = result.regularScheduleFormatData;
                const suddenNoticeData = result.suddenNoticeData;
                const userData = result.userData;
                const demeritListData = result.demeritListData;
                const regularScheduleMemoData = result.regularScheduleMemoData;
                const demeritData = result.demeritData;

                //accessControlData에 알아볼 수 있는 시간 형식 넣어준다.
                accessControlData.forEach((eachData: any) => {

                    const date = new Date(+eachData.time);

                    //yyyy-MM-dd HH:mm:ss
                    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;

                    eachData.timeString = dateString;
                })

                //accessControlData를 +time으로 오름차순 정렬
                accessControlData.sort((a: any, b: any) => {
                    return (+a.time) - (+b.time);
                });

                return {
                    accessControlData, regularScheduleData, regularScheduleFormatData, suddenNoticeData, userData, demeritListData, regularScheduleMemoData, demeritData
                }

            } else {
                console.log("error");
                throw new Error(result.message);
            }



        }catch(e){
            console.log(e);
        }



    }




    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                오늘 출석 위반 내역이 {myViolationList.length}건 있어요
            </div>
            <div className={styles.compSubTitle1}>
                {props.name ? props.name : ""} 님의 {props.targetDate && props.targetDate.getMonth() + 1}월 {props.targetDate && props.targetDate.getDate()}일 출석 위반 내역
            </div>

            {/* <MenuBar text={["나의 위반 내역", "지점별 위반내역"]} changeCurrentMenu={changeCurrentMenu} /> */}
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
                                            {item.determinedKind}
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
                                                기타내역 : {item.description ? item.description : "없음"}
                                            </div>
                                            <div className={styles.eachViolationGraphDiv}>
                                                <div className={styles.eachViolationGraphWrapper} ref={graphWrapper} style={{height : `${height}rem`}}>
                                                    {
                                                        (tailoredViolationList && tailoredViolationList.length > 0) &&
                                                        tailoredViolationList[index].map((eachGraph : any, index : number) => {

                                                            const bigKind = eachGraph.bigKind;

                                                            console.log(bigKind);

                                                            // var maxDeep = 0;

                                                            // item.titleTable.forEach((eachTitle : any) => {
                                                            //     if(eachTitle.deep[bigKind] > maxDeep){
                                                            //         maxDeep = eachTitle.deep[bigKind];
                                                            //     }
                                                            // });

                                                            // console.log(maxDeep);

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