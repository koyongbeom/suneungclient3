import React, {useEffect, useState, useRef} from "react";
import styles from "../../styles/dailyreport.module.css";
import SmallMenubar from "./components/smallmenubar";

const EnglishTest : React.FC<any> = (props) => {


    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                영단어 테스트 응시내역
            </div>
            <div className={styles.smallMenuBarDiv}>
                <div className={styles.smallMenuBarWrapper}>
                    <SmallMenubar menuList={["응시내역", "주간 과제"]} />
                </div>
            </div>
        </div>
    )
}

export default EnglishTest;