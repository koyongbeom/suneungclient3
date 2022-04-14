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

const INITIAL_GROUPING_COLUMN_MODEL = ['subject'];


const columns1: GridColDef[] = [
    { field: 'subject', headerName: '과목', width: 100 },
    { field: 'chapter', headerName: '단원', width: 80, filterable: true },
    {
        field: "inCorrectRatio", headerName: "오답률", width: 150, renderCell: (params: any) => {
            if (params.value) {
                return (
                    <div style={{ width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)", height: "60%", position: "relative" }}>
                        <div style={{ width: `${params.value}%`, backgroundColor: `${params.value > 75 ? "rgba(8, 130, 8, 0.64)" : params.value > 50 ? "rgba(239, 187, 90, 0.64)" : "rgba(244, 67, 54)"}`, height: "100%" }}>
                        </div>
                        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", fontSize: "16px" }}>
                            {params.value} %
                        </div>
                    </div>
                );
            }
        }
    }
];



const QuestionViewer: React.FC<any> = (props) => {
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
                id : 1, subject : "강민철 튜터", chapter : "2/7", inCorrectRatio : 85
            },
            {
                id : 2, subject : "강민철 튜터", chapter : "2/14", inCorrectRatio : 100
            },
            {
                id : 3, subject : "강민철 튜터", chapter : "2/21", inCorrectRatio : 95
            },
            {
                id : 4, subject : "강민철 튜터", chapter : "2/28", inCorrectRatio : 100
            },
        ]

        setRows(newRows);
    }, [])


    


    return (
        <div style={{width : "1200px", paddingLeft : "12px"}}>
            <div>
                <div className={classes.root} style={{ height: 500, width: '100%', backgroundColor: "white", marginTop: "8px" }}>

                    <StyledDataGrid loading={loading} rows={rows} columns={columns}
                        initialState={{
                            rowGrouping : {
                                model : INITIAL_GROUPING_COLUMN_MODEL
                            }
                        }}
                        experimentalFeatures={{
                            rowGrouping : true
                        }}
                        defaultGroupingExpansionDepth={1}
                        groupingColDef={{
                            hideDescendantCount : true,
                        }}
                        apiRef={apiRef}
                        headerHeight={0}
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
            </div>
            
        </div>
    )
}

export default QuestionViewer;