import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/dailyreport.module.css";
import SmallMenubar from "./components/smallmenubar";
import { ReactComponent as Up } from "../../svg/daily_up.svg";
import { ReactComponent as Down } from "../../svg/daily_down.svg"
import { Button, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { Collapse, Fade, Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FirstPrice } from "../../svg/daily_first_price.svg";
import { ReactComponent as SecondPrice } from "../../svg/daily_second_price.svg";
import { ReactComponent as ThirdPrice } from "../../svg/daily_third_price.svg";

const rankingData = [
    { "name": "김O현", "time": 643, "location": "강남점", "rankingChange": "down" },
    { "name": "윤O웅", "time": 621, "location": "대치점", "rankingChange": "up" },
    { "name": "박O준", "time": 619, "location": "강남점", "rankingChange": "same" },
    { "name": "최O빈", "time": 617, "location": "대치점", "rankingChange": "up" },
    { "name": "정O우", "time": 615, "location": "강남점", "rankingChange": "down" },
    { "name": "강O훈", "time": 613, "location": "대치점", "rankingChange": "same" },
    { "name": "조O리", "time": 611, "location": "강남점", "rankingChange": "down" },
    { "name": "윤O연", "time": 609, "location": "대치점", "rankingChange": "up" },
    { "name": "장O호", "time": 607, "location": "강남점", "rankingChange": "down" },
    { "name": "임O하", "time": 605, "location": "대치점", "rankingChange": "up" },
    { "name": "김O람", "time": 603, "location": "강남점", "rankingChange": "same" },
    { "name": "이O영", "time": 601, "location": "대치점", "rankingChange": "down" },
    { "name": "박O수", "time": 599, "location": "강남점", "rankingChange": "up" },
    { "name": "최O진", "time": 597, "location": "대치점", "rankingChange": "down" },
    { "name": "정O아", "time": 595, "location": "강남점", "rankingChange": "same" },
    { "name": "강O원", "time": 593, "location": "대치점", "rankingChange": "up" },
    { "name": "조O율", "time": 591, "location": "강남점", "rankingChange": "down" },
    { "name": "윤O인", "time": 589, "location": "대치점", "rankingChange": "same" },
    { "name": "장O희", "time": 587, "location": "강남점", "rankingChange": "up" },
    { "name": "임O욱", "time": 585, "location": "대치점", "rankingChange": "down" },
    { "name": "김O익", "time": 583, "location": "강남점", "rankingChange": "same" },
    { "name": "이O석", "time": 581, "location": "대치점", "rankingChange": "up" },
    { "name": "박O림", "time": 579, "location": "강남점", "rankingChange": "down" },
    { "name": "최O환", "time": 577, "location": "대치점", "rankingChange": "up" },
    { "name": "정O훈", "time": 575, "location": "강남점", "rankingChange": "same" },
    { "name": "강O애", "time": 573, "location": "대치점", "rankingChange": "down" },
    { "name": "조O열", "time": 571, "location": "강남점", "rankingChange": "up" },
    { "name": "윤O웅", "time": 569, "location": "대치점", "rankingChange": "same" },
    { "name": "장O용", "time": 567, "location": "강남점", "rankingChange": "down" },
    { "name": "임O유", "time": 565, "location": "대치점", "rankingChange": "up" },
    { "name": "김O녕", "time": 563, "location": "강남점", "rankingChange": "same" },
    { "name": "이O정", "time": 561, "location": "대치점", "rankingChange": "down" },
    { "name": "박O리", "time": 559, "location": "강남점", "rankingChange": "up" },
    { "name": "최O민", "time": 557, "location": "대치점", "rankingChange": "down" },
    { "name": "정O후", "time": 555, "location": "강남점", "rankingChange": "same" },
    { "name": "강O하", "time": 553, "location": "대치점", "rankingChange": "up" },
    { "name": "조O훈", "time": 551, "location": "강남점", "rankingChange": "down" },
    { "name": "윤O우", "time": 549, "location": "대치점", "rankingChange": "same" },
    { "name": "장O균", "time": 547, "location": "강남점", "rankingChange": "up" },
    { "name": "임O후", "time": 545, "location": "대치점", "rankingChange": "down" },
    { "name": "김O우", "time": 543, "location": "강남점", "rankingChange": "up" },
    { "name": "이O호", "time": 541, "location": "대치점", "rankingChange": "same" },
    { "name": "박O율", "time": 539, "location": "강남점", "rankingChange": "down" },
    { "name": "최O혁", "time": 537, "location": "대치점", "rankingChange": "up" },
    { "name": "정O영", "time": 535, "location": "강남점", "rankingChange": "same" },
    { "name": "강O연", "time": 533, "location": "대치점", "rankingChange": "down" },
    { "name": "조O진", "time": 531, "location": "강남점", "rankingChange": "up" },
    { "name": "윤O란", "time": 529, "location": "대치점", "rankingChange": "same" },
    { "name": "장O진", "time": 527, "location": "강남점", "rankingChange": "down" },
    { "name": "임O선", "time": 525, "location": "대치점", "rankingChange": "up" },
    { "name": "김O은", "time": 523, "location": "강남점", "rankingChange": "same" }
]

const StudytimeRanking: React.FC<any> = (props) => {

    const [today, setToday] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [modalHash, setModalHash] = useState("");
    const navigate = useNavigate();

    const handleCloseHash = () => {
        navigate(-1);
    }


    const handleOpen = () => {
        window.location.assign("/dailyreport#modal");
    }

    const handleClose = () => {
        handleCloseHash();
    }

    useEffect(()=>{
        console.log(window.location.hash);
        console.log(11111);
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

    


    return (
        <div className={styles.compBody} style={{
            paddingBottom: 0
        }}>
            <div className={styles.compTitle1}>
                오늘의 공부시간 랭킹
            </div>
            <div className={styles.compSubTitle1}>
                강남점 하루 공부시간 기준 <span>14등</span>이에요
            </div>
            <div className={styles.rankingMenuDiv}>
                <div className={styles.firstSmallMenu}>
                    <SmallMenubar menuList={["강남점", "전체"]} />
                </div>
                <div className={styles.secondSmallMenu}>
                    <SmallMenubar menuList={["일별", "주별", "월별"]} />
                </div>
            </div>
            <div className={styles.rankingBodyDate}>
                {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 기준
            </div>
            <div className={styles.rankingImagesDiv}>
                {
                    rankingData.map((item, index) => {

                        if (index > 2) {
                            return;
                        }

                        var target = ["second", "first", "third"][index];
                        var ranking = [2, 1, 3][index];

                        const imgSrc1 = `/img/daily/daily_${target}_face2.png`;
                        const imgSrc2 = `/img/daily/daily_${target}_medal2.png`;

                        const hours = Math.floor(item.time / 60);
                        const minutes = item.time % 60;

                        return (
                            <div className={styles.eachRankingImageWrapper} key={index}>
                                <div className={`${styles.rankingImageDiv} ${styles[`rankingImageDiv${index + 1}`]}`}>
                                    {/* <img src={imgSrc1} className={styles.rankingFace} />
                                    <img src={imgSrc2} className={styles.rankingMedal} /> */}
                                    {
                                        index === 0 &&
                                        <SecondPrice  />
                                    }
                                    {
                                        index === 1 &&
                                        <FirstPrice  />
                                    }
                                    {
                                        index === 2 &&
                                        <ThirdPrice  />
                                    }
                                </div>
                                <div className={styles.rankingNameDiv}>
                                    {item.name}
                                </div>
                                <div className={styles.rankingTimeDiv}>
                                    {hours}시간 {minutes}분
                                </div>
                                <div className={styles.rankingNumberDiv}>
                                    오늘의 강남점 {ranking}등
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.rankingJustBorder}>
            </div>
            <div className={styles.rankingListBody}>
                {
                    rankingData.map((item, index) => {

                        if (index < 3) {
                            return;
                        }

                        if (index > 9) {
                            return;
                        }

                        const hours = Math.floor(item.time / 60);
                        const minutes = item.time % 60;

                        return (
                            <div className={styles.eachRankingDiv} key={index}>
                                <div className={styles.eachRankingDivBefore}>
                                    <div className={styles.eachRankingNumberDiv}>
                                        <div className={styles.eachRankingNumberArrow} style={{ marginBottom: "0.06rem" }}>
                                            {
                                                item.rankingChange === "up" &&
                                                <Up className={styles.upSvg} />
                                            }
                                        </div>
                                        <div className={styles.eachRankingNumber}>
                                            {index + 1}
                                        </div>
                                        <div className={styles.eachRankingNumberArrow} style={{ marginTop: "0.15rem" }}>
                                            {
                                                item.rankingChange === "down" &&
                                                <Down className={styles.downSvg} />
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.eachRankingNameDiv}>
                                        <div className={styles.eachRankingName}>
                                            {item.name}
                                        </div>
                                        <div className={styles.eachRankingLocation}>
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.eachRankingDivAfter}>
                                    {hours}시간 {minutes}분
                                </div>
                            </div>
                        );

                    })
                }
            </div>
            <div className={styles.rankingBottomBtnDiv}>
                <Button onClick={handleOpen} variant="outlined" fullWidth sx={{ border: 0, height: "3.69rem", color: "#3182f6", fontFamily: "Pretendard", fontWeight: 400 }}>
                    더 보기
                </Button>
            </div>

            <Modal
                open={open} onClose={handleClose}>
                <Fade in={open} timeout={300}>
                    <ModalDialog layout="fullscreen" sx={{ padding: 0, overflowY: "auto" }}>
                        <div className={styles.modalHeaderWrapper}>
                            <div className={styles.modalHeader}>
                                <ModalClose sx={{ position: "initial" }} />
                            </div>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.compTitle1}>
                                오늘의 공부시간 랭킹
                            </div>
                            <div className={styles.compSubTitle1}>
                                강남점 하루 공부시간 기준 <span>14등</span>이에요
                            </div>
                            <div className={styles.rankingMenuDiv}>
                                <div className={styles.firstSmallMenu}>
                                    <SmallMenubar menuList={["강남점", "전체"]} />
                                </div>
                                <div className={styles.secondSmallMenu}>
                                    <SmallMenubar menuList={["일별", "주별", "월별"]} />
                                </div>
                            </div>
                            <div className={styles.rankingBodyDate}>
                                {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 기준
                            </div>
                            <div className={styles.modalJustBorder}>

                            </div>
                            <div className={styles.rankingListBody}>
                                {
                                    rankingData.map((item, index) => {

                                        const hours = Math.floor(item.time / 60);
                                        const minutes = item.time % 60;

                                        return (
                                            <div className={styles.eachRankingDiv} key={index}>
                                                <div className={styles.eachRankingDivBefore}>
                                                    <div className={styles.eachRankingNumberDiv}>
                                                        <div className={styles.eachRankingNumberArrow} style={{ marginBottom: "0.06rem" }}>
                                                            {
                                                                item.rankingChange === "up" &&
                                                                <Up className={styles.upSvg} />
                                                            }
                                                        </div>
                                                        <div className={styles.eachRankingNumber}>
                                                            {index + 1}
                                                        </div>
                                                        <div className={styles.eachRankingNumberArrow} style={{ marginTop: "0.15rem" }}>
                                                            {
                                                                item.rankingChange === "down" &&
                                                                <Down className={styles.downSvg} />
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={styles.eachRankingNameDiv}>
                                                        <div className={styles.eachRankingName}>
                                                            {item.name}
                                                        </div>
                                                        <div className={styles.eachRankingLocation}>
                                                            {item.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.eachRankingDivAfter}>
                                                    {hours}시간 {minutes}분
                                                </div>
                                            </div>
                                        );

                                    })
                                }
                            </div>
                        </div>
                    </ModalDialog>
                </Fade>
            </Modal>
        </div>
    );
}

export default StudytimeRanking;