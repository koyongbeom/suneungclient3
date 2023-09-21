import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderTwo from "../components/header2";
import styles from "../styles/complete.module.css";
import { ReactComponent as Check } from '../svg/check.svg';
import ReactGa from "react-ga4";



const WinterComplete: React.FC<any> = (props) => {
    const [year, setYear] = useState<any>();
    const [month, setMonth] = useState<any>();
    const [date, setDate] = useState<any>();
    const [day, setDay] = useState<any>();
    const [ampm, setampm] = useState<any>();
    const [hours, setHours] = useState<any>();
    const [isMinutes, setIsMinutes] = useState<any>(true);
    const [minutes, setMinutes] = useState<any>();
    const [select, setSelect] = useState<any>();

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "completepageview"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "complete"
        });

    }, []);
    //--------------------------------------------------------


    const navigate = useNavigate();
    const location = useLocation();

    const goHome = () => {
        navigate("/");
    }

    return (
        <div>
            <HeaderTwo />
            <div className={styles.void}>

            </div>
            <div className={styles.main}>
                <div className={styles.topBoarder}>

                </div>
                <div className={styles.checkDiv}>
                    <Check />
                </div>
                <div className={styles.checkTitle}>
                    신청이 완료되었습니다.
                </div>
                <div className={styles.checkText}>
                    카카오톡으로 사전신청 내역을 보내드립니다.<br></br>사전신청 취소는 카카오톡 및 전화로 연락주시기 바랍니다.<br></br><br></br>
                </div>
                <div className={styles.toHomeBtnDiv}>
                    <Button onClick={goHome} variant="contained" sx={{backgroundColor : "#1b49af", width : "120px", height : "40px",fontWeight : 500}}>
                        홈으로
                    </Button>
                </div>
                <div className={styles.contactBox}>
                    수능선배 연락처 | 1668-5786<br></br>
                </div>

            </div>
        </div>
    )
}

export default WinterComplete;