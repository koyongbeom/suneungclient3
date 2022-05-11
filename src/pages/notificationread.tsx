import React, {useState, useEffect} from "react";
import HeaderTwo from "../components/header2";
import Footer from "../components/footer";

import styles from "../styles/notification.module.css";

import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const NotificationRead : React.FC<any> = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div className={styles.headerBar}
                style={{ backgroundImage: "url(img/faq.webp)" }}
            >
                공지사항
            </div>
            <div className={`${styles.currentMenuViewerDiv} ${styles.onlyPC}`}>
                <div className={styles.currentMenuViewer}>
                    <HouseSvg className={styles.houseSvg} />
                    <RightChevronSvg className={styles.rightChevron} />
                    <div className={styles.currentMenuViewerText_2}>
                        공지사항
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
            </div>


            <div className={`${styles.titleText} ${styles.onlyPC}`}>
                공지사항을<br></br>안내드립니다.
            </div>


            <div className={styles.notificationBox}>
                <div className={`${styles.notificationHeader} ${styles.forDescription}`}>
                    접어서 보관 가능한가요?
                </div>
                <div className={styles.descriptionHeaderDescription}>
                    <div className={styles.descriptionDivBox}>
                        <div className={styles.descriptionName}>
                            수능선배
                        </div>
                        <div className={styles.dash}>
                        </div>
                        <div className={styles.descriptionDate}>
                            2021.05.11
                        </div>
                    </div>
                    <div className={styles.howMany}>
                        <span>조회수</span>&nbsp;8
                    </div>
                </div>

                <div className={styles.notificationBodyHtmlDiv}>
                    ssasadasdasdasdsf
                </div>
            </div>

            <div className={styles.listDiv}>
                <Button onClick={()=>{navigate(-1);}} variant="outlined" sx={{borderRadius : "0px",  color : "white", fontWeight : 600, backgroundColor : "black", width : "175.03px", height : "50.34px", fontSize : "16px", "&:hover" : {color : "black", border : "2px solid black"}}}>LIST</Button>
            </div>


            <Footer />
        </div>

    );
}

export default NotificationRead;