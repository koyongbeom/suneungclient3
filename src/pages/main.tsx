import React, { useEffect, useState, useRef } from 'react';
import { throttle } from "lodash";
import Header from '../components/header';
import styles from '../styles/main.module.css';
import { ReactComponent as LeftChevronSvg } from '../svg/chevron-left-light.svg';
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-light.svg';
// import { ReactComponent as DownChevronSvg } from '../svg/chevron-down-light.svg';

// import { ReactComponent as GrayLogoSvg } from '../svg/graylogo.svg';
import { ReactComponent as GrowChart } from '../svg/growchart.svg';

import { useSpring, animated} from "react-spring";

import Button from '@mui/material/Button'
import Carousel from 'react-elastic-carousel';
import useInterval from '../control/useInterval';
import Mount from '../control/chevrondown';
import NumberAnimation from '../control/numberanimation';
// import TextAnimation from '../control/textanimation';
import { interiorImageList } from '../data/imagelist';
import ImageTransition from '../control/imagetransition';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import SpeedDialComponent from '../control/speeddial';
import { useMediaQuery } from "react-responsive";
import Vimeo from '@u-wave/react-vimeo';

import ReactGa from "react-ga4";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



const mobileTutorList = [
    {
        img: 31,
        name: "이선행",
        record: "수능 전국 151등",
        school: "카톨릭대 의대 정시 합격",
        ment1: "약점을 파악하고",
        ment2: "전략을 함께 고민하겠습니다."
    },
    {
        img: 32,
        name: "김희선",
        record: "수능 상위 0.2%",
        school: "서울대학교 소비자학과 정시 합격",
        ment1: "학생에 대한 정확한 이해로",
        ment2: "맞춤 솔루션을 제공하겠습니다"
    },
    {
        img: 33,
        name: "이재훈",
        record: "수능 전국 200등",
        school: "경희대 의대 정시 합격",
        ment1: "N수생의 힘겨운 길을 같이 걷는",
        ment2: "동반자가 되어드리겠습니다."
    }
]

var isBottomMenuBoolean = false;

const reviewList = [
    {
        name: "강민구",
        firstLine: "단국대 치대 합격생",
        secondLine: "1년 동안 재원",
        description: "\"멘토님과의 상담을 통해서 지금\n하고 있는 공부의 방향이 맞게\n흘러가고 있는지를 점검할 수\n있었습니다\""
    },
    {
        name: "김민석",
        firstLine: "서울대 약대 합격생",
        secondLine: "1년 동안 재원",
        description: "\"쾌적한 시설이 좋았습니다\n책상을 넓게 쓰고\n편안한 의자에 앉아서 공부하는\n것이 좋았습니다\""
    },
    {
        name: "정미진",
        firstLine: "서울대 약대 합격생",
        secondLine: "1년 동안 재원",
        description: "\"멘토님과 매주 공부 분량을\n자세하게 계획하였고\n매주 상담시간이 정해진 분량을\n끝마쳤는지 확인했습니다\""
    },
    {
        name: "백진식",
        firstLine: "서울대 약대 합격생",
        secondLine: "2년 동안 재원",
        description: "\"동일한 공부를 하는 학생들과\n특유의 생활관리형 시스템으로\n긴장감이 상당히 잘 조성되어\n있습니다\""
    },
    {
        name: "김소연",
        firstLine: "중앙대 약대 합격생",
        secondLine: "1년 동안 재원",
        description: "\"독학으로 공부하는 수험생으로\n늘 불안함과 외로움이 있었습니다\n입시를 성공한 선배와의 상담을\n통해 공부에 집중할 수 있었습니다\""
    },
    {
        name: "이성진",
        firstLine: "중앙대 약대 합격생",
        secondLine: "1년 동안 재원",
        description: "\"인강 온라인 질의응답만으로\n부족한 점이 많아\n질의응답을 원활히 할 수 있는\n곳을 선택했습니다\""
    },
    {
        name: "정종훈",
        firstLine: "성균관대 약대 합격생",
        secondLine: "1년 동안 재원",
        description: "\"원장선생님의 공부계획 관리를\n통해서 좀 더 효율적이고\n체계적인 공부를 할 수 있게\n된다는 점이 좋았습니다\""
    },
    {
        name: "정민지",
        firstLine: "제주대 약대 합격생",
        secondLine: "2년 동안 재원",
        description: "\"독서실에서 혼자 공부를 하면\n시기에 맞는 공부를 하고 있는지\n불안감이 들었는데, 이를\n해소하기 위해 선택했습니다\""
    }
]


const style5 = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: "rgba(255,255,255, 0.9)",
    boxShadow: 24,
    borderRadius : "3px",
    p: 4,
    maxWidth : "79%",
    outline : "none !important"
  };


