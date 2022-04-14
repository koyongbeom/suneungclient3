import React, { useEffect, useState } from "react";
import { GridColDef, useGridApiRef } from '@mui/x-data-grid-pro';
import { makeStyles } from '@mui/styles';
import { createTheme, darken, lighten } from '@mui/material/styles';
import StyledDataGrid from "../data/tablestyles";
import useKeepGroupingColumnsHidden from "../data/groupingColumns";

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

const INITIAL_GROUPING_COLUMN_MODEL = ['domain', 'subject'];


const columns1: GridColDef[] = [
    { field: 'domain', headerName: '영역', width: 70 },
    { field: 'subject', headerName: '과목', width: 70 },
    { field: 'chapter', headerName: '단원', width: 70, filterable: true },
    {
        field: "inCorrectRatio", headerName: "오답률", width: 120, renderCell: (params: any) => {
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
    { field: 'text', headerName: '비고', width: 400 },
];

const rows1: any = [
    {
        id: 1, domain: "국어", subject: "독서", chapter: "인문", inCorrectRatio: 85, text: "어휘/어법 문제 외에는 오답 문제 거의 없음"
    },
    {
        id: 2, domain: "국어", subject: "독서", chapter: "사회", inCorrectRatio: 50, text: "추론적 이해와 창의적 이해 관련한 문제에서 오답이 있음"
    },
    {
        id: 3, domain: "국어", subject: "독서", chapter: "과학", inCorrectRatio: 45, text: "과학 지문에 대한 배경지식이 부족해 지문해석에 어려움이 있음"
    },
    {
        id: 4, domain: "국어", subject: "독서", chapter: "문화예술", inCorrectRatio: 70, text: "어휘 어법 관련한 문제에서 오답률이 높음"
    },
    {
        id: 5, domain: "국어", subject: "독서", chapter: "기술", inCorrectRatio: 60, text: "기술 지문에 대한 배경지식이 부족해 지문해석에 어려움이 있음"
    },
    {
        id: 6, domain: "국어", subject: "문학", chapter: "현대시", inCorrectRatio: 45, text: "현대시에서 시의 화자에 의중을 묻는 문제들에서 오답률이 높음"
    },
    {
        id: 7, domain: "국어", subject: "문학", chapter: "현대소설", inCorrectRatio: 80, text: "주제를 묻는 문제에서 오답이 있음, 대체적으로 양호"
    },
    {
        id: 8, domain: "국어", subject: "문학", chapter: "고전시가", inCorrectRatio: 65, text: "고전시가에서 시의 화장에 의중을 묻는 문제들에서 오답률이 높음"
    },
    {
        id: 9, domain: "국어", subject: "문학", chapter: "고전산문", inCorrectRatio: 92, text: "어휘/어법 관련 문제를 제외하고 오답이 거의 없음"
    },
    {
        id: 10, domain: "국어", subject: "문학", chapter: "극문학", inCorrectRatio: 45, text: "극문학의 형식을 묻는 문제에서 오답률이 높음"
    },
    {
        id: 11, domain: "국어", subject: "문학", chapter: "수필", inCorrectRatio: 98, text: "전체적으로 양호함"
    },
    {
        id: 12, domain: "국어", subject: "화작", chapter: "화법", inCorrectRatio: 75, text: "추론적 이해가 필요한 문제들에서 오답이 나옴"
    },
    {
        id: 13, domain: "국어", subject: "화작", chapter: "작문", inCorrectRatio: 60, text: "고쳐쓰기 파트에서 오답률이 높음"
    },
    {
        id: 14, domain: "국어", subject: "언매", chapter: "언어", inCorrectRatio: 45, text: "어법 관련한 문제에서 오답률이 높음"
    },
    {
        id: 15, domain: "국어", subject: "언매", chapter: "매체", inCorrectRatio: 98, text: "대체적으로 양호함"
    },
]



const TestResultMobile: React.FC<any> = (props) => {
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


    useEffect(() => {
        const newRows = [
            {
                id: 1, domain: "국어", subject: "독서", chapter: "인문", inCorrectRatio: 85, text: "어휘/어법 문제 외에는 오답 문제 거의 없음"
            },
            {
                id: 2, domain: "국어", subject: "독서", chapter: "사회", inCorrectRatio: 50, text: "추론적 이해와 창의적 이해 관련한 문제에서 오답이 있음"
            },
            {
                id: 3, domain: "국어", subject: "독서", chapter: "과학", inCorrectRatio: 45, text: "과학 지문에 대한 배경지식이 부족해 지문해석에 어려움이 있음"
            },
            {
                id: 4, domain: "국어", subject: "독서", chapter: "문화예술", inCorrectRatio: 70, text: "어휘 어법 관련한 문제에서 오답률이 높음"
            },
            {
                id: 5, domain: "국어", subject: "독서", chapter: "기술", inCorrectRatio: 60, text: "기술 지문에 대한 배경지식이 부족해 지문해석에 어려움이 있음"
            },
            {
                id: 6, domain: "국어", subject: "문학", chapter: "현대시", inCorrectRatio: 45, text: "현대시에서 시의 화자에 의중을 묻는 문제들에서 오답률이 높음"
            },
            {
                id: 7, domain: "국어", subject: "문학", chapter: "현대소설", inCorrectRatio: 80, text: "주제를 묻는 문제에서 오답이 있음, 대체적으로 양호"
            },
            {
                id: 8, domain: "국어", subject: "문학", chapter: "고전시가", inCorrectRatio: 65, text: "고전시가에서 시의 화장에 의중을 묻는 문제들에서 오답률이 높음"
            },
            {
                id: 9, domain: "국어", subject: "문학", chapter: "고전산문", inCorrectRatio: 92, text: "어휘/어법 관련 문제를 제외하고 오답이 거의 없음"
            },
            {
                id: 10, domain: "국어", subject: "문학", chapter: "극문학", inCorrectRatio: 45, text: "극문학의 형식을 묻는 문제에서 오답률이 높음"
            },
            {
                id: 11, domain: "국어", subject: "문학", chapter: "수필", inCorrectRatio: 98, text: "전체적으로 양호함"
            },
            {
                id: 12, domain: "국어", subject: "화작", chapter: "화법", inCorrectRatio: 75, text: "추론적 이해가 필요한 문제들에서 오답이 나옴"
            },
            {
                id: 13, domain: "국어", subject: "화작", chapter: "작문", inCorrectRatio: 60, text: "고쳐쓰기 파트에서 오답률이 높음"
            },
            {
                id: 14, domain: "국어", subject: "언매", chapter: "언어", inCorrectRatio: 45, text: "어법 관련한 문제에서 오답률이 높음"
            },
            {
                id: 15, domain: "국어", subject: "언매", chapter: "매체", inCorrectRatio: 98, text: "대체적으로 양호함"
            },
        ]

        setRows(newRows);

    }, []);

    useEffect(()=>{
            setTimeout(()=>{
                apiRef.current.scrollToIndexes({
                    rowIndex : 5,
                    colIndex : 3
                });
            }, 5000)

    }, [apiRef]);




    return (
        <div style={{ width: "100%" }}>
            <div>
                <div style={{ display: "none", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ fontFamily: "Apple_SB" }}>
                        국어 단원별 오답률 리포트
                    </div>
                    <div style={{ fontFamily: "Apple_SB" }}>
                        김우영 학생
                    </div>
                </div>
                <div className={classes.root} style={{ height: 300, width: '100%', backgroundColor: "white", marginTop: "8px" }}>
                    <StyledDataGrid loading={loading} rows={rows} columns={columns}
                        density="compact"
                        initialState={{
                            rowGrouping: {
                                model: INITIAL_GROUPING_COLUMN_MODEL
                            }
                        }}
                        experimentalFeatures={{
                            rowGrouping: true
                        }}
                        rowGroupingColumnMode="multiple"
                        defaultGroupingExpansionDepth={-1}
                        groupingColDef={{
                            hideDescendantCount: true,
                        }}
                        hideFooter={true}
                        apiRef={apiRef}
                        getCellClassName={(params: any) => {
                            if (params.field != "status") {
                                return '';
                            } else if (params.value === "입실") {
                                return 'inclass';
                            } else {
                                return "outclass"
                            }
                        }}
                    />
                </div>



                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "16px", paddingRight: "18px", borderTop: "1px solid rgb(224,224,224)" }}>
                    <div style={{ fontWeight: 400, fontSize: "12px" }}>

                    </div>
                    <div style={{ fontWeight: 400, fontSize: "12px" }}>
                        김우영 학생 국어 평가표
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestResultMobile;