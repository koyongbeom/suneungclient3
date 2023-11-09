import React, { useEffect, useState } from "react";
import styles from "./menubarstyle.module.css";

const MenuBar: React.FC<any> = (props) => {
    const [currentMenu, setCurrentMenu] = useState("submit");
    const [underBarPosition, setUnderBarPosition] = useState(0);

    const moveUnderBar = (index: number) => {

        props.changeCurrentMenu(index);

        switch (index) {
            case 1:
                setUnderBarPosition(0);
                break;
            case 2:
                setUnderBarPosition(50);
                break;
        }

    }

    return (
        <div className={styles.menuBar}>
            <div className={styles.subMenuBar}>
                <div className={`${styles.menuBarSection} ${currentMenu === "submit" ? styles.active : ""}`} onClick={() => { moveUnderBar(1); setCurrentMenu("submit"); }}>
                    {props.text[0]}
                </div>
                <div className={`${styles.menuBarStatus} ${currentMenu === "status" ? styles.active : ""}`} onClick={() => { moveUnderBar(2); setCurrentMenu("status"); }}>
                    {props.text[1]}
                </div>
                <div className={styles.menuUnderBar} style={{ left: `${underBarPosition}%` }}>

                </div>
            </div>
        </div>
    );
};

export default MenuBar;