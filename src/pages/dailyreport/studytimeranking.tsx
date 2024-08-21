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
import { englishLocationToKorean } from "./functions/etcfunction";

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

    const [myLocation , setMyLocation] = useState("");
    const [myEnglishLocation, setMyEnglishLocation] = useState("");

    const [myMonthRanking, setMyMonthRanking] = useState(0);
    const [myWeekRanking, setMyWeekRanking] = useState(0);
    const [myTodayRanking, setMyTodayRanking] = useState(0);

    const [myMonthRankingInLocation, setMyMonthRankingInLocation] = useState(0);
    const [myWeekRankingInLocation, setMyWeekRankingInLocation] = useState(0);
    const [myTodayRankingInLocation, setMyTodayRankingInLocation] = useState(0);

    const [finalData, setFinalData] = useState<any>([]);

    const [targetData, setTargetData] = useState([]);

    const [locationMenu, setLocationMenu] = useState(1);
    const [timeMenu, setTimeMenu] = useState(1);

    const [totalMonthData, setTotalMonthData] = useState([]);
    const [totalPreviousMonthData, setTotalPreviousMonthData] = useState([]);
    const [totalWeekData, setTotalWeekData] = useState([]);
    const [totalPreviousWeekData, setTotalPreviousWeekData] = useState([]);
    const [totalYesterdayData, setTotalYesterdayData] = useState([]);
    const [totalTodayData, setTotalTodayData] = useState([]);


    const handleCurrentMenu1 = (index: number) => {
        console.log(index);
        setLocationMenu(index);
    }

    const handleCurrentMenu2 = (index: number) => {
        console.log(index);
        setTimeMenu(index);
    }


    const navigate = useNavigate();

    const handleCloseHash = () => {
        navigate(-1);
    }


    const handleOpen = () => {
        setOpen(true);
        // window.location.assign("/dailyreport#modal");
    }

    const handleClose = () => {
        //handleCloseHash();
        setOpen(false);
    }

    // useEffect(()=>{
    //     console.log(window.location.hash);
    //     console.log(11111);
    //     const handleOnHashChange = () => {
    //         console.log("hashChange");
    //         setModalHash(window.location.hash);
    //         console.log(open);
    //         if(window.location.hash === "#modal"){
    //             console.log(2);
    //             setOpen(true);
    //         }else if(!window.location.hash){
    //             console.log(3);
    //             setOpen(false);
    //         }
    //     }

    //     window.addEventListener("hashchange", handleOnHashChange);

    //     return ()=> window.removeEventListener("hashchange", handleOnHashChange);

    // }, [open]);

    useEffect(() => {

        if(!props.targetDate || !props.userId){
            console.log("noProps");
            return;
        }

        setToday(props.targetDate);

        console.log("getRankingGoGo");

        getRanking(props.userId, props.targetDate);

    }, [props.userId, props.targetDate]);


    const getRanking = async (userId : number, targetDate : Date) => {

        const findMyTime = (data : any, myFingerprintId : number) => {

            var time = 0;

            data.forEach((each : any) => {
                if(each.fingerprintId === myFingerprintId){
                    time = each.totalStudyTime;
                }
            })

            console.log(time);
            return time;
        }

        const findMyRanking = (data : any, myStudyTime : number, totalLength : number) => {

            var myRanking = totalLength;

            data.forEach((each : any) => {
                if(each.totalStudyTime < myStudyTime){
                    myRanking--;
                }
            })

            if(myStudyTime === 0){
                myRanking++;
            }

            return myRanking;

        }

        const findTotalLengthInLocation = (data : any, location : string) => {

            var totalLength = 0;

            data.forEach((each : any) => {
                if(each.location === location){
                    totalLength++;
                }
            })

            return totalLength;

        }

        const findMyRankingInLocation = (data : any, myStudyTime : number, totalLength : number, location : string) => {

            var myRanking = totalLength;

            data.forEach((each : any) => {
                if(each.totalStudyTime < myStudyTime && each.location === location){
                    myRanking--;
                }
            })

            if(myStudyTime === 0){
                myRanking++;
            }

            return myRanking;

        }

        try{

            const targetDateTime = targetDate.getTime();

            
            const response = await fetch(`https://peetsunbae.com/dashboard/home/dailyreportranking?userId=${userId}&targetDateTime=${targetDateTime}`, {
                method : "GET"
            });

            const result = await response.json();

            console.log(result);

            if(result.message === "success"){

                console.log("gogogogogogo");

                const fingerprintId = result.fingerprintId;

                if(!fingerprintId){
                    return;
                }

                const location = result.location;

                if(!location){
                    return;
                }

                const koreanLocation = englishLocationToKorean(location);

                if(!koreanLocation){
                    return;
                }


                const monthInfo = result.monthInfo;
                const previousMonthInfo = result.previousMonthInfo;
                const weekInfo = result.weekInfo;
                const previousWeekInfo = result.previousWeekInfo;
                const yesterdayInfo = result.yesterdayInfo;
                const todayInfo = result.todayInfo;

                var myMonthStudyTime = 0;
                var myPreviousMonthStudyTime = 0;
                var myWeekStudyTime = 0;
                var myPreviousWeekStudyTime = 0;
                var myYesterdayStudyTime = 0;
                var myTodayStudyTime = 0;

                console.log(monthInfo, previousMonthInfo, weekInfo, previousWeekInfo, yesterdayInfo, todayInfo);

                myMonthStudyTime = findMyTime(monthInfo, fingerprintId);
                myPreviousMonthStudyTime = findMyTime(previousMonthInfo, fingerprintId);
                myWeekStudyTime = findMyTime(weekInfo, fingerprintId);
                myPreviousWeekStudyTime = findMyTime(previousWeekInfo, fingerprintId);
                myYesterdayStudyTime = findMyTime(yesterdayInfo, fingerprintId);
                myTodayStudyTime = findMyTime(todayInfo, fingerprintId);

                console.log("=========");
                console.log(myMonthStudyTime, myPreviousMonthStudyTime, myWeekStudyTime, myPreviousWeekStudyTime, myYesterdayStudyTime, myTodayStudyTime);

                const monthInfoLength = monthInfo.length;
                const previousMonthInfoLength = previousMonthInfo.length;
                const weekInfoLength = weekInfo.length;
                const previousWeekInfoLength = previousWeekInfo.length;
                const yesterdayInfoLength = yesterdayInfo.length;
                const todayInfoLength = todayInfo.length;

                console.log("monthInfoLength", monthInfoLength);
                console.log("previousMonthInfoLength", previousMonthInfoLength);
                console.log("weekInfoLength", weekInfoLength);
                console.log("previousWeekInfoLength", previousWeekInfoLength);
                console.log("yesterdayInfoLength", yesterdayInfoLength);
                console.log("todayInfoLength", todayInfoLength);

                const myMonthRanking = findMyRanking(monthInfo, myMonthStudyTime, monthInfoLength);
                const myPreviousMonthRanking = findMyRanking(previousMonthInfo, myPreviousMonthStudyTime, previousMonthInfoLength);
                const myWeekRanking = findMyRanking(weekInfo, myWeekStudyTime, weekInfoLength);
                const myPreviousWeekRanking = findMyRanking(previousWeekInfo, myPreviousWeekStudyTime, previousWeekInfoLength);
                const myYesterdayRanking = findMyRanking(yesterdayInfo, myYesterdayStudyTime, yesterdayInfoLength);
                const myTodayRanking = findMyRanking(todayInfo, myTodayStudyTime, todayInfoLength);
                console.log("=========");
            
                console.log(myMonthRanking, myPreviousMonthRanking, myWeekRanking, myPreviousWeekRanking, myYesterdayRanking, myTodayRanking);

                const monthInfoLengthInLocation = findTotalLengthInLocation(monthInfo, location);
                const previousMonthInfoLengthInLocation = findTotalLengthInLocation(previousMonthInfo, location);
                const weekInfoLengthInLocation = findTotalLengthInLocation(weekInfo, location);
                const previousWeekInfoLengthInLocation = findTotalLengthInLocation(previousWeekInfo, location);
                const yesterdayInfoLengthInLocation = findTotalLengthInLocation(yesterdayInfo, location);
                const todayInfoLengthInLocation = findTotalLengthInLocation(todayInfo, location);

                const myMonthRankingInLocation = findMyRankingInLocation(monthInfo, myMonthStudyTime, monthInfoLengthInLocation, location);
                const myPreviousMonthRankingInLocation = findMyRankingInLocation(previousMonthInfo, myPreviousMonthStudyTime, previousMonthInfoLengthInLocation, location);
                const myWeekRankingInLocation = findMyRankingInLocation(weekInfo, myWeekStudyTime, weekInfoLengthInLocation, location);
                const myPreviousWeekRankingInLocation = findMyRankingInLocation(previousWeekInfo, myPreviousWeekStudyTime, previousWeekInfoLengthInLocation, location);
                const myYesterdayRankingInLocation = findMyRankingInLocation(yesterdayInfo, myYesterdayStudyTime, yesterdayInfoLengthInLocation, location);
                const myTodayRankingInLocation = findMyRankingInLocation(todayInfo, myTodayStudyTime, todayInfoLengthInLocation, location);

                console.log(myMonthRankingInLocation, myPreviousMonthRankingInLocation, myWeekRankingInLocation, myPreviousWeekRankingInLocation, myYesterdayRankingInLocation, myTodayRankingInLocation);

                setMyMonthRanking(myMonthRanking);
                setMyWeekRanking(myWeekRanking);
                setMyTodayRanking(myTodayRanking);

                setMyMonthRankingInLocation(myMonthRankingInLocation);
                setMyWeekRankingInLocation(myWeekRankingInLocation);
                setMyTodayRankingInLocation(myTodayRankingInLocation);

                setMyLocation(koreanLocation);
                setMyEnglishLocation(location);

                setTotalMonthData(monthInfo);
                setTotalPreviousMonthData(previousMonthInfo);
                setTotalWeekData(weekInfo);
                setTotalPreviousWeekData(previousWeekInfo);
                setTotalYesterdayData(yesterdayInfo);
                setTotalTodayData(todayInfo);

                makeFinalData(monthInfo, previousMonthInfo, weekInfo, previousWeekInfo, yesterdayInfo, todayInfo, location);

            }

        }catch(e){
            console.log(e);
        }

    }

    const makeFinalData = (totalMonthData : any, totalPreviousMonthData : any, totalWeekData : any, totalPreviousWeekData : any, totalYesterdayData : any, totalTodayData : any, myLocation : any) => {

        console.log(totalMonthData);
        console.log(totalPreviousMonthData);
        console.log(totalWeekData);
        console.log(totalPreviousWeekData);
        console.log(totalYesterdayData);
        console.log(totalTodayData);

        var currentData : any;
        var previousData : any;

        if(timeMenu === 1){
            currentData = totalTodayData;
            previousData = totalYesterdayData;
        }

        if(timeMenu === 2){
            currentData = totalWeekData;
            previousData = totalPreviousWeekData;
        }

        if(timeMenu === 3){
            currentData = totalMonthData;
            previousData = totalPreviousMonthData;
        }

        if(locationMenu === 1){
            currentData = currentData.filter((each : any) => each.location === myLocation);
            previousData = previousData.filter((each : any) => each.location === myLocation);
        }

        //totalStudyTime기준으로 내림차순 정렬
        currentData.sort((a : any, b : any) => {
            return b.totalStudyTime - a.totalStudyTime;
        });

        previousData.sort((a : any, b : any) => {
            return b.totalStudyTime - a.totalStudyTime;
        });

        console.log(currentData);
        console.log(previousData);

        const finalData : any = [];

        currentData.forEach((each : any, index : number) => {

            const name = each.name;
            const koreanLocation = englishLocationToKorean(each.location);
            if(!koreanLocation){
                return;
            }
            //ms 단위를 min 단위로 변환
            const time = Math.floor(each.totalStudyTime / 60000);

            const currentRanking = index + 1;
            var previousRanking = index + 1;

            const fingerprintId = each.fingerprintId;

            previousData.forEach((previousEach : any, previousIndex : number) => {

                if(previousEach.fingerprintId === fingerprintId){
                    previousRanking = previousIndex + 1;
                }

            });

            var rankingChange = "same";

            if(previousRanking < currentRanking){
                rankingChange = "down";
            }else if(previousRanking > currentRanking){
                rankingChange = "up";
            }

            finalData.push({
                name : name,
                location : koreanLocation,
                time : time,
                rankingChange : rankingChange
            });


        })

        console.log(finalData);

        setFinalData(finalData);
    
    }

    useEffect(() => {

        if(!myLocation){
            return;
        }

        console.log(totalMonthData, totalPreviousMonthData, totalWeekData, totalPreviousWeekData, totalYesterdayData, totalTodayData, myEnglishLocation);

        makeFinalData(totalMonthData, totalPreviousMonthData, totalWeekData, totalPreviousWeekData, totalYesterdayData, totalTodayData, myEnglishLocation);


    }, [locationMenu, timeMenu]);



    return (
        <div className={styles.compBody} style={{
            paddingBottom: 0
        }}>
            <div className={styles.compTitle1}>
                오늘의 공부시간 랭킹
            </div>
            <div className={styles.compSubTitle1}>
                {locationMenu === 1 ? myLocation : locationMenu === 2 ? "전 지점" : ""} {timeMenu === 1 ? "하루" : timeMenu === 2 ? "이번 주" : timeMenu === 3 ? "이번 달" : ""} 공부시간 기준 <span>
                    {(locationMenu === 1 && timeMenu === 1) && myTodayRankingInLocation}
                    {(locationMenu === 1 && timeMenu === 2) && myWeekRankingInLocation}
                    {(locationMenu === 1 && timeMenu === 3) && myMonthRankingInLocation}
                    {(locationMenu === 2 && timeMenu === 1) && myTodayRanking}
                    {(locationMenu === 2 && timeMenu === 2) && myWeekRanking}
                    {(locationMenu === 2 && timeMenu === 3) && myMonthRanking}
                    등</span>이에요
            </div>
            <div className={styles.rankingMenuDiv}>
                <div className={styles.firstSmallMenu}>
                    <SmallMenubar menuList={[myLocation, "전체"]} handleCurrentMenu={handleCurrentMenu1} currentMenu={locationMenu} open={open} useOpen={true} />
                </div>
                <div className={styles.secondSmallMenu}>
                    <SmallMenubar menuList={["일별", "주별", "월별"]} handleCurrentMenu={handleCurrentMenu2} currentMenu={timeMenu} open={open} useOpen={true} />
                </div>
            </div>
            <div className={styles.rankingBodyDate}>
                {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 기준
            </div>
            <div className={styles.rankingImagesDiv}>
                {
                    finalData.map((item : any, index : number) => {

                        var realIndex = index;

                        if(index === 0){
                            realIndex = 1;
                        }

                        if(index === 1){
                            realIndex = 0;
                        }

                        const realItem = finalData[realIndex];

                        if (index > 2) {
                            return;
                        }

                        var target = ["second", "first", "third"][index];
                        var ranking = [2, 1, 3][index];

                        const imgSrc1 = `/img/daily/daily_${target}_face2.png`;
                        const imgSrc2 = `/img/daily/daily_${target}_medal2.png`;

                        const hours = Math.floor(realItem.time / 60);
                        const minutes = realItem.time % 60;





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
                                    {realItem.name}
                                </div>
                                <div className={styles.rankingTimeDiv}>
                                    {hours}시간 {minutes}분
                                </div>
                                <div className={styles.rankingNumberDiv}>
                                    {locationMenu === 1 ? myLocation : locationMenu === 2 ? "전체" : ""} {ranking}등
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
                    finalData.map((item : any, index : number) => {

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
                            {locationMenu === 1 ? myLocation : locationMenu === 2 ? "전 지점" : ""} {timeMenu === 1 ? "하루" : timeMenu === 2 ? "이번 주" : timeMenu === 3 ? "이번 달" : ""} 공부시간 기준 <span>
                            {(locationMenu === 1 && timeMenu === 1) && myTodayRankingInLocation}
                    {(locationMenu === 1 && timeMenu === 2) && myWeekRankingInLocation}
                    {(locationMenu === 1 && timeMenu === 3) && myMonthRankingInLocation}
                    {(locationMenu === 2 && timeMenu === 1) && myTodayRanking}
                    {(locationMenu === 2 && timeMenu === 2) && myWeekRanking}
                    {(locationMenu === 2 && timeMenu === 3) && myMonthRanking}
                    등
                                </span>이에요
                            </div>
                            <div className={styles.rankingMenuDiv}>
                                <div className={styles.firstSmallMenu}>
                                    <SmallMenubar menuList={[myLocation, "전체"]} handleCurrentMenu={handleCurrentMenu1} currentMenu={locationMenu} open={open} useOpen={true} />
                                </div>
                                <div className={styles.secondSmallMenu}>
                                    <SmallMenubar menuList={["일별", "주별", "월별"]} handleCurrentMenu={handleCurrentMenu2} currentMenu={timeMenu} open={open} useOpen={true} />
                                </div>
                            </div>
                            <div className={styles.rankingBodyDate}>
                                {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 기준
                            </div>
                            <div className={styles.modalJustBorder}>

                            </div>
                            <div className={styles.rankingListBody}>
                                {
                                    finalData.map((item : any, index : number) => {

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