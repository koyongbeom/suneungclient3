import React, { useState, useEffect, useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";

import HeaderTwo from "../components/header2";
import styles from "../styles/teachers.module.css";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { ReactComponent as RightChevronCircleSvg } from "../svg/chevronrightcircle.svg";
import { ReactComponent as BookSvg } from "../svg/book.svg";
import { ReactComponent as BookSvg2 } from "../svg/auto_stories.svg";
import list from "../data/teacherslist"
import Footer from "../components/footer";
import SpeedDialComponent from "../control/speeddial";

import ReactGa from "react-ga4";



const Teachers: React.FC<any> = (props) => {
    const [index, setIndex] = useState(0);
    const listRef = useRef<any>(null);
    const eachRef = useRef<any>(new Array());

    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "teacherspageview"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "teachers"
        });

    }, []);
    //--------------------------------------------------------

    const mobileChange = (eachIndex: number) => {
        setIndex(eachIndex);
        const targetScroll = eachRef.current[eachIndex].getBoundingClientRect().x;
        listRef.current.scrollTo({ left: targetScroll + listRef.current.scrollLeft - 120, behavior: "smooth" });
    }

    useEffect(()=>{
        window.scrollTo(0, 0);

        smoothscroll.polyfill();
    }, [])

    const moveTop = () => {
        window.scrollTo({top : 258, behavior : "smooth"});
    }

    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div className={styles.subHeader} style={{ backgroundImage: "url(img/team.webp)" }}>
                <div className={styles.filter}>

                </div>
                <div className={styles.subHeaderText}>
                    <div className={styles.subHeaderTextTitle}>
                        ??? ?????? ????????? ?????? ?????????
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        ??? ?????? ????????? ????????????
                    </div>
                    <div className={styles.subHeaderTextSubTitle}>

                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerDiv} ${styles.onlyPC}`}>
                <div className={styles.currentMenuViewer}>
                    <HouseSvg className={styles.houseSvg} />
                    <RightChevronSvg className={styles.rightChevron} />
                    <div className={styles.currentMenuViewerText_1}>
                        ????????????
                    </div>
                    <RightChevronSvg className={`${styles.rightChevron} ${styles.second}`} />
                    <div className={styles.currentMenuViewerText_2}>
                        ??????????????? ??????
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
            </div>

            <div className={`${styles.titleText} ${styles.onlyPC}`}>
                ??????????????? ??????
            </div>
            <div className={`${styles.descriptionText} ${styles.onlyPC}`}>
                ??????????????? ???????????? ???????????? ????????????????????? ???????????????.
            </div>

            <div ref={listRef} className={`${styles.mobileTitleList} ${styles.onlymobile}`}>
                {list.map((eachList, indexNumber) => {
                    return (
                        <div key={indexNumber} ref={(element) => { eachRef.current.push(element) }} onClick={() => { mobileChange(indexNumber); }} className={`${styles.mobileEachListTitle} ${index === indexNumber ? styles.active : ""}`}>
                            {eachList.name.split(" ")[0]}
                        </div>
                    );
                })}
            </div>

            <div className={`${styles.teachersList} ${styles.onlyPC}`}>
                {list.map((eachTeacher: any, indexNumber: number) => {
                    return (
                        <div key={eachTeacher.name + indexNumber} onClick={(e) => { setIndex(indexNumber); }} className={`${styles.eachTeacherNameDiv} ${indexNumber === index ? styles.active : ""}`}>
                            <div className={`${styles.eachTeacherName} ${indexNumber === index ? styles.active : ""}`}>
                                {eachTeacher.name}
                            </div>
                            <div className={`${styles.eachTeacherSchool} ${indexNumber === index ? "" : styles.none} `}>
                                ({eachTeacher.school})
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.teacherProfileDiv}>
                <div className={styles.teacherProfile}>
                    <div className={`${styles.mobileTeacherSubject} ${styles.onlymobile}`}>
                        <div className={styles.dashDiv_1}></div><div className={styles.mobileTeacherSubjectText}>{list[index].subject}</div><div className={styles.dashDiv_2}></div>
                    </div>
                    <div className={`${styles.mobileTeacherSubtitle} ${styles.onlymobile}`}>
                        <div className={styles.mobileTeacherSubtitleText}>{list[index].subTitle}</div>
                    </div>
                    <div className={styles.teacherImg} style={{ backgroundImage: `url(${list[index].img})` }}>
                    </div>
                    <div className={styles.teacherProfileDescription}>
                        <div className={`${styles.teacherProfileSubject} ${styles.onlyPC}`}>
                            <div>{list[index].subject}</div><div className={styles.dashDiv}></div>
                        </div>
                        <div className={`${styles.teacherSubTitle} ${styles.onlyPC}`}>
                            {list[index].subTitle}
                        </div>
                        <div className={styles.teacherName}>
                            {list[index].name}
                        </div>
                        <div className={styles.teacherDescription}>
                            {list[index].teacherDescription}
                        </div>
                        <div className={styles.teacherLecturerTitle}>
                            ????????? ????????????
                        </div>
                        <div className={styles.teacherLecturerListDiv}>
                            <div className={styles.teacherLecturerSubject}>
                                <div className={styles.teacherLecturerSubjectTitle}>
                                    ??????
                                </div>
                                {list[index].koreanTeacher.map((eachTeacher: string) => {
                                    return (
                                        <div key={Math.random()} className={styles.eachTeacherMapName}>
                                            {eachTeacher}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles.teacherLecturerSubject}>
                                <div className={styles.teacherLecturerSubjectTitle}>
                                    ??????
                                </div>
                                {list[index].mathTeacher.map((eachTeacher: string) => {
                                    return (
                                        <div key={Math.random()} className={styles.eachTeacherMapName}>
                                            {eachTeacher}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles.teacherLecturerSubject}>
                                <div className={styles.teacherLecturerSubjectTitle}>
                                    ??????
                                </div>
                                {list[index].englishTeacher.map((eachTeacher: string) => {
                                    return (
                                        <div  key={Math.random()} className={styles.eachTeacherMapName}>
                                            {eachTeacher}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles.teacherLecturerSubject}>
                                <div className={styles.teacherLecturerSubjectTitle}>
                                    ??????
                                </div>
                                {list[index].scienceTeacher.map((eachTeacher: string) => {
                                    return (
                                        <div  key={Math.random()} className={styles.eachTeacherMapName}>
                                            {eachTeacher}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.questions}>
                <div className={styles.questionDiv}>
                    <div className={styles.questionTitle}>
                        <div className={`${styles.questionTitleText} ${styles.onlyPC}`}>
                            Q. ???????????? ??????????????? ?????? ?????????????????? ???????????? ??????????
                        </div>
                        <div className={`${styles.questionTitleText} ${styles.onlymobile}`}>
                            Q. ?????? ?????????????????? ???????????? ??????????
                        </div>
                        <div className={`${styles.rightChevronCircle} ${styles.onlyPC}`}>
                            <RightChevronCircleSvg />
                        </div>
                    </div>
                    <div className={styles.questionTitle}>
                    </div>
                    <div className={styles.questionDescriptionDiv}>
                        <div className={styles.questionAnswerA}>
                            A
                        </div>
                        <div className={styles.questionAnswer}>
                            {list[index].firstAnswer}
                        </div>
                    </div>
                </div>
                <div className={styles.questionDiv}>
                    <div className={styles.questionTitle}>
                        <div className={styles.questionTitleText}>
                            Q. ???????????? ??? ?????? ???????????? ???????????? ???????
                        </div>
                        <div className={`${styles.rightChevronCircle} ${styles.onlyPC}`}>
                            <RightChevronCircleSvg />
                        </div>
                    </div>
                    <div className={styles.questionDescriptionDiv}>
                        <div className={styles.questionAnswerA}>
                            A
                        </div>
                        <div className={styles.questionAnswer}>
                            {list[index].secondAnswer}
                        </div>
                    </div>
                </div>
                <div className={styles.questionDiv}>
                    <div className={styles.questionTitle}>
                        <div className={`${styles.questionTitleText} ${styles.onlyPC}`}>
                            Q. ?????? ????????? ????????? ????????? ??? ??????????????? ?????? ????????? ?????? ??? ??????????
                        </div>
                        <div className={`${styles.questionTitleText} ${styles.onlymobile}`}>
                            Q. ?????? ????????? ????????? ??? ????????????????
                        </div>
                        <div className={`${styles.rightChevronCircle} ${styles.onlyPC}`}>
                            <RightChevronCircleSvg />
                        </div>
                    </div>

                    <div className={styles.questionDescriptionDiv}>
                        <div className={styles.questionAnswerA}>
                            A
                        </div>
                        <div className={styles.questionAnswer}>
                            {list[index].thirdAnswer}
                        </div>
                    </div>
                </div>
            </div>

            

            <div className={styles.interviewResultDiv}>
                <div className={styles.interviewResult}>
                    <div className={styles.interviewTitleDiv}>
                        <div className={styles.interviewTitle}>
                            ?????? ??????
                        </div>
                        <div className={`${styles.bookSvg} ${styles.onlyPC}`}>
                            <BookSvg className={styles.bookSvg} />
                        </div>
                        <div className={`${styles.bookSvg} ${styles.onlymobile}`}>
                            <BookSvg2 className={styles.bookSvg} />
                        </div>
                    </div>
                    <div className={styles.interviewResultDescription}>
                        {list[index].interviewResult}
                    </div>         
                </div>
            </div>
            
            {/* <Fab onClick={moveTop}  size="medium" sx={{position : "fixed", bottom : 16, right : 16}} color="primary" aria-label="add">
                <ArrowUpwardIcon />
            </Fab> */}

            <SpeedDialComponent />

            <Footer />


        </div>
    );
}

export default Teachers;