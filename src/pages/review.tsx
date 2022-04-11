import React, { useEffect, useState } from "react";
import styles from "../styles/review.module.css";
import HeaderTwo from "../components/header2";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import reviewList from "../data/reviewList";
import { ReactComponent as DowndownSvg } from '../svg/downdown.svg';
import Footer from "../components/footer";
import { ReactComponent as HeartSvg } from "../svg/heart-regular.svg";
import { ReactComponent as HeartSolidSvg } from "../svg/heart-solid.svg";
import cookieFunction from "../data/cookies"
import cookies from "../data/cookies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SpeedDialComponent from "../control/speeddial";


const Review: React.FC<any> = (props) => {

    const [likeCount, setLikeCount] = useState<any>();
    const [update, setUpdate] = useState(Math.random());
    const [likeData, setLikeData] = useState<any>([]);

    const [mainImageIndex, setMainImageIndex ]= useState(0);
    const [secondMainImageIndex, setSecondMainImageIndex ]= useState(0);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])



    useEffect(() => {
        const record = cookieFunction.getCookie("record");
        const data = record?.split(",");
        console.log(data);
        setLikeData(data);

        fetch("https://suneungsunbae.com/api/review", {
            method: "GET"
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result);
                    setLikeCount(result.message);
                })
        })
    }, [update]);


    const like = (questionNumber: number, answerNumber: number) => {

        if (likeData && likeData.includes((questionNumber * 100 + answerNumber).toString())) {
            return;
        }


        const data = {
            questionNumber, answerNumber
        }

        console.log(data);


        fetch("https://suneungsunbae.com/api/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result);
                    if (result.message === "success") {
                        cookieFunction.addCookie(questionNumber * 100 + answerNumber);
                        setUpdate(Math.random());
                    }
                })
        });
    }

    return (
        <div className={styles.main}>
            <HeaderTwo />
            <div className={styles.voidHeader}>

            </div>
            <div className={styles.subHeader} style={{ backgroundImage: "url(img/camera.webp)" }}>
                <div className={styles.blackFilter}>
                </div>
                <div className={styles.subHeaderText}>
                    <div className={styles.subHeaderTextTitle}>
                        합격생들의 실제 이야기들을
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        모았습니다
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
                        합격생 이야기
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>

            </div>

            <div className={styles.titleText}>
                텍스트로 만나는<br></br>합격생들의 이야기
            </div>

            <div className={styles.onlymobile}>
                <div className={styles.mobileReviewBox}>
                    <div className={styles.mobileReviewBoxTitle}>
                        <div className={styles.mobileReviewBoxTitleNumber}>
                            01
                        </div>
                        <div className={styles.mobileReviewBoxTitleText}>
                            수능선배를 선택해주신<br></br>이유는 뭔가요?
                        </div>
                    </div>
                    <div className={styles.answerWrapper}>
                        <Swiper
                            spaceBetween={14}
                            slidesPerView={1.2}
                            centeredSlides={true}
                            onSlideChange= {(e : any)=> {setMainImageIndex(e.activeIndex)}}
                        >
                            {
                                reviewList.list1.map((eachList: any, index: number) => {
                                    const description = { __html: eachList.description.replace(/b\W+b/gm, (it: any) => `<b>${it.slice(1, it.length - 1)}</b>`) };

                                    return (
                                        <SwiperSlide key={eachList.name}>
                                            <div className={`${styles.eachDescriptionMobile} ${index % 3 === 0 ? styles.first : ""} ${index % 3 === 1 ? styles.second : ""} ${index % 3 === 2 ? styles.third : ""}`}>
                                                <div dangerouslySetInnerHTML={description} className={styles.eachDescriptionTextMobile}>

                                                </div>
                                                <div className={styles.eachDescriptionNameBoxMobile}>
                                                    <div className={styles.eachDescriptionNameMobile}>
                                                        {eachList.name}
                                                    </div>
                                                    <div onClick={() => { like(1, index); }} className={styles.heartDivMobile}>
                                                        <div className={styles.heartTextMobile}>
                                                            도움 됐어요 {
                                                                likeCount &&
                                                                likeCount.map((eachLike: any) => {
                                                                    if ((eachLike.questionNumber === 1) && (eachLike.answerNumber === index)) {
                                                                        return (
                                                                            <span key={eachLike.id}>
                                                                                {eachLike.count}
                                                                            </span>
                                                                        );
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                        <div className={`${styles.svgDivMobile} ${(index % 3 === 0 || index % 3 === 1) ? styles.none : ""}`}>
                                                            {likeData && likeData.includes((100 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heartMobile} /> : <HeartSvg className={styles.heartMobile} />}
                                                        </div>
                                                        <div className={`${styles.svgDivMobile} ${(index % 3 === 2) ? styles.none : ""}`}>
                                                            {likeData && likeData.includes((100 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heartMobile} /> : <HeartSvg fill="white" className={styles.heartMobile} />}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.blackFilterMobile} ${+mainImageIndex === +index ? styles.noneBlackFilter : ""}`}>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                    <div className={styles.reviewBoxNumberDiv}>
                        {mainImageIndex+1} / 16
                    </div>
                </div>


                <div className={`${styles.mobileReviewBox} ${styles.second}`}>
                    <div className={styles.mobileReviewBoxTitle}>
                        <div className={styles.mobileReviewBoxTitleNumber}>
                            02
                        </div>
                        <div className={styles.mobileReviewBoxTitleText}>
                            수능선배에서 어떤<br></br>도움을 받았나요?
                        </div>
                    </div>
                    <div className={styles.answerWrapper}>
                        <Swiper
                            spaceBetween={14}
                            slidesPerView={1.2}
                            centeredSlides={true}
                            onSlideChange= {(e : any)=> {setSecondMainImageIndex(e.activeIndex)}}
                        >
                            {
                                reviewList.list2.map((eachList: any, index: number) => {
                                    const description = { __html: eachList.description.replace(/b\W+b/gm, (it: any) => `<b>${it.slice(1, it.length - 1)}</b>`) };

                                    return (
                                        <SwiperSlide key={eachList.name}>
                                            <div className={`${styles.eachDescriptionMobile} ${styles.eachDescriptionMobileSecond} ${index % 3 === 0 ? styles.first : ""} ${index % 3 === 1 ? styles.second : ""} ${index % 3 === 2 ? styles.third : ""}`}>
                                                <div dangerouslySetInnerHTML={description} className={styles.eachDescriptionTextMobile}>

                                                </div>
                                                <div className={styles.eachDescriptionNameBoxMobile}>
                                                    <div className={styles.eachDescriptionNameMobile}>
                                                        {eachList.name}
                                                    </div>
                                                    <div onClick={() => { like(2, index); }} className={styles.heartDivMobile}>
                                                        <div className={styles.heartTextMobile}>
                                                            도움 됐어요 {
                                                                likeCount &&
                                                                likeCount.map((eachLike: any) => {
                                                                    if ((eachLike.questionNumber === 2) && (eachLike.answerNumber === index)) {
                                                                        console.log(2);
                                                                        return (
                                                                            <span key={eachLike.id}>
                                                                                {eachLike.count}
                                                                            </span>
                                                                        );
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                        <div className={`${styles.svgDivMobile} ${(index % 3 === 0 || index % 3 === 1) ? styles.none : ""}`}>
                                                            {likeData && likeData.includes((200 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heartMobile} /> : <HeartSvg className={styles.heartMobile} />}
                                                        </div>
                                                        <div className={`${styles.svgDivMobile} ${(index % 3 === 2) ? styles.none : ""}`}>
                                                            {likeData && likeData.includes((200 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heartMobile} /> : <HeartSvg fill="white" className={styles.heartMobile} />}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.blackFilterMobile} ${+secondMainImageIndex === +index ? styles.noneBlackFilter : ""}`}>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                    <div className={styles.reviewBoxNumberDiv}>
                        {secondMainImageIndex+1} / 23
                    </div>
                </div>

            </div>

            <div className={styles.onlyPC}>
                <div className={styles.reviewBox}>
                    <div className={styles.reviewBoxTitle}>
                        <div className={styles.reviewBoxTitleNumber}>
                            01
                        </div>
                        <div className={styles.reviewBoxTitleText}>
                            수능선배를 선택해주신<br></br>이유는 뭔가요?
                        </div>
                    </div>
                    <div className={styles.reviewBoxDescription}>
                        {
                            reviewList.list1.map((eachList: any, index: number) => {
                                const description = { __html: eachList.description.replace(/b\W+b/gm, (it: any) => `<b>${it.slice(1, it.length - 1)}</b>`) };

                                return (
                                    <div key={index} className={`${styles.eachDescription} ${index % 3 === 0 ? styles.first : ""} ${index % 3 === 1 ? styles.second : ""} ${index % 3 === 2 ? styles.third : ""}`}>
                                        <div dangerouslySetInnerHTML={description} className={styles.eachDescriptionText}>

                                        </div>
                                        <div className={styles.eachDescriptionNameBox}>
                                            <div className={styles.eachDescriptionName}>
                                                {eachList.name}
                                            </div>
                                            <div onClick={() => { like(1, index); }} className={styles.heartDiv}>
                                                <div className={styles.heartText}>
                                                    도움 됐어요 {
                                                        likeCount &&
                                                        likeCount.map((eachLike: any) => {
                                                            if ((eachLike.questionNumber === 1) && (eachLike.answerNumber === index)) {
                                                                return (
                                                                    <span key={eachLike.id}>
                                                                        {eachLike.count}
                                                                    </span>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </div>
                                                <div className={`${styles.svgDiv} ${(index % 3 === 0 || index % 3 === 2) ? styles.none : ""}`}>
                                                    {likeData && likeData.includes((100 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heart} /> : <HeartSvg className={styles.heart} />}
                                                </div>
                                                <div className={`${styles.svgDiv} ${(index % 3 === 1) ? styles.none : ""}`}>
                                                    {likeData && likeData.includes((100 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heart} /> : <HeartSvg fill="white" className={styles.heart} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={styles.downDown}>
                    <DowndownSvg />
                </div>

                <div className={`${styles.reviewBox} ${styles.second}`}>
                    <div className={styles.reviewBoxTitle}>
                        <div className={styles.reviewBoxTitleNumber}>
                            02
                        </div>
                        <div className={styles.reviewBoxTitleText}>
                            수능선배에서 어떤<br></br>도움을 받았나요?
                        </div>
                    </div>
                    <div className={styles.reviewBoxDescription}>
                        {
                            reviewList.list2.map((eachList: any, index: number) => {
                                const description = { __html: eachList.description.replace(/b\W+b/gm, (it: any) => `<b>${it.slice(1, it.length - 1)}</b>`) };

                                return (
                                    <div key={eachList.name} className={`${`${styles.eachDescription} ${styles.secondQuestion}`} ${index % 3 === 0 ? styles.first : ""} ${index % 3 === 1 ? styles.second : ""} ${index % 3 === 2 ? styles.third : ""}`}>
                                        <div dangerouslySetInnerHTML={description} className={styles.eachDescriptionText}>

                                        </div>
                                        <div className={styles.eachDescriptionNameBox}>
                                            <div className={styles.eachDescriptionName}>
                                                {eachList.name}
                                            </div>
                                            <div onClick={() => { like(2, index); }} className={styles.heartDiv}>
                                                <div className={styles.heartText}>
                                                    도움 됐어요 {
                                                        likeCount &&
                                                        likeCount.map((eachLike: any) => {
                                                            if ((eachLike.questionNumber === 2) && (eachLike.answerNumber === index)) {
                                                                return (
                                                                    <span key={eachLike.id}>
                                                                        {eachLike.count}
                                                                    </span>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </div>
                                                <div className={`${styles.svgDiv} ${(index % 3 === 0 || index % 3 === 1) ? styles.none : ""}`}>
                                                    {likeData && likeData.includes((200 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heart} /> : <HeartSvg className={styles.heart} />}
                                                </div>
                                                <div className={`${styles.svgDiv} ${(index % 3 === 2) ? styles.none : ""}`}>
                                                    {likeData && likeData.includes((200 + index).toString()) ? <HeartSolidSvg fill="#ee4957" className={styles.heart} /> : <HeartSvg fill="white" className={styles.heart} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>

            <div className={styles.secondSection}>
                <div className={`${styles.titleText} ${styles.second}`}>
                    영상으로 만나는<br></br>합격생들의 이야기
                </div>

                <div className={styles.vimeoWrapper}>
                    <div style={{padding: "56.25% 0 0 0", position : "relative", borderRadius : "10px"}}>
                        <iframe src="https://player.vimeo.com/video/698227324?h=7e7ea93748&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position : "absolute", top:0, left:0, width : "100%", height:"100%", borderRadius : "10px"}} title="3차수정본_합격자인터뷰.mp4">
                        </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>

            <SpeedDialComponent />

            <Footer />

        </div>
    );
}

export default Review;