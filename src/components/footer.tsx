import React from "react";
import { ReactComponent as GrayLogoSvg } from '../svg/graylogo.svg';
import styles from "../styles/footer.module.css"
import { Link } from "react-router-dom";

const Footer: React.FC<any> = (props) => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footerHeader}>
                    <div className={styles.footerHeaderTextDiv}>
                        <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                            <span>위치 및 시설 안내</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                        </Link>
                        <Link to="/studysystem" style={{ textDecoration: "none", color: "inherit" }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>학습시스템 소개</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link to="/price" style={{ textDecoration: "none", color: "inherit" }}>
                            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>자물쇠반 비용 안내</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.footerDiv}>
                    <div className={styles.footerLogo}>
                        <GrayLogoSvg className={styles.footerLogoSvg} />
                        <div className={styles.footerLogoText}>
                            <div>
                                대표자:고용범
                            </div>
                            <div>
                                수능선배 학원(TEL : 050-7871-3574)
                            </div>
                            <div>
                                사업자번호 : 329-95-01774
                            </div>
                            <div>
                                주소 : 서울특별시 서초동 1330-12 5층 수능선배
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerLink}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;