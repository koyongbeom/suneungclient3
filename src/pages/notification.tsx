import React, {useState} from "react";
import HeaderTwo from "../components/header2";
import Footer from "../components/footer";

import styles from "../styles/notification.module.css";

import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";



const Notification :React.FC<any> = (props) => {

    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
      };




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
                <div className={styles.notificationHeader}>
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

                <div className={styles.notificationBodyRow}>
                    <div className={styles.bodyText1}>
                        1
                    </div>
                    <div className={styles.bodyText2}>
                        <Link to="/notificationRead" style={{ textDecoration: "none", color: "inherit", width : "100%", display : "block" }}>
                            <span>더프 모의고사 실시</span>
                        </Link>
                    </div>
                    <div className={styles.bodyText3}>
                        수능선배
                    </div>
                    <div className={styles.bodyText4}>
                        2022.05.11
                    </div>
                    <div className={styles.bodyText5}>
                        37
                    </div>
                </div>

                <div className={styles.notificationBodyRow}>
                    <div className={styles.bodyText1}>
                        1
                    </div>
                    <div className={styles.bodyText2}>
                        <Link to="/notificationRead" style={{ textDecoration: "none", color: "inherit", width : "100%", display : "block" }}>
                            <span>더프 모의고사 실시</span>
                        </Link>
                    </div>
                    <div className={styles.bodyText3}>
                        수능선배
                    </div>
                    <div className={styles.bodyText4}>
                        2022.05.11
                    </div>
                    <div className={styles.bodyText5}>
                        37
                    </div>
                </div>


                <div className={styles.notificationBodyRow}>
                    <div className={styles.bodyText1}>
                        1
                    </div>
                    <div className={styles.bodyText2}>
                        <Link to="/notificationRead" style={{ textDecoration: "none", color: "inherit", width : "100%", display : "block" }}>
                            <span>더프 모의고사 실시</span>
                        </Link>
                    </div>
                    <div className={styles.bodyText3}>
                        수능선배
                    </div>
                    <div className={styles.bodyText4}>
                        2022.05.11
                    </div>
                    <div className={styles.bodyText5}>
                        37
                    </div>
                </div>

                <div className={styles.notificationBodyRow}>
                    <div className={styles.bodyText1}>
                        1
                    </div>
                    <div className={styles.bodyText2}>
                        <Link to="/notificationRead" style={{ textDecoration: "none", color: "inherit", width : "100%", display : "block" }}>
                            <span>더프 모의고사 실시</span>
                        </Link>
                    </div>
                    <div className={styles.bodyText3}>
                        수능선배
                    </div>
                    <div className={styles.bodyText4}>
                        2022.05.11
                    </div>
                    <div className={styles.bodyText5}>
                        37
                    </div>
                </div>

                <div className={styles.notificationBodyRow}>
                    <div className={styles.bodyText1}>
                        1
                    </div>
                    <div className={styles.bodyText2}>
                        <Link to="/notificationRead" style={{ textDecoration: "none", color: "inherit", width : "100%", display : "block" }}>
                            <span>더프 모의고사 실시</span>
                        </Link>
                    </div>
                    <div className={styles.bodyText3}>
                        수능선배
                    </div>
                    <div className={styles.bodyText4}>
                        2022.05.11
                    </div>
                    <div className={styles.bodyText5}>
                        37
                    </div>
                </div>
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