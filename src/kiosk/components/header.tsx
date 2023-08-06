import React, {useEffect, useState} from "react";
import styles from "../styles/header.module.css";
import { ReactComponent as Logo } from "../../svg/newlogo.svg";
import { Link, useNavigate } from 'react-router-dom';

const KioskHeader: React.FC<any> = (props) => {

    const navigate = useNavigate();

    const logOut = () => {
        console.log("logout");
        props.setUserName("");
        props.setUserId(undefined);
        navigate("/kiosk/kioskmain/157292");
    }

    

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLogo}>
                        <Logo className={styles.logo} style={{width : "120px"}} />
                    </div>
                    <div className={styles.headerBtn}>
                        <div className={styles.headerBtn1}
                        onClick={() => {
                            logOut();
                        }
                        }
                        >
                            로그아웃
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default KioskHeader;