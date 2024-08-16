import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/dailyreport.module.css";
import { ReactComponent as Zero1 } from "../../svg/daily_attendance_zero1.svg";
import { ReactComponent as Zero2 } from "../../svg/daily_attendance_zero2.svg";
import { ReactComponent as Zero3 } from "../../svg/daily_attendance_zero3.svg";
import MenuBarThree from "./components/menubarthree";
import {ReactComponent as Check} from "../../svg/daily_check.svg";
import {ReactComponent as Minus} from "../../svg/daily_minus.svg";
import {ReactComponent as SmallCheck} from "../../svg/daily_small_check.svg"; 
import {ReactComponent as Arrow} from "../../svg/daily_arrow.svg";

const demeritData: any[] = [
    {kind : "일반지각", demerit : "3점", description : "사유 2줄 예시 지속적인 자습실 내 음식물 섭취 적발"},
    {kind : "사유조퇴", demerit : "0점", description : "과외사유로 벌점 0점"}
]

const regularData: any = {
    staffpermit : 1,
    parentpermit : 1,
    data : {"etc": "19:30 조퇴", "friday": "19:45 조퇴 ", "monday": "19:45 조퇴 ", "tuesday": "19:45 조퇴 ", "saturday": "국어학원 12시 반 조퇴", "thursday": "19:45 조퇴 ", "wednesday": "19:45 조퇴 "},  
}

// const regularData : any = undefined;


const regularFormat : any = {
    wednesday : [{kind : "조퇴", exitTime : "19:45"}],
    thursday : [{kind : "조퇴", exitTime : "19:45"}],
    friday : [{kind : "조퇴", exitTime : "19:45"}],
    monday : [{kind : "조퇴", exitTime : "19:45"}],
    tuesday : [{kind : "조퇴", exitTime : "19:45"}],
    etc : [{kind : "조퇴", exitTime : "19:30"}],
}

const suddenData : any = [
    {kind : "조퇴", description : "시대인재 실강", exitTime : "19:45", parentpermit : 1},
    {kind : "외출", description : "과외 수업", exitTime : "15:00", enterTime : "16:00", parentpermit : 0},
    {kind : "지각", description : "학교 수업", enterTime : "09:30", parentpermit : 2},
];

// const suddenData : any = undefined



