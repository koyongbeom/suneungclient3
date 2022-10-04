import React, { useEffect, useState, useRef } from "react";
// import { throttle } from "lodash";

import HeaderTwo from "../components/header2";
import styles from "../styles/studysystem.module.css";

import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as RightChevronWhiteSvg } from '../svg/chevron-right-solid.svg';

import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';

// import { ReactComponent as StudySvg } from '../svg/icon05.svg';
import { ReactComponent as ClickSvg } from '../svg/click.svg';

// import { ReactComponent as OfflineSvg } from '../svg/icon04.svg';
// import { ReactComponent as QuestionSvg } from '../svg/icon03.svg';
// import { ReactComponent as LifeSvg } from '../svg/icon01.svg';
// import { ReactComponent as TutorImageSvg } from '../svg/icon02.svg';

// import { ReactComponent as OfflineSvg } from '../svg/flat1.svg';
// import { ReactComponent as QuestionSvg } from '../svg/flat2.svg';
// import { ReactComponent as LifeSvg } from '../svg/flat3.svg';
// import { ReactComponent as TutorImageSvg } from '../svg/flat4.svg';
// import { ReactComponent as StudySvg } from '../svg/flat5.svg';

import { ReactComponent as OfflineSvg } from '../svg/flat4.svg';
import { ReactComponent as QuestionSvg } from '../svg/flat3.svg';
import { ReactComponent as LifeSvg } from '../svg/flat1.svg';
import { ReactComponent as TutorImageSvg } from '../svg/flat2.svg';
import { ReactComponent as StudySvg } from '../svg/flat5.svg';



import { ReactComponent as DowndownSvg } from '../svg/downdown.svg';

// import { ReactComponent as DownSvg } from '../svg/chevron-down-thin-cropped.svg';

import { ReactComponent as DownSvg } from '../svg/chevrons-down-thin-cropped.svg';


import { ReactComponent as RightRightSvg } from '../svg/right-right-arrow.svg';


// import { ReactComponent as RightBottomSvg } from '../svg/right-bottom-arrow.svg';
// import { ReactComponent as LeftBottomSvg } from '../svg/left-bottom-arrow.svg';
// import { ReactComponent as RightTopSvg } from '../svg/right-top-arrow.svg';


import { ReactComponent as RightBottomSvg } from '../svg/arrow-right-long-regular.svg';
import { ReactComponent as LeftBottomSvg } from '../svg/arrow-right-arrow-left-regular.svg';
import { ReactComponent as RightTopSvg } from '../svg/arrow-right-long-regular.svg';


// import { ReactComponent as PlaySvg } from '../svg/circle-play-regular.svg';
// import { ReactComponent as AttendanceSvg } from '../svg/출석.svg';
import { ReactComponent as ArrowRight } from '../svg/arrow-right-solid.svg';

// import SecondTotalAttendanceProcess from "../control/attendanceCheck";
import SecondTotalAttendanceProcessViewer from "../control/attendacneCheckViewer";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Alarm from "../control/attendance";
import SecondAttendanceViewer from "../control/attendanceViewer";
import PatrolReport from "../control/patrolreport";
import TestResult from "../control/testResult";
import TestResultViewer from "../control/testResultViewer";
import QuestionViewer from "../control/questionViewer";
import QuestionCheck from "../control/questionCheck";
import Scheduler from "../control/scheduler";
import Demerit from "../control/demerit";
import bookList from "../data/books";
import Footer from "../components/footer";
import PatrolReportMobile from "../control/patrolreportmobile";
import SecondTotalAttendanceProcessMobile from "../control/attendanceCheckMobile";
import AttendanceMobile from "../control/attendancemobile";
import TestResultMobile from "../control/testResultMobile";
import PreviousChart from "../control/chart";
import QuestionCheckMobile from "../control/questioncheckmobile";
import { useNavigate } from "react-router-dom";
import SpeedDialComponent from "../control/speeddial";
import AttendanceCheck2 from "../control/attendanceCheck2";

import ReactGa from "react-ga4";



