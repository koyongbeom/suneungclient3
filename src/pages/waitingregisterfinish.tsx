import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/waitingregisterfinish.module.css";
import { Backdrop, CircularProgress } from "@mui/material";

const WaitingRegisterFinish = () => {

    const [sendedPhoneNumber, setSendedPhoneNumber] = useState("");
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const [genderOrder, setGenderOrder] = useState<any>();
    const [gradeOrder, setGradeOrder] = useState<any>();
    const [totalOrder, setTotalOrder] = useState<number>();
    const [registerDate, setRegisterDate] = useState<string>("");
    const [waitingLocation, setWaitingLocation] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [grade, setGrade] = useState<string>("");

    const [isBefore, setIsBefore] = useState(false);

    
    useEffect(() => {

        fromSubmitPage();

    }, []);

    const fromSubmitPage = () => {

        const state: any = location.state
        console.log(state);

        if (!state) {
            console.log("noState");
            return;
        }
        const id = state.id;
        console.log(id);

        if (!id) {
            console.log("noId");
            return;
        }

        getMyInfo(+id);

    }


    useEffect(() => {

        fromQuery();

    }, []);


    const fromQuery = () => {

        const query: any = new URLSearchParams(location.search);
        console.log("query");

        if (!query) {
            console.log("noQuery");
            return;
        }

        const size = query.size;

        // if (!size) {
        //     console.log("noQuerySize");
        //     return;
        // }

        const id = query.get("id");
        console.log(id);
        const code = query.get("code");
        if(!code){
            console.log("noCode");
            return;
        }
        const isBefore = query.get("before");

        const numberedId = +id;
        const numberedCode = +code;

        if(numberedCode !== (numberedId * 2) + 50){
            console.log("notAccurate");
            return;
        }

        getMyInfo(+id);

        if(isBefore){
            setIsBefore(true);
        }

    }

    const getMyInfo = (id : number) => {

        setLoading(true);

        if(!id){
            console.log("noId");
            return;
        }

        fetch("https://peetsunbae.com/waiting/getmyinfo?id=" + id, {
            method : "GET"
        }).then((response : any) => {
            response.json()
            .then((result : any) => {
                console.log(result);

                if(result.message === "canceled"){
                    setLoading(false);
                    alert("취소된 대기번호입니다");
                    return;
                }

                if(result.message === "success"){
                    
                    console.log("letsstart");
                    const data = result.data;

                    setTotalOrder(result.totalOrder);
                    setGenderOrder(result.genderOrder);
                    setGradeOrder(result.gradeOrder);

                    const date = new Date(data.createdAt);
                    const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
                    setRegisterDate(dateString);

                    switch(data.location){
                        case "gangnam" : 
                            setWaitingLocation("강남점");
                            break;
                        case "daechi" :
                            setWaitingLocation("대치점");
                            break;
                    }

                    switch (data.gender) {
                        case "male":
                            setGender("남학생");
                            break;
                        case "female":
                            setGender("여학생");
                            break;
                    }

                    switch (data.grade) {
                        case "n":
                            setGrade("N수생");
                            break;
                        case "current":
                            setGrade("재학생");
                            break;
                    }

                    setLoading(false);
                }
            })
        })

    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    수능선배 대기 현황
                </div>
                <div className={styles.decorator}>

                </div>
            </div>

            <div className={styles.contents}>
                <div className={styles.innerContents}>
                    <div className={styles.titleText}>
                        현재 나의 순서
                    </div>
                    <div className={styles.numberText}>
                        {
                            (gradeOrder && gradeOrder.toString().includes("↓"))
                            &&
                            <>
                                <span>{gradeOrder.split("↓")[0]}</span>번째 이하
                            </>
                        }
                                                {
                            (gradeOrder&& !gradeOrder.toString().includes("↓"))
                            &&
                            <>
                                <span>{gradeOrder}</span>번째
                            </>
                        }
                        <div className={styles.speechBubble}>
                            <div className={styles.bubbleBody}>
                                {grade && grade} 기준 대기번호에요!
                            </div>
                        </div>
                        <div className={styles.triangle}>

                        </div>
                    </div>
                    <div className={styles.subDataDiv}>
                        <div className={styles.subDataDivFirst}>
                            <div className={styles.subDataTitle}>
                                전체 기준 대기번호
                            </div>
                            <div className={styles.subDataDate}>
                                {totalOrder && totalOrder}번째
                            </div>
                        </div>
                        <div className={styles.justVerticalBorder}>
                            <div className={styles.justVerticalBorderInner}>

                            </div>
                        </div>
                        <div>
                            {
                                !isBefore &&
                                <>
                                    <div className={styles.subDataTitle}>
                                        대기 등록 일시
                                    </div>
                                    <div className={styles.subDataDate}>
                                        {registerDate && registerDate}
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className={styles.cautionContents}>
                        <div className={styles.cautionContentsTitle}>
                            대기 유의사항
                        </div>
                        <div className={styles.cautionContentsText}>
                            <span>·</span>재학생/N수생 10번 이내 진입 시 1차 설문 알림톡 전송
                        </div>
                        <div className={styles.cautionContentsText}>
                            <span>·</span>재학생/N수생 5번 이내 진입 시 2차 설문 알림톡 전송
                        </div>
                        <div className={styles.cautionContentsText}>
                            <span>·</span>10번 이내 경우 즉시 등원이 가능한 분부터 우선순위 부여
                        </div>
                    </div>
                </div>

                <div className={styles.infoContents}>
                    <div className={styles.infoContentsInner}>
                        <div className={`${styles.infoContentsInnerDescription} ${styles.first}`}>
                            <div className={styles.infoTitle}>
                                대기 등록 지점
                            </div>
                            <div className={styles.infoDescription}>
                                {waitingLocation && waitingLocation}
                            </div>
                        </div>
                        <div className={`${styles.infoContentsInnerDescription}`}>
                            <div className={styles.infoTitle}>
                                학생 성별
                            </div>
                            <div className={styles.infoDescription}>
                                {gender && gender}
                            </div>
                        </div>
                        <div className={`${styles.infoContentsInnerDescription}`}>
                            <div className={styles.infoTitle}>
                                학생 학년
                            </div>
                            <div className={styles.infoDescription}>
                                {grade && grade}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height : "60px"}}>

                </div>
            </div>


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>


        </div>
    )

}

export default WaitingRegisterFinish