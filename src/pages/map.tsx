import React, { useEffect, useState, useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";

import Footer from "../components/footer";
import HeaderTwo from "../components/header2";
import styles from "../styles/map.module.css";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { ReactComponent as CallSvg } from '../svg/phone-solid.svg';
import { ReactComponent as PlaceSvg } from '../svg/location-dot-solid.svg';
import { ReactComponent as BusSvg } from '../svg/bus-simple-solid.svg';

import { ReactComponent as LeftChevronLightSvg } from '../svg/chevron-left-light-white.svg';
import { ReactComponent as RightChevronLightSvg } from '../svg/chevron-right-light-white.svg';

import list from "../data/interiorlist";
import { Button } from "@mui/material";
import ImageTransitionInterior from "../control/imagetransitioninterior";
import SpeedDialComponent from "../control/speeddial";

import ReactGa from "react-ga4";



declare var naver : any;

const Map: React.FC<any> = (props) => {

    const [size, setSize] = useState(0);
    const [imageStyles, setImageStyles] = useState({
        transform: "translateX(0px)",
    });
    const [index, setIndex] = useState(0);
    const listRef = useRef<any>(null);
    const eachRef = useRef<any>(new Array());

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);


    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "mappageview"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "map"
        });
        
    }, []);
    //--------------------------------------------------------



    useEffect(() => {

        window.scrollTo(0, 0);

        const map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(37.4931655, 127.0286797),
            zoom: 16,
        });

        const marker = new naver.maps.Marker({
            map: map,
            title: "수능선배",
            position: new naver.maps.LatLng(37.4931655, 127.0286797),
            animation: naver.maps.Animation.BOUNCE
        })

        smoothscroll.polyfill();

        // console.log(eachRef.current[0].getBoundingClientRect());

        // if(listRef.current)
        // console.log(listRef.current.scrollLeft);
        // listRef.current.scrollTo({left : 200, behavior : "smooth"});
        // setTimeout(()=>{
        //     console.log(listRef.current.scrollLeft);
        // }, 2000);

    }, []);



    const move = (kind: string) => {
        var targetIndex=0;
        if (kind === "plus") {
            if (index < 9) {
                targetIndex = index + 1;
                setIndex(index + 1);
            } else if (index === 9) {
                targetIndex = 0;
                setIndex(0);
            }
        } else if (kind === "minus") {
            if (index > 0) {
                targetIndex = index - 1;
                setIndex(index - 1);
            } else if (index === 0) {
                targetIndex = 9;
                setIndex(9);
            }
        }
        const targetScroll = eachRef.current[targetIndex].getBoundingClientRect().x;
        listRef.current.scrollTo({ left: targetScroll + listRef.current.scrollLeft - 80, behavior: "smooth" });
    }

    const change = (eachIndex: number) => {
        setIndex(eachIndex);
    }

    const mobileChange = (eachIndex: number) => {
        setIndex(eachIndex);
        const targetScroll = eachRef.current[eachIndex].getBoundingClientRect().x;
        listRef.current.scrollTo({ left: targetScroll + listRef.current.scrollLeft - 80, behavior: "smooth" });
    }

    const minSwipeDistance = 50;

    const onTouchStart = (e : any) => {
        setTouchEnd(null);
        setTouchEndY(null);
        setTouchStart(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY)
    }

    const onTouchMove = (e : any) => {
        setTouchEnd(e.targetTouches[0].clientX);
        setTouchEndY(e.targetTouches[0].clientY);
    }

    const onTouchEnd = () => {
        if(!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        
        if(touchStartY && touchEndY){
            var distanceY = touchStartY - touchEndY;
            distanceY = Math.abs(distanceY);
            if(distanceY > Math.abs(distance)){
                return;
            }
        }

        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if(isLeftSwipe || isRightSwipe){
            console.log("swipe", isLeftSwipe ? " left" : " right");
            if(isLeftSwipe){
                move("plus");
            }
            if(isRightSwipe){
                move("minus");
            }
        }
    }


    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>

            </div>
            <div className={styles.subHeader} style={{ backgroundImage: "url(img/newinterior/02BL7589_1.webp)" }}>
                <div className={styles.blackFilter}>
                </div>
                <div className={styles.subHeaderText}>
                    <div className={styles.subHeaderTextTitle}>
                        &nbsp;&nbsp;&nbsp;공부에만 몰입할 수 있는
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        &nbsp;&nbsp;&nbsp;공간을 만들기 위해 고민했습니다
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
                        위치 및 시설 소개
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>

            </div>

            <div className={styles.mapDiv}>
                <div id="map" className={styles.map}></div>
            </div>

            <div className={styles.mapDescriptionDiv}>
                <div className={styles.mapDescription}>
                    <div className={styles.mapDescriptionPlace}>
                        <div className={`${styles.svgBox} ${styles.first}`}>
                            <PlaceSvg className={styles.placeSvg} fill="black" />
                        </div>
                        <div className={styles.placeText}>
                            <div className={styles.placeText_1}>
                                서울 서초구 서초대로78길 52(서초동 1330-12)
                            </div>
                            <div>
                                자습실 24시까지 이용 가능
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.mapDescriptionPlace} ${styles.second}`}>
                        <div className={styles.svgBox}>
                            <CallSvg className={styles.callSvg} />
                        </div>
                        <div className={styles.placeText}>
                            <a href="tel:05078713574" className={styles.atag} style={{ textDecoration: "none", color: "inherit" }}>
                                <div>
                                    TEL 050.7871.3574
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.mapDescriptionPlace}>
                        <div className={styles.svgBox}>
                            <BusSvg className={styles.busSvg} />
                        </div>
                        <div className={styles.placeText}>
                            <div className={`${styles.placeText_1} ${styles.metroPlaceText_1}`}>
                                지하철 이용시
                            </div>
                            <div className={styles.metroPlaceText}>
                                강남역 5번 출구 하차 후 도보 5분 이내 거리
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={`${styles.interiorDiv} ${styles.onlyPC}`}>
                <div className={styles.interior}>
                    <div className={styles.interiorTopDiv}>
                        <div className={styles.interiorTop}>
                            <div className={styles.interiorTopText}>
                                <div className={styles.interiorTopText_1}>
                                    수능선배
                                </div>
                                <div className={styles.interiorTopText_2}>
                                    시설 둘러보기
                                </div>
                                <div className={styles.interiorTopText_3}>
                                    {list[index].title}
                                </div>
                                <div draggable={false} className={styles.interiorTopText_4}>
                                    {list[index].description}
                                </div>
                            </div>
                            <div draggable={false} className={styles.interiorTopImages}>
                                <div draggable={false} className={styles.interiorTopImagesWrapper}>
                                    <ImageTransitionInterior index={index} />

                                    <Button sx={{ "&:hover": { border: "1px solid black", backgroundColor: "black" }, width: "59px", height: "59px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", top: "50%", transform: "translate(0, -50%)", position: "absolute", backgroundColor: "black", borderRadius: 0 }} variant="outlined" onClick={() => { move("minus") }}>
                                        <LeftChevronLightSvg className={styles.left} />
                                    </Button>

                                    <Button sx={{ "&:hover": { border: "1px solid black", backgroundColor: "black" }, width: "59px", height: "59px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", top: "50%", right: 0, transform: "translate(0, -50%)", position: "absolute", backgroundColor: "black", borderRadius: 0 }} variant="outlined" onClick={() => { move("plus") }}>
                                        <RightChevronLightSvg className={styles.left} />
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.interiorBottomDiv}>
                        <div className={styles.interiorBottom}>
                            <div className={styles.listTitleDiv}>
                                {
                                    list.map((eachList, eachIndex) => {
                                        return (
                                            <div key={eachList.src} className={styles.eachListhTitleDiv}>
                                                <div onClick={() => { change(eachIndex) }} className={`${styles.eachList} ${eachIndex === index ? styles.active : ""}`}>
                                                    {eachList.title}
                                                </div>
                                                <div className={`${styles.eachListBorder} ${(eachIndex === index || eachIndex === index - 1) ? styles.none : ""}`}>

                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`${styles.mobileInteriorDiv} ${styles.onlymobile}`}>
                <div ref={listRef} className={styles.mobileTitleList}>
                    {list.map((eachList, indexNumber) => {
                        return (
                            <div key={eachList.src} ref={(element) => { eachRef.current.push(element) }} onClick={() => { mobileChange(indexNumber); }} className={`${styles.mobileEachListTitle} ${index === indexNumber ? styles.active : ""}`}>
                                {eachList.title}
                            </div>
                        );
                    })}
                </div>



                <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <div className={styles.mobileInteriorImage}>
                        <div className={styles.mobileInteriorImageTitle}>
                            수능선배<br></br>시설 둘러보기
                        </div>

                        <div draggable={false} className={styles.interiorTopImages}>
                            <div draggable={false} className={styles.interiorTopImagesWrapper}>
                                <ImageTransitionInterior index={index} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.mobileInteriorText}>
                        <div className={styles.mobileInteriorTitle}>
                            {list[index].title}
                        </div>
                        <div className={styles.mobileInteriorDescription}>
                            {list[index].description}
                        </div>
                    </div>
                </div>

            </div>



            <SpeedDialComponent />


            <Footer />
        </div>
    );
}

export default Map;