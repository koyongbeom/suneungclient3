import React, { useEffect, useState } from "react";
import {ReactComponent as Zero} from "../../svg/daily_zero.svg";
import styles from "../../styles/dailyreport.module.css";

const demeritData : any[] = [
    { time: "09:45", content: "학습외 사이트 접속", result: "유튜브 시청", demerit: "3점" },
    { time: "11:15", content: "졸음", result: "안나감(2회)", demerit: "1점" },
    { time: "12:25", content: "피해를 주는 행동", result: "지속적인 자습실 내 음식물 섭취 적발", demerit: "3점" },
]

const PatrolDemerit: React.FC<any> = (props) => {

    return (
        <div className={styles.compBody}>
            <div className={styles.compTitleDiv}>
                <div className={styles.compTitle2}>
                    순찰 벌점내역
                </div>
                <div className={styles.compSubTitle2}>
                    23년 11월 01일
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
                    demeritData.length > 0 && demeritData.map((data, index) => {
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