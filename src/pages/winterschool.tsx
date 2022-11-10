import React, { useEffect, useState, useRef, useCallback } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { throttle } from "lodash";


import Footer from "../components/footer";
import HeaderTwo from "../components/header2";
import styles from "../styles/winterschool.module.css";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { ReactComponent as CallSvg } from '../svg/phone-solid.svg';
import { ReactComponent as PlaceSvg } from '../svg/location-dot-solid.svg';
import { ReactComponent as BusSvg } from '../svg/bus-simple-solid.svg';
import { ReactComponent as Check } from "../svg/circle-check-regular.svg";

import { ReactComponent as LeftChevronLightSvg } from '../svg/chevron-left-light-white.svg';
import { ReactComponent as RightChevronLightSvg } from '../svg/chevron-right-light-white.svg';

import { Button } from "@mui/material";
import ImageTransitionInterior from "../control/imagetransitioninterior";
import SpeedDialComponent from "../control/speeddial";

import ReactGa from "react-ga4";
import PreviousChart from "../control/chart";

import { animated, useTransition } from "react-spring";
import AttendanceCheck2 from "../control/attendanceCheck2";

import { useMediaQuery } from "react-responsive";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "95%",
    bgcolor: 'background.paper',
    outline : "none",
    boxShadow: 12,
    p: 1,
};

const style2 = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1150,
    bgcolor: 'background.paper',
    outline : "none",
    boxShadow: 24,
    p: 2,
  };

  const interiorList = [
    {
        title : "전체전경1",
        description : "24시간 환기 설비가 가동되고 있고\n최고의 퍼시스 책걸상으로 구성되어 있습니다",
        src : "img/newinterior/02BL7589_1.webp"
    },
    {
        title : "전체전경2",
        description : "항상 최적의 깔끔함을 유지하는데 적합한 자재들을 사용하였고\n충분한 환기 시설을 통해 쾌적함을 유지합니다.",
        src : "img/newinterior/02BL7841_1.webp"
    },
    {
        title : "자습실전경",
        description : "24시간 최고급 환기 설비, 공기청정기, 백색소음기가 작동되고 있어\n넓은 자습실에서 쾌적하게 공부할 수 있습니다.",
        src : "img/newinterior/02BL7643_1.webp"
    },
    {
        title : "교실형구획",
        description : "학생들이 공부에 집중할 수 있도록 적당한 시선 차단과 동시에\n개방감을 줄 수 있는 책상으로 구성되어 있습니다.",
        src : "img/newinterior/02BL7616_1.webp"
    },
    {
        title : "교실형책상",
        description : "최고급 퍼시스 책상과 의자로 구성되어 있으며\n각 책상마다 잠금장치와 3구 콘센트가 설치되어 있습니다.",
        src : "img/newinterior/02BL7949_1.webp"
    },
    {
        title : "칸막이구획",
        description : "등 뒤 공간을 넓게 사용하고 싶은 학생들을 위한 공간으로\n칸막이 책상 이용 학생 전부에게는 대형 사물함이 제공됩니다.",
        src : "img/newinterior/02BL7757_1.webp"
    },
    {
        title : "칸막이책상",
        description : "최고급 시디즈 책상과 시디즈 의자로 구성되어 있으며\n밝기 조절이 가능한 스탠드가 설치되어 있습니다.",
        src : "img/newinterior/02BL8045_1.webp"
    },
    {
        title : "휴게실",
        description : "24시간 환기시설이 작동하는 깔끔하고 쾌적한 넓은 휴게실에서\n식사와 편안한 공부를 할 수 있습니다.",
        src : "img/newinterior/02BL7823_1.webp"
    },
    {
        title : "상담실전경",
        description : "자연광이 들어오는 넓고 쾌적한 상담실에서\n담임 멘토와 매주 상담을 진행합니다.",
        src : "img/newinterior/02BL7844_1.webp"
    },
    {
        title : "상담실",
        description : "넓은 공간에 데스커 책상과 시디즈 의자로 구성되어 있고\n칠판이 있어 질의응답에 용이합니다.",
        src : "img/newinterior/02BL7886_1.webp"
    },
    // {
    //     title : "백색소음기",
    //     description : "백색소음기 음량은 학생들이 가장 집중을 잘 할 수 있는 적당한 크기로 조절하고 있습니다.",
    //     src : "img/interiore/whitenoise.webp"
    // },
    // {
    //     title : "시스템에어컨",
    //     description : "모든 에어컨에 윈드바이저가 설치되어 있어 어떤 자리의 학생에게도 직접 바람이 가지 않습니다.",
    //     src : "img/interiore/aircondition.webp"
    // },
    // {
    //     title : "온습도측정기",
    //     description : "열람실의 각 위치에 온습도 측정기가 설치되어 있어 매교시마다 온습도를 체크하고 공부에 가장 최적화된 온습도로 조정합니다.",
    //     src : "img/interiore/temperature5.webp"
    // },
    // {
    //     title : "와이파이",
    //     description : "IPTIME 공유기 중 최고가 모델을 사용하고 와이파이 동시 접속자 수가 많아도 원활하게 인강 수강 가능합니다.",
    //     src : "img/interiore/wifi.webp"
    // },
    // {
    //     title : "스탠딩테이블",
    //     description : "휴게실에는 스탠딩테이블이 설치되어 있어 공부하다 졸린 학생들이 잠을 깨고 공부할 수 있습니다.",
    //     src : "img/interiore/standing.webp"
    // },
    // {
    //     title : "프린터",
    //     description : "속도가 빠른 사무형 프린터가 설치되어 있어 학생들은 언제든 프린트를 빠르게 할 수 있습니다.",
    //     src : "img/interiore/printer.webp"
    // },
    // {
    //     title : "사물함",
    //     description : "크기가 큰 대형 사물함이 설치되어 있고 모든 학생들에게 한 개의 사물함이 제공됩니다.",
    //     src : "img/interiore/cabinet5.webp"
    // },
    // {
    //     title : "콘센트",
    //     description : "모든 휴게실의 테이블에는 콘센트가 설치되어 있어 장시간의 인강 수강도 문제가 없습니다.",
    //     src : "img/01_1.webp"
    // },
    {
        title : "데스크",
        description : "생활관리 사감이 상주하면서 학생들의 출석체크 및 생활관리를 하는 데스크입니다.",
        src : "img/newinterior/02BL7913_1.webp"
    }
];



const mobileInteriorList = [
    {
        title: "자습실전경",
        description: "24시간 최고급 환기 설비,\n공기청정기, 백색소음기 작동",
        src: "img/newinterior/02BL7589_1.webp"
    },
    {
        title: "교실형구획",
        description: "적당한 시선 차단과 동시에\n개방감을 줄 수 있는 책상",
        src: "img/newinterior/02BL7616_1.webp"
    },
    {
        title: "칸막이구획",
        description: "등 뒤 공간을 넓게 사용하고 싶은\n학생들을 위한 공간",
        src: "img/newinterior/02BL7757_1.webp"
    },
    {
        title: "휴게실",
        description: "깔끔하고 쾌적한 넓은 휴게실\n식사와 편안한 공부 공간",
        src: "img/newinterior/02BL7823_1.webp"
    },
    {
        title: "상담실",
        description: "자연광이 들어오는\n넓고 쾌적한 상담실",
        src: "img/newinterior/02BL7886_1.webp"
    },
    {
        title: "데스크",
        description: "사감이 상주하면서 \n출석체크 및 생활관리",
        src: "img/newinterior/02BL7913_1.webp"
    }
    // {
    //     title : "백색소음기",
    //     description : "백색소음기 음량은 학생들이 가장 집중을 잘 할 수 있는 적당한 크기로 조절하고 있습니다.",
    //     src : "img/interiore/whitenoise.webp"
    // },
    // {
    //     title : "시스템에어컨",
    //     description : "모든 에어컨에 윈드바이저가 설치되어 있어 어떤 자리의 학생에게도 직접 바람이 가지 않습니다.",
    //     src : "img/interiore/aircondition.webp"
    // },
    // {
    //     title : "온습도측정기",
    //     description : "열람실의 각 위치에 온습도 측정기가 설치되어 있어 매교시마다 온습도를 체크하고 공부에 가장 최적화된 온습도로 조정합니다.",
    //     src : "img/interiore/temperature5.webp"
    // },
    // {
    //     title : "와이파이",
    //     description : "IPTIME 공유기 중 최고가 모델을 사용하고 와이파이 동시 접속자 수가 많아도 원활하게 인강 수강 가능합니다.",
    //     src : "img/interiore/wifi.webp"
    // },
    // {
    //     title : "스탠딩테이블",
    //     description : "휴게실에는 스탠딩테이블이 설치되어 있어 공부하다 졸린 학생들이 잠을 깨고 공부할 수 있습니다.",
    //     src : "img/interiore/standing.webp"
    // },
    // {
    //     title : "프린터",
    //     description : "속도가 빠른 사무형 프린터가 설치되어 있어 학생들은 언제든 프린트를 빠르게 할 수 있습니다.",
    //     src : "img/interiore/printer.webp"
    // },
    // {
    //     title : "사물함",
    //     description : "크기가 큰 대형 사물함이 설치되어 있고 모든 학생들에게 한 개의 사물함이 제공됩니다.",
    //     src : "img/interiore/cabinet5.webp"
    // },
    // {
    //     title : "콘센트",
    //     description : "모든 휴게실의 테이블에는 콘센트가 설치되어 있어 장시간의 인강 수강도 문제가 없습니다.",
    //     src : "img/01_1.webp"
    // },
];


const data: any = [
    {
        title: "개별 학습관리",
        titleText: "나에게 필요한 강의, 컨텐츠, 공부전략을\n최고의 멘토와 함께 상의하고 계획하고 이행합니다",
        subMenu: [
            {
                title: "학습진단(이과)",
                src: "img/consultreport1.webp",
                description: "입학 전, 종합 상담을 통해 학습 상태를 진단하고\n방학 동안의 학습전략과 강의/컨텐츠를 추천(이과생 예시)"
            },
            {
                title: "학습진단(문과)",
                src: "img/consultreport3.webp",
                description: "입학 전, 종합 상담을 통해 학습 상태를 진단하고\n방학 동안의 학습전략과 강의/컨텐츠를 추천(문과생 예시)"
            },
            {
                title: "8주 진도계획",
                src: "img/eightweeks1.webp",
                description: "종합 상담 내용을 바탕으로\n8주간의 목표와 장기계획을 수립"
            },
            {
                title: "매주 상담일지",
                src: "",
                description: "매주 담당 멘토와의 1:1 대면 상담으로\n주단위 계획수립, 진도 체크, 개인 진도에 맞춘 위클리 테스트 진행"
            }
        ]
    },
    {
        title: "엄격 생활관리",
        titleText: "출결관리는 철저하고\n투명하게 이루어집니다",
        subMenu: [
            {
                title: "카톡 알림톡",
                src: "img/chulgyeol.webp",
                description: "등하원 뿐만 아니라\n모든 입실/퇴실 시 실시간 알림톡 전송"
            },
            {
                title: "출결 업무화면",
                src: "",
                description: "매 교시 출석체크,\n전용 프로그램을 통한 철저한 관리"
            },
            {
                title: "핸드폰 수거",
                src: "img/cellphone.webp",
                description: "매 등원시 핸드폰 제출"
            },
            {
                title: "사이트 차단",
                src: "img/block.webp",
                description: "인강 사이트 외 모든 사이트 및 어플 차단"
            },
        ]
    },
    {
        title: "프리미엄 시설",
        titleText: "언제든 방문하셔서 쾌적함을\n직접 확인해보세요",
        subMenu: interiorList
    },
    {
        title: "고퀄리티 식사",
        titleText: "고급의 한식 도시락과 특식 중\n선택할 수 있습니다"
    }
]

const mobileData: any = [
    {
        title: "개별 학습관리",
        titleText: "나에게 필요한\n강의, 컨텐츠, 공부전략을\n최고의 멘토와 함께 상의하고\n계획하고 이행합니다",
        subMenu: [
            {
                title: "학습진단(이과)",
                src: "img/consultreport1.webp",
                description: "입학 전, 종합 상담을 통해\n학습 상태를 진단하고\n방학 동안의 학습전략과\n강의/컨텐츠를 추천(이과생)"
            },
            {
                title: "학습진단(문과)",
                src: "img/consultreport3.webp",
                description: "입학 전, 종합 상담을 통해\n학습 상태를 진단하고\n방학 동안의 학습전략과\n강의/컨텐츠를 추천(문과생)"
            },
            {
                title: "8주 진도계획",
                src: "img/eightweeks1.webp",
                description: "종합 상담 내용을 바탕으로\n8주간의 목표와 장기계획을 수립"
            },
            {
                title: "매주 상담일지",
                src: "img/consultreport2.webp",
                description: "매주 담당 멘토와의 1:1 대면 상담으로\n주단위 계획수립, 진도 체크, \n 개인 진도별 위클리 테스트 진행"
            }
        ]
    },
    {
        title: "생활관리",
        titleText: "출결관리는 철저하고\n투명하게 이루어집니다",
        subMenu: [
            {
                title: "카톡 알림톡",
                src: "img/chulgyeol.webp",
                description: "등하원 뿐만 아니라\n모든 입실/퇴실 시 실시간 알림톡 전송"
            },
            {
                title: "출결 업무화면",
                src: "img/capturechul3.png",
                description: "매 교시 출석체크,\n전용 프로그램을 통한 철저한 관리"
            },
            {
                title: "핸드폰 수거",
                src: "img/cellphone.webp",
                description: "매 등원시 핸드폰 제출"
            },
            {
                title: "사이트 차단",
                src: "img/block.webp",
                description: "인강 사이트 외 모든 사이트 및 어플 차단\n(상담 후 특정 공부 사이트 오픈 가능)"
            },
        ]
    },
    {
        title: "프리미엄 시설",
        titleText: "언제든 방문하셔서 쾌적함을\n직접 확인해보세요",
        subMenu: mobileInteriorList
    },
    {
        title: "고퀄리티 식사",
        titleText: "고급 한식 도시락과 특식 중\n선택할 수 있습니다",
        subMenu: [
            {
                title: "본도시락 1",
                src: "img/bon.webp",
                description: "본도시락 정식"
            },
            {
                title: "본도시락 2",
                src: "img/bon3.webp",
                description: "본도시락 단품"
            },
            {
                title: "특식 1",
                src: "img/subway2.webp",
                description: "서브웨이 샌드위치"
            },
            {
                title: "특식 2",
                src: "img/dduk.webp",
                description: "죠스 떡볶이"
            }
        ]
    }
]


const list = [
    "개별 학습관리", "엄격 생활관리", "프리미엄 시설", "고퀄리티 식사"
]

const mobileList = [
    "개별 학습관리", "생활관리", "프리미엄 시설", "고퀄리티 식사"
]


const clickMenuList = [
    ["8주계획, 매주 상담일지"],
    ["카톡알림톡", "출결업무화면", "핸드폰수거", "사이트차단"],
    ["식사공간", "자습실"],
    ["메뉴", "특식"]
]

var currentIndex = 0;
var currentSubmenuIndex = 0;
var intervalRef: any;

var scrollValue = 0;

const WinterSchool: React.FC<any> = (props) => {

    const [open, setOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const handleOpen = (src : string) => { setImgSrc(src); setOpen(true);  clearInterval(intervalRef);}
    const handleClose = () => {setOpen(false); startInterval();}


    const [open2, setOpen2] = useState(false);
    const [imgSrc2, setImgSrc2] = useState("");
    const handleOpen2 = (src : string) => { setImgSrc2(src); setOpen2(true);  clearInterval(intervalRef);}
    const handleClose2 = () => {setOpen2(false); startInterval();}



    const isLargeTablet = useMediaQuery({ query: `(max-width : 1024px)` });
    const isTablet = useMediaQuery({ query: `(min-width : 500px )` })

    const [mobileBlankHeight, setMobileBlankHeight] = useState(0);

    const [index, setIndex] = useState(0);
    const [submenuIndex, setSubmenuIndex] = useState(0);
    const listRef = useRef<any>(null);
    const eachRef = useRef<any>(new Array());

    const mobileDescriptionWrapperRef = useCallback((node) => {
        if (!node) {
            return;
        }

        calcBlankHeight();

    }, []);
    const mobileDescriptionRef = useRef<any>(null);

    const [isHeaderOpen, setIsHeaderOpen] = useState(true);


    useEffect(() => {

        calcBlankHeight();

    }, [mobileDescriptionRef.current, mobileDescriptionRef, index, submenuIndex]);

    const calcBlankHeight = () => {

        // if (!isLargeTablet || !isTablet) {
        //     return;
        // }

        // console.log("beforeIndex");
        // console.log(mobileDescriptionRef);

        // setTimeout(() => {
        //     console.log("late");

        //     console.log("beforeIndex");
        //     console.log(mobileDescriptionRef);
        //     if (!mobileDescriptionRef || !mobileDescriptionRef.current) {
        //         return;
        //     }

        //     console.log("effect");
        //     const height = mobileDescriptionRef.current.offsetHeight;
        //     setMobileBlankHeight(height + 30);
        // }, 1000);

        // if (!mobileDescriptionRef || !mobileDescriptionRef.current) {
        //     return;
        // }

        // console.log("effect");
        // const height = mobileDescriptionRef.current.offsetHeight;
        // setMobileBlankHeight(height + 30);



    }


    const handleSubmenuIndex = (e: any, index: number) => {
        setSubmenuIndex(index);
        currentSubmenuIndex = index;
        if (e !== "e") {
            clearInterval(intervalRef);
            startInterval();
        }
    }

    const handleIndex = (e: any, index: number) => {
        setIndex(index);
        currentIndex = index;
        setSubmenuIndex(0); currentSubmenuIndex = 0;
        if (e !== "e") {
            clearInterval(intervalRef);
            startInterval();
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        smoothscroll.polyfill();

        ReactGa.send({
            hitType: "pageview",
            page_title: "winterschool"
        });


    }, [])

    const transitions = useTransition(submenuIndex, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 150 }
    });

    useEffect(() => {


        intervalRef = setInterval(() => {

            if (!data[currentIndex]) {
                return;
            }



            if (!isLargeTablet && !data[currentIndex].subMenu) {
                return;
            }

            if (isLargeTablet && !mobileData[currentIndex].subMenu) {
                return;
            }


            const maxSubmenuIndex = !isLargeTablet ? data[currentIndex].subMenu.length - 1 : mobileData[currentIndex].subMenu.length - 1;

            if (currentIndex === 2 && currentSubmenuIndex === 5 && isLargeTablet) {
                console.log(5);
                handleSubmenuIndex("e", 0);
            }


            if (currentSubmenuIndex < maxSubmenuIndex) {
                const newSubmenuIndex = currentSubmenuIndex + 1;
                handleSubmenuIndex("e", newSubmenuIndex);
            } else {
                handleSubmenuIndex("e", 0);
            }

        }, 3000);

        return () => clearInterval(intervalRef);

    }, []);


    const startInterval = () => {

        intervalRef = setInterval(() => {

            if (!data[currentIndex]) {
                console.log(1);
                return;
            }



            if (!isLargeTablet && !data[currentIndex].subMenu) {
                console.log(2);
                return;
            }

            if (isLargeTablet && !mobileData[currentIndex].subMenu) {
                console.log(3);
                return;
            }



            const maxSubmenuIndex = !isLargeTablet ? data[currentIndex].subMenu.length - 1 : mobileData[currentIndex].subMenu.length - 1;

            if (currentIndex === 2 && currentSubmenuIndex === 5 && isLargeTablet) {
                handleSubmenuIndex("e", 0);
                return;
            }




            if (currentSubmenuIndex < maxSubmenuIndex) {
                const newSubmenuIndex = currentSubmenuIndex + 1;
                handleSubmenuIndex("e", newSubmenuIndex);
            } else {
                handleSubmenuIndex("e", 0);
            }

        }, 3000);

    }

    const mobileChange = (eachIndex: number) => {
        setIndex(eachIndex);
        const targetScroll = eachRef.current[eachIndex].getBoundingClientRect().x;
        listRef.current.scrollTo({ left: targetScroll + listRef.current.scrollLeft - 120, behavior: "smooth" });
    }

    useEffect(() => {

        console.log(isLargeTablet);

        if (!isLargeTablet) {
            return;
        }

        console.log("gogogo");

        const handleScroll = (e: any) => {
            const value = window.scrollY;

            console.log(value);
            console.log(scrollValue);

            if (scrollValue > 200) {
                console.log("true");
                setIsHeaderOpen(false);
            }

            if (value <= 200) {
                setIsHeaderOpen(true);
            }


            scrollValue = value;

        }

        const throttleFn = throttle(handleScroll, 10);

        window.addEventListener("scroll", throttleFn);

        return () => window.removeEventListener("scroll", throttleFn);

    }, []);

    return (
        <div>
            {
                isHeaderOpen &&
                <HeaderTwo />
            }


            <div className={styles.voidHeader}>

            </div>
            <div className={styles.subHeader} style={{ backgroundImage: "url(img/newpic/DSC03646.webp)" }}>
                <div className={styles.blackFilter}>
                </div>
                <div className={styles.subHeaderText}>
                    <div className={styles.subHeaderTextTitle}>
                        &nbsp;&nbsp;&nbsp;2023 수능선배 윈터스쿨
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        &nbsp;&nbsp;&nbsp;1:1 개인별 밀착 관리를 전문으로 합니다
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
                        윈터스쿨
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>

            </div>

            <div className={styles.onlyPC} style={{ height: "120px" }}>

            </div>



            <div className={`${styles.teachersList} ${styles.onlyPC}`}>
                {list.map((eachTeacher: any, indexNumber: number) => {
                    return (
                        <div key={eachTeacher} onClick={(e) => { handleIndex(e, indexNumber) }} className={`${styles.eachTeacherNameDiv} ${indexNumber === index ? styles.active : ""}`}>
                            <div className={`${styles.eachTeacherName} ${indexNumber === index ? styles.active : ""}`}>
                                {eachTeacher}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div ref={listRef} className={`${styles.mobileTitleList} ${styles.onlymobile}`}>
                {mobileList.map((eachList, indexNumber) => {
                    return (
                        <div key={indexNumber} ref={(element) => { eachRef.current.push(element) }} onClick={(e) => { handleIndex(e, indexNumber) }} className={`${styles.mobileEachListTitle} ${index === indexNumber ? styles.active : ""}`}>
                            {eachList}
                        </div>
                    );
                })}
            </div>



            <div className={styles.mainDescriptionDiv}>
                <div className={styles.sectionSubTitle}>
                    {
                        mobileData[index].titleText
                    }
                </div>

                <div className={`${styles.listTitleDiv} ${styles.onlyPC} ${index === 3 ? styles.none : ""} ${index === 0 ? styles.wide : ""}`}>
                    {
                        data[index].subMenu && data[index].subMenu?.map((eachList: any, eachIndex: any) => {
                            return (
                                <div key={eachIndex} className={styles.eachListhTitleDiv}>
                                    <div onClick={(e) => { handleSubmenuIndex(e, eachIndex) }} className={`${styles.eachList} ${eachIndex === submenuIndex ? styles.active : ""}`}>
                                        {eachList.title}
                                    </div>
                                    <div className={`${styles.eachListBorder} ${(index === 0 && eachIndex === 3) || (index === 1 && eachIndex === 3) || (index === 2 && eachIndex === 4) || (index === 2 && eachIndex === 10) ? styles.none : ""}`}>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={`${styles.mobileListTitleDiv} ${styles.onlymobile} ${(index !== 0 && index !== 1 && index !== 2 && index !== 3) ? styles.none : ""}`}>
                    {
                        mobileData[index].subMenu && mobileData[index].subMenu?.map((eachList: any, eachIndex: any) => {
                            return (
                                <div key={eachIndex} className={`${styles.mobileEachListTitleDiv} ${eachIndex === submenuIndex ? styles.active : ""}`} onClick={(e) => { handleSubmenuIndex(e, eachIndex) }}  >
                                    {eachList.title}
                                </div>
                            );
                        })
                    }
                </div>

                <div className={styles.onlyPC}>

                    {transitions((styles2, submenuIndex) => (
                        <animated.div style={styles2}>
                            <div className={styles.animateDivWrapper}>
                                {
                                    (data[index].subMenu && data[index].subMenu[submenuIndex] && data[index].subMenu[submenuIndex].description)
                                    &&
                                    <div className={`${styles.submenuDescriptionTextDiv} ${(index === 0 && submenuIndex === 3) ? styles.moreMargin : ""}`}>
                                        <div className={`${styles.checkDiv}`}>
                                            <Check className={styles.check} />
                                        </div>
                                        {data[index].subMenu[submenuIndex].description}
                                    </div>
                                }

                                {
                                    (data[index].subMenu && data[index].subMenu[submenuIndex] && data[index].subMenu[submenuIndex].src) &&
                                    <div>
                                        <div className={styles.imgDiv} onClick={(e : any) => {handleOpen2(data[index].subMenu[submenuIndex].src);}}>
                                            <img src={data[index].subMenu[submenuIndex].src} className={`${styles.submenuImage} ${index === 0 ? styles.bigSize : ""}`} />
                                        </div>
                                    </div>
                                }

                                {
                                    (data[index].subMenu && data[index].subMenu[submenuIndex] && data[index].subMenu[submenuIndex].src && index === 0 && submenuIndex === 2) &&
                                    <div>
                                        <div className={styles.imgDiv} onClick={(e : any) => {handleOpen2("img/eightweeks3.webp");}}>
                                            <img src="img/eightweeks3.webp" className={`${styles.submenuImage} ${index === 0 ? styles.bigSize : ""}`} />
                                        </div>
                                    </div>
                                }

                                {
                                    (index === 0 && submenuIndex === 3) &&
                                    <div className={styles.chartDiv}>
                                        <PreviousChart winterschool={true} />
                                    </div>
                                }

                                {
                                    (index === 1 && submenuIndex === 1) &&
                                    <div className={styles.chartDiv} style={{ marginTop: "32px" }}>
                                        <AttendanceCheck2 />
                                    </div>
                                }
                            </div>


                        </animated.div>
                    ))}


                </div>

                <div className={styles.onlymobile}>
                    <div ref={mobileDescriptionWrapperRef}>
                        <div ref={mobileDescriptionRef} style={{ width: "90.6%", margin: "0 auto" }}>
                            <div className={`${styles.mobileDescriptionWrapper} ${styles.onlymobile} ${(index === 0 && submenuIndex === 3) ? styles.moreBottomMargin : ""}`}>
                                {
                                    (mobileData[index].subMenu && mobileData[index].subMenu[submenuIndex] && mobileData[index].subMenu[submenuIndex].description)
                                    &&
                                    <div>
                                        <div className={styles.submenuDescriptionTextDiv}>
                                            {mobileData[index].subMenu[submenuIndex].description}
                                        </div>
                                    </div>
                                }
                            </div>

                            {
                                (mobileData[index].subMenu && mobileData[index].subMenu[submenuIndex] && mobileData[index].subMenu[submenuIndex].src) &&
                                <div onClick={(e : any) => {handleOpen(mobileData[index].subMenu[submenuIndex].src);} } className={`${styles.mobileImageWrapper} ${styles.onlymobile}`}>
                                    <img src={mobileData[index].subMenu[submenuIndex].src} className={styles.mobileSubmenuImage} />
                                </div>
                            }

                            {
                                (mobileData[index].subMenu && mobileData[index].subMenu[submenuIndex] && mobileData[index].subMenu[submenuIndex].src && index === 0 && submenuIndex === 2) &&
                                <div>
                                    <div onClick={(e : any) => {handleOpen("img/eightweeks3.webp");} } className={`${styles.mobileImageWrapper} ${styles.onlymobile}`}>
                                        <img src="img/eightweeks3.webp" className={`${styles.mobileSubmenuImage}`} />
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>



            </div>


            {
                index === 3 &&
                <div className={`${styles.mealDiv} ${styles.onlyPC}`}>
                    <div className={`${styles.mealBox} ${styles.first}`}>
                        <div className={styles.mealBoxTitle}>
                            한식
                        </div>
                        <div className={styles.mealImagesDiv}>
                            <div className={styles.mealImageDiv}>
                                <img src="/img/bon.webp" className={styles.mealImg} />
                            </div>
                            <div className={styles.mealImageDiv}>
                                <img src="/img/bon3.webp" className={styles.mealImg} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.mealBox}>
                        <div className={styles.mealBoxTitle}>
                            특식
                        </div>
                        <div className={styles.mealImagesDiv}>
                            <div className={styles.mealImageDiv}>
                                <img src="/img/subway2.webp" className={styles.mealImg} />
                            </div>
                            <div className={styles.mealImageDiv}>
                                <img src="/img/graph/dduk2.webp" className={styles.mealImg} />
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className={styles.onlyPC}>
                {
                    (index === 0 && submenuIndex === 0) &&
                    <div style={{ height: "950px" }}>

                    </div>
                }
                {
                    (index === 0 && submenuIndex === 1) &&
                    <div style={{ height: "950px" }}>

                    </div>
                }
                {
                    (index === 0 && submenuIndex === 2) &&
                    <div style={{ height: "1750px" }}>

                    </div>
                }

                {
                    (index === 0 && submenuIndex === 3) &&
                    <div style={{ height: "1000px" }}>

                    </div>
                }

                {
                    (index === 1 && submenuIndex === 0) &&
                    <div style={{ height: "600px" }}>

                    </div>
                }

                {
                    (index === 1 && submenuIndex === 1) &&
                    <div style={{ height: "800px" }}>

                    </div>
                }

                {
                    (index === 1 && submenuIndex === 2) &&
                    <div style={{ height: "800px" }}>

                    </div>
                }

                {
                    (index === 1 && submenuIndex === 3) &&
                    <div style={{ height: "650px" }}>

                    </div>
                }

                {
                    (index === 2) &&
                    <div style={{ height: "750px" }}>

                    </div>
                }



                {
                    index === 3 &&
                    <div style={{ height: "150px" }}>

                    </div>
                }

            </div>


            <div className={styles.onlymobile}>
                <div style={{ height: "50px" }}>

                </div>

                <div style={{ display: (isLargeTablet && isTablet) ? "none" : "block" }}>
                    {/* {
                        (index === 0 && submenuIndex === 0) &&
                        <div style={{ height: "400px" }}>

                        </div>
                    }

                    {
                        (index === 0 && submenuIndex === 1) &&
                        <div style={{ height: "400px" }}>

                        </div>
                    }

                    {
                        (index === 0 && submenuIndex === 2) &&
                        <div style={{ height: "350px" }}>

                        </div>
                    }

                    {
                        (index === 0 && submenuIndex === 3) &&
                        <div style={{ height: "350px" }}>

                        </div>
                    }

                    {
                        (index === 1 && submenuIndex === 0) &&
                        <div style={{ height: "300px" }}>

                        </div>
                    }

                    {
                        (index === 1 && submenuIndex === 1) &&
                        <div style={{ height: "350px" }}>

                        </div>
                    }

                    {
                        (index === 1 && submenuIndex === 2) &&
                        <div style={{ height: "400px" }}>

                        </div>
                    }

                    {
                        (index === 1 && submenuIndex === 3) &&
                        <div style={{ height: "300px" }}>

                        </div>
                    }

                    {
                        (index === 2 && submenuIndex === 0) &&
                        <div style={{ height: "350px" }}>

                        </div>
                    }

                    {
                        (index === 2 && submenuIndex === 1) &&
                        <div style={{ height: "350px" }}>

                        </div>
                    }

                    {
                        (index === 2 && submenuIndex === 2) &&
                        <div style={{ height: "450px" }}>

                        </div>
                    }

                    {
                        (index === 2 && submenuIndex === 3) &&
                        <div style={{ height: "400px" }}>

                        </div>
                    }

                    {
                        (index === 2 && submenuIndex === 4) &&
                        <div style={{ height: "450px" }}>

                        </div>
                    }

                    {
                        (index === 2 && submenuIndex === 5) &&
                        <div style={{ height: "350px" }}>

                        </div>
                    }

                    {
                        (index === 3 && submenuIndex === 0) &&
                        <div style={{ height: "450px" }}>

                        </div>
                    }

                    {
                        (index === 3 && submenuIndex === 1) &&
                        <div style={{ height: "450px" }}>

                        </div>
                    }

                    {
                        (index === 3 && submenuIndex === 2) &&
                        <div style={{ height: "300px" }}>

                        </div>
                    }

                    {
                        (index === 3 && submenuIndex === 3) &&
                        <div style={{ height: "360px" }}>

                        </div>
                    }
 */}

                </div>

            </div>

            <div className={styles.bottomBox}>
                <div className={styles.bottomBoxDiv}>


                    <div className={`${styles.bottomBoxTitle} ${styles.onlyPC}`}>
                        수능선배 강남점 윈터스쿨 예약 안내
                    </div>

                    <div className={`${styles.bottomBoxTitle} ${styles.onlymobile}`}>
                        수능선배 강남점 윈터스쿨<br></br>예약 안내
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            개강 및 등록절차
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                개강일
                            </div>
                            <div className={styles.differentiationList_2}>
                                2023년 1월 2일 월요일 (12월 중 선입실 가능)
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                등록절차
                            </div>
                            <div className={`${styles.differentiationList_2} ${styles.multiLine}`}>
                                <div>
                                    ① 온라인 신청서 작성
                                </div>
                                <div>
                                    ② 현장 방문 결제 및 좌석 선택 (10월 24일 부터)
                                </div>
                                <div>
                                    ③ 1월 개강일 또는 12월 중 지정한 날짜에 등원
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.differentiationDiv}>
                        <div className={styles.differentiationTitle}>
                            등록비 및 할인혜택
                        </div>
                        <div className={`${styles.differentiationList} ${styles.first}`}>
                            <div className={styles.differentiationList_1}>
                                등록비
                            </div>
                            <div className={styles.differentiationList_2}>
                                월 580,000원
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                할인혜택
                            </div>
                            <div className={`${styles.differentiationList_2} ${styles.multiLine}`}>
                                <div>
                                    ① 11월 30일 이전 현장 방문 결제 시 5% 할인
                                </div>
                                <div>
                                    ② 2개월 이상 결제 시 5% 추가 할인
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.lastBtnDiv} ${styles.onlyPC}`}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHTXutK-KcBqTj2bfuTV_UAhV3zLGxok6fChySC57eSY-ygQ/viewform?usp=sf_link" className={styles.atag}>
                            <Button variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)": { width: "215px", height: "49px", borderRadius: "24.5px", fontSize: "15.5px" } }}>온라인 예약 바로 가기</Button>
                        </a>
                    </div>
                    <div className={`${styles.lastBtnDiv} ${styles.onlymobile}`}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHTXutK-KcBqTj2bfuTV_UAhV3zLGxok6fChySC57eSY-ygQ/viewform?usp=sf_link" className={styles.atag}>
                            <Button className={styles.scheduleBtn} variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)": { width: "215px", height: "49px", borderRadius: "24.5px", fontSize: "15.5px" } }}>온라인 예약</Button>
                        </a>
                    </div>

                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img className={styles.modalImg} src={imgSrc} />
                </Box>
            </Modal>


            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style2}>
                    <img className={styles.modalImg} src={imgSrc2} />
                </Box>
            </Modal>



            <SpeedDialComponent />


            <Footer />
        </div>
    )
}

export default WinterSchool;