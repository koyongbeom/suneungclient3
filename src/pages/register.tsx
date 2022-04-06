import React, {useState, useEffect} from "react";
import HeaderTwo from "../components/header2";
import styles from "../styles/register.module.css";

const Register : React.FC<any> = (props) => {
    const [select, setSelect] = useState(0);


    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>

            <div className={styles.titleText}>
                1분 안에<br></br>상담 예약 해드릴게요!
            </div>
            <div className={styles.subTitleText}>
                전화나 문자로 상담 예약 원하시면<br></br>010-9809-0489로 연락주세요.(24시 가능)
            </div>

            <div className={styles.formBody}>
                <div className={`${styles.questionText} ${styles.first}`}>
                    어떤 종류의 상담을 원하시나요?
                </div>
                <div className={styles.selectDiv}>
                    <div onClick={(e : any)=>{setSelect(0);}} className={`${styles.select} ${select === 0 ? styles.active : ""}`}>
                        원장 대면 상담
                    </div>
                    <div onClick={(e : any)=>{setSelect(1);}} className={`${styles.select} ${select === 1 ? styles.active : ""}`}>
                        원장 전화 상담
                    </div>
                    <div onClick={(e : any)=>{setSelect(2);}} className={`${styles.select} ${select === 2 ? styles.active : ""} ${styles.last}`}>
                        상담 없이 시설 구경
                    </div>
                </div>

                <div className={`${styles.questionText} ${styles.second}`}>
                    상담을 원하는 시간을 선택해주세요
                </div>
            </div>



        </div>
    )
}

export default Register;