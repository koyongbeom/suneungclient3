import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styles from "../styles/parkgaeul.module.css";
import { createTheme, darken, lighten } from '@mui/material/styles';

import { DataGridPro, GridColDef, GridRowsProp, LicenseInfo } from '@mui/x-data-grid-pro';
import HeaderTwo from "../components/header2";
import { each } from "lodash";

LicenseInfo.setLicenseKey("e3ec4d79d1fa1f36cc88ecffd4e68392T1JERVI6MzMyMjMsRVhQSVJZPTE2NjkzODUyMDIwMDAsS0VZVkVSU0lPTj0x");

const defaultTheme = createTheme();

const useStyles2 = makeStyles(
    (theme) => {
        const getBackgroundColor = (color: any) =>
            theme.palette.mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

        const getHoverBackgroundColor = (color: any) =>
            theme.palette.mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);


        return {
            root: {
                '& .suspicious_in': {
                    backgroundColor: getBackgroundColor(theme.palette.info.main),
                    color: "#9FA6AD",
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.info.main),
                    },
                },
                '& .suspicious': {
                    backgroundColor: getBackgroundColor(theme.palette.info.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.info.main),
                    },
                },
                '& .super-app-theme--Filled': {
                    backgroundColor: getBackgroundColor(theme.palette.success.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.success.main),
                    },
                },
                '& .once': {
                    backgroundColor: getBackgroundColor(theme.palette.warning.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.warning.main),
                    },
                },
                '& .once_in': {
                    backgroundColor: getBackgroundColor(theme.palette.warning.main),
                    color: "#9FA6AD",
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.warning.main),
                    }
                },
                '& .never': {
                    backgroundColor: getBackgroundColor(theme.palette.error.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.error.main),
                    },
                },
                '& .never_in': {
                    backgroundColor: getBackgroundColor(theme.palette.error.main),
                    color: "#9FA6AD",
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.error.main),
                    },
                },
                '& .clickable': {
                    cursor: "pointer",
                    '&:hover': {
                        color: "blue"
                    }
                },
                '& .phone_problem': {
                    color: "red"
                },
                '& .phone_noproblem': {
                    color: "black"
                },
                '& .phone_memo': {
                    color: "black"
                },
                '& .status2': {
                    backgroudColor: "red"
                },
                '& .status1': {
                    backgroudColor: "red"
                },
                '& .status4': {
                    backgroudColor: "red"
                },
                '& .decided': {
                    color: "blue"
                },
                '& .sendDemerit': {
                    color: "blue"
                },
                '& .demeritNotSame': {
                    color: "#a10e25"
                },
                '& .canceled': {
                    backgroundColor: "#ebebeb",
                    color: "gray"
                },
                '& .overedDemerit': {
                    color: "red"
                }
            },
        };
    },
    { defaultTheme },
);

const Parkgaeul2: React.FC = (props) => {

    const [rows, setRows] = useState<GridRowsProp[]>([]);
    const [columns, setColumns] = useState<GridColDef[]>([
        {field : "name", headerName : "이름", width : 100},
        {field : "location", headerName : "지점", width : 120},
        {field : "phoneNumber", headerName : "전화번호", width : 150},
        {field : "kind", headerName : "신청종류", width : 120},
        {field : "gender", headerName : "성별", width : 80},
        {field : "grade", headerName : "학년", width : 100},
        {field : "etc", headerName : "기타", width : 150},
        {field : "date", headerName : "신청일시", width : 220},
    ]);
    const classes = useStyles2();

    useEffect(() => {
        console.log(123333);
        start();

    }, []);

    const start = async () => {
    
        const data = await getInfo();

        if(!data){
            setRows([]);
        }

        if(data){
            makeRows(data);
        }
    
    }

    const getInfo = async () => {

        try{
            console.log("gogogo");
            const response = await fetch("https://peetsunbae.com/waiting/winter/gettotal", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    location : "parkgaeul"
                })
            });
    
            const result = await response.json();
            console.log("result");
            console.log(result);
    
            if(result.message === "success"){
                return result.data;
            }else{
                return [];
            }

        }catch(e){
            console.log("error");
            console.log(e);
        }

    }

    const makeRows = (data: any[]) => {

        const newRows : any = [];

        data.forEach((eachData: any) => {

            const oneRow : any = {};
            oneRow.id = eachData.id;
            oneRow.name = eachData.name;

            switch (eachData.location) {
                case "gangnam":
                    oneRow.location = "강남점";
                    break;
                case "daechi":
                    oneRow.location = "대치점";
                    break;
            }

            oneRow.phoneNumber = eachData.phoneNumber;

            switch(eachData.kind){
                case "pre" :
                    oneRow.kind = "pre 윈터";
                    break;
                case "regular" :
                    oneRow.kind = "정규 윈터";
                    break;
            }

            switch(eachData.gender){
                case "male" :
                    oneRow.gender = "남학생"
                    break;
                case "female" :
                    oneRow.gender = "여학생"
                    break;
            }

            switch(eachData.grade){
                case "n" :
                    oneRow.grade = "N수생";
                    break;
                case "current" :
                    oneRow.grade = "재학생";
                    break;
            }

            oneRow.etc = eachData.etc;
            
            const date = new Date(eachData.createdAt);
            const dateString = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;

            oneRow.date = dateString;

            newRows.push(oneRow);

        });

        setRows([...newRows]);

    }


    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeight}></div>


            <div className={styles.tableDiv}>
                <div className={styles.tableDivDiv}>
                    <div className={`${classes.root} ${styles.tableDiv}`} style={{ height: 500, width: '100%', backgroundColor: "white", marginTop: "16px" }}>
                        <DataGridPro
                            rows={rows}
                            columns={columns}
                            density="compact"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Parkgaeul2;