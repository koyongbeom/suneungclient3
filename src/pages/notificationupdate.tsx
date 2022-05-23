import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
//   import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import styles from "../styles/notification.module.css";
import HeaderTwo from "../components/header2";

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

// <!-- Include Font Awesome CSS. --><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

import "froala-editor/js/third_party/font_awesome.min.js";


import { Button, TextField } from "@mui/material";
import Footer from "../components/footer";

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';







// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

const NotificationUpdate: React.FC<any> = (props) => {


    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");
    const [alignment, setAlignment] = React.useState('');
    const [id, setId] = useState<any>(0);
    
    
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    useEffect(()=>{
        const id = query.get("id");
        console.log(id);
        console.log("gogogo");

        if(!id){
            alert("id가 없습니다.");
            return;
        }

        setId(+id);

        fetch(`https://suneungsunbae.com/api/text/notificationdetail?id=${id}`, {
            method : "get"
        }).then((response : any)=>{
            response.json()
            .then((result : any) => {
                console.log(result);
                setTitle(result.data.title);
                setModel(result.data.body);
                setAlignment(result.data.kind);
            })
        })

    }, [])

    const handleTitleChange = (e : any) => {
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    const handleModelChange = (model : any) => {
        console.log(model);
        setModel(model);
    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
    };




    const submit = (e: any) => {

        console.log(alignment);

        if(!alignment){
            alert("글의 종류를 선택해주세요");
            return;
        }

        if(!title || !model){
            alert("글을 적어주세요");
            return;
        }

        fetch("https://suneungsunbae.com/api/upload/notification", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title,
                body: model,
                kind: alignment
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    if (result.message === "success") {
                        alert("저장 성공");
                    } else {
                        alert("실패. 관리자에게 문의하세요");
                    }
                })
        })


    }


    const updateText = (e : any) => {

        if(!title || !model){
            alert("글을 적어주세요");
            return;
        }

        if(!id){
            alert("id가 없습니다.");
            return;
        }


        fetch("https://suneungsunbae.com/api/upload/notificationupdate", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title,
                body: model,
                id: id
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    if (result.message === "success") {
                        alert("업데이트 성공");
                    }
                })
        })

    }

    const deleteText = (e: any) => {

        if (!id) {
            alert("id가 없습니다.");
            return;
        }


        fetch("https://suneungsunbae.com/api/upload/notificationdelete", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: id
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    if (result.message === "success") {
                        alert("글 삭제 성공");
                    }
                })
        })

    }





    const deleteImage = (imgSrc : string) => {

        const relativeImgSrc = "public" + imgSrc.split("https://suneungsunbae.com")[1];
        console.log(relativeImgSrc);
        
        fetch("https://suneungsunbae.com/api/upload/deleteImage", {
            method : "post",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({
                src : relativeImgSrc
            })
        }).then((response : any) =>{
            console.log("image was deleted");
        }).catch((err : any) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        document.head.appendChild(linkElement);
    })

    return (
        <div>
            <HeaderTwo />

            <div className={styles.toggleDiv}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="notification">공지</ToggleButton>
                    <ToggleButton value="story">생활</ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div className={styles.titleDiv}>
                <TextField value={title} onChange={handleTitleChange} placeholder="제목을 입력하세요" fullWidth variant="outlined" />
            </div>

            <div className={styles.editorDiv}>
                <div style={{marginBottom : "4px", fontSize : "12px"}}>
                    * 줄간격 double로 바꾸고 글 적기 시작하기
                </div>
                <FroalaEditor
                    tag="textarea"
                    config={{
                        height: "60vh",
                        placeholderText : "내용을 적어주세요",
                        imageUploadURL : "https://suneungsunbae.com/api/upload/images",
                        imageMaxSize : 6000 * 6000 * 20,
                        // fileUploadURL : "https://suneungsunbae.com/api/upload/files",
                        fontSize : [8,9,10,11,12,14,16,18,24,30,36,48,60,72,96],
                        fontSizeDefaultSelection: "18",
                        lineHeights: {
                            Default : '3',
                            '1.15': '1.15',
                            '1.5': '1.5',
                            Double: '2'
                          },
                        events : {
                            "image.removed" : function(img : any){
                                deleteImage(img[0].currentSrc);
                            }
                        },
                        key : "sZH1rB1E7A5C4F5D3H4jdmwF-11nrzmjnccfF4fijtA2B2C2E1C5F1B1F1A3C11=="
                    }}
                    model={model}
                    onModelChange={handleModelChange}
                />
            </div>
            <div className={styles.submitBtnDiv}>
                <Button color="error" onClick={deleteText} variant="contained" sx={{marginRight : "12px"}}>
                    삭제하기
                </Button>
                <Button color="secondary" onClick={updateText} variant="contained" sx={{marginRight : "12px"}}>
                    글 수정하기
                </Button>
                <Button onClick={submit} variant="contained">
                    새로 올리기
                </Button>
            </div>
            <Footer />
        </div>
    );
}

export default NotificationUpdate;