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
                            <div className={styles.eachPhoneInspectDiv}>
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