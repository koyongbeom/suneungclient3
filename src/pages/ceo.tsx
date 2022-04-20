import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import HeaderTwo from '../components/header2';
import SpeedDialComponent from '../control/speeddial';
import styles from "../styles/ceo.module.css";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';

import ReactGa from "react-ga4";



const Ceo: any = (props: any) => {

    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "ceopageview"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "ceo"
        });

    }, []);
    //--------------------------------------------------------



    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={styles.main}>
            <HeaderTwo />

            <div className={styles.voidHeader}>

            </div>
            <div className={styles.subHeader} style={{ backgroundImage: "url(img/team.webp)" }}>
                <div className={styles.filter}>

                </div>
                <div className={styles.subHeaderText}>
                    <div className={styles.subHeaderTextTitle}>
                        수 많은 경험을 바탕으로
                    </div>
                    <div className={styles.subHeaderTextTitle2}>
                        최고의 독학관리학원을 만듭니다
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
                        대표소개
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>

            </div>

            <div className={styles.ceoDescriptionDiv}>
                <div className={styles.ceoDescription}>
                    <div className={styles.ceoDescriptionText}>
                        <div className={styles.ceoDescriptionTextTitle_1}>
                            6년 동안 독학관리학원을 운영하며
                        </div>
                        <div className={styles.ceoDescriptionTextTitle_2}>
                            더 좋은 공부 환경을 만들기 위해 끊임없이
                        </div>
                        <div className={styles.ceoDescriptionTextTitle_3}>
                            고민해왔습니다.
                        </div>
                        <div className={styles.ceoDescriptionTextSubTitle}>
                            6년 동안 독학관리학원을 운영해오며 많은 것을 배웠습니다.
                        </div>
                        <div className={styles.ceoDescriptionTextBox}>
                            <div className={styles.ceoDescriptionTextBoxTitle}>
                                첫번째로 공부법에 관한 것입니다. 성공으로 가는 공부방법은 정해져있는 것이 아니었습니다.
                            </div>
                            <div className={`${styles.ceoDescriptionTextBoxDescription} ${styles.onlyPC}`}>
                                가장 좋은 공부법은 학생의 공부 스타일을 180도 바꿔버리는 것이 아니고<br></br>현재 공부 스타일을 면밀히 확인한 후 개선점을 찾아나가는 것이었습니다. 학생의 현재<br></br>공부법을 180도 바꾸려고 했을 때 오히려 학생은 현재까지 해왔던 공부방법과 너무 달라<br></br>
                                갈피를 못 잡고 헤메는 경우가 대다수였습니다. 하지만, 현재 공부법을 면밀히 분석한 후<br></br>개선점을 하나씩 찾아내 조금씩 바꿔나가면 학생도 적응이 빠르고 훨씬 더 좋은 결과를<br></br>도출했습니다. 이 경험을 학습 상담에 적용시키고 있습니다.
                            </div>
                            <div className={`${styles.ceoDescriptionTextBoxDescription} ${styles.onlymobile}`}>
                                가장 좋은 공부법은 학생의 공부 스타일을 180도 바꿔버리는 것이 아니고 현재 공부 스타일을 면밀히 확인한 후 개선점을 찾아나가는 것이었습니다. 학생의 현재 공부법을 180도 바꾸려고 했을 때 오히려 학생은 현재까지 해왔던 공부방법과 너무 달라
                                갈피를 못 잡고 헤메는 경우가 대다수였습니다. 하지만, 현재 공부법을 면밀히 분석한 후 개선점을 하나씩 찾아내 조금씩 바꿔나가면 학생도 적응이 빠르고 훨씬 더 좋은 결과를 도출했습니다. 이 경험을 학습 상담에 적용시키고 있습니다.
                            </div>
                        </div>
                        <div className={`${styles.ceoDescriptionTextBox} ${styles.second}`}>
                            <div className={styles.ceoDescriptionTextBoxTitle}>
                                두번째로 독학관리학원에서 가장 중요한 것은 특별한 것이 아니고 기본을 잘 하는 것이었습니다.
                            </div>
                            <div className={`${styles.ceoDescriptionTextBoxDescription} ${styles.onlyPC}`}>
                                기본이라 함은 학생들이 독학관리학원을 선택하는 가장 큰 니즈를 충족시켜주는 것입니다.<br></br>학생들이 독학관리학원을 선택하는 이유는 엄격한 생활 관리, 양질의 상담/질의응답을 받으며<br></br>
                                경쟁자들 옆에서 공부하기 위함입니다. 저는 독학관리학원의 기본을 확실히 하는데 모든<br></br>노력을 쏟고 있으며 어떤 업체보다 기본이 확실하다는 자부심을 갖고 있습니다.
                            </div>
                            <div className={`${styles.ceoDescriptionTextBoxDescription} ${styles.onlymobile}`}>
                                기본이라 함은 학생들이 독학관리학원을 선택하는 가장 큰 니즈를 충족시켜주는 것입니다. 학생들이 독학관리학원을 선택하는 이유는 엄격한 생활 관리, 양질의 상담/질의응답을 받으며
                                경쟁자들 옆에서 공부하기 위함입니다. 저는 독학관리학원의 기본을 확실히 하는데 모든 노력을 쏟고 있으며 어떤 업체보다 기본이 확실하다는 자부심을 갖고 있습니다.
                            </div>

                        </div>
                    </div>
                    <div className={styles.ceoPictureDiv}>
                        <img className={styles.ceoPicture} src="img/ceo101.webp" alt="ceo" />
                        <div className={styles.ceoPictureDescription}>
                            <div className={styles.ceoPictureDescriptionTitle}>
                                약력
                            </div>
                            <div className={styles.ceoPictureDescription_1}>
                                경희대학교 약학대학 수석 입학
                            </div>
                            <div className={styles.ceoPictureDescription_2}>
                                (현) 피트선배 대표
                            </div>
                            <div className={styles.ceoPictureDescription_3}>
                                (현) 수능선배 대표
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ceoCareerDiv}>
                <div className={styles.ceoCareer}>
                    <div className={styles.ceoCareerTitle}>
                        경력 사항
                    </div>
                    <div className={styles.ceoCareerPicture}>
                        <img className={`${styles.ceoCareerPicture_1} ${styles.ceoOathPicture}`} src="img/oath5.webp" alt="ceo" />
                        <div className={styles.onlymobile} style={{ height: "43px" }}></div>
                        <img className={styles.ceoCareerPicture_2} src="img/oath3.webp" alt="oath" />
                        <div className={styles.onlymobile} style={{ height: "43px" }}></div>
                        <img className={styles.ceoCareerPicture_3} src="img/consult3.webp" alt="consult" />
                    </div>
                </div>
                <div className={`${styles.grayBox} ${styles.onlyPC}`}>

                </div>
            </div>

            <SpeedDialComponent />

            <Footer />
        </div>
    )
}

export default Ceo;