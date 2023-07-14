import React, {useEffect, useState} from "react";
import styles from "../styles/waitingregisterfinish.module.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { set } from "lodash";

const WaitingRegisterInstant = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation();

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

        if(!id){
            console.log("noId");
            return;
        }
        if(!type){
            console.log("noType");
            return;
        }
        if(!code){
            console.log("noCode");
            return;
        }

        const numberedId = +id;
        const numberedCode = +code;

        instant(+id, +code, type);

    }


    const instant = (id : number, numberedCode : number, type : string) => {

        if(!id){
            console.log("noId");
            return;
        }

        if(!numberedCode){
            console.log("noCode");
            return;
        }

        if(!type){
            console.log("noType");
            return;
        }

        const data = {
            id, code : numberedCode, type
        }

        fetch("https://peetsunbae.com/waiting/instantforstudent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response : any) => {
            response.json()
            .then((result : any) => {
                console.log(result);

                if(result.message === "canceled"){
                    alert("이미 취소된 신청입니다");
                    return;
                }

                if(result.message === "overDueDate"){
                    alert("신청 기간이 지났습니다");
                    return;
                }
                
                if(result.message === "success"){
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
                !loading &&
                <div className={styles.contents}>
                    <div className={styles.contentsTitle}>
                        즉시 등원 가능
                    </div>
                    <div className={styles.contentsDescription}>
                        즉시 등원 가능 상태로 저장되었습니다.
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

export default WaitingRegisterInstant;