import React, {useState, useEffect} from "react";
import HeaderTwo from "../components/header2";
import Footer from "../components/footer";

import styles from "../styles/notification.module.css";

import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

import ReactGa from "react-ga4";




const Notification :React.FC<any> = (props) => {

    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<any>();
    const [totalCount, setTotalCount] = useState();

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
      };

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    //ga event------------------------------------------------
    useEffect(() => {

        ReactGa.send({
            hitType: "pageview",
            page_title: "notification"
        });

    }, []);
    //--------------------------------------------------------

    useEffect(() => {

        fetch(`https://suneungsunbae.com/api/text/notifications?page=${currentPage}`, {
            method: "get"
        }).then((response : any)=>{
            response.json()
            .then((result : any)=>{
                console.log(result);
                setData(result.data);
                setTotalCount(result.count);
            })
        })

    }, [currentPage]);




    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div className={styles.headerBar}
                style={{ backgroundImage: "url(img/faq.webp)" }}
            >
                공지사항
            </div>
            <div className={`${styles.currentMenuViewerDiv} ${styles.onlyPC}`}>
                <div className={styles.currentMenuViewer}>
                    <HouseSvg className={styles.houseSvg} />
                    <RightChevronSvg className={styles.rightChevron} />
                    <div className={styles.currentMenuViewerText_2}>
                        공지사항
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
            </div>

            <div className={`${styles.titleText} ${styles.onlyPC}`}>
                공지사항을<br></br>안내드립니다.
            </div>


            <div className={styles.notificationBox}>
                <div className={`${styles.notificationHeader} ${styles.onlyPC}`}>
                    <div className={styles.headerText1}>
                        번호
                    </div>
                    <div className={styles.headerText2}>
                        제목
                    </div>
                    <div className={styles.headerText3}>
                        작성자
                    </div>
                    <div className={styles.headerText4}>
                        작성일
                    </div>
                    <div className={styles.headerText5}>
                        조회
                    </div>
                </div>

                {
                    data && data.map((eachData: any, dataIndex : number) => {

                        const date = new Date(eachData.createdAt);

                        return (
                            <div key={eachData.id}>
                                <div className={`${styles.notificationBodyRow} ${styles.onlyPC}`}>
                                    <div className={styles.bodyText1}>
                                        {totalCount && totalCount - dataIndex}
                                    </div>
                                    <div className={styles.bodyText2}>
                                        <Link to={`/notificationRead?id=${eachData.id}`} style={{ textDecoration: "none", color: "inherit", width: "100%", display: "block" }}>
                                            <span>{eachData.title}</span>
                                        </Link>
                                    </div>
                                    <div className={styles.bodyText3}>
                                        수능선배
                                    </div>
                                    <div className={styles.bodyText4}>
                                        {date.getFullYear()}.{date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1}.{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}
                                    </div>
                                    <div className={styles.bodyText5}>
                                        {eachData.views}
                                    </div>
                                </div>

                                <Link to={`/notificationRead?id=${eachData.id}`} style={{ textDecoration: "none", color: "inherit", width: "100%", display: "block" }}>
                                    <div className={`${styles.mobilenotificationBodyRow} ${styles.onlymobile}`}>
                                        <div className={styles.mobilebodyText2}>
                                            {eachData.title}
                                        </div>
                                        <div className={styles.mobileSubBodyDiv}>
                                            <div className={styles.mobilebodyText3}>
                                                수능선배&nbsp;&nbsp;|
                                            </div>
                                            <div className={styles.mobilebodyText4}>
                                                &nbsp;&nbsp;{date.getFullYear()}.{date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1}.{date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}&nbsp;&nbsp;|
                                            </div>
                                            <div className={styles.mobilebodyText5}>
                                                &nbsp;&nbsp;{eachData.views}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }

            </div>

            <div className={`${styles.pagination} ${styles.onlyPC}`}>
                <Stack spacing={2}>
                    <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} size="large" shape="rounded" />
                </Stack>
            </div>

            <div className={`${styles.pagination} ${styles.onlymobile}`}>
                <Stack spacing={2}>
                    <Pagination siblingCount={1} count={pageCount} page={currentPage} onChange={handlePageChange} size="medium" shape="rounded" />
                </Stack>
            </div>

            <Footer />
        </div>
    )
}

export default Notification;