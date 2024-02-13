import React, { useState, useEffect, useRef } from "react";
import HeaderTwo from "../components/header2";
import styles from "../styles/register.module.css";
import { ReactComponent as ChevronRight } from '../svg/chevron-right-solid-black.svg';
import { ReactComponent as ChevronLeft } from '../svg/chevron-left-solid-black.svg';
import { Button } from "@mui/material";
import Footer from "../components/footer";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import SpeedDialComponent from "../control/speeddial";
import { useMediaQuery } from "react-responsive";
import ReactGa from "react-ga4";
import { Badge, CssVarsProvider } from "@mui/joy";

// const startDate = new Date();


const weeks = [1, 2, 3, 4, 5, 6];
const ampm = [600, 630, 660, 690, 720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290];
const pm = [720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290, 1320]
const am = [600, 630, 660, 690];
var intervalId: any;

const RegisterWaiting: React.FC<any> = (props) => {

    const today = new Date();


    const [location, setLocation] = useState<String>("gangnam");

    const [select, setSelect] = useState("male");
    const [select2, setSelect2] = useState("n");

    const [gangnamCount, setGangnamCount] = useState(0);
    const [daechiCount, setDaechiCount] = useState(0);



    const [realSelectedDay, setRealSelectedDay] = useState({ year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() });
    const [selectedTime, setSelectedTime] = useState(0);



    const [name, setName] = useState("");
    const [etc, setEtc] = useState("");

    const [fullTelephone, setFullTelephone] = useState(false);
    const [telephoneNumber, setTelephoneNumber] = useState("");


    //클릭 안된 상태, 클릭 한 상태
    const [certifyClicked, setCertifyClicked] = useState<boolean>(false);
    const [remainTime, setRemainTime] = useState(0);
    const [certifyCorrect, setCertifyCorrect] = useState<any>(null);
    const [certNumber, setCertNumber] = useState();


    const telephoneNumberInputRef = useRef<any>(null);
    const certNumberInputRef = useRef<any>(null);

    const [submitStatus, setSubmitStatus] = useState("");

    const navigate = useNavigate();


    const eachRef = useRef<any>(new Array());

    //가로 세로 길이 같게 만드는-----------------------------------------
    const isMobile = useMediaQuery({query : '(max-width : 500px)'});


    const [isConstructionDay, setIsConstructionDay] = useState(false);

    //ga event------------------------------------------------
    useEffect(() => {


    }, []);
    //--------------------------------------------------------


    useEffect(() => {

        getOrder();

    }, []);

    const getOrder = () => {

        fetch("https://peetsunbae.com/waiting/getorder", {
            method : "GET"
        }).then((response : any) => {
            response.json()
            .then((result : any) => {

                if(result.message === "success"){
                    console.log(result);
                    setGangnamCount(result.gangnamCount);
                    setDaechiCount(result.daechiCount);
                }

            })
        })

    }



    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

  

    const typeName = (e: any) => {
        setName(e.target.value);
    }

    const typeEtc = (e : any) => {
        setEtc(e.target.value);
    }

    const typeTelephone = (e: any) => {
        console.log(e.target.value);

        if (certifyCorrect === "success") {
            console.log("already");
            return;
        }

        e.target.value = e.target.value.replace(/[^\d]+/g, "");

        if (e.target.value.length > 11) {
            return;
        }

        setTelephoneNumber(e.target.value);

        if (e.target.value.length === 11) {
            setFullTelephone(true);
            if (telephoneNumberInputRef.current) {
                telephoneNumberInputRef.current.blur();
            }
        } else {
            setFullTelephone(false);
        }
    }


    const typeCert = (e: any) => {
        console.log(e.target.value);
        e.target.value = e.target.value.replace(/[^\d]+/g, "");

        if (e.target.value.length > 6) {
            console.log(111);
            return;
        }

        // if (!certifyClicked){
        //     console.log(222);
        //     return;
        // }

        if (e.target.value.length !== 6) {
            setCertifyCorrect(null);
        }

        setCertNumber(e.target.value);

        if (e.target.value.length === 6) {

            fetch(`https://suneungsunbae.com/api/booking/cert`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    telephoneNumber,
                    certNumber: e.target.value
                })
            }).then((response: any) => {
                response.json()
                    .then((result: any) => {
                        console.log(result);
                        if (result.message !== "success") {
                            setCertifyCorrect("fail");
                        } else {
                            setCertifyCorrect("success");
                            if (certNumberInputRef.current) {
                                certNumberInputRef.current.blur();
                            }
                        }
                    })
            }
            )
        }

    }


    const getCert = (e: any, type: string) => {
        if (!fullTelephone) {
            console.log("morenumber");
            return;
        }

        if (certifyClicked && type === "btn") {
            console.log("reclick");
            return;
        }

        if (intervalId) {
            clearInterval(intervalId);
        }



        setCertifyClicked(true);
        setCertifyCorrect(null);

        certNumberInputRef.current.focus();

        var remain = 300;

        setRemainTime(300);

        intervalId = setInterval(() => {
            if (remain > -1) {
                setRemainTime(remain);
                remain--;
            }
        }, 1000);


        fetch(`https://suneungsunbae.com/api/booking/cert?telephoneNumber=${telephoneNumber}`, {
            method: "GET"
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result);
                })
         }
        )
    }


    const submit = () => {


        if (!name) {
            console.log("noName")
            setSubmitStatus("noName");
            return;
        }
        if (certifyCorrect !== "success") {
            console.log("noCert");
            setSubmitStatus("noCert");
            return;
        }

        setSubmitStatus("");

        const data = {
            location : location,
            select: select,
            select2: select2,
            name: name,
            telephoneNumber: telephoneNumber,
            cert: certNumber,
            etc: etc
        }

        console.log(data);

        fetch(`https://peetsunbae.com/waiting/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result.message);
                    if (result.message === "fail" || result.message === "error") {
                        alert("오류 관리자 문의(010-9880-0489)")
                    }
                    if (result.message === "success") {
                        const id = result.id;
                        navigate("/registerwaitingfinish", {
                            state : {
                                id
                            } 
                        });
                    }
                })
        })

    }



    return (
        <div>
            <div className={styles.voidHeader2}>
            </div>

            <div className={styles.titleText2}>
                1분 안에<br></br>대기 등록 해드릴게요!
            </div>

            <div className={styles.waitingNumberBox}>
                <div className={styles.waitingNumberInnerBox}>
                    <div className={styles.realNumberBox}>
                        <div className={styles.realNumberTitle}>
                            강남점 대기자
                        </div>
                        <div className={styles.realNumberDescription}>
                            <span>{gangnamCount && gangnamCount}</span>명
                        </div>
                    </div>
                    <div className={styles.centerBorder}>
                        
                    </div>
                    <div className={styles.realNumberBox}>
                        <div className={styles.realNumberTitle}>
                            대치점 대기자
                        </div>
                        <div className={styles.realNumberDescription}>
                            <span>{daechiCount && daechiCount}</span>명
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.formBody}>

                <div className={`${styles.questionText} ${styles.first} ${styles.real}`}>
                    어느 지점의 대기등록을 원하시나요?
                </div>
                <div className={styles.selectDiv}>
                    <div onClick={(e: any) => { setLocation("gangnam") }} className={`${styles.select} ${location === "gangnam" ? styles.active : ""}`}>
                        강남점
                    </div>
                    <div onClick={(e: any) => { setLocation("daechi") }} className={`${styles.select} ${location === "daechi" ? styles.active : ""}`}>
                        대치점
                    </div>
                </div>

                <div className={`${styles.questionText} ${styles.first}`}>
                    학생분의 성별은 어떻게 되시나요?
                </div>
                <div className={styles.selectDiv}>
                    <div onClick={(e: any) => { setSelect("male"); }} className={`${styles.select} ${select === "male" ? styles.active : ""}`}>
                        남학생
                    </div>
                    <div onClick={(e: any) => { setSelect("female"); }} className={`${styles.select} ${select === "female" ? styles.active : ""}`}>
                        여학생
                    </div>
                </div>

                <div className={`${styles.questionText} ${styles.first}`}>
                    현재 학년은 어떻게 되시나요?
                </div>
                <div className={styles.selectDiv}>
                    <div onClick={(e: any) => { setSelect2("n"); }} className={`${styles.select} ${select2 === "n" ? styles.active : ""}`}>
                        N수생(자퇴생)
                    </div>
                    <div onClick={(e: any) => {
                        // alert("죄송합니다. 6월부터 11월까지 재학생은 신규등록이 불가합니다.")
                        // return;
                        setSelect2("current"); 
                        }} 
                        className={`${styles.select} ${select2 === "current" ? styles.active : ""}`}>
                        재학생
                    </div>
                </div>


                <div className={`${styles.questionText} ${styles.third}`}>
                    간단한 정보만 적어주세요
                </div>

                <div className={styles.inputWrapper}>
                    <div className={styles.inputDiv}>
                        <input value={name} onChange={typeName} placeholder="이름을 적어주세요" className={styles.input} type="text">

                        </input>
                    </div>
                    <div className={styles.telephoneDiv}>
                        <div className={styles.telephoneInputDiv}>
                            <input ref={telephoneNumberInputRef} pattern="\d*" value={telephoneNumber} onChange={typeTelephone} placeholder="핸드폰번호를 적어주세요" className={styles.telephoneInput} type="tel">

                            </input>
                        </div>
                        <div className={styles.telephoneBtnDiv}>
                            <div onClick={(e: any) => { getCert(e, "btn") }} className={`${styles.certBtn} ${(fullTelephone && !certifyClicked) ? styles.active : ""}`}>
                                {
                                    !certifyClicked &&
                                    <span className={styles.btnText}>
                                        인증번호 받기
                                    </span>
                                }
                                {
                                    (certifyClicked) &&
                                    <span className={styles.btnText}>
                                        0
                                        {Math.floor(remainTime / 60)}
                                        :
                                        {
                                            remainTime % 60 < 10 ?
                                                "0" + remainTime % 60 : remainTime % 60
                                        }
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputDiv} ${styles.cert}`}>
                        <input ref={certNumberInputRef} pattern="\d*" value={certNumber} onChange={typeCert} placeholder="인증번호를 입력해주세요" className={styles.input} type="tel">

                        </input>
                    </div>
                    <div className={styles.certText}>
                        {
                            (certifyClicked && !certifyCorrect) &&
                            <>
                                인증번호가 발송되었습니다 <span className={styles.recert} onClick={(e: any) => { getCert(e, "rebtn") }}>&nbsp;&nbsp;&nbsp;&nbsp;재전송하기</span>
                            </>
                        }
                        {
                            (certifyClicked && certifyCorrect === "fail") &&
                            <>
                                <span className={styles.certifyFail}>
                                    잘못된 인증번호입니다.
                                </span>
                                <span className={styles.recert2} onClick={(e: any) => { getCert(e, "rebtn") }}>&nbsp;&nbsp;&nbsp;&nbsp;재전송하기</span>
                            </>
                        }
                        {
                            (certifyClicked && certifyCorrect === "success") &&
                            <>
                                <span className={styles.certifySuccess}>
                                    핸드폰인증에 성공했습니다.
                                </span>
                            </>
                        }
                    </div>
                </div>

                <div className={`${styles.questionText} ${styles.third}`}>
                    기타 요청사항이 있으신가요? (선택)
                </div>

                <div className={styles.inputWrapper}>
                    <div className={styles.inputDiv}>
                        <input value={etc} onChange={typeEtc} placeholder="예) 3월부터 등원희망합니다." className={styles.input} type="text">

                        </input>
                    </div>
                </div>


                <div className={styles.informResult}>
                    {
                        submitStatus === "noName" &&
                        <span className={styles.informResult}>
                            이름을 입력해주세요
                        </span>
                    }
                    {
                        submitStatus === "noCert" &&
                        <span className={styles.informResult}>
                            핸드폰 인증을 해주세요
                        </span>
                    }
                </div>
                <div className={styles.submitBtnDiv}>
                    <Button onClick={submit} variant="contained" fullWidth sx={{ height: "72px", backgroundColor: "#3c3c3c", color: "white", fontWeight: 700, fontSize: "20px", "&:hover": { backgroundColor: "rgb(100,100,100)" }, "@media (max-width : 1024px)": {fontSize : "16px", height : '55.5px'} }}>
                        신청서 제출
                    </Button>
                </div>
                <div className={styles.bottomText} style={{lineHeight : 1.5}}>
                    ** <b>실시간 대기 현황</b>을 카카오 알림톡으로 전송해드립니다
                    <br></br>
                    ** <b>흡연자</b>의 경우 등록이 불가합니다
                    <br></br>
                    ** 수능선배의 다양한 소식을 전달받으실 수 있습니다.
                </div>
            </div>

            <div className={styles.void2}>

            </div>

        </div>
    )
}

export default RegisterWaiting;