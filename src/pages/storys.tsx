import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import HeaderTwo from "../components/header2";
import styles from "../styles/storys.module.css";
import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';

import { Link } from "react-router-dom";



const Storys: React.FC<any> = (props) => {

    const [data, setData] = useState<any>();

    useEffect(() => {

        fetch(`https://suneungsunbae.com/api/text/storys`, {
            method: "get"
        }).then((response : any)=>{
            response.json()
            .then((result : any)=>{
                console.log(result);
                setData(result.data);
            })
        })

    }, []);

    return (
        <div className={styles.main}>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div className={`${styles.headerBar} ${styles.onlyPC}`}
                style={{ backgroundImage: "url(img/faq.webp)" }}
            >
                수능선배 이야기
            </div>
            <div className={`${styles.currentMenuViewerDiv} ${styles.onlyPC}`}>
                <div className={styles.currentMenuViewer}>
                    <HouseSvg className={styles.houseSvg} />
                    <RightChevronSvg className={styles.rightChevron} />
                    <div className={styles.currentMenuViewerText_2}>
                        수능선배 이야기
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
            </div>

            <div className={`${styles.titleText} ${styles.onlyPC}`}>
                수능선배의<br></br>자세한 이야기를 들려드릴게요
            </div>



            <div className={styles.mobileTitleBox}>
                <div className={`${styles.mobileTitleText} ${styles.onlymobile}`}>
                    수능선배 이야기
                </div>
                <div className={`${styles.mobileSubTitleText} ${styles.onlymobile}`}>
                    수능선배의 자세한 이야기를 들려드릴게요
                </div>
            </div>
            
            {/* <div className={`${styles.mobileFeedBoxTitle} ${styles.onlymobile}`}>
                이야기 모음
            </div> */}

            <div className={styles.feedBox}>

                {
                    data && data.map((eachData: any) => {

                        const date = new Date(eachData.createdAt);

                        return (
                            <Link to={`/storyread?id=${eachData.id}`} style={{ textDecoration: "none", color: "inherit", width: "100%", display: "block" }}>
                                <div key={eachData.id} className={styles.eachFeedBox}>
                                    <div className={styles.eachFeedTextBox}>
                                        <div className={styles.eachFeedTextBoxCategory}>
                                            수능선배 이야기
                                        </div>
                                        <div className={styles.eachFeedTextBoxTitle}>
                                            {eachData && eachData.title}
                                        </div>
                                        {/* <div className={`${styles.eachFeedTextBoxSubTitle}`}>
                                            {eachData && eachData.subTitle}
                                        </div> */}
                                        <div className={styles.eachFeedTextBoxDate}>
                                            {date.getFullYear()}.{date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}
                                        </div>
                                    </div>
                                    <div className={styles.eachFeedImgBox}>
                                        <div className={styles.imgWrapper}>
                                            <img className={styles.eachFeedImg} src={`${eachData.src}`} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }

            </div>

        
            <Footer />
        </div>
    );
}

export default Storys;

