import React, {useState, useEffect, useRef} from "react";
import styles from "../../styles/dailyreport.module.css";
import SmallMenubar from "./components/smallmenubar";

const StudytimeRanking : React.FC<any> = (props) => {

    const [today, setToday] = useState(new Date());


    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                오늘의 공부시간 랭킹
            </div>
            <div className={styles.compSubTitle1}>
                강남점 하루 공부시간 기준 <span>14등</span>이에요
            </div>
            <div className={styles.rankingMenuDiv}>
                <div className={styles.firstSmallMenu}>
                    <SmallMenubar menuList={["강남점", "전체"]} />
                </div>
                <div className={styles.secondSmallMenu}>
                    <SmallMenubar menuList={["일별", "주별", "월별"]} />
                </div>
            </div>
            <div className={styles.rankingBodyDate}>
                {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 기준
            </div>
        </div>
    );
}

export default StudytimeRanking;