import React, { useEffect, useState } from "react";
import styles from "./menubarstyle.module.css";

const MenuBarThree: React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState("demerit");
    const [underBarPosition, setUnderBarPosition] = useState(0);

    const moveUnderBar = (index: number) => {

        props.changeCurrentMenu(index);

        switch (index) {
            case 1:
                setUnderBarPosition(0);
                break;
            case 2:
                setUnderBarPosition(33.33333333);
                break;
            case 3:
                setUnderBarPosition(66.66666666);
                break;
        }

    }

    return (
        <div className={styles.menuBar}>
            <div className={styles.subMenuBar}>
                <div className={`${styles.menuBarSection} ${currentMenu === "demerit" ? styles.active : ""}`} onClick={() => { moveUnderBar(1); setCurrentMenu("demerit"); }}>
                    {props.text[0]}
                </div>
                <div className={`${styles.menuBarStatus} ${currentMenu === "regular" ? styles.active : ""}`} onClick={() => { moveUnderBar(2); setCurrentMenu("regular"); }}>
                    {props.text[1]}
                </div>
                <div className={`${styles.menuBarStatus} ${currentMenu === "sudden" ? styles.active : ""}`} onClick={() => { moveUnderBar(3); setCurrentMenu("sudden"); }}>
                    {props.text[2]}
                </div>
                <div className={styles.menuUnderBar3} style={{ left: `${underBarPosition}%` }}>

                </div>
            </div>
        </div>
    );
};

export default MenuBarThree;