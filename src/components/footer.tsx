import React from "react";
import { ReactComponent as GrayLogoSvg } from '../svg/graylogo.svg';
import styles from "../styles/footer.module.css"

const Footer: React.FC<any> = (props) => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footerHeader}>
                    <div className={styles.footerHeaderTextDiv}>
                        <span>위치 및 시설 안내</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>학습시스템 소개</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>자물쇠반 비용 안내</span>
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
                                사업자 등록번호 : 111-11-11111
                            </div>
                            <div>
                                주소 : 서울특별시 서초구 서초동 1330-12 강남역 인앤인 빌딩
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