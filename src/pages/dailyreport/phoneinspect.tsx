import React, {useEffect, useState, useRef} from "react";
import styles from "../../styles/dailyreport.module.css";
import SmallMenubar from "./components/smallmenubar";
import {ReactComponent as CircleCheck} from "../../svg/daily_circle_check.svg";
import {ReactComponent as CircleVoid} from "../../svg/daily_circle_void.svg";
import {ReactComponent as CircleX} from "../../svg/daily_circle_x.svg";
import {ReactComponent as MultiArrow} from "../../svg/daily_multiarrow.svg";
import {ReactComponent as JustCheck} from "../../svg/daily_just_check.svg";
import {ReactComponent as JustX} from "../../svg/daily_just_x.svg";
import {ReactComponent as Kakao} from "../../svg/kakao.svg";
import {ReactComponent as Clip} from "../../svg/daily_clip.svg";
import {ReactComponent as Chevron} from "../../svg/daily_chevron3.svg";
import {ReactComponent as CircleLogo} from "../../svg/daily_circle_logo.svg";
import {ReactComponent as DotDotDot} from "../../svg/daily_dotdotdot.svg";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { set } from "lodash";

const phoneData = [
    {class : 0, status : "OUT", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 2, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 1, status : "IN", lastTime : "08:11 am", phoneStatus : "제출", finalStatus : 1, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 2, status : "IN", lastTime : "08:11 am", phoneStatus : "제출", finalStatus : 1, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 3, status : "IN", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 3, kakao : "13:08 pm", imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 4, status : "OUT", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 4, imageSrc : "", imageTime : ""},
    {class : 5, status : "IN", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 1, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 6, status : "OUT", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 1, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 7, status : "IN", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 1, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"},
    {class : 8, status : "OUT", lastTime : "08:11 am", phoneStatus : "미제출", finalStatus : 1, imageSrc : "/img/daily/phone.jpeg", imageTime : "08:12 am"}
]

const PhoneInspect : React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const [currentClass, setCurrentClass] = useState({min : 0, max : 4});
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [seat, setSeat] = useState();

    const [phoneData, setPhoneData] = useState<any[]>([]);

    useEffect(() => {

        if(!props.targetDate || !props.userId || !props.location || !props.name){
            return;
        }

        start(props.targetDate, props.userId, props.location, props.name);

    }, [props.targetDate, props.userId, props.location, props.name]);

    useEffect(() => {

        if(currentMenu === 1){
            setCurrentClass({min : 0, max : 4});
        }else{
            setCurrentClass({min : 5, max : 8});
        }

    }, [currentMenu])

    const handleCurrentMenu = (index : number) => {
        setCurrentMenu(index);
    }

    const start = async (targetDate : Date, userId : number, location : string, name : string) => {
    
        await getPhoneInspectStatus(targetDate, userId, location);
    
    }

    const getPhoneInspectStatus = async (targetDate : Date, userId : number, location : string) => {

        try{

            if(!targetDate || !userId || !location){
                return;
            }

            const targetDateTime = targetDate.getTime();

            const body = {
                targetDateTime,
                userId,
                location
            }

            const response = await fetch("https://peetsunbae.com/dashboard/report/dailyreport/phoneinspectstatus", {
                method : "POST",
                credentials : "include",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(body)
            });

            const result = await response.json();

            console.log(result);

            if(result.message !== "success"){
                throw new Error("서버와의 통신에 실패했습니다.");
            }

            const accessControl = result.accessControl;
            const inspectPhones = result.inspectPhones;
            const inspectPhonesImage = result.inspectPhonesImage;
            const inspectPhonesMemo = result.inspectPhonesMemo;
            const ourLocationInfo = result.ourLocationInfo;
            const seat = result.seat;

            if(!accessControl || !inspectPhones || !inspectPhonesImage || !inspectPhonesMemo || !ourLocationInfo || !seat){
                console.log("필수 데이터가 없습니다.");
                throw new Error("필수 데이터가 없습니다.");
            }

            const locationInfo = ourLocationInfo.find((info : any) => info.english === location);

            if(!locationInfo){
                console.log("필수 데이터가 없습니다.");
                throw new Error("필수 데이터가 없습니다.");
            }

            const finalData : any = [];

            locationInfo.classInfo.forEach((classInfo : any, index : number) => {

                if(classInfo.classNumber === "lunch" || classInfo.classNumber === "dinner"){
                    return;
                }

                const oneRow : any = {};

                oneRow.class = index;
                oneRow.start = classInfo.start;
                oneRow.end = classInfo.end;

                finalData.push(oneRow);

            });

            makeAccessControlData(accessControl, locationInfo, finalData);
            makePhoneInspectData(seat, inspectPhones, inspectPhonesImage, inspectPhonesMemo, finalData, locationInfo, location);

            setPhoneData([...finalData]);

            console.log("phoneInspect");
            console.log(finalData);

        }catch(e){
            console.log(e);
        }

    }

    const makePhoneInspectData = (seat : any, inspectPhones : any, inspectPhonesImage : any, inspectPhonesMemo : any, finalData : any, locationInfo : any, location : any) => {
        
        //일단 imageSrc랑 imageTime을 넣어주자
        finalData.forEach((eachData : any)=> {

            const startTime = eachData.start.hours * 60 + eachData.start.minutes;
            const endTime = eachData.end.hours * 60 + eachData.end.minutes;

            inspectPhonesImage.forEach((eachImage : any) => {

                const newDate = new Date(eachImage.createdAt);
                const imageTime = newDate.getHours() * 60 + newDate.getMinutes();

                if(imageTime >= startTime && imageTime <= endTime){
                    eachData.imageSrc = "https://peetsunbae.com/phonesimage/" + eachImage.src;

                    var ampm = "am";
                    var hours : any = newDate.getHours();

                    if(hours === 12){
                        ampm = "pm";
                    }

                    if(hours > 12){
                        hours = hours - 12;
                        ampm = "pm";
                    }

                    var minutes : any = newDate.getMinutes();

                    hours = hours < 10 ? "0" + hours : hours;
                    minutes = minutes < 10 ? "0" + minutes : minutes;

                    eachData.imageTime = `${hours}:${minutes} ${ampm}`;

                }

            });
        })

        //각 교시별 제출, 미제출 여부를 넣어주자

        var correctionNumber = 0;

        if(location === "daechi2"){
            correctionNumber = 100;
        }

        if(location === "daechi3"){
            correctionNumber = 200;
        }

        if(location === "songdo_free"){
            correctionNumber = 44;
        }

        finalData.forEach((eachData : any) => {

            //20까지만
            const classNumber = ["zero", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth"][eachData.class];

            const selectedInspectPhones = inspectPhones.find((eachInspect : any) => eachInspect.classNumber === classNumber);
            const selectedInspectPhonesMemo = inspectPhonesMemo.find((eachMemo : any) => eachMemo.classNumber === classNumber);

            const submitPhoneData = selectedInspectPhones.selectedPhoneNumbers;

            if(!submitPhoneData){
                eachData.finalStatus = 4;
                return;
            }

            const searchIndex = ((+seat) - 1) - correctionNumber;

            eachData.phoneStatus = submitPhoneData[searchIndex] ? "제출" : "미제출";

            if(eachData.status === "IN" && eachData.phoneStatus === "제출" ){
                eachData.finalStatus = 1;
            }

            if(eachData.status === "OUT" && eachData.phoneStatus === "제출"){
                eachData.finalStatus = 1;
            }

            if(eachData.status === "OUT" && eachData.phoneStatus === "미제출"){
                eachData.finalStatus = 2;
            }

            if(eachData.status === "IN" && eachData.phoneStatus === "미제출"){
                eachData.finalStatus = 3;
            }

            if(selectedInspectPhonesMemo){

                if(selectedInspectPhonesMemo.sendMessageTime){

                    const newDate = new Date(selectedInspectPhonesMemo.sendMessageTime);

                    var hours : any = newDate.getHours();
                    var minutes : any = newDate.getMinutes();

                    var ampm = "am";

                    if(hours === 12){
                        ampm = "pm";
                    }

                    if(hours > 12){
                        hours = hours - 12;
                        ampm = "pm";
                    }

                    hours = hours < 10 ? "0" + hours : hours;
                    minutes = minutes < 10 ? "0" + minutes : minutes;

                    eachData.kakao = `${hours}:${minutes} ${ampm}`;

                }

                if(selectedInspectPhonesMemo.description){
                    eachData.description = selectedInspectPhonesMemo.description;
                }

            }


        });

        
    
    }

    const makeAccessControlData = (accessControl : any, locationInfo : any, finalData : any) => {

        accessControl.forEach((eachAccess : any) => {

            const date = new Date(eachAccess.DateInserted);

            const hours = date.getHours();
            const minutes = date.getMinutes();

            const time = hours * 60 + minutes;


            eachAccess.ampm = "am";
            eachAccess.hours = hours;

            if(eachAccess.hours === 12){
                eachAccess.ampm = "pm";
            }

            if(eachAccess.hours > 12){
                eachAccess.hours = eachAccess.hours - 12;
                eachAccess.ampm = "pm";
            }

            eachAccess.hours = eachAccess.hours < 10 ? "0" + eachAccess.hours : eachAccess.hours;

            eachAccess.minutes = minutes;
            eachAccess.minutes = eachAccess.minutes < 10 ? "0" + eachAccess.minutes : eachAccess.minutes;

            eachAccess.time = time;

        });

        finalData.forEach((eachData : any) => {

            eachData.status = "OUT";

            const startTime = eachData.start.hours * 60 + eachData.start.minutes;

            eachData.access = accessControl.filter((eachAccess : any) => eachAccess.time <= (startTime + 1));

            if(eachData.access.length === 0){
                return;
            }

            const lastAccess = eachData.access[eachData.access.length - 1];

            if(lastAccess.direction === "outside"){
                eachData.status = "IN";
            }

            eachData.lastTime = `${lastAccess.hours}:${lastAccess.minutes} ${lastAccess.ampm}`;


        })

    }

    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                휴대폰 제출 검사 내역
            </div>
            <div className={styles.compSubTitle4}>
                교시 중간에 입실한 경우 제출 결과는<br/>그 다음 교시부터 정상 반영돼요
            </div>
            <div className={styles.smallMenuBarDiv} style={{marginTop : "1.62rem"}}>
                <div className={styles.smallMenuBarWrapper2}>
                    <SmallMenubar handleCurrentMenu={handleCurrentMenu} menuList={["0-4교시", "5-8교시"]} />
                </div>
            </div>
            <div className={styles.phoneInspectStatusInfo}>
                <div className={styles.eachInfo}>
                    <div className={styles.eachInfoSvg}>
                        <CircleCheck  />
                    </div>
                    <div className={styles.eachInfoText}>
                        재원중-제출됨
                    </div>
                </div>
                <div className={styles.eachInfo}>
                    <div className={styles.eachInfoSvg}>
                        <CircleVoid />
                    </div>
                    <div className={styles.eachInfoText}>
                        비재원중-미제출
                    </div>
                </div>
                <div className={styles.eachInfo}>
                    <div className={styles.eachInfoSvg}>
                        <CircleX />
                    </div>
                    <div className={styles.eachInfoText}>
                        재원중-미제출
                    </div>
                </div>
            </div>
            <div className={styles.phoneInspectDiv}>
                {
                    phoneData && phoneData.map((data, index) => {

                        if(index < currentClass.min || index > currentClass.max){
                            return;
                        }

                        return (
                            <div key={index} className={styles.eachPhoneInspectDiv}>
                                <div className={styles.eachPhoneInspectWrapper}>
                                    <div className={styles.eachPhoneInspectClass}>
                                        {data.class}교시
                                    </div>
                                    <div className={styles.eachPhoneInspectStatusDiv}>
                                        <div className={`${styles.eachPhoneInspectStatus} ${styles["eachPhoneInspectFinalStatus" + data.finalStatus]}`}>
                                            {
                                                data.finalStatus === 1 &&
                                                <JustCheck />
                                            }
                                            {
                                                data.finalStatus === 3 &&
                                                <JustX />
                                            }
                                            {
                                                data.finalStatus === 4 &&
                                                <DotDotDot />
                                            }
                                        </div>
                                        <div className={styles.eachPhoneInspectStatusLine}>
                                        </div>
                                        {
                                            data.class === 4 &&
                                            <div className={styles.eachPhoneChevronDiv}>
                                                <Chevron className={styles.chevron} />
                                            </div>
                                        }
                                    </div>
                                    <div className={styles.eachPhoneInspectRealInfo}>
                                        <div className={styles.eachPhoneInspectRealInfoText}>
                                            {data.status} ({data.lastTime})
                                            <div className={styles.eachPhoneInspectRealInfoMultiArrow}>
                                                <MultiArrow />
                                            </div>
                                            {data.phoneStatus}
                                        </div>
                                        <div className={styles.eachPhoneInspectImgWrapper}>
                                            <div className={styles.eachPhoneInspectImgBox}
                                            onClick={() => {
                                                if(!data.imageSrc){
                                                    return;
                                                }
                                                setSelectedIndex(index + 1)
                                            }}
                                            >
                                                {
                                                    data.imageSrc &&
                                                    <img src={data.imageSrc} className={styles.eachPhoneInspectImg} />
                                                }
                                                {
                                                    !data.imageSrc &&
                                                    <div className={styles.eachPhoneInspectNotImg}>
                                                        <Clip /> {data.class}교시
                                                    </div>
                                                }
                                            </div>
                                            <div className={styles.eachPhoneInspectImgTime}>
                                                {
                                                    data.imageTime &&
                                                    data.imageTime
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.eachPhoneInspectKakaoWrapper}>
                                            {
                                                data.kakao &&
                                                <div className={styles.kakaoDiv}>
                                                    <div className={styles.kakaoCircle}>
                                                        <Kakao />
                                                    </div>
                                                    <div className={styles.kakaoText}>
                                                        학부모 확인 메시지 ({data.kakao})
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
                {
                    currentMenu === 2 &&
                    <div className={styles.eachPhoneInspectDiv}>
                        <div className={styles.eachPhoneInspectWrapper}>
                            <div className={styles.eachPhoneInspectClass}>
                                종료
                            </div>
                            <div className={styles.eachPhoneInspectStatusDiv}>
                                <CircleLogo />
                            </div>
                            <div className={styles.eachPhoneInspectRealInfo}>
                                <div className={styles.eachPhoneInspectRealInfoText}>
                                    22:00 pm
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {
                selectedIndex !== 0 &&
                <Lightbox
                    mainSrc={phoneData[selectedIndex - 1].imageSrc}
                    onCloseRequest={() => setSelectedIndex(0)}
                />
            }
        </div>
    )

}

export default PhoneInspect;