const StudySystem: React.FC = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const [bool, setBool] = useState(true);
    const [style, setStyle] = useState<any>({
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1150,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    });
    const [kind, setKind] = useState("");
    const [longBookList, setLongBookList] = useState([]);
    const firstOrderBoxRef = useRef<any>(null);
    const [headerBoarderStyle, setHeaderBoarderStyle] = useState<any>({
        display : "none"
    })
    const lastRef = useRef<any>(null);
    const boarderRef = useRef<any>(null);
    const [modalHash, setModalHash] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const handleCloseHash = () => {
        navigate(-1);
    }


    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "studysystempageview"
        // });

        // ReactGa.send({
        //     hitType : "pageview",
        //     page_title : "/studysystem"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "studysystem"
        });

    }, []);
    //--------------------------------------------------------



    useEffect(()=>{
        console.log(window.location.hash);
        console.log(1);
        const handleOnHashChange = () => {
            console.log("hashChange");
            setModalHash(window.location.hash);
            console.log(open);
            if(window.location.hash === "#modal"){
                console.log(2);
                setOpen(true);
            }else if(!window.location.hash){
                console.log(3);
                setOpen(false);
            }
        }

        window.addEventListener("hashchange", handleOnHashChange);

        return ()=> window.removeEventListener("hashchange", handleOnHashChange);

    }, [open]);


    useEffect(() => {

        window.scrollTo(0, 0);

        const newBookList : any = [];
        for(var i=0; i < 10; i++){
            bookList.forEach((eachBook : any)=>{
                newBookList.push(eachBook);
            })
        }

        setLongBookList(newBookList);

    }, []);

    const handleScroll = () => {
        var value = (window.scrollY/lastRef.current.offsetTop) * 100;
        if(value > 100){
            value = 100;
        }
        boarderRef.current.style.width = `${value}%`
    };

    useEffect(() => {
        // console.log(lastRef.current.offsetTop);

        // const throttledFunction = throttle(handleScroll, 100);

        // window.addEventListener('scroll', throttledFunction);
        // return () => {
        //   window.removeEventListener('scroll', throttledFunction); //clean up
        // };
      }, []);


    const showAttendanceCheck = () => {
        setStyle({
            ...style, width: 1150, height : "auto", p : 4
        });
        setKind("attendanceCheck");
        handleOpen();
    }

    const showAttendance = () => {
        setStyle({
            ...style, width: 1250, height : "auto", p : 2
        });
        setKind("attendance");
        handleOpen();

    }

    const showPatrolReport = () => {
        setStyle({
            ...style, width: 800, height : "auto", p : 4
        });
        setKind("patrolReport");
        handleOpen();
    }

    const showTestResult = () => {
        setStyle({
            ...style, width: 1150, height : "auto", p : 4
        });
        setKind("testResult");
        handleOpen();
    }

    const showConsultReport = () => {
        setStyle({
            ...style, width: 1250, height : "auto", p : 4
        });
        setKind("consultReport");
        handleOpen();
    }

    const showQuestionCheck = () => {
        setStyle({
            ...style, width: 1150, height : "auto"
        });
        setKind("questionCheck");
        handleOpen();
    }


    const showScheduler = () => {
        setStyle({
            ...style, width: 765, height : "auto", p : 4
        });
        setKind("scheduler");
        handleOpen();


    }
    
    const showDemerit = () => {
        setStyle({
            ...style, width: 765, height : "auto", p : 4
        });
        setKind("demerit");
        handleOpen();

    }

    const showAttendanceMobile = () => {
        setStyle({
            ...style, width: "100%", height : "100%", border : "none", borderRadius : 0, boxShadow : "none", padding : 0, overflow : "hidden"
        })
        setKind("attendanceMobile");
        window.location.assign("/studysystem#modal");
        // handleOpen();


    }

    const showSchedulerMobile = () => {
        setStyle({
            ...style, width: "100%", height : "100%",border : "none", borderRadius : 0, boxShadow : "none", padding : 0
        });
        setKind("schedulerMobile");
        window.location.assign("/studysystem#modal");
        //handleOpen();

    }

    const showDemeritMobile = () => {
        setStyle({
            ...style, width: "100%", height : "100%",border : "none", borderRadius : 0, boxShadow : "none", padding : 0
        });
        setKind("demeritMobile");
        window.location.assign("/studysystem#modal");
        //handleOpen();

    }

    return (
        <div className={styles.main}>
            <HeaderTwo />
            <div className={styles.voidHeader}>

            </div>
            <div ref={boarderRef} className={styles.headerBoarder} style={headerBoarderStyle}>
            
            </div>
            <div className={styles.subHeader} style={{ backgroundImage: "url(img/interview7.webp)" }}>
                <div className={styles.blackFilter}>
                </div>
                <div className={styles.subHeaderText}>
                    <div className={styles.subHeaderTextTitle}>
                       공부 잘하는 방법을
                    </div>
                    <div className={styles.subHeaderTextTitle}>
                        확실하게 아는 수능선배가
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        독학의 방향을 코칭합니다
                    </div>
                    <div className={styles.subHeaderTextSubTitle}>

                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerDiv} ${styles.onlyPC}`}>
                <div className={styles.currentMenuViewer}>
                    <HouseSvg className={styles.houseSvg} />
                    <RightChevronSvg className={styles.rightChevron} />
                    <div className={styles.currentMenuViewerText_2}>
                        학습시스템
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>

            </div>

            <div className={styles.titleText}>
                수능선배 자물쇠반<br></br>학습시스템을 소개합니다
            </div>

            <div className={styles.svgBox}>
                <div className={styles.svgBox_1}>
                    <div className={styles.eachSvgBox}>
                        <div className={styles.eachSvgBoxNumber}>
                            01
                        </div>
                        <div className={styles.eachSvgBoxImage}>
                            <LifeSvg className={styles.lifeSvg} />
                        </div>
                        <div className={styles.eachSvgBoxTitle_1}>
                            생활 관리가
                        </div>
                        <div className={styles.eachSvgBoxTitle_2}>
                            강력합니다
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_1}>
                            사감 → 원장 → 학부모
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_2}>
                            3중 확인을 통한 생활관리
                        </div>
                    </div>
                    <div className={styles.eachSvgBox}>
                        <div className={styles.eachSvgBoxNumber}>
                            02
                        </div>
                        <div className={styles.eachSvgBoxImage}>
                            <TutorImageSvg className={styles.tutorSvg} />
                        </div>
                        <div className={styles.eachSvgBoxTitle_1}>
                            공부 잘하는 방법을
                        </div>
                        <div className={styles.eachSvgBoxTitle_2}>
                            코칭합니다
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_1}>
                            학습 성향과 취약 과목에 따라
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_2}>
                            담임멘토 매칭
                        </div>
                    </div>
                    <div className={`${styles.eachSvgBox} ${styles.last}`}>
                        <div className={styles.eachSvgBoxNumber}>
                            03
                        </div>
                        <div className={styles.eachSvgBoxImage}>
                            <QuestionSvg className={styles.questionSvg} />
                        </div>
                        <div className={styles.eachSvgBoxTitle_1}>
                            질문은
                        </div>
                        <div className={styles.eachSvgBoxTitle_2}>
                            당일에 해결합니다
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_1}>
                            의치약 튜터에게
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_2}>
                            매일 질의응답 가능
                        </div>
                    </div>
                </div>

                <div className={styles.svgBox_2}>
                    <div className={`${styles.eachSvgBox}`}>
                        <div className={styles.eachSvgBoxNumber}>
                            04
                        </div>
                        <div className={styles.eachSvgBoxImage}>
                            <StudySvg className={styles.studySvg} />
                        </div>
                        <div className={styles.eachSvgBoxTitle_1}>
                            컨텐츠를
                        </div>
                        <div className={styles.eachSvgBoxTitle_2}>
                            부족함 없이 제공합니다
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_1}>
                            이감, 한수, 바탕, 상상 등
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_2}>
                            점수대별 그룹 스터디
                        </div>
                    </div>
                    <div className={`${styles.eachSvgBox} ${styles.mobileLast}`}>
                        <div className={styles.eachSvgBoxNumber}>
                            05
                        </div>
                        <div className={styles.eachSvgBoxImage}>
                            <OfflineSvg className={styles.offlineSvg} />
                        </div>
                        <div className={styles.eachSvgBoxTitle_1}>
                            실전 모의고사로
                        </div>
                        <div className={styles.eachSvgBoxTitle_2}>
                            실전을 연습합니다
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_1}>
                            평가원, 더프, 이투스
                        </div>
                        <div className={styles.eachSvgBoxSubTitle_2}>
                            학원 내 시행
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.administratorDiv}>
                <div className={styles.administratorSubDiv}>
                    <div className={`${styles.administratorText}`}>
                        <div className={styles.administratorTitle_1}>
                            수능선배 자물쇠반
                        </div>
                        <div className={styles.administratorTitle_2}>
                            책임관리자
                        </div>
                        <div className={`${styles.administratorDescription_1} ${styles.onlyPC}`}>
                            - 現 수능선배 박가을 원장<br></br>- 前 피트선배 강남본점 원장<br></br>- 한양대학교 약학대학 차석 졸업<br></br>- 연세대학교 졸업
                        </div>
                    </div>
                    <div className={styles.administratorPhoto}>
                        <img className={styles.gaeulPhoto} src="img/gaeul3.webp" alt="gaeul" />
                    </div>
                </div>
            </div>

            <div className={`${styles.mobileAdministartorText} ${styles.onlymobile}`}>
                - 現 수능선배 박가을 원장<br></br>- 前 피트선배 강남본점 원장<br></br>- 한양대학교 약학대학 차석 졸업<br></br>- 연세대학교 졸업
            </div>

            <div className={`${styles.doubleDownSvgDiv} ${styles.onlyPC}`}>
                <DowndownSvg />
            </div>

            <div className={styles.firstSection}>
                <div className={styles.firstSectionDiv}>
                    <div className={styles.sectionTitle}>
                        <div className={`${styles.sectionTitleNumber} ${styles.sectionTitleNumberFirst}`}>
                            01
                        </div>
                        <div className={styles.sectionTitleText}>
                            생활관리가 강력합니다
                        </div>
                    </div>
                    <div className={styles.sectionSubTitle}>
                        1) 출결 관리
                    </div>
                    <div className={styles.sectionSubTitle_2}>
                        '사감 → 원장 → 학부모' 를 통한 3중 확인
                    </div>
                    <div className={styles.orderBox}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/patrol102.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    01.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 1.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    사감이 매교시마다 순찰하며 출석체크
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                생활관리 담당 사감이 아침 8시부터 밤 10시까지 하루 9번 교시별로 출석체크 후<br></br>공석인 사람들에게 연락해 자리에 없는 이유를 조사합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                생활관리 담당 사감이 아침 8시부터 밤 10시까지 하루 9번 교시별로 출석체크 후 공석인 사람들에게 연락해 자리에 없는 이유를 조사합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} /> 
                    </div>


                    <div className={`${styles.orderBox} ${styles.withTableSub}`} ref={firstOrderBoxRef}>
                        <div className={`${styles.orderBoxPictureBoxCapture} ${styles.onlyPC}`}>
                            <SecondTotalAttendanceProcessViewer />
                            <div onClick={showAttendanceCheck} className={styles.playText}>
                                클릭해보세요
                                <ArrowRight fill="white" className={styles.arrowRight} />
                            </div>
                        </div>
                        <div className={`${styles.orderBoxPicturBoxCaptureMobileDiv} ${styles.administratorReport} ${styles.onlymobile}`}>
                            <div className={styles.orderBoxPictureBoxCaptureMobile}>
                                <SecondTotalAttendanceProcessMobile />
                            </div>
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    02.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 2.
                                </div>
                                <span className={`${styles.orderBoxTitle} ${styles.onlyPC}`}>
                                    원장이 전용 프로그램 기록과 사감의 보고 내용을 비교 검토
                                </span>
                                <span style={{lineHeight : "24px"}} className={`${styles.orderBoxTitle} ${styles.onlymobile}`}>
                                    원장이 전용 프로그램 지문 출입 기록과<br></br>사감의 보고 내용을 비교 검토
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                지문 출입 기록을 바탕으로 현재 공석인 학생들의 목록을 보여주는 전용 프로그램의 기록과 <br></br>사감의 출결 보고를 원장이 재검토합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                지문 출입 기록을 바탕으로 현재 공석인 학생들의 목록을 보여주는 전용 프로그램의 기록과 사감의 출결 보고를 원장이 재검토합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.last}`}>
                        <div className={`${styles.orderBoxPictureBoxCapture} ${styles.onlyPC}`}>
                            <SecondAttendanceViewer />
                            <div onClick={showAttendance} className={styles.playText}>
                                클릭해보세요
                                <ArrowRight fill="white" className={styles.arrowRight} />
                            </div>
                        </div>

                        <div className={`${styles.orderBoxPictureBox} ${styles.onlymobile}`}>
                            <img src="img/attendance5.webp" className={styles.orderBoxPicture} />
                            <div onClick={showAttendanceMobile} className={`${styles.orderBoxPictureBtn} ${styles.onlymobile}`}>
                                <div>
                                    클릭해보세요
                                </div>
                                <div>
                                    <RightChevronWhiteSvg className={styles.rightChevronWhite} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    03.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 3.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    학부모가 학생의 출입기록을 실시간 열람 가능
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                수능선배 전용 프로그램에서 학생의 외출을 포함한 모든 출입기록 및<br></br> 벌점 내역을 실시간 열람할 수 있습니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                수능선배 전용 프로그램에서 학생의 외출을 포함한 모든 출입기록 및 벌점 내역을 실시간 열람할 수 있습니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            타사와의 차별점
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                출석체크 횟수
                            </div>
                            <div className={styles.differentiationList_2}>
                                아침 8시부터 밤 10시까지 하루 9번의 대면 출석체크를 통해 빈틈없이 관리합니다.
                            </div>
                        </div>
                        <div id="scheduler" className={`${styles.differentiationList}`}>
                            <div className={styles.differentiationList_1}>
                                정밀한 체크
                            </div>
                            <div className={styles.differentiationList_2}>
                                전용 프로그램에서 현재 공석자 및 10분 이상 외출자를 분석하기 때문에 1명의 이탈자도 없이 관리합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                학부모 열람
                            </div>
                            <div className={styles.differentiationList_2}>
                                수능선배 전용 앱에서 학생의 외출을 포함한 모든 출입 내역과 벌점 내역을 실시간으로 볼 수 있습니다.
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.lastBtnDiv} ${styles.onlyPC}`}>
                        <Button onClick={showScheduler} variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)" : {width : "215px", height : "49px", borderRadius : "24.5px", fontSize : "15.5px"} }}>시간표 보기</Button>
                    </div>
                    <div className={`${styles.lastBtnDiv} ${styles.onlymobile}`}>
                        <Button className={styles.scheduleBtn} onClick={showSchedulerMobile} variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)" : {width : "215px", height : "49px", borderRadius : "24.5px", fontSize : "15.5px"} }}>시간표 보기</Button>
                    </div>

                    <div className={styles.voidHeight}>
                        {/* <div className={`${styles.voidHeightMobile} ${styles.onlymobile}`}>
                        </div> */}
                    </div>

                    <div className={styles.sectionSubTitle}>
                        2) 학습 분위기 관리
                    </div>
                    <div className={styles.sectionSubTitle_2}>
                        핸드폰 수거, 수면 금지, 사이트 차단  
                    </div>




                    <div className={styles.orderBox}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/cellphone.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    01.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 1.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    사감이 교시마다 핸드폰 제출 여부 확인
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                매 교시마다 출석한 모든 학생의 핸드폰이 수거되었는지 철저하게 확인합니다.<br></br>주말을 포함한 전 시간 자습실 내에서의 휴대폰 사용이 금지되며, 적발 시 벌점 5점이 부과됩니다. 
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                매 교시마다 출석한 모든 학생의 핸드폰이 수거되었는지 철저하게 확인합니다. 주말을 포함한 전 시간 자습실 내에서의 휴대폰 사용이 금지되며, 적발 시 벌점 5점이 부과됩니다. 
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.withTableSub}`}>
                        <div style={{marginTop : "26.5px"}} className={`${styles.orderBoxPicturBoxCaptureMobileDiv} ${styles.patrol} ${styles.onlymobile}`}>
                            <div className={`${styles.orderBoxPictureBoxCaptureMobile} ${styles.patrol}`}>
                                <PatrolReportMobile />
                            </div>
                        </div>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/patrol101.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    02.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 2.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    사감이 교시마다 순찰하며 딴짓, 수면 완벽 차단
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                사감은 매 교시마다 자습실 내 곳곳에 분포하는 QR CODE를 태깅하며 순찰하도록 되어 있습니다.<br></br>딴짓과 수면 없이 긴장감을 유지하게 하기 위함이며, 이 내용을 순찰보고서에 기록합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                사감은 매 교시마다 자습실 내 곳곳에 분포하는 QR CODE를 태깅하며 순찰하도록 되어 있습니다. 딴짓과 수면 없이 긴장감을 유지하게 하기 위함이며, 이 내용을 순찰보고서에 기록합니다.
                            </div>
                            <div onClick={showPatrolReport} className={`${styles.subDescription} ${styles.onlyPC}`}>
                                순찰일지 보기
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={styles.orderBox}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/cctv6.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    03.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 3.
                                </div>
                                <span className={`${styles.orderBoxTitle} ${styles.onlyPC}`}>
                                    원장이 CCTV 스크린샷과 사감의 순찰 보고서 내용 비교 검토
                                </span>
                                <span style={{lineHeight : "24px"}} className={`${styles.orderBoxTitle} ${styles.onlymobile}`}>
                                    원장이 CCTV 스크린샷과<br></br>사감의 순찰 보고서 내용 비교 검토
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                사감이 QR코드를 태깅하는 순간 캡처되는 CCTV 스크린샷과<br></br>사감의 순찰 보고서 내용을 비교 검토하여 생활관리가 잘 되도록 감시합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                사감이 QR코드를 태깅하는 순간 캡처되는 CCTV 스크린샷과 사감의 순찰 보고서 내용을 비교 검토하여 생활관리가 잘 되도록 감시합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            공부 분위기 관리사항
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                사이트 차단
                            </div>
                            <div className={styles.differentiationList_2}>
                                학원 등원과 동시에 핸드폰 의무 제출 및 인강 사이트 외 모든 사이트의 접속이 차단되어 있습니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                분위기 관리
                            </div>
                            <div className={styles.differentiationList_2}>
                                자습시간 중 잠을 자거나 딴 짓을 하는 행동을 엄격히 통제하고 학원 내 친목을 금지합니다.
                            </div>
                        </div>
                    </div>


                    <div className={styles.voidHeight}>
                        {/* <div className={`${styles.voidHeightMobile} ${styles.onlymobile}`}>
                        </div> */}
                    </div>

                    <div className={styles.sectionSubTitle}>
                        3) 벌점 제도
                    </div>
                    <div className={styles.sectionSubTitle_2}>
                        학부모님과 긴밀한 소통을 통한 벌점 관리
                    </div>

                    <div className={styles.diagramDiv}>
                        <div className={`${styles.orderBoxDescriptionBox} ${styles.onlymobile}`}>
                            <div className={`${styles.orderBoxDescriptionBoxTitle} ${styles.onlymobile}`}>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 1.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    모든 벌점 부과내역 학부모 통지
                                </span>
                            </div>
                            <div className={styles.orderBoxDescriptionBoxDescription}>
                                모든 벌점 부과내역을 학생과 학부모에게 통지하고 학생은 벌점 부과된 내역에 이의가 있으면 사감에게 벌점 이의 신청할 수 있습니다.
                            </div>
                        </div>
                        <div className={styles.diagramDivFirst}>
                            <div className={styles.diagramDivFirst_1}>
                                <div className={`${styles.circle} ${styles.firstCircle} ${styles.chief}`}>
                                    사감
                                </div>
                            </div>
                            <div className={styles.diagramDivFirst_2}>
                                <div className={styles.diagramDivFirst_2_1}>
                                    <RightTopSvg fill="#666666" className={`${styles.mobileRightSvg} ${styles.chevronFirst}`} />
                                </div>
                                <div className={styles.diagramDivFirst_2_2}>
                                    {/* 벌점 부과 내역 통지 */}
                                </div>
                                <div className={styles.diagramDivFirst_2_3}>
                                    <RightBottomSvg fill="#666666" className={`${styles.mobileRightSvg} ${styles.chevronSecond}`} />
                                </div>
                            </div>
                            <div className={styles.diagramDivFirst_3}>
                                <div className={`${styles.circle} ${styles.student}`}>
                                    수험생
                                </div>
                                <div className={`${styles.circle} ${styles.parent}`}>
                                    학부모
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.downSvgDiv} ${styles.onlymobile} ${styles.diagram}`}>
                            <DownSvg fill="#424242" className={styles.downSvg} />
                        </div>
                        <div className={`${styles.diagramDivCenter} ${styles.onlyPC}`}>
                            <RightRightSvg className={styles.rightSvg} />
                        </div>
                        <div className={`${styles.orderBoxDescriptionBox} ${styles.onlymobile}`}>
                            <div className={`${styles.orderBoxDescriptionBoxTitle} ${styles.onlymobile}`}>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 2.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    벌점 초과 시 학부모 상담으로 퇴원 여부 결정
                                </span>
                            </div>
                            <div className={styles.orderBoxDescriptionBoxDescription}>
                                일정 벌점 초과시 프로그램 상 출입 지문이 삭제하여 출입이 통제됩니다. 원장 상담 후 출입이 허용되며 학부모 상담 후 퇴원 여부가 결정됩니다.
                            </div>
                        </div>
                        <div className={styles.diagramDivFirst}>
                            <div className={styles.diagramDivFirst_1}>
                                <div className={`${styles.circle} ${styles.chief}`}>
                                    원장
                                </div>
                            </div>
                            <div className={styles.diagramDivFirst_2}>
                                <div className={`${styles.diagramDivFirst_2_1} ${styles.second}`}>
                                    <LeftBottomSvg   fill="#666666" className={`${styles.leftBottom} ${styles.mobileRightSvg} ${styles.mobileRightFirstSvg}`} />
                                    <div className={styles.topRightText}>
                                        {/* 1. 지문삭제 */}
                                    </div>
                                    <div className={styles.bottomLeftText}>
                                        {/* 2. 원장 상담 및 반성문 제출 */}
                                    </div>
                                </div>
                                <div className={`${styles.diagramDivFirst_2_3} ${styles.second}`}>
                                    <LeftBottomSvg  fill="#666666" className={`${styles.mobileRightSvg} ${styles.leftBottomFriend} ${styles.mobileRightSecondSvg}`} />
                                    <div className={styles.bottomRightText}>
                                        {/* 3. 학부모와 상의 후<br></br>퇴원 여부 결정 */}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.diagramDivFirst_3}>
                                <div className={`${styles.circle} ${styles.student}`}>
                                    수험생
                                </div>
                                <div className={`${styles.circle} ${styles.parent}`}>
                                    학부모
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.diagramTextDiv} ${styles.onlyPC}`}>
                        <div className={styles.diagramTextDiv_1}>
                            <div className={styles.diagramTextTitle}>
                                <span className={styles.diagramTextNumber}>
                                    01.
                                </span>
                                &nbsp;&nbsp;모든 벌점 부과내역 학부모 통지
                            </div>
                            <div className={styles.diagramTextDescription}>
                                모든 벌점 부과내역을 학생과 학부모에게 통지하고 학생은 벌점 부과된<br></br>
                                내역에 이의가 있으면 직원에게 벌점 이의 신청할 수 있습니다.
                            </div>
                        </div>
                        <div className={styles.diagramTextDiv_2}>
                            <div className={styles.diagramTextTitle}>
                                <span className={styles.diagramTextNumber}>
                                    02.
                                </span>
                                &nbsp;&nbsp;벌점 초과 시 학부모 상담으로 퇴원 여부 결정
                            </div>
                            <div className={styles.diagramTextDescription}>
                                일정 벌점 초과시 프로그램 상 출입 지문이 삭제하여 출입이 통제됩니다.<br></br>원장 상담 후 출입이 허용되며 학부모 상담 후 퇴원 여부가 결정됩니다.
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.lastBtnDiv} ${styles.onlyPC}`}>
                        <Button variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)" : {width : "215px", height : "49px", borderRadius : "24.5px", fontSize : "15.5px"} }} onClick={showDemerit}>벌점표 보기</Button>
                    </div>

                    <div className={`${styles.lastBtnDiv} ${styles.onlymobile}`}>
                        <Button variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)" : {width : "215px", height : "49px", borderRadius : "24.5px", fontSize : "15.5px"} }} onClick={showDemeritMobile}>벌점표 보기</Button>
                    </div>

                    <div className={styles.voidHeight2}>

                    </div>
                </div>
            </div>

            <div className={styles.secondSection}>
                <div className={styles.secondSectionDiv}>
                    <div className={styles.sectionTitle}>
                        <div className={styles.sectionTitleNumber}>
                            02
                        </div>
                        <div className={styles.sectionTitleText}>
                            공부 잘하는 법을 코칭합니다
                        </div>
                    </div>
                    <div className={styles.sectionSubTitle}>
                        1) 담임멘토 선발 절차
                    </div>
                    <div className={`${styles.sectionSubTitle_2} ${styles.onlyPC}`}>
                        진심으로 학생의 고민을 함께할 담임멘토를 뽑기 위해 노력합니다
                    </div>
                    <div className={`${styles.sectionSubTitle_2} ${styles.onlymobile}`}>
                        진심으로 학생의 고민을 함께할<br></br>담임멘토를 뽑기 위해 노력합니다
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/newpic/dsc03594_3.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    01.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 1.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    300명의 지원자 중 서류 평가로 20명 선발
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                서류 평가 시 학벌 및 수능 점수 뿐만 아니라 공부법에 대한 고민 정도와<br></br>공부 상담 관련 경험 여부를 보고 20명의 지원자를 뽑습니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                서류 평가 시 학벌 및 수능 점수 뿐만 아니라 공부법에 대한 고민 정도와 공부 상담 관련 경험 여부를 보고 20명의 지원자를 뽑습니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/newpic/dsc03566_e.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    02.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 2.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    면접에서 상담 시뮬레이션 및 문제 설명 시연
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                담임 면접에서는 학생 케이스에 맞는 공부방법 솔루션을 제시해보는 시뮬레이션과<br></br>자신 있는 과목에 대한 이론 및 문제 풀이 설명을 평가합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                담임 면접에서는 학생 케이스에 맞는 공부방법 솔루션을 제시해보는 시뮬레이션과 자신 있는 과목에 대한 이론 및 문제 풀이 설명을 평가합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/education2.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    03.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 3.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    6년간 쌓인 데이터 기반 담임 교육 프로그램
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                6년간 상담을 하며 쌓인 데이터를 토대로 담임 교육 프로그램을 시행하고 있고<br></br>이를 통해 신규 담임에게 1:1 교육과정을 제공합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                6년간 상담을 하며 쌓인 데이터를 토대로 담임 교육 프로그램을 시행하고 있고 이를 통해 신규 담임에게 1:1 교육과정을 제공합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/tutor6.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    04.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 4.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    매달 '상담 만족도 평가'를 기반으로 한 담임 회의
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                매달 학생들을 대상으로 상담 만족도 평가를 시행하고 평가 결과를 토대로<br></br>전체 담임이모여 학생들에게 더 도움을 줄 수 있는 방향을 논의합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                매달 학생들을 대상으로 상담 만족도 평가를 시행하고 평가 결과를 토대로 전체 담임이 모여 학생들에게 더 도움을 줄 수 있는 방향을 논의합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            타사와의 차별점
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                선발 기준
                            </div>
                            <div className={styles.differentiationList_2}>
                                수능선배에서는 학벌 뿐만 아니라 담임의 티칭 실력, 공부 방법 고민정도, 성실함 등을 종합적으로 판단해 선발합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList}`}>
                            <div className={styles.differentiationList_1}>
                                교육 프로그램
                            </div>
                            <div className={styles.differentiationList_2}>
                                최종 선발 된 모든 담임은 6년간 쌓인 상담 데이터를 토대로 만든 교육 프로그램을 이수해야 합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                전체 회의
                            </div>
                            <div className={styles.differentiationList_2}>
                                매달 학생들에게 상담에 대한 평가를 받고 그 평가를 토대로 모든 담임들이 모여 부족함 점을 개선하기 위해 노력합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.voidHeight}>
                        {/* <div className={`${styles.voidHeightMobile} ${styles.onlymobile}`}>
                        </div> */}
                    </div>

                    <div className={styles.sectionSubTitle}>
                        2) 매 주 30분 담임멘토 상담
                    </div>
                    <div className={`${styles.sectionSubTitle_2} ${styles.onlyPC}`}>
                         과목 밸런스, 주간 계획 수립 및 이행을 1주일 주기로 체크합니다 
                    </div>
                    <div className={`${styles.sectionSubTitle_2} ${styles.onlymobile}`}>
                         과목 밸런스, 주간계획 수립 및 이행을<br></br> 1주일 주기로 체크합니다 
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/test99.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    01.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 1.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    한 주 동안 공부한 단원에 대한 미니 테스트
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                학생이 이번주에 나간 진도에 해당하는 문제 75%, 과거에 틀렸던 문제 25% 비율로<br></br>구성되도록 담당 담임이 출제한 개개인별 테스트를 제한시간에 맞춰 풉니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                학생이 이번주에 나간 진도에 해당하는 문제 75%, 과거에 틀렸던 문제 25% 비율로 구성되도록 담당 담임이 출제한 개개인별 테스트를 제한시간에 맞춰 풉니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.withTableSub} ${styles.second}`}>
                        <div className={`${styles.orderBoxPictureBoxCapture} ${styles.onlyPC}`}>
                            <TestResultViewer />
                            <div onClick={showTestResult} className={styles.playText}>
                                기능 미리보기
                                <ArrowRight fill="white" className={styles.arrowRight} />
                            </div>
                        </div>
                        <div className={`${styles.orderBoxPicturBoxCaptureMobileDiv} ${styles.resultDataDiv} ${styles.onlymobile}`}>
                            <div className={styles.orderBoxPictureBoxCaptureMobile}>
                                <TestResultMobile />
                            </div>
                        </div>

                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    02.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 2.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    담임멘토가 채점 후 오답률 높은 파트 분석
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                담임이 시험지 채점 후 오답 내역을 분석해 학생의 취약 파트를 찾아낸 후<br></br>한 주 동안 공부한 내용에 대해 피드백할 점을 찾습니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                담임이 시험지 채점 후 오답 내역을 분석해 학생의 취약 파트를 찾아낸 후 한 주 동안 공부한 내용에 대해 피드백할 점을 찾습니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/main5.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    03.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 3.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    이행을 잘 했는지, 과목 편중은 없었는지 점검
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                주간 계획을 함께 수립하고 그 계획을 이행했는지 확인하며, 과목별 밸런스를 확인합니다.<br></br>테스트를 바탕으로 취약한 과목과 유형을 집중적으로 보완할 수 있게 학습의 방향을 잡아줍니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                주간 계획을 함께 수립하고 그 계획을 이행했는지 확인하며, 과목별 편중 없이 공부하고 있는 지를 확인합니다. 테스트를 바탕으로 취약한 과목과 유형을 집중적으로 보완할 수 있게 학습의 방향을 잡아줍니다.
                            </div>

                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.second}`}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/consultreport2.webp" className={`${styles.orderBoxPicture} ${styles.reportPicture}`} />
                            <div onClick={showConsultReport} className={styles.playText}>
                                일지 크게보기
                                <ArrowRight fill="white" className={styles.arrowRight} />
                            </div>
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    04.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 4.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    상담일지 작성 및 다음주 시험 출제
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                학생과의 상담 내용을 학부모님과 학생이 열람할 수 있도록 전용 프로그램에 기록하고<br></br>학생 진도와 실력에 맞게 다음주 시험문제를 출제합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                학생과의 상담 내용을 학부모님과 학생이 열람할 수 있도록 전용 프로그램에 기록하고 학생 진도와 실력에 맞게 다음주 시험문제를 출제합니다.
                            </div>

                        </div>
                    </div>


                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            타사와의 차별점
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                담임 배정
                            </div>
                            <div className={styles.differentiationList_2}>
                                담임 배정은 학생의 공부 성향, 수강 중인 인강 강사, 취약 과목을 토대로 배정하고 배정한 이유를 학생과 학부모님께 전달합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList}`}>
                            <div className={styles.differentiationList_1}>
                                개인별 테스트
                            </div>
                            <div className={`${styles.differentiationList_2}`}>
                                학생 진도, 실력, 오답에 맞는 개인별 테스트를 담당 담임멘토가 직접 출제하고 시행합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList}`}>
                            <div className={styles.differentiationList_1}>
                                오답 관리
                            </div>
                            <div className={styles.differentiationList_2}>
                                학생별 오답내역을 전부 전용 프로그램에 기록해두고 해당 데이터를 토대로 취약 파트를 반복 출제합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList}`}>
                            <div className={styles.differentiationList_1}>
                                상담 일지
                            </div>
                            <div className={styles.differentiationList_2}>
                                전용 프로그램에 상담 일지를 기록되기 때문에 학부모님과 학생이 언제든지 상담 일지를 앱에서 열람할 수 있습니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                진도 관리
                            </div>
                            <div className={styles.differentiationList_2}>
                                진도 내역을 담임멘토가 직접 학생 아이디로 인강 사이트에 로그인해 수강기록을 확인합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.voidHeight2}>

                    </div>

                </div>
            </div>

            <div className={styles.thirdSection}>
                <div className={styles.thirdSectionDiv}>
                    <div className={styles.sectionTitle}>
                        <div className={styles.sectionTitleNumber}>
                            03
                        </div>
                        <div className={styles.sectionTitleText}>
                            질문은 당일에 해결합니다
                        </div>
                    </div>
                    <div className={styles.sectionSubTitle}>
                        1) 오프라인 질의응답
                    </div>
                    <div className={styles.sectionSubTitle_2}>
                        튜터가 생각을 정리 후 진행하는 질의응답
                    </div>
                    <div className={styles.orderBox}>
                        <div className={`${styles.orderBoxPictureBox} ${styles.questionApply}`} style={{backgroundColor : "#f5f5f5"}}>
                            <img src="img/questionApply.webp" className={`${styles.orderBoxPicture} ${styles.question}`} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    01.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 1.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    전용 프로그램을 통해 비어있는 시간 확인 후 예약
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                학생이 선호하는 튜터의 비어 있는 시간을 미리 확인한 후 예약할 수 있고<br></br>예약시 질의응답 내용을 같이 전송합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                학생이 선호하는 튜터의 비어 있는 시간을 미리 확인한 후 예약할 수 있고 예약시 질의응답 내용을 같이 전송합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={styles.orderBox}>
                        <div className={styles.orderBoxPictureBox}>
                            <img src="img/answer2.webp" className={styles.orderBoxPicture} />
                        </div>
                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    02.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 2.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    튜터가 미리 답변 내용을 정리한 후 질의응답 진행 
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                수능점수 및 문제설명 실력을 토대로 50:1 경쟁률로 뽑힌 튜터가 미리 질의응답 내용에 대해<br></br>정리한 후 답변을 진행하기 때문에 정확한 질의응답이 가능합니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                수능점수 및 문제설명 실력을 토대로 50:1 경쟁률로 뽑힌 튜터가 미리 질의응답 내용에 대해 정리한 후 답변을 진행하기 때문에 정확한 질의응답이 가능합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.downSvgDiv}>
                        <DownSvg fill="#424242" className={styles.downSvg} />
                    </div>

                    <div className={`${styles.orderBox} ${styles.questionDataStyle}`} ref={firstOrderBoxRef}>
                        <div className={`${styles.orderBoxPictureBoxCapture} ${styles.onlyPC}`}>
                            <QuestionViewer />
                            <div onClick={showQuestionCheck} className={styles.playText}>
                                클릭해보세요
                                <ArrowRight fill="white" className={styles.arrowRight} />
                            </div>
                        </div>
                        <div className={`${styles.orderBoxPicturBoxCaptureMobileDiv} ${styles.onlymobile}`}>
                            <div className={styles.orderBoxPictureBoxCaptureMobile}>
                                <QuestionCheckMobile />
                            </div>
                        </div>

                        <div className={styles.orderBoxDescriptionBox}>
                            <div className={styles.orderBoxDescriptionBoxTitle}>
                                <span className={styles.orderBoxNumber}>
                                    03.
                                </span>
                                <span className={styles.onlyPC}>
                                    &nbsp;&nbsp;&nbsp;
                                </span>
                                <div className={`${styles.orderBoxNumberMobile} ${styles.onlymobile}`}>
                                    STEP 3.
                                </div>
                                <span className={styles.orderBoxTitle}>
                                    질문 신청자 수가 많은 질의응답 튜터 위주로 운영
                                </span>
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlyPC}`}>
                                각 튜터별 질의응답 신청률 데이터를 분석해 학생들이 신청을 많이 하는 튜터 위주로<br></br>질의응답을 진행해 학생들의 만족도를 높입니다.
                            </div>
                            <div className={`${styles.orderBoxDescriptionBoxDescription} ${styles.onlymobile}`}>
                                각 튜터별 질의응답 신청률 데이터를 분석해 학생들이 신청을 많이 하는 튜터 위주로 질의응답을 진행해 학생들의 만족도를 높입니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={`${styles.differentiationTitle} ${styles.questionDataTitle}`}>
                            타사와의 차별점
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                튜터 선발
                            </div>
                            <div className={styles.differentiationList_2}>
                                학교나 수능 성적 뿐만 아니라 직접 이론 및 문제 풀이를 설명해보는 면접 평가를 통해 뽑아 티칭 실력을 보장합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList}`}>
                            <div className={styles.differentiationList_1}>
                                만족도 반영
                            </div>
                            <div className={styles.differentiationList_2}>
                                질의응답 신청률 데이터를 분석 후 학생들의 신청률이 높은 튜터 위주로 운영해 질의응답 만족도를 올립니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                체계적인 답변
                            </div>
                            <div className={styles.differentiationList_2}>
                                학생이 미리 질의응답 내용을 전송 후 튜터가 생각을 한 번 정리한 후 이해하기 쉽게 답변을 전달합니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.voidHeight}>
                        {/* <div className={`${styles.voidHeightMobile} ${styles.onlymobile}`}>
                        </div> */}
                    </div>

                    <div className={styles.sectionSubTitle}>
                        2) 온라인 질의응답
                    </div>
                    <div className={styles.sectionSubTitle_2}>
                        빠른 답변이 가능한 온라인 질의응답
                    </div>

                    <div className={styles.questionImagesBox}>
                        <div className={`${styles.questionImageBoxForMobile} ${styles.first}`}>
                            <img src="img/question66.webp" className={styles.questionImage1} alt="question"></img>
                        </div>
                        <div className={styles.questionImageBoxForMobile}>
                            <img src="img/question55.webp" className={styles.questionImage2} alt="question"></img>    
                        </div>
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            타사와의 차별점
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                방식 선택
                            </div>
                            <div className={styles.differentiationList_2}>
                                오프라인 질의응답 뿐만 아니라 온라인 질의응답도 운영해 학생 선호도에 맞게 질의응답 방식 선택 가능합니다.
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                질의응답 보충
                            </div>
                            <div className={styles.differentiationList_2}>
                                오프라인으로 질문했던 내용을 온라인으로 한번 더 확인할 수 있습니다.
                            </div>
                        </div>
                    </div>

                    <div className={styles.voidHeight2}>

                    </div>

                </div>
            </div>


            <div className={styles.fourtSection}>
                <div className={styles.fourthSectionDiv}>
                    <div className={`${styles.sectionTitle} ${styles.fourth}`}>
                        <div className={styles.sectionTitleNumber}>
                            04
                        </div>
                        <div className={`${styles.sectionTitleText} ${styles.fourth} ${styles.onlymobile}`}>
                            컨텐츠는 부족함 없이 제공
                        </div>
                        <div className={`${styles.sectionTitleText} ${styles.fourth} ${styles.onlyPC}`}>
                            컨텐츠는 부족함 없이 제공합니다
                        </div>
                    </div>
                    <div className={`${styles.sectionSubTitleText} ${styles.onlyPC}`}>
                        이감, 한수, 상상, 바탕 모의고사 등 오프라인 컨텐츠 제공
                    </div>
                    <div className={`${styles.sectionSubTitleText} ${styles.onlymobile}`}>
                        이감, 한수, 상상, 바탕 모의고사 등<br></br> 오프라인 컨텐츠 제공
                    </div>
                </div>

                <div className={styles.photosRail}>
                    {
                        longBookList.map((eachBook : any)=>{
                            return (
                                <div key={Math.random()} className={styles.photoBox}>
                                    <img className={styles.bookImage} src={eachBook} alt="bookImage" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div ref={lastRef} className={styles.sixthSection}>
                <div className={`${styles.sectionTitle} ${styles.fifth}`}>
                    <div className={styles.sectionTitleNumber}>
                        05
                    </div>
                    <div className={`${styles.sectionTitleText} ${styles.onlymobile}`}>
                        실전 모의고사
                    </div>
                    <div className={`${styles.sectionTitleText} ${styles.onlyPC}`}>
                        실전 모의고사로 실전을 연습합니다
                    </div>
                </div>
                <div className={`${styles.sectionSubTitleText} ${styles.fifth}`}>
                    <span className={styles.onlymobile}>평가원, 더 프리미엄, 이투스 모의고사<br></br>학원 내 시행</span><span className={styles.onlyPC}>평가원, 더 프리미엄, 이투스 모의고사 학원 내 시행</span>
                </div>
            </div>



            <Footer />


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                        kind === "attendanceCheck" &&
                        // <SecondTotalAttendanceProcess />
                        <AttendanceCheck2 />
                    }
                    {
                        kind === "attendance" &&
                        <Alarm />
                    }
                    {
                        kind === "patrolReport" &&
                        <PatrolReport />
                    }
                    {
                        kind === "testResult" &&
                        <TestResult />
                    }
                    {
                        kind === "questionCheck" &&
                        <QuestionCheck />
                    }
                    {
                        kind === "scheduler" &&
                        <Scheduler />
                    }
                    {
                        kind === "demerit" &&
                        <Demerit />
                    }
                    {
                        kind === "attendanceMobile" &&
                        <AttendanceMobile handleClose={handleCloseHash} />
                    }
                    {
                        kind === "schedulerMobile" &&
                            <Scheduler handleClose={handleCloseHash} />
                    }
                    {
                        kind === "demeritMobile" &&
                        <Demerit handleClose={handleCloseHash} />
                    }
                    {
                        kind === "consultReport" &&
                        <PreviousChart />
                    }
                </Box>
            </Modal> 



        <SpeedDialComponent />

        </div>
    );
}

export default StudySystem;