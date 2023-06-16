import React, { useEffect, useState } from "react";
import HeaderTwo from "../components/header2";
import styles from "../styles/parkgaeul.module.css";
import StyledDataGrid from "../data/tablestyles";
import { GridSelectionModel, GridColDef, GridToolbar} from '@mui/x-data-grid-pro';
import renderCellExpand from "../data/rendercellexpand";
import { createTheme, darken, lighten } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RegisterForEmployee from "./registerForEmployee";

import ReactGa from "react-ga4";




const defaultTheme = createTheme();
const useStyles2 = makeStyles(
    (theme) => {
        const getBackgroundColor = (color: any) =>
            theme.palette.mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

        const getHoverBackgroundColor = (color: any) =>
            theme.palette.mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

        return {
            root: {
                '& .super-app-theme--처리완료': {
                    color: "red",
                },
                '& .super-app-theme--Filled': {
                    backgroundColor: getBackgroundColor(theme.palette.success.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.success.main),
                    },
                },
                '& .super-app-theme--확인': {
                    color: "blue",
                },
                '& .super-app-theme--미확인': {
                    backgroundColor: getBackgroundColor(theme.palette.error.main),
                    '&:hover': {
                        backgroundColor: getHoverBackgroundColor(theme.palette.error.main),
                    },
                },
                '& .timeout': {
                    color: theme.palette.error.main,
                },
                '& .outclass': {
                    color: "red",
                    // fontSize : "13px !important"
                },
                '& .inclass': {
                    color: "rgb(25, 118, 210)",
                    fontWeight: 700
                    // fontSize : "13px !important"
                },
            },
        };
    },
    { defaultTheme },
);


const columns: GridColDef[] = [
    { field: 'location', headerName: '지점', width: 80, filterable : true },
    { field: 'kind', headerName: '상담 종류', width: 120, filterable : true },
    { field: 'date', headerName: '날짜', width: 150 },
    { field: 'time', headerName: '시간', width: 100 },
    { field: 'name', headerName: '이름', width: 100, renderCell: renderCellExpand, },
    { field: 'telephone', headerName: '전화번호', width: 150, filterable: false, renderCell: renderCellExpand, },
];


const Parkgaeul: React.FC<any> = (props) => {
    const [rows, setRows] = useState<any>([]);
    const classes = useStyles2();
    const [loading, setLoading] = useState(false);
    const [selectionModel, setSelectionModel] = React.useState<GridSelectionModel>([]);
    const [update, setUpdate] = useState(Math.random());

    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "parkgaeulpageview"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "parkgaeul"
        });
        
    }, []);
    //--------------------------------------------------------

    useEffect(() => {
        setLoading(true);
        fetch("https://suneungsunbae.com/api/booking/parkgaeul", {
            method: "POST",
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result);
                    const newRows: any = [];
                    const data = result.data;

                    data.forEach((eachData: any) => {
                        const oneRow: any = {};
                        oneRow.id = eachData.id;

                        if(eachData.location === "gangnam"){
                            oneRow.location = "강남점"
                        }

                        if(eachData.location === "daechi"){
                            oneRow.location = "대치점"
                        }

                        const date = new Date(eachData.date);
                        var day = ""
                        switch (date.getDay()) {
                            case 0:
                                day = "일"
                                break;
                            case 1:
                                day = "월"
                                break;
                            case 2:
                                day = "화"
                                break;
                            case 3:
                                day = "수"
                                break;
                            case 4:
                                day = "목"
                                break;
                            case 5:
                                day = "금"
                                break;
                            case 6:
                                day = "토"
                                break;
                        }   


                        oneRow.date = `${date.getMonth() + 1}월 ${date.getDate()}일 ${day}요일`

                        var kind = "";
                        switch (eachData.kind) {
                            case 0:
                                kind = "방문 상담";
                                break;
                            case 1:
                                kind = "전화 상담";
                                break;
                            case 2:
                                kind = "시설 구경";
                                break;
                        }
                        oneRow.kind = kind;
                        oneRow.time = `${Math.floor(eachData.time / 60)}시 ${eachData.time % 60 < 10 ? "0" + eachData.time % 60 : eachData.time % 60}분`
                        oneRow.name = eachData.name;
                        oneRow.telephone = eachData.telephoneNumber;
                        if(oneRow.telephone.length > 3){
                            newRows.push(oneRow);
                        }


                    })

                    setRows(newRows);
                    setLoading(false);
                })
        })
    }, [update]);

    const select = (newSelectionModel: any) => {
        console.log(newSelectionModel);
        setSelectionModel(newSelectionModel);
    }

    const deleteTime = () => {
        fetch("https://suneungsunbae.com/api/booking/parkgaeul", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                selectionModel
            })
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result);
                    if (result.message === "success") {
                        setUpdate(Math.random());
                    } else {
                        alert("에러");
                    }
                })
        })
    }

    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeight}></div>

            <div className={styles.tableDiv}>
                <div className={styles.tableDivDiv}>
                    <div className={`${classes.root} ${styles.tableDiv}`} style={{ height: 500, width: '100%', backgroundColor: "white", marginTop: "16px" }}>
                        <StyledDataGrid loading={loading} rows={rows} columns={columns}
                            checkboxSelection={true}
                            density='compact'
                            getCellClassName={(params: any) => {
                                if (params.field != "status") {
                                    return '';
                                } else if (params.value === "○") {
                                    return 'inclass';
                                } else {
                                    return "outclass"
                                }
                            }}
                            sx={{ border: "1px solid rgb(224, 224, 244)" }}
                            onSelectionModelChange={(newSelectionModel) => {
                                select(newSelectionModel);
                            }}
                            selectionModel={selectionModel}
                            components={{Toolbar : GridToolbar}}
                        />

                    </div>

                    <div className={styles.deleteBtnDiv}>
                        <div className={styles.deleteBtnWrapper}>
                            <Button onClick={deleteTime} variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>


            </div>

            
            <div className={styles.registerTitle}>

            </div>


            <RegisterForEmployee />

        </div>
    )
}

export default Parkgaeul;