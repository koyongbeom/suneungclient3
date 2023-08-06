import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Logo } from "../../svg/newlogo.svg";
import styles from "../styles/main.module.css";
import { Link, useNavigate } from 'react-router-dom';

const KioskMainPage: React.FC<any> = (props) => {

    const navigate = useNavigate();

    return (
        <div className={styles.mainBody}>
            <div className={styles.mainLeft}
                style={{ backgroundImage: "url(/img/daechiinterior/J2V_2032.webp)" }}
            >

            </div>
            <div className={styles.mainRight}>
                <div className={styles.mainRightContainer}>
                    <div>
                        <Logo className={styles.mainRightLogo} />
                    </div>
                    <div className={styles.mainRightText}>
                        수강료 결제부터<br />컨텐츠 신청까지
                    </div>
                    <div className={styles.mainRightText2}>
                        다~ 되는 수능선배 포스
                    </div>
                    <div className={styles.mainRightButton}
                    onClick={() => { 
                        navigate("/kiosk/kioskmain/157292/phonenumber");
                    }}
                    >
                        <div className={styles.mainRightButton1} >
                            시작하기
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default KioskMainPage;