const MainPage: any = (props: any) => {

    const [open5, setOpen5] = useState(true);
    const handleOpen = () => setOpen5(true);
    const handleClose = () => setOpen5(false);

    const [play, setPlay] = useState(true);
    const [pause, setPause] = useState(false);

    const [indexNumber, setIndexNumber] = useState(15);

    const [list, setList] = useState(interiorImageList);

    const [list2, setList2] = useState([
        "guide2", "patrol", "question", "question2", "test3"
    ]);
    // const [reviewList, setReviewList] = useState([
    //     1, 2, 3, 4
    // ]);
    const [pictureIndex, setPictureIndex] = useState(0);
    const carouselRef = useRef<any>(null);
    const [windowInnerWidth, setWindowInnerWidth] = useState(1500);
    const scrollRef = useRef<any>(null);

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);

    const [headerKind, setHeaderKind] = useState("transparent");

    const [isBottomMenu, setIsBottomMenu] = useState(false);

    const ref1 = useRef<any>(null);
    const ref2 = useRef<any>(null);
    const ref3 = useRef<any>(null);
    const ref4 = useRef<any>(null);
    const ref5 = useRef<any>(null);
    const ref6 = useRef<any>(null);

    const [screenWidth, setScreenWidth] = useState<any>();


    const [mobileFourthSectionMenuSelector, setMobileFourthSectionMenuSelector] = useState<number>(1);

    const titleprops = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: 20 }, config: { duration: 600 }, delay: 300 })

    const isLargeMobile = useMediaQuery({query : '(min-width : 405px)'});
    const isTablet = useMediaQuery({query : `(min-width : 768px)`});
    const isLargeTablet = useMediaQuery({query : `(min-width : 810px)`});


    //ga event------------------------------------------------
    useEffect(()=>{

        ReactGa.send({
            hitType : "pageview",
            page_title : "main"
        });

        // ReactGa.event({
        //     category : "view",
        //     action : "mainpageview"
        // })
    }, []);
    //--------------------------------------------------------

    useInterval(() => {
        if (pictureIndex < 4) {
            setPictureIndex(pictureIndex + 1);
        } else {
            setPictureIndex(0);
        }
    }, 2000);

    const intersect = (entries: any, observer: any) => {
        console.log(entries);

        entries.forEach((entry: any, i: number) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.move);
            }
        })
        // if(entries[0].isIntersecting === true){
        //     ref1.current.classList.add(styles.move);
        // }
        // if(entries[1].isIntersecting === true){
        //     ref1.current.classList.add(styles.move);
        // }
    }


    const intersect2 = (entries: any, observer: any) => {
        if (entries[0].isIntersecting) {
            console.log("intersect");
            entries[0].target.classList.add("letsgo");
        }
    }

    const intersect3 = (entries : any, observer : any) => {
        if(entries[0].isIntersecting){
            console.log("intersect");
            setPause(false);
        }
    }


    useEffect(() => {
        console.log("swiperref");

        let options = {
            rootMargin: '0px',
            threshold: 1
        }

        let options2 = {
            rootMargin: '0px',
            threshold: 0.3
        }

        let options3 = {
            rootMargin: '0px',
            threshold: 0.6
        }

        // let observer = new IntersectionObserver(intersect, options);
        // observer.observe(ref1.current);
        // observer.observe(ref2.current);
        // observer.observe(ref3.current);
        // observer.observe(ref4.current);
        // observer.observe(ref5.current);

        let observer2 = new IntersectionObserver(intersect2, options2);
        observer2.observe(ref6.current);

        let observer3 = new IntersectionObserver(intersect3, options3);
        observer3.observe(scrollRef.current);


    }, [])

    useEffect(() => {
        var newList: any = [];
        for (var i = 0; i < 10; i++) {
            list.forEach((each: any) => {
                newList.push(each);
            });
        }
        setList([...newList]);
    }, []);

    const handleResize = () => {
        console.log(window.innerWidth, window.innerHeight);
        setWindowInnerWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowInnerWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const listener = (e: any) => {
        const scroll = scrollRef.current.getBoundingClientRect();
        const clientScrollY = scroll.top;

        if (isBottomMenuBoolean === false && clientScrollY < 180) {
            setIsBottomMenu(true);
            isBottomMenuBoolean = true;
        }
        console.log(isBottomMenuBoolean);
        if (isBottomMenuBoolean === true && clientScrollY >= 180) {
            setIsBottomMenu(false);
            isBottomMenuBoolean = false;
        }


        const scrollY = window.pageYOffset;

        if (scrollY === 0) {
            setHeaderKind("transparent");
        }

        if (headerKind === "transparent" && scrollY > 10) {
            setHeaderKind("white");
        }


    }

    useEffect(() => {

        window.scrollTo(0, 0);

        const throttledFn = throttle(listener, 500);

        window.addEventListener("scroll", throttledFn);
        return () => {
            window.removeEventListener("scroll", throttledFn);
        };
    }, []);

    const minSwipeDistance = 50;

    const onTouchStart = (e: any) => {
        setTouchEnd(null);
        setTouchEndY(null);
        setTouchStart(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY)
    }

    const onTouchMove = (e: any) => {
        setTouchEnd(e.targetTouches[0].clientX);
        setTouchEndY(e.targetTouches[0].clientY);
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;

        if (touchStartY && touchEndY) {
            var distanceY = touchStartY - touchEndY;
            distanceY = Math.abs(distanceY);
            if (distanceY > Math.abs(distance)) {
                return;
            }
        }

        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe) {
            console.log("swipe", isLeftSwipe ? " left" : " right");
            if (isLeftSwipe) {
                if (mobileFourthSectionMenuSelector === 3) {
                    setMobileFourthSectionMenuSelector(1);
                } else {
                    setMobileFourthSectionMenuSelector(mobileFourthSectionMenuSelector + 1);
                }
            }
            if (isRightSwipe) {
                if (mobileFourthSectionMenuSelector === 1) {
                    setMobileFourthSectionMenuSelector(3);
                } else {
                    setMobileFourthSectionMenuSelector(mobileFourthSectionMenuSelector - 1);
                }
            }
        }
    }

    return (
        <div className={styles.main}>
            <Header className={styles.menubar} headerKind={headerKind} isBottomMenu={isBottomMenu} />
            <div style={{ backgroundImage: "url(img/main99999.webp)" }} className={styles.mainImgDiv}>
                <animated.div style={titleprops} className={styles.mainText}>
                    <div>독학재수전문 수능선배는</div>
                    <div className={`${styles.onlyPC} ${styles.firstSectionPCTitle_1}`}>성공 노하우를 전수하기 위해 존재합니다</div>
                    <div className={`${styles.onlymobile} ${styles.firstSectionMobileTitle_1}`}>성공 노하우를</div>
                    <div className={`${styles.onlymobile} ${styles.firstSectionMobileTitle_2}`}>전수하기 위해 존재합니다</div>
                    <div className={styles.chevronDownDiv}>
                        <Mount />
                    </div>
                </animated.div>

                <div className={styles.mainBlackFilter}>

                </div>
            </div>


            <div className={styles.secondSection}>
                {/* <div style={{ backgroundImage: "url(img/secondbg.webp)" }} className={styles.secondSectionBackground}> */}
                <div className={styles.secondSectionBackground}>
                    <div className={`${styles.secondSectionTitle_1} ${styles.onlyPC}`}>
                        수능선배는
                    </div>
                    <div className={`${styles.secondSectionTitle_2} ${styles.onlyPC}`}>
                        성공 실적으로 얘기합니다
                    </div>

                    <div className={`${styles.secondSectionTitle_1} ${styles.onlymobile}`}>
                        수능선배는
                    </div>
                    <div className={`${styles.secondSectionTitle_2} ${styles.onlymobile}`}>
                        
                    </div>
                    <div className={`${styles.secondSectionTitle_3} ${styles.onlymobile}`}>
                        성공 실적으로 얘기합니다
                    </div>

                    <div className={styles.numberDiv}>
                        <div className={styles.numberBox}>
                            <div className={styles.numberBoxChild}>
                                <div>
                                    <div className={styles.numberBoxTitle}>
                                        누적 의치약 합격자 수
                                    </div>
                                    <div className={styles.numberBoxDescription}>
                                        <span className={styles.autoNumber}>
                                            <NumberAnimation number={194} fixed={0} delay={500} />
                                        </span>명
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.numberBoxTitle2}>
                                        평균 의치약 합격률
                                    </div>
                                    <div className={styles.numberBoxDescription}>
                                        <NumberAnimation number={28.6} fixed={1} delay={500} />%
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.numberBoxTitle3} ${styles.onlyPC}`}>
                                        2021.03월 기준
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.numberBoxChild} ${styles.second}`}>
                                <div>
                                    <div className={styles.numberBoxTitle}>
                                        재등록률
                                    </div>
                                    <div className={styles.numberBoxDescription}>
                                        <span className={styles.autoNumber}>
                                            <NumberAnimation number={97.3} fixed={1} delay={500} />
                                        </span>%
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.numberBoxTitle2}>
                                        등록 대기자
                                    </div>
                                    <div className={styles.numberBoxDescription}>
                                        <span className={styles.autoNumber}>
                                            <NumberAnimation number={100} fixed={0} delay={500} />
                                        </span>명 +
                                    </div>
                                </div>
                            </div>
                            <div className={styles.numberBoxChild}>

                            </div>
                            <div className={`${styles.whenNumber} ${styles.onlymobile}`}>
                                2022.03월 기준
                            </div>
                        </div>

                        <div ref={ref6} className={styles.growChartDiv}>
                            <GrowChart />
                        </div>
                    </div>


                </div>

                <div className={`${styles.ceoVideoText} ${styles.onlymobile}`}>
                    의치약 합격자들의<br></br>생생한 후기를 공개합니다
                </div>

                <div className={`${styles.ceoVideoTextPC} ${styles.onlyPC} ${styles.firstTextSecondSection}`}>
                    의치약 합격자들의
                </div>
                <div className={`${styles.ceoVideoTextPC} ${styles.onlyPC} ${styles.SecondTextSecondSection}`}>
                    생생한 후기를 공개합니다
                </div>


                <div ref={scrollRef} className={styles.ceoVideo}>
                    <div className={styles.videoBox}>
                        <div className={styles.vimeoWrapper}>
                            <Vimeo
                                responsive
                                width="100%"
                                height="100%"
                                video="https://vimeo.com/700228719"
                                autoplay={play}
                                paused={pause}
                                muted
                                className={styles.player}
                                onReady={(e: any) => { setTimeout(() => { setPause(true); }, 2000) }}
                            />
                        </div>
                    </div>
                </div>




            </div>


            <div className={`${styles.mobileFifthSection} ${styles.onlymobile} fifthSection`}>
                <div>
                    <div className={styles.mobileFifthSectionTitle}>
                        <span className={styles.textColor}>공부 잘하는 방법</span>을<br></br>확실하게 아는 수능선배가<br></br>독학의 방향을 코칭합니다
                    </div>
                    <div className={`${styles.mobileFifthSectionDescription}`}>
                        "학생별 학습 성향과 취약 과목에 따라
                    </div>
                    <div className={`${styles.mobileFifthSectionDescription} ${styles.second}`}>
                        담임멘토가 매칭됩니다."
                    </div>
                </div>


                <div className={styles.mobileCarouselWrapper}>
                    {/* <Carousel
                        showArrows={false}
                        isRTL={false}
                        initialFirstItem={0}
                        itemsToShow={1.308}
                    >
                        {mobileTutorList.map((each) => {
                            return (
                                <div key={each} className={styles.mobileEachTutor}>
                                    <div className={styles.mobileEachTutorImgBox}>
                                        <img className={styles.mobileEachTutorImg} src={`img/tutor${each}.webp`} alt="tutor" />
                                        <div className={styles.mobileEachTutorImgBoxDescription}>
                                            <div className={styles.mobileEachTutorImgBoxDescription_1}>
                                                튜터 고용범 [화학]
                                            </div>
                                            <div className={styles.mobileEachTutorImgBoxDescription_2}>
                                                <div>
                                                    현) 수능선배 대표
                                                </div>
                                                <div>
                                                    전) 피트선배 대표
                                                </div>
                                                <div>
                                                    경희대 약학과 수석입학
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.mobileEachTutorDescriptionBox_1}>
                                        "6년 동안 화학을 가르친 경험을
                                    </div>
                                    <div className={styles.mobileEachTutorDescriptionBox_2}>
                                        바탕으로"
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel> */}
                    {
                        <Swiper
                            slidesPerView={1.4}
                            spaceBetween={30}
                            className={styles.swiper}
                        >
                            {
                                mobileTutorList.map((each: any, index) => {
                                    return (
                                        <SwiperSlide
                                        >
                                            <div key={each.img} className={styles.mobileEachTutor}>
                                                <div className={styles.mobileEachTutorImgBox}>
                                                    <img className={styles.mobileEachTutorImg} src={`img/tutor${each.img}.webp`} alt="tutor" />
                                                    <div className={styles.mobileEachTutorImgBoxDescription}>
                                                        <div className={styles.mobileEachTutorImgBoxDescription_1}>
                                                            담임멘토 {each.name}
                                                        </div>
                                                        <div className={styles.mobileEachTutorImgBoxDescription_2}>
                                                            <div>

                                                            </div>
                                                            <div>
                                                                {each.record}
                                                            </div>
                                                            <div>
                                                                {each.school}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.tutorDescriptionDivWrapper}>
                                                    <div className={styles.mobileEachTutorDescriptionBox_1}>
                                                        "{each.ment1}
                                                    </div>
                                                    <div className={styles.mobileEachTutorDescriptionBox_2}>
                                                        {each.ment2}"
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    }
                </div>
            </div>
            

            <div className={`${styles.mobileFourthSection} ${styles.onlymobile}`}>
                <div>
                    <div className={styles.mobileFourthSectionTitle}>
                        평범한 독재와
                    </div>
                    <div className={`${styles.mobileFourthSectionTitle} ${styles.second}`}>
                        이런 점이 다릅니다
                    </div>
                </div>
                <div className={styles.mobileFourthSectionMenu}>
                    <div className={`${styles.mobileFourthSectionMenuText} ${mobileFourthSectionMenuSelector === 1 ? styles.active : ""}`} onClick={(e) => { setMobileFourthSectionMenuSelector(1) }}>
                        담임상담
                    </div>
                    <div className={`${styles.mobileFourthSectionMenuText} ${mobileFourthSectionMenuSelector === 2 ? styles.active : ""}`} onClick={(e) => { setMobileFourthSectionMenuSelector(2) }}>
                        질의응답
                    </div>
                    <div className={`${styles.mobileFourthSectionMenuText} ${mobileFourthSectionMenuSelector === 3 ? styles.active : ""}`} onClick={(e) => { setMobileFourthSectionMenuSelector(3) }}>
                        식사메뉴
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.mobileFourthSectionDescription} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                            <div className={styles.mobileFourthSectionDescriptionImg}>
                                    <img src="img/answer2.webp" alt="patrol" className={`${styles.patrolImg} ${mobileFourthSectionMenuSelector !== 2 ? styles.transparent : ""}`} />
                                    <img src="img/education55.webp" alt="patrol" className={`${styles.patrolImg} ${styles.patrolImg2} ${mobileFourthSectionMenuSelector !== 1 ? styles.transparent : ""}`} />
                                    <img src="img/bon2.webp" alt="patrol" className={`${styles.patrolImg} ${mobileFourthSectionMenuSelector !== 3 ? styles.transparent : ""}`} />
                            </div>
                            {
                                mobileFourthSectionMenuSelector === 2 ?
                                    <div>
                                        <div className={styles.mobileFourthSectionDescriptionText}>
                                            <div>
                                                <span className={styles.textColor}>의치약 튜터</span>에게
                                            </div>
                                            <div>
                                                <span className={styles.textColor}>매일 질의응답</span>이 가능합니다
                                            </div>
                                        </div>
                                        <div className={styles.mobileFourthSectionDescriptionSubText}>
                                            질의응답 전용 신청 프로그램을 통해 예약하고 대기 없이 질의응답이 가능합니다. 질문할 내용을 미리 튜터에게 전달 후 튜터가 생각을 정리한 후 답변을 해주기 때문에 정돈된 답변을 들을 수 있습니다.
                                        </div>
                                    </div>

                                    :
                                    ""
                            }
                            {
                                mobileFourthSectionMenuSelector === 1 ?
                                    <div>
                                        <div className={styles.mobileFourthSectionDescriptionText}>
                                            <div>
                                                <span className={styles.textColor}>실력 없는 선생님</span>이
                                            </div>
                                            <div>
                                                <span className={styles.textColor}>학습 상담</span>을 진행하지 않습니다
                                            </div>
                                        </div>
                                        <div className={styles.mobileFourthSectionDescriptionSubText}>
                                            최신 입시 경향을 아는 최상위권 담임 멘토를 고집합니다. 50대 1의 경쟁률을 뚫고 서류 평가, 성적 기준, 실전 문제 풀이 테스트를 통과한 분들에게만 학습 조언의 자격을 부여합니다.
                                        </div>
                                    </div>

                                    :
                                    ""
                            }
                            {
                                mobileFourthSectionMenuSelector === 3 ?
                                    <div>
                                        <div className={styles.mobileFourthSectionDescriptionText}>
                                            <div>
                                                <span className={styles.textColor}>유명 프랜차이즈 도시락</span>을
                                            </div>
                                            <div>
                                                <span className={styles.textColor}>넓고 쾌적한 공간</span>에서 드실 수 있습니다
                                            </div>
                                        </div>
                                        <div className={styles.mobileFourthSectionDescriptionSubText}>
                                            맛있는 식사, 다양한 메뉴를 제공합니다. 수강생 전용 프로그램에서 업체와 메뉴를 고르실 수 있습니다. 매 끼니별로 신청 여부를 선택할 수 있습니다.
                                        </div>
                                    </div>

                                    :
                                    ""
                            }
                        </div>
                    </div>
                </div>
            </div>






            <div className={`${styles.thirdSectionMobile} ${styles.onlymobile}`}>
                <div ref={ref1}>
                    <div className={`${styles.thirdSectionTitleMobile}`}>
                        쾌적한 자습실에서
                    </div>
                    <div className={`${styles.thirdSectionTitleMobile} ${styles.second}`}>
                        하루 14시간 집중하게 될 겁니다
                    </div>
                </div>
                <div className={styles.mobileImageDiv}>
                    <div className={styles.mobileImageBox}>
                        <img className={styles.mobileImageInterior} src="img/13.webp" alt="open" />
                        {/* <img className={styles.test} src="img/attendanceCheck2.webp" alt="open" /> */}
                    </div>
                    <div className={styles.mobileImageBoxTitle}>
                        오픈석
                    </div>
                    <div className={styles.mobileImageBoxDescription}>
                        넓은 책상과 편한 시디즈 의자에 앉아
                    </div>
                    <div className={`${styles.mobileImageBoxDescription} ${styles.second}`}>
                        경쟁을 하며 공부할 수 있습니다
                    </div>
                </div>
                <div className={styles.mobileImageDiv}>
                    <div className={styles.mobileImageBox}>
                        <img className={styles.mobileImageInterior} src="img/10.webp" alt="open" />
                    </div>
                    <div className={styles.mobileImageBoxTitle}>
                        일인석
                    </div>
                    <div className={styles.mobileImageBoxDescription}>
                        집중력을 높이기 위해 마련된 1인석은
                    </div>
                    <div className={`${styles.mobileImageBoxDescription} ${styles.second}`}>
                        방해 받지 않기에 최적화 되어 있습니다.
                    </div>
                </div>
                <div className={styles.mobileImageDiv}>
                    <div className={styles.mobileImageBox}>
                        <img className={styles.mobileImageInterior} src="img/12.webp" alt="open" />
                    </div>
                    <div className={styles.mobileImageBoxTitle}>
                        칸막이석
                    </div>
                    <div className={styles.mobileImageBoxDescription}>
                        집중이 잘 되는 칸막이석은 주변 시야가
                    </div>
                    <div className={`${styles.mobileImageBoxDescription} ${styles.second}`}>
                        차단 되길 원하는 학생분에게 안성 맞춤입니다.
                    </div>
                </div>
                <div className={styles.mobileImageDiv}>
                    <div className={styles.mobileImageBox}>
                        <img className={styles.mobileImageInterior} src="img/7.webp" alt="open" />
                    </div>
                    <div className={styles.mobileImageBoxTitle}>
                        휴게실
                    </div>
                    <div className={styles.mobileImageBoxDescription}>
                        넓고 쾌적한 휴게실에서 쾌적한 식사와
                    </div>
                    <div className={`${styles.mobileImageBoxDescription} ${styles.second}`}>
                        편안한 공부를 할 수 있습니다.
                    </div>
                </div>
            </div>


            <div className={`${styles.mobileSixthSection} ${styles.onlymobile}`}>
                <div ref={ref4}>
                    <div className={`${styles.mobileSixthSectionTitle} ${styles.first}`}>
                        단언컨대
                    </div>
                    <div className={`${styles.mobileSixthSectionTitle} ${styles.second}`}>
                        독학의 부족한 점을
                    </div>
                    <div className={`${styles.mobileSixthSectionTitle} ${styles.third}`}>
                        정확히 채워드립니다
                    </div>
                </div>

                <div className={`${styles.mobileSixthSectionEachBox}`}>
                    <div className={styles.mobileSixthSectionEachBoxImg} style={{ backgroundImage: "url(img/patrol555.webp)", backgroundPosition : "0% 50%" }}>

                    </div>
                    <div className={styles.mobileSixthSectionEachBoxText}>
                        <div className={styles.mobileSixthSectionEachBoxTitle}>
                            <span className={styles.sixthEachBoxNumber}>
                                1
                            </span>
                            <div className={styles.sixthEachBoxdescription}>
                                생활관리가 강력합니다
                            </div>
                        </div>
                        <div className={styles.mobileSixthSectionEachBoxDescription}>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 생활관리 사감이 상주하며 교시마다 하루 9번 출석체크
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 교시 중 학원 외출 금지를 위해 출입문 잠금
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 지각/외출/조퇴/핸드폰 사용/친목/졸음 철저히 통제
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 학습 외 사이트 접속 차단
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mobileSixthSectionEachBox}`}>
                    <div className={styles.mobileSixthSectionEachBoxImg} style={{ backgroundImage: "url(img/main5.webp)", backgroundPosition: "0 100%" }}>

                    </div>
                    <div className={styles.mobileSixthSectionEachBoxText}>
                        <div className={styles.mobileSixthSectionEachBoxTitle}>
                            <span className={styles.sixthEachBoxNumber}>
                                2
                            </span>
                            <div className={styles.sixthEachBoxdescription}>
                                공부 잘하는 방법을 코칭합니다
                            </div>
                        </div>
                        <div className={styles.mobileSixthSectionEachBoxDescription}>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 엄격한 선발 절차를 거친 담임선생님과 매주 1:1 상담
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 학생의 취약과목 전문 담임과 연결
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 매주 학생 실력/진도에 맞는 개개인별 테스트 시행
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 테스트 오답 문제만 모아서 반복 테스트 시행
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 계획표 검사 및 진도 체크
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`${styles.mobileSixthSectionEachBox}`}>
                    <div className={styles.mobileSixthSectionEachBoxImg} style={{ backgroundImage: "url(img/answer2.webp)", backgroundPosition: "0 100%" }}>

                    </div>
                    <div className={styles.mobileSixthSectionEachBoxText}>
                        <div className={styles.mobileSixthSectionEachBoxTitle}>
                            <span className={styles.sixthEachBoxNumber}>
                                3
                            </span>
                            <div className={styles.sixthEachBoxdescription}>
                                질문은 당일에 해결합니다
                            </div>
                        </div>
                        <div className={styles.mobileSixthSectionEachBoxDescription}>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 오프라인 : 과목별 전문멘토가 담당, 전용 프로그램 예약시스템을 통해 대기 없이 가능
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 온라인 : 과목별 전문멘토가 담당, 당일~익일 즉시 답변
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 질의응답 멘토 질문 신청률을 통해 실력 있는 멘토만 유지
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mobileSixthSectionEachBox} ${styles.last}`}>
                    <div className={styles.mobileSixthSectionEachBoxImg} style={{ backgroundImage: "url(img/test99.webp)", backgroundPosition: "0 30%" }}>

                    </div>
                    <div className={styles.mobileSixthSectionEachBoxText}>
                        <div className={styles.mobileSixthSectionEachBoxTitle}>
                            <span className={styles.sixthEachBoxNumber}>
                                4
                            </span>
                            <div className={styles.sixthEachBoxdescription}>
                                컨텐츠를 부족함 없이 제공합니다
                            </div>
                        </div>
                        <div className={styles.mobileSixthSectionEachBoxDescription}>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 이감, 한수, 더프, 상상 모의고사 등 학원 내에서 실시
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 학원 내에서 제한 시간 안에 모의고사 푸는 연습
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 모든 오답을 튜터가 프로그램에 기록 후 오답 반복 연습
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className={`${styles.mobileSixthSectionEachBox} ${styles.last}`}>
                    <div className={styles.mobileSixthSectionEachBoxImg} style={{ backgroundImage: "url(img/question.webp)", backgroundPosition: "0 30%" }}>

                    </div>
                    <div className={styles.mobileSixthSectionEachBoxText}>
                        <div className={styles.mobileSixthSectionEachBoxTitle}>
                            <span className={styles.sixthEachBoxNumber}>
                                5
                            </span>
                            <div className={styles.sixthEachBoxdescription}>
                                학생 수준별 취약 과목 스터디 연결
                            </div>
                        </div>
                        <div className={styles.mobileSixthSectionEachBoxDescription}>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 원내 스터디룸 제공
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 희망자에 한해 성적, 강사, 진도에 맞게 스터디 배정
                            </div>
                            <div className={styles.mobileSixthSectionEachBoxDescription_1}>
                                - 학생이 원하는 스터디 방식으로 운영 가능
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


            <div className={`${styles.fifthSection} ${styles.onlyPC}`}>
                <div className={`${styles.fifthSectionTitle_1} ${styles.first}`}>
                    <span className={styles.textColorBlue}>공부를 잘하는 법</span>을 확실하게 아는 수능선배가
                </div>
                <div className={`${styles.fifthSectionTitle_1} ${styles.second}`}>
                    독학의 방향을 코칭합니다
                </div>
                <div className={styles.fifthSectionTitle_2}>
                    "학생별 학습 성향과 취약 과목에 따라 전문 담임이 매칭됩니다."
                </div>

                <div className={styles.tutorsDiv}>
                    <div className={styles.eachBox}>
                        <div style={{ backgroundImage: "url(img/tutor31.webp)" }} className={styles.tutorsDivEach}>
                            <div className={styles.pictureDescription}>
                                <div className={styles.tutorName}>
                                    담임멘토 이선행
                                </div>
                                <div className={styles.tutorDescription}>
                                    <div className={styles.tutorDescription_1}>
                                        수능 전국 151등<br></br>
                                        카톨릭대 의대 정시 합격
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tutorMentDiv}>
                            <div className={styles.tutorMentTitle}>
                                "약점을 파악하고<br></br>전략을 함께 고민하겠습니다."
                            </div>
                            <div className={styles.tutorMentDescription}>
                                "학생의 약점이 어디인지에 따라<br></br>어떻게 공부해야 할지
                                전략을 수립합니다.<br></br>
                                예를 들어 수학에서 계산실수를 많이 한다거나<br></br>킬러 문제에
                                대한 접근이 힘들다거나 할 때,<br></br>그에 대한 
                                학습법을 공유해 도움을 드리고자 합니다."
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachBox}>
                        <div style={{ backgroundImage: "url(img/tutor32.webp)" }} className={styles.tutorsDivEach}>
                            <div className={styles.pictureDescription}>
                                <div className={styles.tutorName}>
                                    담임멘토 김희선
                                </div>
                                <div className={styles.tutorDescription}>
                                    <div className={styles.tutorDescription_1}>
                                        수능 상위 0.2%<br></br>
                                        서울대학교 소비자학과 정시합격
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tutorMentDiv}>
                            <div className={styles.tutorMentTitle}>
                                "학생에 대한 정확한 이해로<br></br>맞춤 솔루션을 제공하겠습니다."
                            </div>
                            <div className={styles.tutorMentDescription}>
                                "학생 중심의 솔루션을 제시해드리겠습니다.<br></br>
                                예를 들어, 국어에서 지문을 이해하지 않고<br></br>눈으로 문제를 푸는.
                                습관이 있는 학생의 경우에는<br></br>지문을 함께 읽으며 학생이 스스로 지문을 독파하게 한 후에<br></br>문제를 
                                풀게하여 안 좋은 습관을 고쳐드리겠습니다."
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachBox}>
                        <div style={{ backgroundImage: "url(img/tutor33.webp)" }} className={styles.tutorsDivEach}>
                            <div className={styles.pictureDescription}>
                                <div className={styles.tutorName}>
                                    담임멘토 이재훈
                                </div>
                                <div className={styles.tutorDescription}>
                                    <div className={styles.tutorDescription_1}>
                                        수능 전국 200등<br></br>
                                        경희대 의대 정시 합격
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tutorMentDiv}>
                            <div className={styles.tutorMentTitle}>
                                "N수생의 힘겨운 길을 같이 걷는<br></br>동반자가 되어 드리겠습니다."
                            </div>
                            <div className={styles.tutorMentDescription}>
                                "N수라는 과정은 어두운 터널을 걷는 것과 같습니다.<br></br>
                                올바른 방법과 태도로 공부하고 계신지<br></br>한 달, 일주일 단위로 계획을 점검해드립니다.<br></br>공부는 단순히 열심히 하는 것 뿐만 아니라<br></br>무엇을 어떻게 하는지도 굉장히 중요하다고 생각합니다."
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.fourthSection} ${styles.onlyPC}`}>
                <div className={styles.fourthSectionTitle_1}>
                    평범한 독재와
                </div>
                <div className={styles.fourthSectionTitle_2}>
                    이런 점이 다릅니다
                </div>
                <div className={styles.line}>
                </div>
                <div>
                    <div className={styles.fourthBox}>
                        <div>
                            실력 없는 선생님이 학습 상담을 진행하지 않습니다
                        </div>
                        <div>
                            최신 입시 경향을 아는 최상위권 담임 멘토를 고집합니다.<br></br>
                            50대 1의 경쟁률을 뚫고 서류 평가, 성적 기준, 실전 문제 풀이 테스트를 통과한 분들에게만 학습 조언의 자격을 부여합니다.
                        </div>
                    </div>
                    <div className={styles.fourthBox}>
                        <div>
                            의치약 튜터에게 매일 질의응답이 가능합니다
                        </div>
                        <div>
                            질의응답 신청 프로그램을 통해 예약하고 대기없이 질의응답이 가능합니다.<br></br>
                            질문할 내용을 미리 튜터에게 전달 후 튜터가 생각을 정리한 후 답변을 해주기 때문에 정돈된 답변을 들을 수 있습니다.
                        </div>
                    </div>
                    <div className={styles.fourthBox}>
                        <div>
                            유명 프랜차이즈 도시락을 넓고 쾌적한 공간에서 드실 수 있습니다
                        </div>
                        <div>
                            맛있는 식사, 다양한 메뉴를 제공합니다. 수강생 전용 프로그램에서 업체와 메뉴를 고르실 수 있습니다.<br></br>
                            매 끼니별로 신청 여부를 선택할 수 있습니다.
                        </div>
                    </div>
                </div>
                <div className={styles.line2}>
                </div>
            </div>



            <div style={{ backgroundImage: "url(img/thirdbackground.webp)" }} className={`${styles.thirdSection} ${styles.onlyPC}`}>
                <div className={styles.thirdSectionTitle_1}>
                    쾌적한 자습실에서
                </div>
                <div className={styles.thirdSectionTitle_2}>
                    하루 14시간 집중하게 될 겁니다
                </div>


                <div className={styles.fullWidth}>
                    <Button sx={{ "&:hover": { border: "1px solid black" }, width: "59px", height: "59px", border: "1px solid #939393", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "120px", marginRight: "16px" }} variant="outlined" onClick={(e) => { if (indexNumber > 0) { carouselRef.current.goTo(indexNumber - 1); setIndexNumber(indexNumber - 1); } }}>
                        <LeftChevronSvg className={styles.chevron} />
                    </Button>
                    <div className={styles.carouselWrapper}>
                        <Carousel
                            showArrows={false}
                            ref={carouselRef}
                            isRTL={false} initialFirstItem={15} itemsToShow={3} disableArrowsOnEnd={false} >
                            {list.map((each) => {
                                return (
                                    <div key={Math.random()} className={styles.eachChevronDiv}>
                                        <div className={styles.carouselDiv}>
                                            <div style={{ backgroundImage: `url(img/${each.number}.webp)` }} className={styles.carouselDivDiv}>
                                            </div>
                                        </div>
                                        <div className={styles.chevronTitle}>
                                            {each.title}
                                        </div>
                                        <div className={styles.chevronDescription_1}>
                                            {each.description_1}
                                        </div>
                                        <div className={styles.chevronDescription_2}>
                                            {each.description_2}
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                    <Button sx={{ "&:hover": { border: "1px solid black" }, width: "59px", height: "59px", border: "1px solid #939393", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "120px", marginLeft: "16px" }} variant="outlined" onClick={(e) => { if (list.length - 3 !== indexNumber) { carouselRef.current.goTo(indexNumber + 1); setIndexNumber(indexNumber + 1); } }}>
                        <RightChevronSvg className={styles.chevron} />
                    </Button>
                </div>

            </div>


            <div className={`${styles.sixthSection} ${styles.onlyPC}`}>
                <div className={styles.sixthSectionTitle_1}>
                    단언컨대
                </div>
                <div className={styles.sixthSectionTitle_2}>
                    독학의 부족한 점을 정확히 채워드립니다
                </div>

                <div className={styles.grayDivBox}>
                    <div className={styles.grayDivBoxText}>
                        <div>
                            독학관리의 정석
                        </div>
                        <div>
                            수능선배 자물쇠반
                        </div>
                        <div>
                            6년동안 독학 관리 학원을 운영한 경험으로
                        </div>
                        <div>
                            학생들에게 어떤 부분이 필요한 지 정확히 알고 있습니다.
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={styles.grayBox}>

                    </div>
                    <div className={styles.imageBox}>
                        <div className={styles.realImage}>

                            <ImageTransition />

                        </div>
                        <div className={styles.blueBox}>

                        </div>
                    </div>
                </div>

                <div className={styles.prosList}>
                    <div className={styles.prosListBottom}>
                        <div className={styles.prosListTitle}>
                            <div className={styles.prosCircle}>1</div>
                            <div className={styles.prosListTitleDescription}>생활관리가 강력합니다</div>
                        </div>
                        <div className={styles.prosListDescription}>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;의무자습 내 생활관리 사감이 상주하며 교시마다 하루 9번 출석체크
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;교시 중 학원 외출 금지를 위해 출입문 잠금
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;지각/외출/조퇴/핸드폰 사용/친목/졸음 철저히 통제
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;학습 외 사이트 접속 차단
                            </div>
                        </div>

                        <div className={`${styles.prosListTitle} ${styles.second}`}>
                            <div className={styles.prosCircle}>2</div>
                            <div className={styles.prosListTitleDescription}>공부 잘하는 방법을 코칭합니다</div>
                        </div>
                        <div className={styles.prosListDescription}>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;학생의 취약과목 전문 담임과 연결
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;매주 학생 실력/진도에 맞는 개개인별 테스트 시행
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;테스트 오답 문제만 모아서 반복 테스트 시행
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;계획표 검사 및 진도 체크
                            </div>
                        </div>

                        <div className={`${styles.prosListTitle} ${styles.second}`}>
                            <div className={styles.prosCircle}>3</div>
                            <div className={styles.prosListTitleDescription}>질문은 당일에 해결합니다</div>
                        </div>
                        <div className={styles.prosListDescription}>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;오프라인 : 과목별 전문멘토가 담당, 전용 프로그램 예약시스템을 통해 대기 없이 가능
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;온라인 : 과목별 전문멘토가 담당, 당일~익일 즉시 답변
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;질의응답 멘토 질문 신청률을 통해 인기 많은 멘토만 유지
                            </div>
                        </div>

                        <div className={`${styles.prosListTitle} ${styles.second}`}>
                            <div className={styles.prosCircle}>4</div>
                            <div className={styles.prosListTitleDescription}>컨텐츠를 부족함 없이 제공합니다</div>
                        </div>
                        <div className={styles.prosListDescription}>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;학원 내에서 제한 시간 안에 모의고사 푸는 연습
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;모든 오답 내용 튜터가 프로그램에 기록 후 오답 반복 연습
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - &nbsp;&nbsp;모의고사는 신청자에 한해 시행
                            </div>
                        </div>

                        {/* <div className={`${styles.prosListTitle} ${styles.second}`}>
                            <div className={styles.prosCircle}>5</div>
                            <div className={styles.prosListTitleDescription}>학생 수준별 취약 과목 스터디 연결</div>
                        </div>
                        <div className={styles.prosListDescription}>
                            <div className={styles.prosListDescriptionBottom}>
                                - 원내 스터디룸 제공
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - 희망자에 한해 성적, 강사, 진도에 맞게 스터디 배정
                            </div>
                            <div className={styles.prosListDescriptionBottom}>
                                - 학생이 원하는 스터디 방식으로 운영 가능
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className={`${styles.mobileEightSection} ${styles.onlymobile}`}>
                <div ref={ref5}>
                    <div className={styles.mobileEightSectionTitle_1}>
                        왜 최상위권들은
                    </div>
                    <div className={styles.mobileEightSectionTitle_2}>
                        수능선배를 선택했을까?
                    </div>
                </div>

                {/* <div className={styles.mobileEightSectionVideoDiv}>
                    <img src="img/video2.png" className={styles.mobileVideoEight} alt="video" />
                </div> */}

                {/* <div className={styles.mobileEightSectionCarouselWrapper}>
                    {reviewList.map((each, index) => {
                        return (
                            <div key={index} className={styles.peopleDivEach}>
                                <div className={styles.eachPeopleDescription}>
                                    {each.description}
                                </div>
                                <div className={styles.eachPeopleAvatar}>
                                    <div className={styles.avatarDiv}>
                                        <img className={styles.avatarPic} src={`img/avatar1${index + 1}.webp`} alt="avatar" />
                                    </div>
                                    <div className={styles.avatarSide}>
                                        <div className={styles.avatarName}>
                                            {each.name}
                                        </div>
                                        <div className={styles.avatarDescription}>
                                            <div>
                                                {each.firstLine}
                                            </div>
                                            <div>
                                                {each.secondLine}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div> */}

                {
                    <Swiper
                        slidesPerView={isLargeTablet ? 3 : isTablet ? 2.8 : isLargeMobile ? 1.5 : 1.4}
                        spaceBetween={20}
                        className={styles.swiper2}
                        pagination={true}
                        modules={[Pagination]}
                    >
                        {
                            reviewList.map((each, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div key={index} className={styles.peopleDivEach}>
                                            <div className={styles.eachPeopleDescription}>
                                                {each.description}
                                            </div>
                                            <div className={styles.eachPeopleAvatar}>
                                                <div className={styles.avatarDiv}>
                                                    <img className={styles.avatarPic} src={`img/avatar1${index + 1}.webp`} alt="avatar" />
                                                </div>
                                                <div className={styles.avatarSide}>
                                                    <div className={styles.avatarName}>
                                                        {each.name}
                                                    </div>
                                                    <div className={styles.avatarDescription}>
                                                        <div>
                                                            {each.firstLine}
                                                        </div>
                                                        <div>
                                                            {each.secondLine}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                }

            </div>


            <div className={`${styles.eightSection} ${styles.onlyPC}`}>
                <div className={styles.eightSectionTitle}>
                    <div className={styles.eightSectionTitle_1}>
                        왜 최상위권들은
                    </div>
                    <div className={styles.eightSectionTitle_2}>
                        수능선배를 선택했을까?
                    </div>
                </div>
                {/* <div className={styles.videoDiv}>
                    <img src="img/video2.png" alt="video" />
                </div> */}
                <div className={styles.peopleDiv}>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "멘토님과의 상담을 통해서 지금<br></br>
                            하고 있는 공부의 방향이 맞게<br></br>
                            흘러가고 있는지를 점검할 수<br></br>
                            있었습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar11.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    강민구
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        단국대 치대 합격생
                                    </div>
                                    <div>
                                        1년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "쾌적한 시설이 좋았습니다<br></br>
                            책상을 넓게 쓰고<br></br>
                            편안한 의자에 앉아서 공부하는<br></br>
                            것이 좋았습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar12.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    김민석
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        서울대 약대 합격생
                                    </div>
                                    <div>
                                        1년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "멘토님과 매주 공부 분량을<br></br>
                            자세하게 계획하였고<br></br>
                            매주 상담시간이 정해진 분량을<br></br>
                            끝마쳤는지 확인했습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar13.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    정미진
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        서울대 약대 합격생
                                    </div>
                                    <div>
                                        1년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "동일한 공부를 하는 학생들과<br></br>
                            특유의 생활관리형 시스템으로<br></br>
                            긴장감이 상당히 잘 조성되어<br></br>
                            있습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar14.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    백진식
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        서울대 약대 합격생
                                    </div>
                                    <div>
                                        2년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.peopleDiv} ${styles.second}`}>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "독학으로 공부하는 수험생으로<br></br>
                            늘 불안함과 외로움이 있었습니다<br></br>
                            입시를 성공한 선배와의 상담을<br></br>
                            통해 공부에 집중할 수 있었습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar15.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    김소연
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        중앙대 약대 합격생
                                    </div>
                                    <div>
                                        1년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "온라인 질의응답만으로<br></br>
                            부족한 점이 많아<br></br>
                            질의응답을 원활히 할 수 있는<br></br>
                            곳을 선택했습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar16.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    이성진
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        중앙대 약대 합격생
                                    </div>
                                    <div>
                                        1년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "원장선생님의 공부계획 관리를<br></br>
                            통해서 좀 더 효율적이고<br></br>
                            체계적인 공부를 할 수 있게<br></br>
                            된다는 점이 좋았습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar17.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    정종훈
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        성균관대 약대 합격생
                                    </div>
                                    <div>
                                        1년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.peopleDivEach}>
                        <div className={styles.eachPeopleDescription}>
                            "독서실에서 혼자 공부를 하면<br></br>
                            시기에 맞는 공부를 하고 있는지<br></br>
                            불안감이 들었는데, 이를<br></br>
                            해소하기 위해 선택했습니다"
                        </div>
                        <div className={styles.eachPeopleAvatar}>
                            <div className={styles.avatarDiv}>
                                <img className={styles.avatarPic} src="img/avatar18.webp" alt="avatar" />
                            </div>
                            <div className={styles.avatarSide}>
                                <div className={styles.avatarName}>
                                    정민지
                                </div>
                                <div className={styles.avatarDescription}>
                                    <div>
                                        제주대 약대 합격생
                                    </div>
                                    <div>
                                        2년 동안 재원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.seventhSection}>
                <div style={{ backgroundImage: "url(img/banner.webp)" }} className={styles.banner}>
                    <div className={`${styles.bannerFirst} ${styles.onlyPC}`}>
                        수능선배는 독학관리 학원의 가장 기본인
                    </div>
                    <div className={`${styles.bannerFirst} ${styles.onlymobile}`}>
                        수능선배는 독학관리 학원의 가장 기본인
                    </div>
                    <div className={`${styles.bannerSecond} ${styles.onlyPC}`}>
                        엄격한 생활관리, 양질의 튜터 상담 및 질의응답, 쾌적한 공부환경을
                    </div>
                    <div className={`${styles.bannerSecond} ${styles.onlymobile}`}>
                        엄격한 생활관리, 양질의 튜터 상담 및 질의응답,
                    </div>
                    <div className={`${styles.bannerSecond} ${styles.onlymobile}`}>
                        쾌적한 공부환경을 제공하는 것을
                    </div>
                    <div className={`${styles.bannerThird} ${styles.onlyPC}`}>
                        가장 중요하게 생각하며 완벽하게 제공하기 위해 노력합니다.
                    </div>
                    <div className={`${styles.bannerThird} ${styles.onlymobile}`}>
                        가장 중요하게 생각하며 완벽하게 제공합니다.
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: "url(img/newsBackground.webp)" }} className={styles.ninthSection}>
                <div className={styles.ninthSectionTitle}>
                    언론 속의 수능선배
                </div>
                <div className={styles.ninthSectionDescriptionDiv}>
                    <a href="http://edu.donga.com/?p=article&ps=view&at_no=20220411153944332411" style={{textDecoration : "none", color : "inherit"}}>
                        <div className={`${styles.ninthSectionDescriptionDiv_1} ${styles.first}`}>
                            <div>
                                에듀동아
                            </div>
                            <div>
                                수능선배, "대입시장 진출 선언"..."강남 1호점"
                            </div>
                        </div>
                    </a>
                    <a href="https://mnews.jtbc.joins.com/News/Article.aspx?news_id=NB11848294" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.ninthSectionDescriptionDiv_1}>
                            <div>
                                JTBC
                            </div>
                            <div>
                                피트선배, 전석 마감. 대기자 늘어
                            </div>
                        </div>
                    </a>
                    <a href="https://news.jtbc.joins.com/article/article.aspx?news_id=NB11879213" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.ninthSectionDescriptionDiv_1}>
                            <div>
                                JTBC
                            </div>
                            <div>
                                피트선배, 독보적인 시스템으로 주목
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.ninthSectionDescriptionDiv2}>
                    <div className={`${styles.ninthSectionDescriptionDiv2_1} ${styles.onlyPC}`}>
                        수능선배에서는 수능에 가장 최적화된 생활습관으로 취약과목은 전문 멘토와 함께 공부하게 됩니다.
                    </div>
                    <div className={`${styles.ninthSectionMobileDescription_1} ${styles.onlymobile}`}>
                        수능선배에서는 수능에 가장 최적화된 생활습관으로
                    </div>
                    <div className={`${styles.ninthSectionMobileDescription_2} ${styles.onlymobile}`}>
                        취약과목은 전문 멘토와 함께 공부하게 됩니다
                    </div>
                </div>
                <div className={styles.lastBtnDiv}>
                    <Button sx={{ "&:hover": { backgroundColor: "white" }, backgroundColor: "white", color: "#2e4f94", width: "306px", height: "70px", borderRadius: "35px", fontSize: "24.5px", fontWeight: 700, letterSpacing: "-1.84px", "@media (max-width : 1024px)": { width: "199px", fontSize: "16px", fontWeight: 700, letterSpacing: "-1.2px", height: "46px", borderRadius: "22.8px" } }} variant="contained" >
                        상담 신청 하기
                    </Button>
                </div>
            </div>

            <div style={{ backgroundImage: `url(https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=${windowInnerWidth}&h=497&markers=type:d|size:mid|pos:127.03212%2037.49724&X-NCP-APIGW-API-KEY-ID=yhg3ot5ch1)` }} className={styles.tenthSection}>

            </div>

            <div className={styles.eleventhSection}>
                <div className={styles.contactBox}>
                    <div className={styles.contactBoxTitle}>
                        운영시간 안내
                    </div>
                    <div className={`${styles.contactBoxTime} ${styles.onlyPC}`}>
                        평일 : 24시간 운영
                    </div>
                    <div className={`${styles.contactBoxTime} ${styles.second} ${styles.onlyPC}`}>
                        주말 : 24시간 운영
                    </div>
                    <div className={`${styles.contactBoxTime} ${styles.onlymobile}`}>
                        평일 : 24시간 운영, 주말 : 24시간 운영
                    </div>
                    <a href="tel:05078713574" className={styles.atag} style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.contactBoxTelephone}>
                            050-7871-3574
                        </div>
                    </a>
                    <div className={styles.contactBoxAddress}>
                        주소 : 서울특별시 테헤란로 8길 25
                    </div>
                    <div className={`${styles.contactBoxAddress} ${styles.second}`}>
                        커피스미스 본사 빌딩 3층(강남역 도보 5분)
                    </div>

                </div>
            </div>

            {
                headerKind === "white" &&
                <SpeedDialComponent />
            }


            <Modal
                open={open5}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style5}>
                    <div className={styles.modalTitle}>
                        5월 대성 모의고사 외부인 신청
                    </div>
                    <div className={styles.modalDescription}>
                        일시 : 5월 25일 수요일
                    </div>
                    <div className={styles.modalDescription}>
                        대상 : 재원생 및 비재원생
                    </div>
                    <div className={`${styles.modalDescription} ${styles.sameDescription}`}>
                        신청방법 : 050-7871-3574 문자 전송
                    </div>
                    <div className={`${styles.modalDescription} ${styles.sameDescription2}`}>
                        (이름/연락처/성적처리여부 포함)
                    </div>
                </Box>
            </Modal>

            <Footer />

        </div>
    )
}

export default MainPage;