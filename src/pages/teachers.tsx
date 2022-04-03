import React, { useState, useEffect, useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import HeaderTwo from "../components/header2";
import styles from "../styles/teachers.module.css";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { ReactComponent as RightChevronCircleSvg } from "../svg/chevronrightcircle.svg";
import { ReactComponent as BookSvg } from "../svg/book.svg";
import { ReactComponent as BookSvg2 } from "../svg/auto_stories.svg";
import list from "../data/teacherslist"
import Footer from "../components/footer";
import { Button } from "@mui/material";

const Teachers: React.FC<any> = (props) => {
    const [index, setIndex] = useState(0);
    const listRef = useRef<any>(null);
    const eachRef = useRef<any>(new Array());

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
                        한 명의 튜터를 뽑기 위해서
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        한 달의 시간이 걸립니다
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
                        학원소개
                    </div>
                    <RightChevronSvg className={`${styles.rightChevron} ${styles.second}`} />
                    <div className={styles.currentMenuViewerText_2}>
                        담임선생님 소개
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
            </div>

            <div className={`${styles.titleText} ${styles.onlyPC}`}>
                담임선생님 소개
            </div>
            <div className={`${styles.descriptionText} ${styles.onlyPC}`}>
                수능선배가 자신하는 수능선배 담임선생님들을 소개합니다.
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
                            과목별 수강강사
                        </div>
                        <div className={styles.teacherLecturerListDiv}>
                            <div className={styles.teacherLecturerSubject}>
                                <div className={styles.teacherLecturerSubjectTitle}>
                                    국어
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
                                    수학
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
                                    영어
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
                                    탐구
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
                            Q. 수능선배 학생들에게 어떤 담임선생님이 되어주실 건가요?
                        </div>
                        <div className={`${styles.questionTitleText} ${styles.onlymobile}`}>
                            Q. 어떤 담임선생님이 되어주실 건가요?
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
                            Q. 학습지도 시 가장 중요하게 생각하는 것은?
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
                            Q. 어떤 유형의 학생을 맡았을 때 구체적으로 어떤 도움을 주실 수 있나요?
                        </div>
                        <div className={`${styles.questionTitleText} ${styles.onlymobile}`}>
                            Q. 어떤 유형의 학생과 잘 맞으시나요?
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
                            면접 결과
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
            
            <Fab onClick={moveTop}  size="medium" sx={{position : "fixed", bottom : 16, right : 16}} color="primary" aria-label="add">
                <ArrowUpwardIcon />
            </Fab>

            <Footer />


        </div>
    );
}

export default Teachers;