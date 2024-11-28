import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from "../svg/newlogo.svg";
import CardFirstPage from './components/cardfirstpage';
import CardSecondPage from './components/cardsecondpage';
import CardThirdPage from './components/cardthirdpage';
import CardFourthPage from './components/cardfourthpage';
import CardFifthPage from './components/cardfifthpage';
import CardSixthPage from './components/cardsixthpage';
import CardSeventhPage from './components/cardseventhpage';
import { useLocation } from "react-router-dom";
import { set } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { Backdrop, CircularProgress } from "@mui/material";
import { is } from 'date-fns/locale';

const StudentCard = (props: any) => {

    const [page, setPage] = useState(1);
    const [data, setData] = useState<any>({});
    const location = useLocation();

    const [id, setId] = useState<any>();
    const [code, setCode] = useState<any>();
    const [isView, setIsView] = useState<any>(false);

    const [notAllowed, setNotAllowed] = useState<any>(false);
    const navigate = useNavigate();

    const [loading, setLoading] = useState<any>(false);





    useEffect(() => {

        fromQuery();

    }, []);


    const fromQuery = () => {

        const query: any = new URLSearchParams(location.search);
        console.log("query");

        console.log(query);

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
        if (!code) {
            console.log("noCode");
            setNotAllowed(true);
            return;
        }
        if (!id) {
            console.log("noId");
            setNotAllowed(true);
            return;
        }

        const numberedId = +id;

        const isViewQuery = query.get("isView");
        console.log(isViewQuery);

        var isView = false;

        if(isViewQuery === "true"){
            console.log("gogogo");
            setIsView(true);
            isView = true;
        }

        console.log(numberedId);

        setId(numberedId);
        setCode(code);

        certIdAndCode(numberedId, code, isView);

        if(isView){
            getResultData(numberedId, code);
        }

    }

    const getResultData = async (id: number, code: string) => {

        if (!id) {
            alert("id가 없습니다.")
            return;
        }

        if (!code) {
            alert("code가 없습니다.")
            return;
        }

        try {

            const response = await fetch(`https://peetsunbae.com/dashboard/avatar/getstudentcard?id=${id}&code=${code}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (result.message === "success") {

                console.log(result.data);

                const data = result.data;
                const targetData = data["목표전형_1_6"]
                console.log(targetData);
                console.log(targetData.includes("정시"));


                setData(result.data);


            }

            if(result.message === "incorrectCode"){
                alert("잘못된 코드번호 입니다.");
                return;
            }

            if (result.message === "notSubmitted") {

                alert("학생이 학생카드를 제출하지 않았습니다.");
                return;

            }

            if (result.message === "notSended") {

                alert("학생에게 학생카드를 보내지 않았습니다.");
                return;

            }

        } catch (e) {
            console.log(e);
        }

    }


    const certIdAndCode = (id: number, code: string, isView = false) => {

        if (!id) {
            console.log("noId");
            setNotAllowed(true);
            return;
        }

        if (!code) {
            console.log("noCode");
            setNotAllowed(true);
            return;
        }

        if(isView){
            return;
        }

        fetch("https://peetsunbae.com/dashboard/avatar/certstudentcard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                code: code
            }),
        }).then((res: any) => {
            res.json()
                .then((result: any) => {

                    if (result.message !== "success") {
                        setNotAllowed(true);
                        return;
                    }

                })
        })

    }


    //새로고침 시 confirm 띄워서 데이터 사라질 수 있다는 경고
    const handler = (event: BeforeUnloadEvent) => {

        if(isView){
            return;
        }
        
        event.preventDefault();
        event.returnValue = "";
    };

    useEffect(() => {

        window.addEventListener("beforeunload", handler)

        return () => {
            window.removeEventListener("beforeunload", handler);
        }

    }, [isView]);



    useEffect(() => {

        const currentHash = window.location.hash;
        //hash 앞에 #랑 뒤에 query parameter를 떼어내고 숫자만 가져온다.
        const currentPage = Number(currentHash.slice(1, currentHash.length).split("?")[0]);
        console.log(currentPage);
        setPage(currentPage);

        window.scrollTo(0, 0);

        const handleOnHashChange = () => {
            const currentHash = window.location.hash;
            //hash 앞에 #랑 뒤에 query parameter를 떼어내고 숫자만 가져온다.
            const currentPage = Number(currentHash.slice(1, currentHash.length).split("?")[0]);
            console.log(currentPage);
            setPage(currentPage);

            window.scrollTo(0, 0);

        }

        window.addEventListener("hashchange", handleOnHashChange);

        return () => {
            window.removeEventListener("hashchange", handleOnHashChange);
        }

    }, []);


    const plusPage = () => {
        console.log("plus");
        console.log(window.location.hash);
        const currentHash = window.location.hash;
        //hash 앞에 #과 뒤에 query parameter를 떼어내고 숫자만 가져온다.
        const currentPage = Number(currentHash.slice(1, currentHash.length).split("?")[0]);
        console.log(currentPage);
        //currentPage가 5가 아니면 페이지를 넘긴다.
        if (currentPage !== 7) {
            window.location.hash = "#" + (currentPage + 1);
        }
    }

    const minusPage = () => {
        console.log("minus");
        console.log(window.location.hash);
        const currentHash = window.location.hash;
        //hash 앞에 #과 뒤에 query parameter를 떼어내고 숫자만 가져온다.
        const currentPage = Number(currentHash.slice(1, currentHash.length).split("?")[0]);
        console.log(currentPage);
        //currentPage가 1이 아니면 페이지를 넘긴다.
        if (currentPage !== 1) {
            window.location.hash = "#" + (currentPage - 1);
        }
    }

    const handleDataChange = (question: string, answer: string) => {

        if(isView){
            return;
        }


        const newData: any = data;
        newData[question] = answer;
        setData({ ...newData });

    }


    const submit = () => {

        console.log(data);
        setLoading(true);

        if(!id){
            alert("잘못된 접근입니다.");
            return;
        }

        if(!code){
            alert("잘못된 접근입니다.");
            return;
        }

        if(isView){
            alert("보기 전용 페이지입니다.");
            return;
        }

        fetch("https://peetsunbae.com/dashboard/avatar/studentcard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                code: code,
                data: data
            })
        }).then((response : any) => {
            response.json().then((result : any) => {
                setLoading(false);
                if(result.message === "success"){
                    navigate("/studentcardfinish");
                }
                else{
                    alert("잘못된 접근입니다.");
                }
            })
        })
    }




    return (
        <>

            {
                notAllowed &&
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <div
                        style={{
                            maxWidth: "500px",
                            margin: "0 auto",
                            width: "91.4%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 700,
                                textAlign: "center",
                                lineHeight: "1.4"
                            }}
                        >
                            <Logo style={{ width: "80px" }} />
                        </div>
                        <div
                            style={{
                                fontSize: "16px",
                                fontWeight: 400,
                                textAlign: "center",
                                lineHeight: "1.4",
                                marginTop: "24px"
                            }}
                        >
                            잘못된 접근입니다.
                        </div>
                    </div>
                </div>
            }
            {
                !notAllowed &&
                <div style={{ backgroundColor: page !== 0 ? "rgb(241, 241, 241)" : "", paddingTop: "32px", width: "100%", overflow: "hidden" }}>
                <div style={{ minHeight: "100vh" }}>
                    <div style={{ maxWidth: "500px", margin: "0 auto", width: "91.4%" }}>
                        {
                            page === 1 &&
                            <CardFirstPage plusPage={plusPage} />
                        }
                        {
                            page === 2 &&
                            <CardSecondPage plusPage={plusPage} minusPage={minusPage} handleDataChange={handleDataChange} data={data} submit={submit} />
                        }
                        {
                            page === 3 &&
                            <CardThirdPage plusPage={plusPage} minusPage={minusPage} handleDataChange={handleDataChange} data={data} submit={submit} />
                        }
                        {
                            page === 4 &&
                            <CardFourthPage plusPage={plusPage} minusPage={minusPage} handleDataChange={handleDataChange} data={data} submit={submit} />
                        }
                        {
                            page === 5 &&
                            <CardFifthPage plusPage={plusPage} minusPage={minusPage} handleDataChange={handleDataChange} data={data} submit={submit} />
                        }
                        {
                            page === 6 &&
                            <CardSixthPage plusPage={plusPage} minusPage={minusPage} handleDataChange={handleDataChange} data={data} submit={submit} isView={isView} />
                        }
                        {
                            page === 7 &&
                            <CardSeventhPage plusPage={plusPage} minusPage={minusPage} handleDataChange={handleDataChange} data={data} submit={submit} isView={isView} />
                        }
                    </div>
                    <div
                        style={{ backgroundColor: "white", position: "fixed", zIndex: 99, bottom: 0, width: "100%", height: "40px", borderTop: "1px solid #ebebeb" }}
                    >
                        <div
                            style={{
                                margin: "0 auto",
                                width: "91.4%",
                                display: "flex", alignItems: "center", height: "100%", justifyContent: "space-between"
                            }}
                        >
                            <div style={{ width: "60px" }}>

                            </div>
                            <div>
                                <Logo style={{ width: "70px" }} />
                            </div>
                            <div style={{ width: "60px", fontSize: "12px", textAlign: "right", fontWeight: 300 }}>
                                {page}/7
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            }
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default StudentCard;