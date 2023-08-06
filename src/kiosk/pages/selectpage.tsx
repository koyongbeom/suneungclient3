import React, { useEffect, useState } from "react";
import styles from "../styles/selectpage.module.css";
import KioskHeader from "../components/header";
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Money } from "../../svg/money.svg";
import { ReactComponent as Contents } from "../../svg/contents.svg";
const SelectPage: React.FC<any> = (props) => {

    const navigate = useNavigate();

    useEffect(() => {

        if (!props.userId || !props.userName) {

            navigate("/kiosk/kioskmain/157292");
        }


    }, []);



    return (
        <div className={styles.totalBody}>
            <KioskHeader userId={props.userId} setUserId={props.setUserId} setUserName={props.setUserName} />
            <div className={styles.mainBody}>
                <div className={styles.mainBodyContents}>
                    <div className={styles.mainBodyContents1}>
                        <button
                            className={styles.previousBtn}
                            onClick={() => {
                                props.setUserId(undefined);
                                props.setUserName("");
                                navigate("/kiosk/kioskmain/157292/phonenumber");
                            }
                            }
                        >이전</button>
                    </div>
                    <div className={styles.mainBodyContents2}>
                        {props.userName}님
                        원하시는 메뉴를 선택해주세요.
                    </div>
                    <div style={{ height: "60px" }}>

                    </div>
                    <div className={styles.mainBodyContentBtn}>
                        <div className={styles.mainBodyContentBtnInner}>
                            <div className={styles.mainBodyContentBtnInner1}>
                                <div className={styles.mainBodyContentBtnInner1Text}>
                                    수강료 결제하기
                                </div>
                                <div className={styles.mainBodyContentBtnInner1Icn}>
                                    <Money className={styles.icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "30px" }}>

                    </div>
                    <div className={styles.mainBodyContentBtn}>
                        <div className={styles.mainBodyContentBtnInner}>
                            <div className={styles.mainBodyContentBtnInner1}>
                                <div className={styles.mainBodyContentBtnInner1Text}>
                                    컨텐츠 신청하기
                                </div>
                                <div className={styles.mainBodyContentBtnInner1Icn}>
                                    <Contents className={styles.icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SelectPage;