import React from "react";
import demerit from "../data/demeritlist";
import styles from "../styles/scheduler.module.css";
import { ReactComponent as XSvg } from '../svg/circle-xmark-regular.svg';

const Demerit : React.FC<any> = (props) => {
    return (
        <div className={styles.demeritMain} style={{overflowY : "auto"}}>
            <div className={styles.xBtnDiv}>
                <div onClick={props.handleClose} className={styles.xBtn}>
                    <XSvg className={styles.xSvg} />
                </div>
            </div>
            <div className={styles.title}>
                수능선배
            </div>
            <div className={styles.subTitle}>
                벌점 안내
            </div>

            <div className={styles.demeritHeader}>
                <div className={styles.demeritHeaderName}>
                    구분
                </div>
                <div className={styles.demeritFirstScore}>
                    무단
                </div>
                <div className={styles.demeritSecondScore}>
                    사유
                </div> 
            </div>


            {demerit.map((each: any, index: number) => {
                return (
                    <div className={`${styles.header} ${index % 2 === 0 ? styles.even : styles.odd}`}>
                        <div style={{color : "#2b2b2b", fontWeight : 500}} className={styles.demeritHeaderName}>
                            {each.name}
                        </div>
                        <div style={{color : "#2b2b2b", fontWeight : 500}} className={styles.demeritFirstScore}>
                            {each.firstScore}
                        </div>
                        <div style={{color : "#2b2b2b", fontWeight : 500}} className={styles.demeritSecondScore}>
                            {each.secondScore}
                        </div>
                    </div>
                )
            })}

            <div className={styles.firstText}>
                *20점 - 부모님 연락, 지문 삭제 후 원장님 상담<br></br>*30점 - 부모님과 상의 후 퇴원 결정
            </div>

            <div style={{height : "30px"}} />
        </div>
    )
}

export default Demerit;