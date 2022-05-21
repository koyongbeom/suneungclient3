import React, {useState, useEffect} from "react";
import HeaderTwo from "../components/header2";
import Footer from "../components/footer";

import { useLocation } from "react-router-dom";


import styles from "../styles/notification.module.css";

import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
//   import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

//정렬 플러그인 추가
import "froala-editor/js/plugins/align.min.js"
//색깔 플러그인 추가
import "froala-editor/js/plugins/colors.min.js"
import "froala-editor/css/plugins/colors.min.css"
//draggable 플러그인 추가
import "froala-editor/js/plugins/draggable.min.js"
import "froala-editor/css/plugins/draggable.min.css"
//파일 업르도 플러그인 추가
// import "froala-editor/js/plugins/file.min.js"
// import "froala-editor/css/plugins/file.min.css"
//폰트 사이즈 플러그인 추가
import "froala-editor/js/plugins/font_size.min.js"
//폰트 종류 플러그인 추가
import "froala-editor/js/plugins/font_family.min.js"
//이미지 플러그인 추가
import "froala-editor/js/plugins/image.min.js"
import "froala-editor/css/plugins/image.min.css"
//line height 설정 플러그인 추가
import "froala-editor/js/plugins/line_height.min.js"
//링크 추가 플러그인
import "froala-editor/js/plugins/link.min.js"
//비디오 플러그인 추가
import "froala-editor/js/plugins/video.min.js"
import "froala-editor/css/plugins/video.min.css"
//특수문자 플러그인
import "froala-editor/js/plugins/special_characters.min.js"
import "froala-editor/css/plugins/special_characters.min.css"
//이모티콘
import "froala-editor/js/plugins/emoticons.min.js"
import "froala-editor/css/plugins/emoticons.min.css"
//표 넣기
import "froala-editor/js/plugins/table.min.js"
import "froala-editor/css/plugins/table.min.css"
//class 넣기
import "froala-editor/js/plugins/inline_class.min.js";



const Storyread : React.FC<any> = (props) => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [data, setData] = useState<any>();
    const [dateString, setDateString] = useState<any>("");

    const isPC = useMediaQuery({query : '(min-width : 1150px)'});

    useEffect(()=>{
        const id = query.get("id");
        console.log(id);
        console.log("gogogo");

        fetch(`https://suneungsunbae.com/api/text/notificationdetail?id=${id}`, {
            method : "get"
        }).then((response : any)=>{
            response.json()
            .then((result : any) => {
                console.log(result);

                if(isPC && result.data && result.data.body){
                    console.log("itsPC");
                    console.log(result.data.body);
                    console.log(result.data.body.replace("font-size: 16", "font size: 24"));
                    result.data.body = result.data.body.replaceAll("font-size: 16", "font-size: 18");
                }

                setData(result.data);
                const data = result.data;
                const date = new Date(data.createdAt);
                const newDateString = `${date.getFullYear()}.${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
                setDateString(newDateString);
            })
        })

    }, [])

    useEffect(()=>{
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        document.head.appendChild(linkElement);
    })



    const navigate = useNavigate();

    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>


            {/* <div className={`${styles.headerBar} ${styles.onlyPC}`}
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
            </div> */}




            <div className={`${styles.notificationBox} ${styles.forDescription} ${styles.forStoryBox}`}>
                <div className={`${styles.storyHeader} ${styles.forDescription}`}>
                    {data && data.title}
                </div>
                <div className={styles.storyHeaderDescription}>
                        <div className={styles.storyDate}>
                            {dateString} ㆍ by 수능선배
                        </div>
                </div>

                <div className={styles.storyMainImgDiv}>
                    {
                        data &&
                        <img className={styles.mainImg} src={`${data.src}`} />
                    }
                </div>

                <div className={styles.notificationBodyHtmlDiv}>
                    {
                        data &&
                        <FroalaEditorView
                        model={data.body}
                        />
                    }
                </div>
            </div>

            <div className={styles.listDiv}>
                <Button onClick={()=>{navigate(-1);}} variant="outlined" sx={{borderRadius : "0px",  color : "white", fontWeight : 600, backgroundColor : "black", width : "175.03px", height : "50.34px", fontSize : "16px", "&:hover" : {color : "black", border : "2px solid black"}}}>LIST</Button>
            </div>


            <Footer />
        </div>

    );
}

export default Storyread;