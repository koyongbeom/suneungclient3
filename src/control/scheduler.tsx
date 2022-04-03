import React from "react";
import schedule from "../data/schedule";
import styles from "../styles/scheduler.module.css";

import { ReactComponent as XSvg } from '../svg/circle-xmark-regular.svg';


const Scheduler: React.FC<any> = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.xBtnDiv}>
                <div onClick={props.handleClose} className={styles.xBtn}>
                    <XSvg className={styles.xSvg} />
                </div>
            </div>
            <div className={styles.page}>
                <div className={styles.title}>
                    수능선배 공부시간
                </div>
                <div className={styles.subTitle}>
                    생활관리 시간표
                </div>

                <div className={styles.header}>
                    <div className={styles.headerName}>
                        구분
                    </div>
                    <div className={styles.headerStart}>
                        시작시간
                    </div>
                    <div className={styles.headerEnd}>
                        종료시간
                    </div>
                    <div className={styles.headerDescription}>
                        내용
                    </div>
                </div>


                {schedule.map((each: any, index: number) => {
                    return (
                        <div className={`${styles.header} ${index % 2 === 0 ? styles.even : styles.odd}`}>
                            <div style={{ color: "#2b2b2b", fontWeight: 500 }} className={styles.headerName}>
                                {each.name}
                            </div>
                            <div style={{ color: "#2b2b2b", fontWeight: 500 }} className={styles.headerStart}>
                                {each.start}
                            </div>
                            <div style={{ color: "#2b2b2b", fontWeight: 500 }} className={styles.headerEnd}>
                                {each.end}
                            </div>
                            <div style={{ color: "#2b2b2b", fontWeight: 500 }} className={styles.headerDescription}>
                                {each.description}
                            </div>
                        </div>
                    )
                })}

                <div className={styles.firstText}>
                    * 공부시간 중에 공부 외의 행동을 엄격히 금지합니다.<br></br>* 외부 수업이나 정기적인 일정은 정기 일정을 신청할 수 있습니다.<br></br>* 의무자습 시간 외 24시간 자습실 공부 가능
                </div>

                <div className={styles.voidHeight}>

                </div>

            </div>
        </div>
    )
}

export default Scheduler;