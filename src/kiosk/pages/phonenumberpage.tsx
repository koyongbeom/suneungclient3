import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Logo } from "../../svg/newlogo.svg";
import { ReactComponent as ArrowLeft } from "../../svg/arrow-left-light.svg";
import styles from "../styles/main.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { set } from 'lodash';

const PhonenumberPage: React.FC<any> = (props) => {

    const navigate = useNavigate();

    const [phonenumber, setPhonenumber] = useState("010-");
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setErrorMessage("");
        setIsError(false);

    }, [phonenumber]);


    const pushPhonenumber = (e: any, number: number) => {

        if (number === -1) {
            // Delete a digit if the string is longer than "010-"
            if (phonenumber.length > 4) {
                if (phonenumber.length === 9) {
                    // 두 글자를 지워야 함
                    setPhonenumber(prevState => prevState.slice(0, -2));
                } else {
                    setPhonenumber(prevState => prevState.slice(0, -1));
                }
            }
        } else {
            // Append the number to the string, inserting "-" at the 8th and 13th positions
            if (phonenumber.length === 7) {
                setPhonenumber(prevState => `${prevState}${number}-`);
            } else if (phonenumber.length < 13) { // Restrict length to "010-xxxx-xxxx" format
                setPhonenumber(prevState => `${prevState}${number}`);
            }
        }
    }

    const submit = (e: any) => {

        if (!phonenumber) {
            console.log("noPhoneNumber");
            return;
        }

        const phonenumberstring = phonenumber.replace(/-/g, "");

        setLoading(true);

        fetch("https://peetsunbae.com/kiosk/phonenumberlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phonenumber: phonenumberstring
            })
        }).then(res => res.json()
            .then((result: any) => {
                console.log(result);
                setLoading(false);

                if(result.message  === "noUser"){
                    setIsError(true);
                    setErrorMessage("등록되지 않은 학생입니다.");
                    return;
                }

                if(result.message === "success"){
                    props.setUserId(result.userId);
                    props.setUserName(result.userName);
                    navigate("/kiosk/kioskmain/157292/selectpage");
                }

            })
        )

    }


    return (
        <div className={styles.mainBody_phonenumber}>
            <button
                className={styles.previousBtn}
                onClick={() => {
                    navigate("/kiosk/kioskmain/157292/");
                }
                }
            >이전</button>
            <div className={styles.mainMarginContent}>
                <div className={styles.mainMarginContentLeft}>
                    <div>
                        <Logo className={styles.mainRightLogo} />
                    </div>
                    <div className={styles.mainRightText} style={{ marginTop: "33px" }}>
                        휴대폰번호 입력하고<br></br>바로 시작하세요
                    </div>
                </div>
                <div className={styles.mainMarginContentRight}>
                    <div className={styles.phonenumberWrapper}>
                        <div className={styles.phonenumberInputWrapper1}>
                            <div className={styles.phonenumberInputWrapper1_1}>
                                <div className={`${styles.phonenumberInputWrapper1_1_1} ${isError ? styles.error : ""}`}>
                                    <div className={styles.phonenumberInputWrapper1_1_1_1}>
                                        {
                                            phonenumber
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "12px", padding: "0 24px" }}>
                            {
                                isError ? <div className={styles.phonenumberError}>{errorMessage}</div> : <div></div>
                            }
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 1) }}>1</button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 2) }}>2</button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 3) }}>3</button>

                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 4) }}>4</button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 5) }}>5</button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 6) }}>6</button>

                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 7) }}>7</button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 8) }}>8</button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 9) }}>9</button>

                            <button className={styles.phonenumberBtn}></button>
                            <button className={styles.phonenumberBtn} onClick={(e) => { pushPhonenumber(e, 0) }}>0</button>
                            <button className={styles.phonenumberBtn}
                                style={{
                                    paddingTop: "4px"
                                }}
                                onClick={(e) => { pushPhonenumber(e, -1) }}
                            >
                                <ArrowLeft className={styles.arrowLeft} />
                            </button>
                        </div>
                        <div className={styles.mainRightButton}
                            style={{
                                marginTop: "40px"
                            }}
                            onClick={(e) => { submit(e) }}
                        >
                            {
                                loading ?
                                    <CircularProgress sx={{ color: "white" }} size={16} />
                                    :
                                    "시작하기"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhonenumberPage;