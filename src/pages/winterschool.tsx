import React, { useEffect, useState, useRef, useCallback } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { throttle } from "lodash";
import Vimeo from '@u-wave/react-vimeo';


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

declare var naver : any;

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
        description : "24시간 환기 설비가 가동되고 있고\n전면 유리창이 있는 넓은 휴게실에서 편하게 식사할 수 있습니다.",
        src : "img/daechiinterior/J2V_2023.webp"
    },
    {
        title : "자습실전경1",
        description : "24시간 최고급 환기 설비, 공기청정기, 백색소음기가 작동되고 있어\n넓은 자습실에서 쾌적하게 공부할 수 있습니다.",
        src : "img/daechiinterior/J2V_2032.webp"
    },
    {
        title : "자습실전경2",
        description : "자습실 내에 생활관리사감이 상주하고 있으며,\n 최고급 퍼시스 책걸상으로 구성되어 있습니다.",
        src : "img/daechiinterior/J2V_2053.webp"
    },
    {
        title : "자습실전경3",
        description : "노출형 천장 대형 자습실로 최고의 쾌적함을 느낄 수 있으며,\n 자동 창문 개폐기를 통해 정해진 시간에 환기를 진행합니다.",
        src : "img/daechiinterior/J2V_2134.webp"
    },
    {
        title : "개별콘센트",
        description : "모든 각 책상에는 고급스러운 퍼시스 3구 콘센트가\n설치되어 있습니다.",
        src : "img/daechiinterior/J2V_2111.webp"
    },
    {
        title : "휴게실",
        description : "넓고 쾌적한 휴게실에서 맛잇는 식사를 즐기고\n 편안하게 공부할 수 있습니다.",
        src : "img/daechiinterior/J2V_2015.webp"
    },

    {
        title : "데스크",
        description : "메인 출입구에서 얼굴 인식과 턴게이트를 통해\n단 한명의 오차도 없이 출석체크를 진행하고 있습니다.",
        src : "img/daechiinterior/J2V_1972.webp"
    },
    {
        title : "휴대폰함",
        description : "모든 학생들은 출입 전에\n잠금장치가 있는 휴대폰함에 휴대폰을 제출해야 합니다.",
        src : "img/daechiinterior/J2V_2155.webp"
    },
    {
        title : "환기장치",
        description : "모든 자습실 공간과 휴게실에는\n24시 작동되는 환기설비가 있어 신선한 공기를 유지합니다.",
        src : "img/daechiinterior/J2V_2149.webp"
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
        title : "상담실",
        description : "넓고 대형 모니터가 설치된 상담실이며\n이 곳에서 매주 담임멘토와의 상담이 이루어집니다.",
        src : "img/daechiinterior/J2V_1940.webp"
    }
];



const mobileInteriorList = [
    {
        title : "전체전경1",
        description : "24시간 환기 설비가 가동되고 있고\n전면 유리창이 있는 넓은 휴게실에서\n편하게 식사할 수 있습니다.",
        src : "img/daechiinterior/J2V_2023.webp"
    },
    {
        title : "자습실전경1",
        description : "24시간 최고급\n환기 설비, 공기청정기, 백색소음기가\n작동되고 있습니다",
        src : "img/daechiinterior/J2V_2032.webp"
    },
    {
        title : "자습실전경2",
        description : "자습실 내에 생활관리사감이\n상주하고 있으며,\n최고급 퍼시스 책걸상으로\n구성되어 있습니다.",
        src : "img/daechiinterior/J2V_2053.webp"
    },
    {
        title : "자습실전경3",
        description : "노출형 천장 대형 자습실로\n최고의 쾌적함을 느낄 수 있으며,\n 자동 창문 개폐기를 통해\n정해진 시간에 환기를 진행합니다.",
        src : "img/daechiinterior/J2V_2134.webp"
    },
    {
        title : "개별콘센트",
        description : "모든 각 책상에는\n고급스러운 퍼시스 3구 콘센트가\n설치되어 있습니다.",
        src : "img/daechiinterior/J2V_2111.webp"
    },
    {
        title : "휴게실",
        description : "넓고 쾌적한 휴게실에서\n맛잇는 식사를 즐기고\n 편안하게 공부할 수 있습니다.",
        src : "img/daechiinterior/J2V_2015.webp"
    },

    {
        title : "데스크",
        description : "출입구에서\n얼굴 인식과 턴게이트를 통해\n단 한명의 오차도 없이\n출석체크를 진행합니다.",
        src : "img/daechiinterior/J2V_1972.webp"
    },
    {
        title : "휴대폰함",
        description : "모든 학생들은 출입 전에\n잠금장치가 있는 휴대폰함에\n휴대폰을 제출해야 합니다.",
        src : "img/daechiinterior/J2V_2155.webp"
    },
    {
        title : "환기장치",
        description : "모든 자습실 공간과 휴게실에는\n24시 작동되는 환기설비가 있어\n신선한 공기를 유지합니다.",
        src : "img/daechiinterior/J2V_2149.webp"
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
        title : "상담실",
        description : "대형 모니터가 설치되어 있는,\n넓고 쾌적한 상담실에서\n매주 담임멘토와의 상담이 이루어집니다.",
        src : "img/daechiinterior/J2V_1940.webp"
    }
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
                title: "매일 단어테스트",
                src: "img/screenshot1.png",
                description: "학생 개인의 실력, 진도, 오답에 맞춘\n매일 개별 맞춤형 단어테스트"
            },
            {
                title: "매주 상담일지",
                src: "",
                description: "매주 담임 멘토와의 1:1 대면 상담으로\n주단위 계획수립, 진도 체크, 개인 진도에 맞춘 위클리 테스트 진행"
            },
            {
                title: "매주 위클리테스트",
                src: "img/screenshot2.png",
                description: "매주 담임 멘토가 학생의 실력, 진도에 맞게\n위클리 테스트 출제 및 점검"
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
                title: "엄격한 출결",
                src: "",
                description: "매 교시 출석체크,\n전용 프로그램을 통한 철저한 관리"
            },
            {
                title: "핸드폰 수거",
                src: "img/phones.webp",
                description: "매 등원시 핸드폰 제출"
            },
            {
                title: "사이트 차단",
                src: "img/block.webp",
                description: "인강 사이트 외 모든 사이트 및 어플 차단"
            },
            {
                title: "상시 순찰",
                src: "img/screenshot3.png",
                description: "생활관리 사감이 자습실에 상주하며\n매 20분마다 순찰"
            },
        ]
    },
    {
        title: "프리미엄 시설",
        titleText: "수능선배 대치점은 강남점과\n동일한 책상 의자를 사용합니다",
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
                title: "매일 단어테스트",
                src: "img/screenshot1.png",
                description: "학생 개인의 실력, 진도, 오답에 맞춘\n매일 개별 맞춤형 단어테스트"
            },
            {
                title: "매주 상담일지",
                src: "img/consultreport2.webp",
                description: "매주 담당 멘토와의 1:1 대면 상담으로\n주단위 계획수립, 진도 체크, \n 개인 진도별 위클리 테스트 진행"
            },
            {
                title: "매주 위클리테스트",
                src: "img/screenshot2.png",
                description: "매주 담임 멘토가\n학생의 실력, 진도에 맞게\n위클리 테스트 출제 및 점검"
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
                src: "img/phones.webp",
                description: "매 등원시 핸드폰 제출"
            },
            {
                title: "사이트 차단",
                src: "img/block.webp",
                description: "인강 사이트 외 모든 사이트 및 어플 차단\n(상담 후 특정 공부 사이트 오픈 가능)"
            },
            {
                title: "상시 순찰",
                src: "img/screenshot3.png",
                description: "생활관리 사감이 자습실에 상주하며\n매 20분마다 순찰"
            },
        ]
    },
    {
        title: "프리미엄 시설",
        titleText: "수능선배 대치점은 강남점과\n동일한 책상 의자를 사용합니다",
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
var intervalStatus : boolean | undefined;

var scrollValue = 0;

const WinterSchool: React.FC<any> = (props) => {

    const [play, setPlay] = useState(true);
    const [pause, setPause] = useState(false);

    const [open, setOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const handleOpen = (src : string) => { setImgSrc(src); setOpen(true);  clearInterval(intervalRef); intervalStatus = false;}
    const handleClose = () => {setOpen(false); 
        // startInterval(); 
        intervalStatus = true;}


    const [open2, setOpen2] = useState(false);
    const [imgSrc2, setImgSrc2] = useState("");
    const handleOpen2 = (src : string) => { setImgSrc2(src); setOpen2(true);  clearInterval(intervalRef); intervalStatus = false;}
    const handleClose2 = () => {setOpen2(false); 
        // startInterval(); 
        intervalStatus = true;}



    const isLargeTablet = useMediaQuery({ query: `(max-width : 1024px)` });
    const isTablet = useMediaQuery({ query: `(min-width : 500px )` })

    const [mobileBlankHeight, setMobileBlankHeight] = useState(0);

    const [index, setIndex] = useState(0);
    const [submenuIndex, setSubmenuIndex] = useState(0);
    const listRef = useRef<any>(null);
    const eachRef = useRef<any>(new Array());

    const bottomBoxRef = useRef<any>(null);

    const scrollRef = useRef<any>(null);

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
            // startInterval();
            intervalStatus = true;
        }
    }

    const handleIndex = (e: any, index: number) => {
        setIndex(index);
        currentIndex = index;
        setSubmenuIndex(0); currentSubmenuIndex = 0;
        if (e !== "e") {
            clearInterval(intervalRef);
            // startInterval();
            intervalStatus = true;
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

    // useEffect(() => {


    //     intervalRef = setInterval(() => {

    //         if (!data[currentIndex]) {
    //             return;
    //         }



    //         if (!isLargeTablet && !data[currentIndex].subMenu) {
    //             return;
    //         }

    //         if (isLargeTablet && !mobileData[currentIndex].subMenu) {
    //             return;
    //         }


    //         const maxSubmenuIndex = !isLargeTablet ? data[currentIndex].subMenu.length - 1 : mobileData[currentIndex].subMenu.length - 1;

    //         if (currentIndex === 2 && currentSubmenuIndex === 5 && isLargeTablet) {
    //             console.log(5);
    //             handleSubmenuIndex("e", 0);
    //         }


    //         if (currentSubmenuIndex < maxSubmenuIndex) {
    //             const newSubmenuIndex = currentSubmenuIndex + 1;
    //             handleSubmenuIndex("e", newSubmenuIndex);
    //         } else {
    //             handleSubmenuIndex("e", 0);
    //         }

    //     }, 3000);

    //     intervalStatus = true;

    //     return () => clearInterval(intervalRef);

    // }, []);


    // const startInterval = () => {

    //     intervalRef = setInterval(() => {

    //         if (!data[currentIndex]) {
    //             console.log(1);
    //             return;
    //         }



    //         if (!isLargeTablet && !data[currentIndex].subMenu) {
    //             console.log(2);
    //             return;
    //         }

    //         if (isLargeTablet && !mobileData[currentIndex].subMenu) {
    //             console.log(3);
    //             return;
    //         }



    //         const maxSubmenuIndex = !isLargeTablet ? data[currentIndex].subMenu.length - 1 : mobileData[currentIndex].subMenu.length - 1;

    //         if (currentIndex === 2 && currentSubmenuIndex === 5 && isLargeTablet) {
    //             handleSubmenuIndex("e", 0);
    //             return;
    //         }




    //         if (currentSubmenuIndex < maxSubmenuIndex) {
    //             const newSubmenuIndex = currentSubmenuIndex + 1;
    //             handleSubmenuIndex("e", newSubmenuIndex);
    //         } else {
    //             handleSubmenuIndex("e", 0);
    //         }

    //     }, 3000);

    // }

    const mobileChange = (eachIndex: number) => {
        setIndex(eachIndex);
        const targetScroll = eachRef.current[eachIndex].getBoundingClientRect().x;
        listRef.current.scrollTo({ left: targetScroll + listRef.current.scrollLeft - 120, behavior: "smooth" });
    }

    // useEffect(() => {



    //     setInterval(() => {

    //         console.log("intervalStatus" + intervalStatus);

    //     }, 1000);

    // }, []);

    // useEffect(() => {

    //     console.log(isLargeTablet);

    //     // if (!isLargeTablet) {
    //     //     return;
    //     // }

    //     console.log("gogogo");

    //     const handleScroll = (e: any) => {
    //         const value = window.scrollY;

    //         // console.log(value);
    //         // console.log(scrollValue);

    //         if (scrollValue > 200) {
    //             setIsHeaderOpen(false);
    //         }

    //         if (value <= 200) {
    //             setIsHeaderOpen(true);
    //         }
    //         scrollValue = value;

    //         if(bottomBoxRef && bottomBoxRef.current){

    //             const topDistance = bottomBoxRef.current.getBoundingClientRect().top;
   
    //             if(topDistance < 550){
    //                 if(intervalStatus){
    //                     clearInterval(intervalRef);
    //                     intervalStatus = false;
    //                 }
    //             }else{
    //                 if(intervalStatus === false){
    //                     startInterval();
    //                     intervalStatus = true;
    //                 }
    //             }

    //         }

    //     }

    //     const throttleFn = throttle(handleScroll, 10);

    //     window.addEventListener("scroll", throttleFn);

    //     return () => window.removeEventListener("scroll", throttleFn);

    // }, [bottomBoxRef]);

    useEffect(() => {

        const map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(37.501050900000, 127.053429100000),
            zoom: 16,
        });

        const marker = new naver.maps.Marker({
            map: map,
            title: "수능선배",
            position: new naver.maps.LatLng(37.501050900000, 127.053429100000),
            animation: naver.maps.Animation.BOUNCE
        })

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
                        &nbsp;&nbsp;&nbsp;완벽히 준비된
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        &nbsp;&nbsp;&nbsp;수능선배 대치점을 소개합니다
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
                        대치점 오픈
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
                
            </div>


            <div className={styles.openTitleText}>
                독학재수전문 학원 수능선배<br></br>대치점을 신규 오픈합니다
            </div>

            <div style={{ position: "relative", width : "100%" }}>
                <div style={{display : "flex"}}>

                </div>
                <div ref={scrollRef} className={styles.ceoVideo}>
                    <div className={styles.videoBox}>
                        <div className={styles.vimeoWrapper}>
                            <Vimeo
                                responsive
                                width="100%"
                                height="100%"
                                video="https://vimeo.com/815279269"
                                autoplay={play}
                                paused={pause}
                                muted
                                className={styles.player}
                                // onReady={(e: any) => { setTimeout(() => { setPause(true); }, 2000) }}
                            />
                        </div>
                    </div>
                </div>
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
                                    <div className={`${styles.eachListBorder} ${(index === 0 && eachIndex === 4) || (index === 1 && eachIndex === 4) || (index === 2 && eachIndex === 4) || (index === 2 && eachIndex === 8) ? styles.none : ""}`}>

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
                                <div key={eachIndex} className={`${styles.mobileEachListTitleDiv} ${eachIndex === 4 ? styles.even : ""} ${eachIndex === 5 ? styles.odd : ""} ${eachIndex === submenuIndex ? styles.active : ""}`} onClick={(e) => { handleSubmenuIndex(e, eachIndex) }}  >
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
                                    (index === 0 && submenuIndex === 2) &&
                                    <div style={{height : "30px"}}>
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

                                {/* {
                                    (data[index].subMenu && data[index].subMenu[submenuIndex] && data[index].subMenu[submenuIndex].src && index === 0 && submenuIndex === 2) &&
                                    <div>
                                        <div className={styles.imgDiv} onClick={(e : any) => {handleOpen2("img/eightweeks3.webp");}}>
                                            <img src="img/eightweeks3.webp" className={`${styles.submenuImage} ${index === 0 ? styles.bigSize : ""}`} />
                                        </div>
                                    </div>
                                } */}

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

                            {/* {
                                (mobileData[index].subMenu && mobileData[index].subMenu[submenuIndex] && mobileData[index].subMenu[submenuIndex].src && index === 0 && submenuIndex === 2) &&
                                <div>
                                    <div onClick={(e : any) => {handleOpen("img/eightweeks3.webp");} } className={`${styles.mobileImageWrapper} ${styles.onlymobile}`}>
                                        <img src="img/eightweeks3.webp" className={`${styles.mobileSubmenuImage}`} />
                                    </div>
                                </div>
                            } */}

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
                    <div style={{ height: "950px" }}>

                    </div>
                }

                {
                    (index === 0 && submenuIndex === 3) &&
                    <div style={{ height: "1000px" }}>

                    </div>
                }

{
                    (index === 0 && submenuIndex === 4) &&
                    <div style={{ height: "950px" }}>

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
                    (index === 1 && submenuIndex === 4) &&
                    <div style={{ height: "500px" }}>

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

            <div className={styles.bottomBox} ref={bottomBoxRef}>
                <div className={styles.bottomBoxDiv}>
                    <div className={`${styles.bottomBoxTitle} ${styles.onlyPC}`}>
                        수능선배 대치점 위치 및 예약 안내
                    </div>

                    <div className={`${styles.bottomBoxTitle} ${styles.onlymobile}`}>
                        수능선배 대치점<br></br>위치 및 예약 안내
                    </div>

                    <div className={styles.mapDiv}>
                        <div id="map" className={styles.map}></div>
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
                                2023년 4월 17일 월요일(4월 11일 화요일 이후 방문 상담 가능)
                            </div>
                        </div>
                        <div className={`${styles.differentiationList} ${styles.last}`}>
                            <div className={styles.differentiationList_1}>
                                등록절차
                            </div>
                            <div className={`${styles.differentiationList_2} ${styles.multiLine}`}>
                                <div>
                                    ① 온라인으로 '사전 예약 신청서' 작성
                                </div>
                                <div>
                                    ② 현장 방문 결제 및 좌석 선택 (4월 11일 부터)
                                </div>
                                <div>
                                    ③ 정상 등원 (4월 17일 부터)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={styles.differentiationDiv}>
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
                    </div> */}

                    <div className={`${styles.lastBtnDiv} ${styles.onlyPC}`}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdObiJXiEdRsU5Vb0TyREch9SdbXNh87U6QUHYNNitK07YBNw/viewform?usp=sf_link" className={styles.atag}>
                            <Button variant="contained" sx={{ "&:hover": { backgroundColor: "rgb(8,9,12)" }, width: "306px", height: "70px", backgroundColor: "#28303e", borderRadius: "35px", fontSize: "22px", fontWeight: 700, "@media (max-width : 1024px)": { width: "215px", height: "49px", borderRadius: "24.5px", fontSize: "15.5px" } }}>온라인 예약 바로 가기</Button>
                        </a>
                    </div>
                    <div className={`${styles.lastBtnDiv} ${styles.onlymobile}`}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdObiJXiEdRsU5Vb0TyREch9SdbXNh87U6QUHYNNitK07YBNw/viewform?usp=sf_link" className={styles.atag}>
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