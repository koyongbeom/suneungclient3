import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/dailyreport.module.css";
import SmallMenubar from "./components/smallmenubar";
import { ReactComponent as Star } from "../../svg/daily_star.svg";
import { ReactComponent as Circle } from "../../svg/daily_test_circle.svg";
import { ReactComponent as X } from "../../svg/daily_test_x.svg";
import { ReactComponent as Siren } from "../../svg/daily_test_siren.svg";
import { ReactComponent as NoViolation } from "../../svg/daily_no_violation.svg";
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";

import { ReactComponent as First } from "../../svg/englishhomework/1.svg";
import { ReactComponent as Second } from "../../svg/englishhomework/2.svg";
import { ReactComponent as Third } from "../../svg/englishhomework/3.svg";
import { ReactComponent as Fourth } from "../../svg/englishhomework/4.svg";
import { ReactComponent as Fifth } from "../../svg/englishhomework/5.svg";
import { ReactComponent as NoHomeWork } from "../../svg/daily_nohomework.svg";
import { stubArray } from "lodash";

const testhistory = [
    {
        bookname: "워드마스터 수능 2000(2022 버전)",
        day: 50,
        kind: "전체단어",
        correct: 25,
        inCorrect: 12,
        isHomework: true,
        didHomework: true,
        bookKind: 2,
        date: "11월 3일 21시 59분 응시"
    },
    {
        bookname: "워드마스터 하이퍼(2021 버전)",
        day: 50,
        kind: "전체단어",
        isHomework: true,
        didHomework: false,
        bookKind: 3,
    },
    {
        bookname: "워드마스터 수능 2000(2022 버전)",
        day: 50,
        kind: "전체단어",
        isHomework: false,
        bookKind: 2,
        correct: 27,
        inCorrect: 12,
        date: "11월 3일 21시 59분 응시"
    }
]

const wrongwords = [
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    },
    {
        day: 12,
        english: "abandon",
        korean: "버리다",
    }
]

const weeklyAssignment = [
    {
        date: "10/20",
        day: "금",
        bookName: "워드마스터 수능 2000(2022 버전)",
        bookKind: 2,
        dayList: [{ day: 1, kind: "total" }, { day: 2, kind: "inCorrect" }],
        examiner: "김현오 (서울대 정치외교학부) 담임 멘토"
    },
    {
        date: "10/21",
        day: "토",
        bookName: "워드마스터 수능 2000(2022 버전)",
        bookKind: 2,
        dayList: [{ day: 1, kind: "total" }, { day: 2, kind: "inCorrect" }],
        examiner: "김현오 (서울대 정치외교학부) 담임 멘토"
    },
    {
        date: "10/22",
        day: "일",
        bookName: "워드마스터 수능 2000(2022 버전)",
        bookKind: 2,
        dayList: [{ day: 1, kind: "total" }, { day: 2, kind: "inCorrect" }],
        examiner: "김현오 (서울대 정치외교학부) 담임 멘토"
    },
    {
        date: "10/23",
        day: "월",
        noHomework: true,
    },
    {
        date: "10/24",
        day: "화",
        bookName: "워드마스터 수능 2000(2022 버전)",
        bookKind: 2,
        dayList: [{ day: 1, kind: "total" }, { day: 2, kind: "inCorrect" }],
        examiner: "김현오 (서울대 정치외교학부) 담임 멘토"
    },
    {
        date: "10/25",
        day: "수",
        bookName: "워드마스터 수능 2000(2022 버전)",
        bookKind: 2,
        dayList: [{ day: 1, kind: "total" }, { day: 2, kind: "inCorrect" }],
        examiner: "김현오 (서울대 정치외교학부) 담임 멘토"
    },
    {
        date: "10/26",
        day: "목",
        bookName: "워드마스터 수능 2000(2022 버전)",
        bookKind: 2,
        dayList: [{ day: 1, kind: "total" }, { day: 2, kind: "inCorrect" }],
        examiner: "김현오 (서울대 정치외교학부) 담임 멘토"
    }
]

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));



