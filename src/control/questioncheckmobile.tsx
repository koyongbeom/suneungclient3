import React, { useEffect, useState } from "react";
import { GridColDef, LicenseInfo, useGridApiRef} from '@mui/x-data-grid-pro';
import { makeStyles } from '@mui/styles';
import { createTheme, darken, lighten } from '@mui/material/styles';
import StyledDataGrid from "../data/tablestyles";
import useKeepGroupingColumnsHidden from "../data/groupingColumns";

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
                },
                '& .inclass': {
                    color: "#1b49af",
                },
            },
        };
    },
    { defaultTheme },
);

const INITIAL_GROUPING_COLUMN_MODEL = ['domain' ,'subject'];


const columns1: GridColDef[] = [
    { field: 'domain', headerName: '영역', width: 60 },
    { field: 'subject', headerName: '튜터', width: 100 },
    { field: 'chapter', headerName: '일자', width: 50, filterable: true },
    {
        field: "inCorrectRatio", headerName: "신청률", width: 120, renderCell: (params: any) => {
            if (params.value) {
                return (
                    <div style={{ width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)", height: "60%", position: "relative" }}>
                        <div style={{ width: `${params.value}%`, backgroundColor: `${params.value > 75 ? "rgba(8, 130, 8, 0.64)" : params.value > 50 ? "rgba(239, 187, 90, 0.64)" : "rgba(244, 67, 54)"}`, height: "100%" }}>
                        </div>
                        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", fontSize: "12px" }}>
                            {params.value} %
                        </div>
                    </div>
                );
            }
        }
    },
    {
        field: 'text', headerName: '한달 평균', width: 80, renderCell: (params: any) => {
            if(params.id === "auto-generated-row-domain/국어-subject/김민성 튜터"){
                return (
                    <div style={{fontWeight : 700, fontSize : "12px"}}>
                        93.75%
                    </div>
                )
            }else if(params.id === "auto-generated-row-domain/국어-subject/이소은 튜터"){
                return (
                    <div style={{fontWeight : 700, fontSize : "12px"}}>
                        70%
                    </div>
                )
            }else if(params.id === "auto-generated-row-domain/국어-subject/이기훈 튜터"){
                return (
                    <div style={{fontWeight : 700, fontSize : "12px"}}>
                        52.5%
                    </div>
                )
            }
        }
    },
];



const QuestionCheckMobile: React.FC<any> = (props) => {
    const classes = useStyles2();
    const [rows, setRows] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [alignment, setAlignment] = React.useState('one');
    const apiRef = useGridApiRef();

    const columns = useKeepGroupingColumnsHidden(
        apiRef,
        columns1,
        INITIAL_GROUPING_COLUMN_MODEL
    )

    useEffect(()=>{
        const newRows = [
            {
                id : 1, domain : "국어",subject : "김민성 튜터", chapter : "2/3", inCorrectRatio : 85
            },
            {
                id : 2, domain : "국어", subject : "김민성 튜터", chapter : "2/10", inCorrectRatio : 90
            },
            {
                id : 3, domain : "국어", subject : "김민성 튜터", chapter : "2/17", inCorrectRatio : 100
            },
            {
                id : 4, domain : "국어", subject : "김민성 튜터", chapter : "2/24", inCorrectRatio : 100
            },
            {
                id : 6, domain : "국어", subject : "이소은 튜터", chapter : "2/4", inCorrectRatio : 65
            },
            {
                id : 7, domain : "국어", subject : "이소은 튜터", chapter : "2/11", inCorrectRatio : 70
            },
            {
                id : 8, domain : "국어", subject : "이소은 튜터", chapter : "2/18", inCorrectRatio : 85
            },
            {
                id : 9, domain : "국어", subject : "이소은 튜터", chapter : "2/25", inCorrectRatio : 60
            },
            {
                id :12, domain : "국어", subject : "이기훈 튜터", chapter : "2/2", inCorrectRatio : 50
            },
            {
                id :13, domain : "국어", subject : "이기훈 튜터", chapter : "2/9", inCorrectRatio : 55
            },
            {
                id :14, domain : "국어", subject : "이기훈 튜터", chapter : "2/16", inCorrectRatio : 45
            },
            {
                id :15, domain : "국어", subject : "이기훈 튜터", chapter : "2/23", inCorrectRatio : 60
            },
        ]

        setRows(newRows);
    }, [])

    useEffect(()=>{
            setTimeout(()=>{
                apiRef.current.scrollToIndexes({
                    rowIndex : 3,
                    colIndex : 3
                });
            }, 5000)
    }, [apiRef])


    


    return (
        <div style={{width : "100%"}}>
            <div>
                <div style={{ display : "none", justifyContent : "space-between", marginBottom : "16px"}}>
                    <div style={{fontFamily : "Apple_SB"}}>
                        국어영역 질의응답 튜터 신청률 데이터
                    </div>
                    <div style={{fontFamily : "Apple_SB", marginRight : "12px"}}>
                        2월
                    </div>
                </div>
                <div className={classes.root} style={{ height: 300, width: '100%', backgroundColor: "white", marginTop: "8px" }}>
                    <StyledDataGrid loading={loading} rows={rows} columns={columns}
                        density="compact"
                        initialState={{
                            rowGrouping : {
                                model : INITIAL_GROUPING_COLUMN_MODEL
                            }
                        }}
                        experimentalFeatures={{
                            rowGrouping : true
                        }}
                        rowGroupingColumnMode="multiple"
                        defaultGroupingExpansionDepth={-1}
                        groupingColDef={{
                            hideDescendantCount : true,
                        }}
                        hideFooter={true}
                        apiRef={apiRef}
                        getCellClassName={(params: any) => {
                            if (params.field != "status") {
                              return '';
                            } else if(params.value === "입실"){
                              return 'inclass';
                            } else {
                              return "outclass"
                            }
                          }}
                    />

                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px", paddingRight: "18px", borderTop: "1px solid rgb(224,224,224)" }}>
                    <div style={{ fontWeight: 400, fontSize: "12px" }}>

                    </div>
                    <div style={{ fontWeight: 400, fontSize: "12px" }}>
                        국어 질의응답 신청률
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default QuestionCheckMobile;