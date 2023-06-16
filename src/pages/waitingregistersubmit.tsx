import React, {useEffect, useState} from "react";
import styles from "../styles/waitingregisterfinish.module.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { set } from "lodash";

const WaitingRegisterSubmit = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation();

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

        if (!size) {
            console.log("noQuerySize");
            return;
        }

        const id = query.get("id");
        console.log(id);
        const code = query.get("code");
        if(!code){
            console.log("noCode");
            return;
        }

        const numberedId = +id;
        const numberedCode = +code;

        cancel(+id, +code);

    }


    const cancel = (id : number, numberedCode : number) => {

        if(!id){
            console.log("noId");
            return;
        }

        if(!numberedCode){
            console.log("noCode");
            return;
        }

        const data = {
            id, code : numberedCode
        }

        fetch("https://peetsunbae.com/waiting/cancelforstudent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((response : any) => {
            response.json()
            .then((result : any) => {
                console.log(result);
                
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
                        대기 취소
                    </div>
                    <div className={styles.contentsDescription}>
                        수능선배 대기 신청이 취소되었습니다
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

export default WaitingRegisterSubmit;