const AttendanceDemerit: React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const [staffpermit, setStaffpermit] = useState(1);
    const [parentpermit, setParentpermit] = useState(0);
    const [data, setData] = useState<any>();

    const [demeritData, setDemeritData] = useState<any[]>([]);
    const [regularData, setRegularData] = useState<any>();
    const [regularFormat, setRegularFormat] = useState<any>();

    const [suddenData, setSuddenData] = useState<any[]>([]);

    useEffect(() => {

        if(!props.targetDate || !props.userId || !props.location || !props.name){
            return;
        }

        start(props.targetDate, props.userId, props.location, props.name);

    }, [props.targetDate, props.userId, props.location, props.name]);

    const start = async (targetDate : any, useId : any, location : any, name : any) => {

        if(!targetDate || !useId || !location || !name){
            console.log("noData");
            return;
        }

        console.log(targetDate, useId, location, name);

        const data = {
            targetDateTime : targetDate.getTime(),
            userId : useId,
            location : location,
            name : name
        }

        const response = await fetch("https://peetsunbae.com/dashboard/report/dailyreport/attendancedemerit", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        });

        const result = await response.json();

        console.log(result);

        const {demeritList, regularSchedule, suddenNotice} = result;


        console.log("---------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        makeDemeritData(demeritList);
        makeRegularData(regularSchedule);
        makeSuddenData(suddenNotice);

        return;

    }

    const makeSuddenData = (suddenNotice : any) => {

        if(!suddenNotice){
            return;
        }

        const newSuddenNotice : any = [];

        suddenNotice.forEach((data : any) => {

            const oneData : any = {};

            oneData.id = data.id;

            switch(data.type){
                case "among" :
                    oneData.kind = "외출";
                    break;
                case "early" :
                    oneData.kind = "조퇴";
                    break;
                case "long" :
                    oneData.kind = "지각";
                    break;
                case "absent" :
                    oneData.kind = "결석";
                    break;
            }

            oneData.description = data.reason;
            oneData.parentpermit = data.parentpermit;

            if(oneData.kind === "외출"){
                const exitTime = `${data.startHours}:${data.startMinutes}`;
                const enterTime = `${data.endHours}:${data.endMinutes}`;
                oneData.exitTime = exitTime;
                oneData.enterTime = enterTime;
            }

            if(oneData.kind === "조퇴"){
                const exitTime = `${data.endHours}:${data.endMinutes}`;
                oneData.exitTime = exitTime;
            }

            if(oneData.kind === "지각"){
                const enterTime = `${data.startHours}:${data.startMinutes}`;
                oneData.enterTime = enterTime;
            }

            newSuddenNotice.push(oneData);

        });

        setSuddenData([...newSuddenNotice]);

    }

    const makeRegularData = (regularSchedule : any) => {

        if(!regularSchedule){
            return;
        }

        console.log("makeRegularData");
        console.log(regularSchedule);

        setRegularData(regularSchedule);

    }

    const makeDemeritData = (demeritList : any) => {

        if(!demeritList){
            return;
        }

        const newRows : any = [];

        demeritList.forEach((data : any) => {

            const oneRow : any = {};

            oneRow.id = data.id;
            oneRow.kind = data.determinedKind;
            oneRow.demerit = data.score + "점";
            oneRow.description = data.description;

            newRows.push(oneRow);

        });

        setDemeritData([...newRows]);



    }

    const changeCurrentMenu = (index: number) => {
        setCurrentMenu(index);
    }

    const changeToKoreanDay = (day: string) => {
        var koreanDay = "";
        switch(day){
            case "monday" :
                koreanDay = "월요일";
                break;
            case "tuesday" :
                koreanDay = "화요일";
                break;
            case "wednesday" :
                koreanDay = "수요일";
                break;
            case "thursday" :
                koreanDay = "목요일";
                break;
            case "friday" :
                koreanDay = "금요일";
                break;
            case "saturday" :
                koreanDay = "토요일";
                break;
            case "etc" :
                koreanDay = "기타";
                break;
        }
        return koreanDay;
    }
        

    return (
        <div className={styles.compBody}>
            <div className={styles.compTitleDiv}>
                <div className={styles.compTitle2}>
                    출석 벌점내역
                </div>
                <div className={styles.compSubTitle2}>
                    23년 11월 01일
                </div>
            </div>
            <MenuBarThree text={["출석 벌점", "정기일정", "사유제출"]} changeCurrentMenu={changeCurrentMenu} />
            {
                currentMenu === 1 &&
                <div className={styles.attendance}>
                    <div style={{ height: "2.56rem" }}>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.tableHeader}>
                            <div className={styles.tableRow}>
                                <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col1}`}>
                                    벌점사유
                                </div>
                                <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col2}`}>
                                    벌점
                                </div>
                                <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col3}`}>
                                    상세사유
                                </div>
                            </div>
                        </div>
                        {
                            demeritData.length > 0 && demeritData.map((data, index) => {
                                return (
                                    <div className={styles.tableBody} key={index}>
                                        <div className={styles.tableRow}>
                                            <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col1}`}>
                                                <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                                    {data.kind}
                                                </div>
                                            </div>
                                            <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col2}`}>
                                                <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                                    {data.demerit}
                                                </div>
                                            </div>
                                            <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col3}`}>
                                                <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                                    {data.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        {
                            demeritData.length === 0 &&
                            <div className={styles.zeroBody}>
                                <div className={styles.svgWrapper}>
                                    <Zero1 className={styles.zeroSvg} /> 
                                </div>
                                <div className={styles.zeroText}>
                                    오늘 출석 벌점내역이 없어요
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
            {
                (currentMenu === 2 && regularData && regularData.data) &&
                <div className={styles.regularScheduleBody}>
                     <div className={styles.regularScheduleStatus}>
                        {
                            ["정기일정 제출", "","사감 승인", "","학부모 승인"].map((text, index) => {

                                var status : "done" | "notDone" | "refused" | undefined;
                                var number = 0;

                                switch(index){
                                    case 0 :
                                        number = 1;
                                        if(regularData)
                                            status = "done";
                                        else
                                            status = "notDone";
                                        break;
                                    case 2 :
                                        number = 2;
                                        if(staffpermit === 1)
                                            status = "done";
                                        else if(staffpermit === 0)
                                            status = "notDone";
                                        else if(staffpermit === 2)
                                            status = "refused";
                                        break;
                                    case 4 :
                                        number = 3;
                                        if(parentpermit === 1)
                                            status = "done";
                                        else if(parentpermit === 0)
                                            status = "notDone";
                                        else if(parentpermit === 2)
                                            status = "refused";
                                        break;
                                }

                                if(index % 2 === 0){
                                    return (
                                        <div className={styles.eachStatusDiv} key={index}>
                                            <div className={styles.eachStatusNumber}>
                                                {
                                                    status === "done" &&
                                                    <div className={styles.doneNumber}>
                                                        <Check className={styles.checkSvg} />
                                                    </div>
                                                }
                                                {
                                                    status === "notDone" &&
                                                    <div className={styles.notDoneNumber}>
                                                        {number}
                                                    </div>
                                                }
                                                {
                                                    status === "refused" &&
                                                    <div className={styles.refusedNumber}>
                                                        <Minus className={styles.minusSvg} />
                                                    </div>
                                                }
                                            </div>
                                            <div className={styles.eachStatusText}>
                                                {text}
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className={styles.horizontalBar} key={index}>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                    <div className={styles.regularScheduleListDiv}>
                        {
                            ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "etc"].map((day, index) => {

                                var today = new Date().getDay();

                                //"etc"랑 오늘 요일만 보여주기
                                if(day !== "etc" && index !== today - 1){
                                    return;
                                }

                                const koreanDay = changeToKoreanDay(day);
                                const data = regularData.data[day];
                                var formatData : any;
                                if(regularFormat){
                                    formatData = regularFormat[day];
                                }
                                console.log(regularFormat);
                                console.log(day);
                                console.log(formatData);

                                if(!data){
                                    return;
                                }

                                return (
                                    <div className={styles.eachRegularScheduleDiv} key={index}>
                                        <div className={styles.eachRegularScheduleDay}>
                                            {koreanDay}
                                        </div>
                                        <div className={styles.eachRegularScheduleContent}>
                                            {data}
                                        </div>
                                        {
                                            (staffpermit === 1 && formatData && formatData.length > 0) &&
                                            <div className={styles.eachRegularScheduleFormatDiv}>
                                                {
                                                    formatData && formatData.map((eachFormatData: any, index: number) => 
                                                        <div className={styles.eachFormat} key={index + 100}>
                                                            <div className={styles.smallCheckDiv}>
                                                                <SmallCheck className={styles.smallCheckSvg} />
                                                            </div>
                                                            <div className={styles.eachFormatText}>
                                                                {eachFormatData.kind} {eachFormatData.exitTime}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        }
                                        <div style={{height : "2.75rem"}} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {
                (currentMenu === 2 && (!regularData || !regularData.data)) &&
                <div className={styles.zeroDiv}>
                    <Zero2 className={styles.zero2Svg} />
                    <div className={styles.zeroText}>
                        제출된 정기일정이 없어요
                    </div>
                </div>
            }
            {
                (currentMenu === 3 && suddenData && suddenData.length > 0) &&
                <div className={styles.suddenScheduleBody}>
                    <div className={styles.suddenScheduleListDiv}>
                        {
                            suddenData.map((data: any, index: number) => {
                                return (
                                    <div className={styles.eachSuddenScheduleDiv} key={index}>
                                        <div className={styles.eachSuddenScheduleKind}>
                                            <div className={styles.eachSuddenScheduleKindText}>
                                                {data.kind}
                                            </div>
                                            <div className={styles.eachSuddenScheduleStatusDiv}>
                                                {
                                                    ["사유 제출", "", "학부모 승인"].map((text, index) => {
                                                        var status : "done" | "notDone" | "refused" | undefined;
                                                        var number = 0;
                                                        switch(index){
                                                            case 0 :
                                                                number = 1;
                                                                status = "done";
                                                                break;
                                                            case 2 :
                                                                number = 2;
                                                                if(data.parentpermit === 1)
                                                                    status = "done";
                                                                else if(data.parentpermit === 0)
                                                                    status = "notDone";
                                                                else if(data.parentpermit === 2)
                                                                    status = "refused";
                                                                break;
                                                        }
                                                        if(index % 2 === 0){
                                                            return (
                                                                <div className={styles.eachStatusDiv} key={index}>
                                                                    <div className={styles.eachStatusNumber}>
                                                                        {
                                                                            status === "done" &&
                                                                            <div className={styles.doneNumber}>
                                                                                <Check className={styles.checkSvg} />
                                                                            </div>
                                                                        }
                                                                        {
                                                                            status === "notDone" &&
                                                                            <div className={styles.notDoneNumber}>
                                                                                {number}
                                                                            </div>
                                                                        }
                                                                        {
                                                                            status === "refused" &&
                                                                            <div className={styles.refusedNumber}>
                                                                                <Minus className={styles.minusSvg} />
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    <div className={styles.eachStatusText}>
                                                                        {text}
                                                                    </div>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div className={styles.horizontalBar} key={index}>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.eachSuddenScheduleContent}>
                                            {data.description}
                                        </div>
                                        <div className={styles.eachSuddenScheduleTime}>
                                            {
                                                (data.kind === "외출" || data.kind === "조퇴") &&
                                                <div className={`${styles.eachSuddenScheduleTimeText} ${data.parentpermit === 1 ? styles.permitted : ""}`}>
                                                    출발시간 {data.exitTime}
                                                </div>
                                            }
                                            {
                                                data.kind === "외출" &&
                                                <div className={styles.eachSuddenScheduleTimeArrowDiv}>
                                                    <Arrow className={styles.eachSuddenScheduleTimeArrowSvg} />
                                                </div>
                                            }
                                            {
                                                (data.kind === "외출" || data.kind === "지각") &&
                                                <div className={`${styles.eachSuddenScheduleTimeText} ${data.parentpermit === 1 ? styles.permitted : ""}`}>
                                                    도착시간 {data.enterTime}
                                                </div>
                                            }
                                        </div>
                                        <div style={{height : "2.75rem"}} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {
                (currentMenu === 3 && (!suddenData || suddenData.length === 0)) &&
                <div className={styles.zeroDiv}>
                    <Zero3 className={styles.zero3Svg} />
                    <div className={styles.zeroText}>
                        제출된 사유가 없어요
                    </div>
                </div>
            }
        </div>
    )
}

export default AttendanceDemerit;