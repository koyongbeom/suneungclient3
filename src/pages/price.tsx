import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import HeaderTwo from "../components/header2";
import SpeedDialComponent from "../control/speeddial";
import styles from "../styles/price.module.css";

const Price : React.FC<any> = (props) => {
    const navigate = useNavigate();


    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div className={styles.main}>
                <div className={styles.innerMain}>
                    <div className={`${styles.mainTitle} ${styles.onlyPC}`}>
                        독학재수전문 수능선배는<br></br>합리적인 가격을 제시합니다
                    </div>
                    <div className={`${styles.mainTitle} ${styles.onlymobile}`}>
                        수능선배는<br></br>합리적 비용을 제시합니다
                    </div>
                    <div className={`${styles.mainSubTitle} ${styles.onlyPC}`}>
                        수능선배가 여러분의 수험생활을 함께하겠습니다
                    </div>
                    <div className={`${styles.mainSubTitle} ${styles.onlymobile}`}>
                        수능선배가 여러분의 수험생활을<br></br>함께하겠습니다
                    </div>
                    <div className={`${styles.mainBtnDiv} ${styles.onlyPC}`}>
                        <Button onClick={(e : any)=>{navigate("/register");}} variant="contained" sx={{width : "217.25px", height : "58px", backgroundColor : "#1b49af", fontSize : "17px", fontWeight : 700, borderRadius : "10px", "@media (max-width : 1024px)" : {width : "152.22px", height : "50.66px",fontSize : "14px", padding : 0, borderRadius : "8px", letterSpacing : "1px", fontWeight : 700} }}>
                            <span style={{fontWeight : 700}}>방문상담 신청하기</span>
                        </Button>
                    </div>
                    <div className={`${styles.description} ${styles.onlymobile}`}>
                        * 모든 독학재수관리 서비스 포함 가격
                    </div>
                    <div className={styles.mainPriceDiv}>
                        <div className={styles.priceBox}>
                            <div className={styles.priceBoxTitle}>
                                오픈석
                            </div>
                            <div className={styles.priceBoxText}>
                                자물쇠반 독학관리
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>420,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                넓은 개방형 공간을<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div>
                        <div className={styles.priceBox}>
                            <div className={styles.priceBoxTitle}>
                                칸막이석
                            </div>
                            <div className={styles.priceBoxText}>
                                자물쇠반 독학관리
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>420,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                시야가 막힌 공간을<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div>
                        <div className={styles.priceBox}>
                            <div className={styles.priceBoxTitle}>
                                2인석
                            </div>
                            <div className={styles.priceBoxText}>
                                자물쇠반 독학관리
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>450,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                넓은 시야와 공간을<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div>
                        <div className={`${styles.priceBox} ${styles.last}`}>
                            <div className={styles.priceBoxTitle}>
                                1인석
                            </div>
                            <div className={styles.priceBoxText}>
                                자물쇠반 독학관리
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>480,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                개인만의 공간에서 공부하길<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceSubDescription}>
                        <div className={`${styles.priceSubDescription_1} ${styles.onlyPC}`}>
                            * 자물쇠반 비용에 멘토 상담, 24시간 좌석 이용, 생활관리, 질의응답 등 모든 자물쇠반 서비스가 포함됩니다. (1일 무료체험 가능)<br></br>
                        </div>
                        <div className={`${styles.priceSubDescription_1} ${styles.onlymobile}`}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▷&nbsp; 생활관리 / 멘토링 / 질의응답 포함<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(자물쇠반 1일 무료체험 가능)
                        </div>

                    </div>
                </div>
            </div>





            <div className={styles.main2}>
                <div className={styles.innerMain}>
                    <div className={`${styles.mainTitle} ${styles.onlyPC}`}>
                        수능선배에서 최고의 튜터에게<br></br>일대일 과외를 받을 수 있습니다
                    </div>
                    <div className={`${styles.mainTitle} ${styles.onlymobile}`}>
                        최고의 튜터에게<br></br>과외를 받을 수 있습니다
                    </div>
                    <div className={`${styles.mainSubTitle} ${styles.onlyPC}`}>
                        과외는 희망자에 한해 신청 가능합니다
                    </div>
                    <div className={`${styles.mainSubTitle} ${styles.onlymobile}`}>
                        과외는 희망자에 한해<br></br>신청 가능합니다<br></br>
                    </div>
                    <div className={styles.mainPriceDiv2}>
                        <div className={styles.priceBox}>
                            <div className={styles.priceBoxTitle}>
                                일대일 과외
                            </div>
                            <div className={styles.priceBoxText}>
                                주 1회&nbsp; 1시간
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>180,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                오답 위주의 정리를<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div>
                        <div className={`${styles.priceBox} ${styles.last}`}>
                            <div className={styles.priceBoxTitle}>
                                일대일 과외
                            </div>
                            <div className={styles.priceBoxText}>
                                주 1회&nbsp; 2시간
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>360,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                이론 점검, 문제 풀이를<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div>
                        {/* <div className={`${styles.priceBox} ${styles.last}`}>
                            <div className={styles.priceBoxTitle}>
                                일대일 과외
                            </div>
                            <div className={styles.priceBoxText}>
                                주 1회&nbsp; 3시간
                            </div>
                            <div className={styles.priceBoxAmount}>
                                <span className={styles.number}>540,000</span>&nbsp;/월
                            </div>
                            <div className={styles.priceBoxSubAmount}>
                                모든 독학재수관리 비용 포함
                            </div>
                            <div className={styles.bottomText}>
                                넓은 시야와 공간을<br></br>원하는 학생에게 추천합니다
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.priceSubDescription}>
                        <div className={`${styles.priceSubDescription_1} ${styles.onlyPC}`}>
                            * 과외 수업 1회 수강 후 불만족 시 지불한 금액 100% 환불 가능합니다.
                        </div>
                        <div className={`${styles.priceSubDescription_1} ${styles.onlymobile}`}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▷&nbsp; 과외 수업 1회 수강 후 불만족 시<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;지불한 금액 100% 환불 가능합니다.
                        </div>
                    </div>
                </div>
            </div>

            <SpeedDialComponent />
            <Footer />
        </div>
    );
}

export default Price;