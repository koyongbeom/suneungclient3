import React, { useEffect, useState } from "react";
import {ReactComponent as Zero} from "../../svg/daily_zero.svg";
import styles from "../../styles/dailyreport.module.css";

const demeritData : any[] = [
    { time: "09:45", content: "학습외 사이트 접속", result: "유튜브 시청", demerit: "3점" },
    { time: "11:15", content: "졸음", result: "안나감(2회)", demerit: "1점" },
    { time: "12:25", content: "피해를 주는 행동", result: "지속적인 자습실 내 음식물 섭취 적발", demerit: "3점" },
]

const PatrolDemerit: React.FC<any> = (props) => {

    const [demeritData, setDemeritData] = useState<any>([]);

    useEffect(() => {

        if(!props.userId || !props.targetDate){
            return;
        }

        start(props.userId, props.targetDate);

    }, [props.userId, props.targetDate]);

    const start = async (userId: number, targetDate: Date) => {

        const result = await getUserPatrolDemeritToday(userId, targetDate);
        const rows = makeRows(result);
    
        setDemeritData(rows);
    }


    const getUserPatrolDemeritToday = async (userId : number, targetDate : Date) => {
        
        try{

            const data = {
                userId: userId,
                targetDateTime : targetDate.getTime()
            }

            const response = await fetch("https://peetsunbae.com/dashboard/report/patrolmanager/getPatrolDemerit", {
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

            return result.data;

        }catch(e){
            console.log(e);
            
        }

    }

    const makeRows = (data : any) => {

        if(!data){
            return null;
        }

        const rows : any[] = [];

        data.forEach((eachData : any) => {

            const oneRow : any = {};

            const createdAtDate = new Date(eachData.createdAt);
            const time = `${createdAtDate.getHours() < 10 ? "0" + createdAtDate.getHours() : createdAtDate.getHours()}:${createdAtDate.getMinutes() < 10 ? "0" + createdAtDate.getMinutes() : createdAtDate.getMinutes()}`;

            var content = "";

            switch(eachData.determinedKind){
                case "phone" :
                    content = "자습실 내 휴대폰 사용";
                    break;
                case "site" :
                    content = "학습외 사이트 접속";
                    break;
                case "sleep" :
                    content = "졸음";
                    break;
                case "bad" :
                    content = "피해를 주는 행동";
                    break;
            }

            const result = eachData.description;
            const demerit = eachData.score;

            oneRow.time = time;
            oneRow.content = content;
            oneRow.result = result;
            oneRow.demerit = demerit;

            rows.push(oneRow);

        })

        return rows;

    }

    return (
        <div className={styles.compBody}>
            <div className={styles.compTitleDiv}>
                <div className={styles.compTitle2}>
                    순찰 벌점내역
                </div>
                <div className={styles.compSubTitle2}>
                    {
                        props.targetDate &&
                        <span>
                            {props.targetDate.getFullYear().toString().slice(-2)}년 {props.targetDate.getMonth() + 1}월 {props.targetDate.getDate() < 10 ? "0" + props.targetDate.getDate() : props.targetDate.getDate()}일
                        </span>
                    }
                </div>
            </div>
            <div style={{ height: "1.25rem" }}>
            </div>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div className={styles.tableRow}>
                        <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col1}`}>
                            시간
                        </div>
                        <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col2}`}>
                            내역
                        </div>
                        <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col3}`}>
                            결과
                        </div>
                        <div className={`${styles.tableCol} ${styles.headerCol} ${styles.col4}`}>
                            벌점
                        </div>
                    </div>
                </div>
                {
                    demeritData.length > 0 && demeritData.map((data : any, index : number) => {
                        return (
                            <div className={styles.tableBody} key={index}>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col1}`}>
                                        <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                            {data.time}
                                        </div>
                                    </div>
                                    <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col2}`}>
                                        <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                            {data.content}
                                        </div>
                                    </div>
                                    <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col3}`}>
                                        <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                            {data.result}
                                        </div>
                                    </div>
                                    <div className={`${styles.tableCol} ${styles.bodyCol} ${styles.col4}`}>
                                        <div className={`${styles.tableText} ${styles['tableText' + index]}`}>
                                            {data.demerit}
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
                            <Zero className={styles.zeroSvg} />
                        </div>
                        <div className={styles.zeroText}>
                            오늘 순찰 벌점내역이 없어요
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default PatrolDemerit;