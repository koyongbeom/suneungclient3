import React, { useEffect, useState } from "react";
import styles from "../styles/waitingregisterfinish.module.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { set } from "lodash";

const WaitingRegisterInstant2 = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const [subType, setSubType] = useState<number>();

    useEffect(() => {

        fromQuery();

    }, []);


    const fromQuery = () => {

        const query: any = new URLSearchParams(location.search);

        console.log(query);

        console.log("query");

        if (!query) {
            console.log("noQuery");
            return;
        }

        const size = query.size;

        console.log(query.size);

        // if (!size) {
        //     console.log("noQuerySize");
        //     return;
        // }

        const id = query.get("id");
        console.log(id);
        const code = query.get("code");
        const type = query.get("type");

        if (!id) {
            console.log("noId");
            return;
        }
        if (!type) {
            console.log("noType");
            return;
        }
        if (!code) {
            console.log("noCode");
            return;
        }

        const numberedId = +id;
        const numberedCode = +code;

        const subType = +type.split("_")[1];

        console.log(subType);

        setSubType(subType);

        instant(+id, +code, type);

    }


    const instant = (id: number, numberedCode: number, type: string) => {

        if (!id) {
            console.log("noId");
            return;
        }

        if (!numberedCode) {
            console.log("noCode");
            return;
        }

        if (!type) {
            console.log("noType");
            return;
        }

        const data = {
            id, code: numberedCode, type
        }

        fetch("https://peetsunbae.com/waiting/instantforstudent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result);

                    if (result.message === "canceled") {
                        alert("이미 취소된 신청입니다");
                        return;
                    }

                    if (result.message === "overDueDate") {
                        alert("신청 기간이 지났습니다");
                        return;
                    }

                    if (result.message === "success") {
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

            {
                (!loading && subType === 1) &&
                <div className={styles.contents}>
                    <div className={styles.contentsTitle}>
                        사전 설문 접수 완료
                    </div>
                    <div className={styles.contentsDescription}
                    style={{
                        textAlign: "center",
                        lineHeight : 1.5
                    }}
                    >
                    '2월 26일 신관 등원희망'으로<br></br> 사전 설문 접수가 완료되었습니다.<br></br><br></br> 
(*사전 설문은 등록 효력이 없습니다.)<br></br><br></br>

선등록 접수에 관한 상세사항은<br></br> 개별 안내드릴 예정입니다. 
                    </div>
                </div>
            }

            {
                (!loading && subType === 2) &&
                <div className={styles.contents}>
                    <div className={styles.contentsTitle}>
                        등록 보류
                    </div>
                    <div className={styles.contentsDescription}>
                        등록 보류 상태로 저장되었습니다.
                    </div>
                </div>
            }

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

        </div>
    )

}

export default WaitingRegisterInstant2;