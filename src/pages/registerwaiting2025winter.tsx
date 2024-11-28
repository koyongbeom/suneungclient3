import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/register.module.css";
import { ReactComponent as ChevronRight } from '../svg/chevron-right-solid-black.svg';
import { ReactComponent as ChevronLeft } from '../svg/chevron-left-solid-black.svg';
import { Button } from "@mui/material";
import Footer from "../components/footer";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import SpeedDialComponent from "../control/speeddial";
import { useMediaQuery } from "react-responsive";
import { Checkbox, Modal, Sheet } from "@mui/joy";
import { Check } from "@mui/icons-material";

// const startDate = new Date();

var intervalId: any;

const RegisterWaiting2025Winter: React.FC<any> = (props) => {

    const today = new Date();


    const [open, setOpen] = useState(true);
    const [location, setLocation] = useState<String>("daechi");
    const [select, setSelect] = useState("male");
    const [select2, setSelect2] = useState("n");
    // const [select3, setSelect3] = useState("n");
    const [agree, setAgree] = useState(false);

    const [nCount, setNCount] = useState(0);
    const [currentCount, setCurrentCount] = useState(0);



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
    const isMobile = useMediaQuery({ query: '(max-width : 500px)' });


    const [isConstructionDay, setIsConstructionDay] = useState(false);

    const [loading, setLoading] = useState(false);

    //ga event------------------------------------------------
    useEffect(() => {


    }, []);
    //--------------------------------------------------------


    useEffect(() => {

        //getOrder();

    }, []);

    const getOrder = () => {

        fetch("https://peetsunbae.com/waiting/getorderwinterbundang", {
            method: "GET"
        }).then((response: any) => {
            response.json()
                .then((result: any) => {

                    if (result.message === "success") {
                        console.log(result);
                        setNCount(result.n + 27);
                        setCurrentCount(result.current + 22);
                    }

                })
        })

    }



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    const typeName = (e: any) => {
        setName(e.target.value);
    }

    const typeEtc = (e: any) => {
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

        if(!agree){
            console.log("noAgree");
            setSubmitStatus("noAgree");
            return;
        }

        setLoading(true);

        setSubmitStatus("");

        const data = {
            location : location,
            select: select,
            select2: select2,
            name: name,
            telephoneNumber: telephoneNumber,
            cert: certNumber,
            etc: etc,
            year : 2025,
            type1 : "winter"
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

                    setLoading(false);

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
                1분 안에<br></br>신청해 드릴게요!
            </div>

            {/* <div className={styles.waitingNumberBox}>
                <div className={styles.waitingNumberInnerBox}>
                    <div className={styles.realNumberBox}>
                        <div className={styles.realNumberTitle}>
                            N수생
                        </div>
                        <div className={styles.realNumberDescription}>
                            <span>{winterCount && winterCount}</span>명
                        </div>
                    </div>
                    <div className={styles.centerBorder}>

                    </div>
                    <div className={styles.realNumberBox}>
                        <div className={styles.realNumberTitle}>
                            재학생
                        </div>
                        <div className={styles.realNumberDescription}>
                            <span>{brefingCount && brefingCount}</span>명
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={styles.numberBox}>
                <div className={styles.realNumberBox2}>
                    <div className={styles.realNumberTitle}>
                        대치점 정규윈터
                    </div>
                    <div className={styles.realNumberDescription}>
                        <span>모집 마감 (대기자 접수)</span>
                    </div>
                </div>
                {/* <div className={styles.verticalLine}>

                </div>
                <div className={styles.realNumberBox2}>
                    <div className={styles.realNumberTitle}>
                        {select === "gangnam" ? "강남점" : "대치점"} 정규윈터
                    </div>
                    <div className={styles.realNumberDescription}>
                        <span>모집중</span>
                    </div>
                </div> */}
            </div>

            <div className={styles.formBody}>


                <div className={`${styles.questionText} ${styles.first} ${styles.real}`}>
                    대기자 접수 신청
                </div>
                <div className={styles.selectDiv}>
                    {/* <div onClick={(e: any) => { return; setSelect("gangnam"); }} className={`${styles.disableBtn} ${styles.select} ${select === "gangnam" ? styles.active : ""}`}>
                        강남점
                    </div> */}
                    <div onClick={(e: any) => {
                        // alert("죄송합니다. 6월부터 11월까지 재학생은 신규등록이 불가합니다.")
                        // return;
                        setLocation("daechi");
                    }}
                        className={`${styles.select} ${location === "daechi" ? styles.active : ""}`}>
                        대치점 정규윈터
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

                <div className={`${styles.questionText} ${styles.first}`} style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <div>
                        현재 학년
                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.selectDiv}>
                    <div onClick={(e: any) => { setSelect2("n"); }} className={`${styles.select} ${select2 === "n" ? styles.active : ""}`}>
                        N수생
                    </div>
                    <div onClick={(e: any) => { setSelect2("current"); }} className={`${styles.select} ${select2 === "current" ? styles.active : ""}`}>
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
                        <input value={etc} onChange={typeEtc} placeholder="" className={styles.input} type="text">

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
                    {
                        (submitStatus === "noAgree" && !agree) &&
                        <span className={styles.informResult}>
                            아래 정보 수신 동의 체크박스를 체크해주세요
                        </span>
                    }
                </div>
                <div className={styles.submitBtnDiv}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "12px",
                        marginTop : "10px"
                    }}>
                        <Checkbox 
                            color={
                                submitStatus === "noAgree" ? "danger" : "neutral"
                            }
                            checked={agree}
                            onChange={(e : any) => {
                                setAgree(e.target.checked);
                            }}
                            label={<span style={{
                                fontWeight: 400,
                                marginLeft: "2px",
                                fontSize : "14px",
                                color : submitStatus === "noAgree" ? "#d3232f" : "gray",
                                display : "flex",
                                alignItems : "center"
                            }}
                        >
                                수능선배의 다양한 소식을 전달받으실 수 있습니다.
                            </span>}
                        />

                    </div>
                    <Button onClick={submit} variant="contained" fullWidth sx={{ height: "72px", backgroundColor: "#3c3c3c", color: "white", fontWeight: 700, fontSize: "20px", "&:hover": { backgroundColor: "rgb(100,100,100)" }, "@media (max-width : 1024px)": { fontSize: "16px", height: '55.5px' } }}
                    >
                        {
                            !loading ?
                            "신청서 제출"
                            :
                            <CircularProgress
                            color="inherit"
                            />
                        }
                    </Button>
                </div>
                {/* <div className={styles.bottomText} style={{lineHeight : 1.5}}>
                    ** <b>실시간 대기 현황</b>을 카카오 알림톡으로 전송해드립니다
                    <br></br>
                    ** <b>흡연자</b>의 경우 등록이 불가합니다
                    <br></br>
                    ** 수능선배의 다양한 소식을 전달받으실 수 있습니다.
                </div> */}
            </div>

            <div className={styles.void2}>

            </div>

        </div>
    )
}

export default RegisterWaiting2025Winter;