const EnglishTest: React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const [isHide, setIsHide] = useState(false);
    const [modalHash, setModalHash] = useState("");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleCloseHash = () => {
        navigate(-1);
    }


    const handleOpen = () => {
        window.location.assign("/dailyreport#modal2");
    }

    const handleClose = () => {
        handleCloseHash();
    }

    useEffect(() => {
        console.log(window.location.hash);
        console.log(11111);
        const handleOnHashChange = () => {
            console.log("hashChange");
            setModalHash(window.location.hash);
            console.log(open);
            if (window.location.hash === "#modal2") {
                console.log(2);
                setOpen(true);
            } else if (!window.location.hash) {
                console.log(3);
                setOpen(false);
            }
        }

        window.addEventListener("hashchange", handleOnHashChange);

        return () => window.removeEventListener("hashchange", handleOnHashChange);

    }, [open]);


    const handleCurrentMenu = (index: number) => {
        setCurrentMenu(index);
    }


    return (
        <div className={`${styles.compBody} ${(currentMenu === 2 && wrongwords && wrongwords.length > 7) ? styles.noBottomPadding : ""}`}>
            <div className={styles.compTitle1}>
                영단어 테스트 응시내역
            </div>
            <div className={styles.smallMenuBarDiv2}>
                <div className={styles.smallMenuBarWrapper3}>
                    <SmallMenubar handleCurrentMenu={handleCurrentMenu} menuList={["응시내역", "틀린 단어", "주간 과제"]} />
                </div>
                {
                    (currentMenu === 1) &&
                    <div className={styles.dailyStarDiv}>
                        <Star />
                        <span className={styles.dailyStarText}>멘토 숙제분량</span>
                    </div>
                }
            </div>
            {
                (currentMenu === 1 && (testhistory && testhistory.length > 0)) &&
                <div className={styles.testHistoryDiv}>
                    {
                        testhistory.map((item, index) => {

                            const src = "/img/wordmaster/" + item.bookKind + ".webp";

                            return (
                                <div key={index} className={`${styles.eachTestHistoryDiv} ${styles["eachTestHistoryDiv" + index]}`}>
                                    <div className={styles.eachTestHistoryImgDiv}>
                                        <img src={src} className={styles.eachBookImg} />
                                        {
                                            item.isHomework &&
                                            <div className={styles.homeworkDoneDiv}>
                                                <Star />
                                            </div>
                                        }
                                    </div>
                                    <div className={styles.eachTestBookDescriptionDiv}>
                                        <div className={styles.eachTestBookTitle}>
                                            {item.bookname}
                                        </div>
                                        <div className={styles.eachTestDay}>
                                            Day {item.day} ({item.kind})
                                        </div>
                                        <div className={styles.eachTestCorrectDiv}>
                                            {
                                                (item.correct || item.inCorrect) &&
                                                <div className={styles.eachTestCorrectWrapperDiv}>
                                                    <div className={styles.eachTestCorrectDescription}>
                                                        <Circle />
                                                        <span className={styles.eachTestCorrectText}>{item.correct}개</span>
                                                    </div>
                                                    <div className={styles.eachTestCorrectDescription}>
                                                        <X />
                                                        <span className={styles.eachTestCorrectText}>{item.inCorrect}개</span>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                item.didHomework === false &&
                                                <div className={styles.eachTestCorrectDescriptionNon}>
                                                    <Siren />
                                                    <span className={styles.eachTestCorrectText}>아직 응시하지 않았어요</span>
                                                </div>
                                            }
                                        </div>
                                        <div className={`${styles.eachTestDueDate} ${(item.isHomework && !item.date) ? styles.notDoneHomework : ""}`}>
                                            {item.date ? item.date : ""}
                                            {(item.isHomework && !item.date) ? `기한 : ${new Date().getMonth() + 1}월 ${new Date().getDate()}일 23시 59분 까지` : ""}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                ((currentMenu === 1 || currentMenu === 2) && (!testhistory || testhistory.length === 0)) &&
                <div className={styles.noViolationDiv}>
                    <NoViolation />
                    <div className={styles.noViolationText}>
                        오늘 영단어 숙제 분량은 없어요
                    </div>
                </div>
            }
            {
                currentMenu === 2 &&
                <div className={styles.wrongWordDiv}>
                    <div className={styles.wrongWordDivWrapper}>
                        <div className={styles.hideWrongWordDiv}>
                            <span
                                style={{ marginRight: "0.25rem" }}
                            >단어 뜻 가리기</span>
                            <Android12Switch
                                checked={isHide}
                                onChange={(e: any) => {
                                    setIsHide(e.target.checked);
                                }}
                            />
                        </div>
                        <div className={styles.wrongWords}>
                            {
                                wrongwords.map((item, index) => {

                                    if (index > 6) {
                                        return;
                                    }

                                    return (
                                        <div key={index} className={`${styles.eachWrongWordDiv} ${styles["eachWrongWordDiv" + index]}`}>
                                            <div className={styles.eachWrongWordWrapper}>
                                                <div className={styles.eachWrongWordDivFirstLine}>
                                                    <div className={styles.eachWrongWordEnglish}>
                                                        {item.english}
                                                    </div>
                                                    <div className={styles.eachWrongWordDay}>
                                                        day {item.day}
                                                    </div>
                                                </div>
                                                <div className={styles.eachWrongWordKorean}>
                                                    {isHide ? "" : item.korean}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        wrongwords.length > 7 &&
                        <div className={styles.rankingBottomBtnDiv} style={{ marginTop: "1.25rem" }}>
                            <Button onClick={handleOpen} variant="outlined" fullWidth sx={{ border: 0, height: "3.69rem", color: "#3182f6", fontFamily: "Pretendard", fontWeight: 400 }}>
                                더 보기
                            </Button>
                        </div>
                    }
                </div>
            }
            {
                currentMenu === 3 &&
                <div className={styles.weeklyAssignmentDiv}>
                    {
                        weeklyAssignment.map((item, index) => {
                            const order = index % 5;
                            const OrderString = ["First", "Second", "Third", "Fourth", "Fifth"][order];

                            return (
                                <div key={index} className={`${styles.eachWeeklyAssignmentDiv} ${styles["eachWeeklyAssignmentDiv" + index]}`}>
                                    <div className={styles.eachWeeklyAssignmentTitleDiv}>
                                        <div className={styles.eachWeeklyAssignmentSvgDiv}>
                                            {
                                                OrderString === "First" &&
                                                <First />
                                            }
                                            {
                                                OrderString === "Second" &&
                                                <Second />
                                            }
                                            {
                                                OrderString === "Third" &&
                                                <Third />
                                            }
                                            {
                                                OrderString === "Fourth" &&
                                                <Fourth />
                                            }
                                            {
                                                OrderString === "Fifth" &&
                                                <Fifth />
                                            }
                                        </div>
                                        <div className={styles.eachWeeklyAssignmentTitle}>
                                            {item.day}요일({item.date})
                                        </div>
                                    </div>
                                    <div className={styles.eachWeeklyAssignmentDescriptionDiv}>
                                        <div className={styles.eachWeeklyAssignmentBarDiv}>
                                            <div className={styles.eachWeeklyAssignmentBar}>
                                            </div>
                                        </div>
                                        {
                                            !item.noHomework &&
                                            <div className={styles.eachWeeklyAssignemtBookImgDiv}>
                                                <img src={"/img/wordmaster/" + item.bookKind + ".webp"} className={styles.eachWeeklyAssignmentBookImg}
                                                />
                                            </div>
                                        }
                                        {
                                            !item.noHomework &&
                                            <div className={styles.eachWeeklyAssignmentBookInfoDiv}>
                                                <div className={styles.eachWeeklyAssignmentBookName}>
                                                    {item.bookName}
                                                </div>
                                                <div className={styles.eachWeeklyAssignmentBookDay}>
                                                    {
                                                        item.dayList && item.dayList.map((item2, index2) => {
                                                            return (
                                                                <span key={index2} className={styles.eachWeeklyAssignmentBookDaySpan}>
                                                                    Day{item2.day} {item2.kind === "total" ? "(전체 단어)" : "(틀린 단어)"}{index2 === item.dayList.length - 1 ? "" : ", "}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className={styles.eachWeeklyAssignmentBookAuthor}>
                                                    <span className={styles.examinerName}>출제자</span>{item.examiner}
                                                </div>
                                            </div>
                                        }
                                        {
                                            item.noHomework &&
                                            <div className={styles.eachWeeklyAssingmentBookInfoNoHomeworkDiv}>
                                                <NoHomeWork />
                                                <div className={styles.eachWeeklyAssignmentNoHomeWorkTest}>
                                                    영단어 숙제 없음
                                                </div>
                                            </div>
                                        }


                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }














            <Modal
                open={open} onClose={handleClose}>
                <Fade in={open} timeout={300}>
                    <ModalDialog layout="fullscreen" sx={{ padding: 0, overflowY: "auto" }}>
                        <div className={styles.modalHeaderWrapper}>
                            <div className={styles.modalHeader}>
                                <ModalClose sx={{ position: "initial" }} />
                            </div>
                        </div>
                        <div className={styles.modalBody} style={{ paddingBottom: "2rem" }}>
                            <div className={styles.compTitle1}>
                                틀린단어 전체보기
                            </div>
                            <div className={styles.wrongWordDiv}>
                                <div className={styles.wrongWordDivWrapper}>
                                    <div className={styles.hideWrongWordDiv}>
                                        <span
                                            style={{ marginRight: "0.25rem" }}
                                        >단어 뜻 가리기</span>
                                        <Android12Switch
                                            checked={isHide}
                                            onChange={(e: any) => {
                                                setIsHide(e.target.checked);
                                            }}
                                        />
                                    </div>
                                    <div className={styles.wrongWords}>
                                        {
                                            wrongwords.map((item, index) => {

                                                return (
                                                    <div key={index} className={`${styles.eachWrongWordDiv} ${styles["eachWrongWordDiv" + index]}`}>
                                                        <div className={styles.eachWrongWordWrapper}>
                                                            <div className={styles.eachWrongWordDivFirstLine}>
                                                                <div className={styles.eachWrongWordEnglish}>
                                                                    {item.english}
                                                                </div>
                                                                <div className={styles.eachWrongWordDay}>
                                                                    day {item.day}
                                                                </div>
                                                            </div>
                                                            <div className={styles.eachWrongWordKorean}>
                                                                {isHide ? "" : item.korean}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalDialog>
                </Fade>
            </Modal>

        </div>
    )
}

export default EnglishTest;