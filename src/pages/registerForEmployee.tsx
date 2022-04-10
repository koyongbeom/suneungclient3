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


// const startDate = new Date();


const weeks = [1, 2, 3, 4, 5, 6];
const ampm = [600, 630, 660, 690, 720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290];
const pm = [720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020, 1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290, 1320]
const am = [600, 630, 660, 690];
var intervalId: any;

const RegisterForEmployee: React.FC<any> = (props) => {

    const today = new Date();
    const todayFirstTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    const todayLastTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    const currentTime = today.getHours() * 60 + today.getMinutes();

    const [startDate, setStartDate] = useState(new Date());

    const [select, setSelect] = useState(0);
    const [dateValue, setDateValue] = useState();
    const [showingDate, setShowingDate] = useState(startDate.getTime());
    const [month, setMonth] = useState<any>();
    const [year, setYear] = useState<any>();
    const [calendar, setCalendar] = useState<any>();
    const [selectedDay, setSelectedDay] = useState(today.getFullYear() * 10000 + today.getMonth() * 100 + today.getDate());
    const [realSelectedDay, setRealSelectedDay] = useState({ year: today.getFullYear(), month: today.getMonth(), date: today.getDate(), day: today.getDay() });
    const [selectedTime, setSelectedTime] = useState(0);

    const [minusMonthDisable, setMinusMonthDisable] = useState(true);

    const [name, setName] = useState("");

    const [fullTelephone, setFullTelephone] = useState(false);
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [isToday, setIsToday] = useState(true);

    const [timeData, setTimeData] = useState<any>();
    const [loading, setLoading] = useState(false);

    const [isAmRemain, setIsAmRemain] = useState(true);
    const [isPmRemain, setIsPmRemain] = useState(true);

    //클릭 안된 상태, 클릭 한 상태
    const [certifyClicked, setCertifyClicked] = useState<boolean>(false);
    const [remainTime, setRemainTime] = useState(0);
    const [certifyCorrect, setCertifyCorrect] = useState<any>(null);
    const [certNumber, setCertNumber] = useState();


    const telephoneNumberInputRef = useRef<any>(null);
    const certNumberInputRef = useRef<any>(null);

    const [submitStatus, setSubmitStatus] = useState("");


    const [update, setUpdate] = useState(Math.random());

    const navigate = useNavigate();


    const eachRef = useRef<any>(new Array());

    //가로 세로 길이 같게 만드는-----------------------------------------
    const isMobile = useMediaQuery({query : '(max-width : 500px)'});

    useEffect(() => {
        if (isMobile) {
            if (eachRef.current) {
                const height = eachRef.current[0].clientWidth;
                eachRef.current.forEach((each: any) => {
                    if (each) {
                        each.style.height = `${height}px`;
                    }
                })
            }
        }
    }, [calendar]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])


    //달력 만드는기능----------------------------------------------

    useEffect(() => {

        console.log("change");
        const month = new Date(showingDate).getMonth();
        const year = new Date(showingDate).getFullYear();


        setMonth(month);
        setYear(year);

        if (month === today.getMonth() && year === today.getFullYear()) {
            setMinusMonthDisable(true);
        } else {
            setMinusMonthDisable(false);
        }

        const firstDate = new Date(year, month, 1);
        const firstDateDay = firstDate.getDay();
        firstDate.setDate(firstDate.getDate() - firstDateDay);

        const lastDate = new Date(year, month + 1, 0);
        const lastDateDay = lastDate.getDay();
        lastDate.setDate(lastDate.getDate() + (6 - lastDateDay));

        console.log(firstDate.getDate());
        console.log(lastDate.getDate());

        const calendarData: any = [];
        var week = 1;

        while (firstDate.getTime() <= lastDate.getTime()) {
            var isPast = false;
            var isToday = false;


            if (firstDate.getTime() < todayFirstTime.getTime()) {
                isPast = true;
            }

            if ((firstDate.getTime() >= todayFirstTime.getTime()) && (firstDate.getTime() <= todayLastTime.getTime())) {
                isToday = true;
            }


            const oneDay = {
                year: firstDate.getFullYear(),
                month: firstDate.getMonth(),
                date: firstDate.getDate(),
                day: firstDate.getDay(),
                week,
                isPast,
                isToday
            }
            calendarData.push(oneDay);

            if (oneDay.day === 6) {
                week++;
            }

            firstDate.setDate(firstDate.getDate() + 1);
        }

        console.log(calendarData);

        setCalendar(calendarData);
        setSelectedTime(0);

    }, [showingDate]);

    const monthChange = (type: string) => {
        if (type === "plus") {
            startDate.setMonth(startDate.getMonth() + 1);
            setShowingDate(startDate.getTime());
        } else if (type === "minus") {
            startDate.setMonth(startDate.getMonth() - 1);
            setShowingDate(startDate.getTime());
        }
    }

    //----------------------------------------------------------------------

    //날짜 선택하는 기능----------------------------------------------------------------------------------
    const dateClick = (year: number, month: number, date: number, day: number, isPast: boolean) => {
        if (isPast) {
            return;
        }
        setSelectedDay(year * 10000 + month * 100 + date);
        setRealSelectedDay({ year, month, date, day });
    }
    //-----------------------------------------------------------------------------------------------------


    const selectTime = (time: number, isPast: boolean, possible: boolean) => {
        if (isPast) {
            return;
        }
        if (!possible) {
            console.log("impossible");
            return;
        }

        console.log(time);
        setSelectedTime(time);
    }


    useEffect(() => {

        setSelectedTime(0);

        var isToday = false;

        if (today.getFullYear() === realSelectedDay.year && today.getMonth() === realSelectedDay.month && today.getDate() === realSelectedDay.date) {
            console.log("today");
            isToday = true;
        }

        if (select === 0 || select === 1) {
            setLoading(true);
            fetch(`https://suneungsunbae.com/api/booking?select=${select}&year=${realSelectedDay.year}&month=${realSelectedDay.month}&date=${realSelectedDay.date}`, {
                method: "GET"
            }).then((response: any) => {
                response.json()
                    .then((result: any) => {
                        console.log(result);


                        const occupiedTimeData: any = [];

                        result.data.forEach((eachData: any) => {
                            if (eachData.kind === 0 || eachData.kind === 1) {
                                occupiedTimeData.push(eachData.time);
                            }
                        });

                        const newAmPm: any = [];

                        ampm.forEach((eachTime: number) => {
                            const oneRow: any = {};
                            oneRow.time = eachTime;
                            oneRow.ampm = "pm";
                            if (eachTime <= 690) {
                                oneRow.ampm = "am";
                            }
                            oneRow.possible = true;
                            if (occupiedTimeData.includes(eachTime) || occupiedTimeData.includes(eachTime - 30)) {
                                oneRow.possible = false;
                            }
                            oneRow.isPast = false;
                            if (isToday) {
                                if (oneRow.time < currentTime + 60) {
                                    oneRow.isPast = true;
                                }
                            }
                            newAmPm.push(oneRow);
                        });


                        //am 갯수 아예 없으면 빼버리는 기능-----------------
                        var amCount = 0;
                        var pmCount = 0;

                        if (isToday) {
                        } else {
                            amCount = 1;
                            pmCount = 1;
                        }

                        newAmPm.forEach((eachTime: any) => {
                            if (eachTime.ampm === "am" && !eachTime.isPast) {
                                amCount++
                            }
                            if (eachTime.ampm === "pm" && !eachTime.isPast) {
                                pmCount++;
                            }
                        });

                        if (!amCount) {
                            setIsAmRemain(false);
                        } else {
                            setIsAmRemain(true);
                        }
                        if (!pmCount) {
                            setIsPmRemain(false);
                        } else {
                            setIsPmRemain(true);
                        }
                        //--------------------------------------------------------------------


                        //토요일 시간 빼는 기능--------------------------------------------------
                        if (realSelectedDay.day === 6) {
                            newAmPm.forEach((eachTime: any) => {
                                if (eachTime.time < 1020) {
                                    eachTime.possible = false;
                                }
                            })
                        }
                        //----------------------------------------------------------------------



                        console.log(newAmPm);
                        setTimeData(newAmPm);
                    })
                setLoading(false);
            })
        } else if (select === 2) {
            const newAmPm: any = [];

            ampm.forEach((eachTime: number) => {
                const oneRow: any = {};
                oneRow.time = eachTime;
                oneRow.ampm = "pm";
                if (eachTime <= 690) {
                    oneRow.ampm = "am";
                }
                oneRow.possible = true;
                oneRow.isPast = false;
                if (isToday) {
                    if (oneRow.time < currentTime + 60) {
                        oneRow.isPast = true;
                    }
                }
                newAmPm.push(oneRow);
            });

            var amCount = 0;
            var pmCount = 0;

            if (isToday) {
            } else {
                amCount = 1;
                pmCount = 1;
            }


            newAmPm.forEach((eachTime: any) => {
                if (eachTime.ampm === "am" && !eachTime.isPast) {
                    amCount++
                }
                if (eachTime.ampm === "pm" && !eachTime.isPast) {
                    pmCount++;
                }
            });

            console.log(amCount);

            if (!amCount) {
                setIsAmRemain(false);
            } else {
                setIsAmRemain(true);
            }
            if (!pmCount) {
                setIsPmRemain(false);
            } else {
                setIsPmRemain(true);
            }


            console.log(newAmPm);
            setTimeData(newAmPm);

        }


    }, [realSelectedDay, select, update])



    const typeName = (e: any) => {
        setName(e.target.value);
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

        return;
        // console.log(e.target.value);
        // e.target.value = e.target.value.replace(/[^\d]+/g, "");

        // if (e.target.value.length > 6) {
        //     console.log(111);
        //     return;
        // }

        // // if (!certifyClicked){
        // //     console.log(222);
        // //     return;
        // // }

        // if (e.target.value.length !== 6) {
        //     setCertifyCorrect(null);
        // }

        // setCertNumber(e.target.value);

        // if (e.target.value.length === 6) {

        //     fetch(`https://suneungsunbae.com/api/booking/cert`, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({
        //             telephoneNumber,
        //             certNumber: e.target.value
        //         })
        //     }).then((response: any) => {
        //         response.json()
        //             .then((result: any) => {
        //                 console.log(result);
        //                 if (result.message !== "success") {
        //                     setCertifyCorrect("fail");
        //                 } else {
        //                     setCertifyCorrect("success");
        //                     if (certNumberInputRef.current) {
        //                         certNumberInputRef.current.blur();
        //                     }
        //                 }
        //             })
        //     }
        //     )
        // }

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
        if (!selectedTime) {
            console.log("noTime");
            setSubmitStatus("noTime");
            return;
        }
        if (!name) {
            console.log("noName")
            setSubmitStatus("noName");
            return;
        }

        if(!telephoneNumber){
            console.log("noPhone");
            setSubmitStatus("noPhone");
            return;
        }

        setSubmitStatus("");

        const data = {
            select: select,
            date: realSelectedDay,
            time: selectedTime,
            name: name,
            telephoneNumber: telephoneNumber,
            cert: certNumber
        }
        console.log(data);

        fetch(`https://suneungsunbae.com/api/booking/submit`, {
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
                        alert("예약 완료");
                        setUpdate(Math.random());
                    }
                })
        })

    }

    return (
        <div>
            <div className={styles.formBody}>
                <div className={`${styles.questionText} ${styles.first}`}>
                    어떤 종류의 상담을 원하시나요?
                </div>
                <div className={styles.selectDiv}>
                    <div onClick={(e: any) => { setSelect(0); }} className={`${styles.select} ${select === 0 ? styles.active : ""}`}>
                        원장 대면 상담
                    </div>
                    <div onClick={(e: any) => { setSelect(1); }} className={`${styles.select} ${select === 1 ? styles.active : ""}`}>
                        원장 전화 상담
                    </div>
                    <div onClick={(e: any) => { setSelect(2); }} className={`${styles.select} ${select === 2 ? styles.active : ""} ${styles.last}`}>
                        상담 없이 시설 구경
                    </div>
                </div>

                <div className={`${styles.questionText} ${styles.second}`}>
                    상담을 원하는 시간을 선택해주세요
                </div>

                <div className={styles.calendarBox}>
                    <div className={styles.calendarWrap}>
                        <div className={styles.firstRow}>
                            <Button sx={{ width: "auto", padding: "0px", minWidth: "0px", paddingRight: "10px" }} disabled={minusMonthDisable} onClick={(e: any) => { monthChange("minus") }}>
                                <ChevronLeft className={styles.left} fill={minusMonthDisable ? "#dedede" : "black"} />
                            </Button>
                            <div className={styles.month}>
                                {year && year}년 {(month || month === 0) && month + 1}월
                            </div>
                            <Button sx={{ width: "auto", padding: "0px", minWidth: "0px", paddingLeft: "10px" }} onClick={(e: any) => { monthChange("plus") }}>
                                <ChevronRight className={styles.right} />
                            </Button>
                        </div>
                        <div className={styles.row}>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                일
                            </div>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                월
                            </div>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                화
                            </div>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                수
                            </div>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                목
                            </div>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                금
                            </div>
                            <div ref={(element) => { eachRef.current.push(element) }} className={`${styles.day}`}>
                                토
                            </div>
                        </div>
                        {
                            weeks && weeks.map((eachWeek: number) => {
                                return (
                                    <div key={eachWeek} className={styles.row}>
                                        {
                                            calendar && calendar.map((eachDay: any) => {
                                                if (eachWeek === eachDay.week) {
                                                    return (
                                                        <div key={eachDay.month * 100 + eachDay.date} ref={(element) => { eachRef.current.push(element) }} onClick={(e: any) => { dateClick(eachDay.year, eachDay.month, eachDay.date, eachDay.day, eachDay.isPast) }} className={`${styles.date} ${eachDay.day === 0 ? styles.sunday : ""} ${eachDay.isToday ? styles.todayDate : ""} ${eachDay.isPast ? styles.pastDate : ""} ${eachDay.day === 6 ? styles.saturday : ""} ${selectedDay === eachDay.year * 10000 + eachDay.month * 100 + eachDay.date ? styles.active : ""}`}>
                                                            <div className={styles.eachDate}>
                                                                {eachDay.date}
                                                            </div>
                                                            <div className={`${eachDay.isToday ? styles.today : styles.none}`}>
                                                                오늘
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className={styles.timeBox}>
                    {
                        loading &&
                        <div className={styles.loadingBox}>
                            <CircularProgress />
                        </div>
                    }
                    {
                        !loading &&
                        <>
                            {
                                isAmRemain &&
                                <div className={styles.amBox}>
                                    <div className={styles.boxTitle}>
                                        오전
                                    </div>
                                    <div className={styles.amTimeBox}>
                                        {
                                            timeData && timeData.map((eachTime: any) => {

                                                if (eachTime.ampm === "pm") {
                                                    return;
                                                }

                                                if (eachTime.isPast) {
                                                    return;
                                                }

                                                const hours = Math.floor(eachTime.time / 60);
                                                const minuteNumber = eachTime.time % 60;
                                                const minutes = minuteNumber < 10 ? "0" + minuteNumber : minuteNumber;

                                                return (
                                                    <div onClick={(e: any) => { selectTime(eachTime.time, eachTime.isPast, eachTime.possible) }} className={`${styles.eachTime} ${eachTime.possible ? "" : styles.booked} ${selectedTime === eachTime.time ? styles.active : ""}`}>
                                                        {hours}:{minutes}
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            }
                            {
                                isPmRemain &&
                                <div className={styles.pmBox}>
                                    <div className={styles.boxTitle}>
                                        오후
                                    </div>
                                    <div className={styles.pmTimeBox}>
                                        {
                                            timeData && timeData.map((eachTime: any) => {

                                                if (eachTime.ampm === "am") {
                                                    return;
                                                }

                                                if (eachTime.isPast) {
                                                    return;
                                                }

                                                const hours = Math.floor(eachTime.time / 60);
                                                const minuteNumber = eachTime.time % 60;
                                                const minutes = minuteNumber < 10 ? "0" + minuteNumber : minuteNumber;

                                                return (
                                                    <div onClick={(e: any) => { selectTime(eachTime.time, eachTime.isPast, eachTime.possible) }} className={`${styles.eachTime} ${eachTime.possible ? "" : styles.booked} ${selectedTime === eachTime.time ? styles.active : ""}`}>
                                                        {hours}:{minutes}
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            }
                            {
                                !isPmRemain && 
                                <div className={styles.noneBox}>
                                    오늘은 가능한 시간이 없어요<br></br>
                                    다른 날을 선택해주세요 😃
                                </div>
                            }

                            <div className={styles.descriptionDiv}>
                                <div className={styles.firstDescription}>
                                    <div className={styles.firstSqure}>

                                    </div>
                                    <div className={styles.firstDescriptionText}>
                                        선택
                                    </div>
                                </div>
                                <div className={styles.secondDescription}>
                                    <div className={styles.secondSqure}>

                                    </div>
                                    <div className={styles.secondDescriptionText}>
                                        불가
                                    </div>
                                </div>
                            </div>
                        </>
                    }

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
                            <div className={`${styles.certBtn} ${(fullTelephone && !certifyClicked) ? styles.active : ""}`}>
                                {
                                    !certifyClicked &&
                                    <span className={styles.btnText}>
                                        인증 필요 없음
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
                        <input ref={certNumberInputRef} pattern="\d*" value={certNumber} onChange={typeCert} placeholder="필요없음" className={styles.input} type="tel">

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
                <div className={styles.informResult}>
                    {
                        submitStatus === "noTime" &&
                        <span className={styles.informResult}>
                            시간을 선택해주세요
                        </span>
                    }
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
                        submitStatus === "noPhone" &&
                        <span className={styles.informResult}>
                            핸드폰 번호를 적어주세요
                        </span>
                    }
                </div>
                <div className={styles.submitBtnDiv}>
                    <Button onClick={submit} variant="contained" fullWidth sx={{ height: "72px", backgroundColor: "#3c3c3c", color: "white", fontWeight: 700, fontSize: "20px", "&:hover": { backgroundColor: "rgb(100,100,100)" }, "@media (max-width : 1024px)": {fontSize : "16px", height : '55.5px'} }}>
                        신청서 제출
                    </Button>
                </div>
                <div className={styles.bottomText}>
                    ※ 예약 내역을 카카오 알림톡으로 전송해드립니다
                </div>
            </div>

            <div className={styles.void}>

            </div>

            <SpeedDialComponent />
            <Footer />
        </div>
    )
}

export default RegisterForEmployee;