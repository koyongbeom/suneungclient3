import React, { useEffect, useState } from "react";
import { GridColDef, LicenseInfo, useGridApiRef, GridFilterModel} from '@mui/x-data-grid-pro';
import { makeStyles } from '@mui/styles';
import renderCellExpand from "../data/rendercellexpand";
import { createTheme, darken, lighten } from '@mui/material/styles';
import StyledDataGrid from "../data/tablestyles";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomPagination from "../data/custompagination";


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
                    fontSize : "13px !important"
                },
                '& .tim': {
                    color: "#1b49af",
                },
                '& .strong': {
                    color: "#1b49af",
                    fontWeight : 700
                },
                '& .white': {
                    color: "#ffffff !important",
                    fontWeight : 700,
                    border : "0px solid transparent !important"
                },
            },
        };
    },
    { defaultTheme },
);



const columns1: GridColDef[] = [
    { field: 'location', headerName: '위치', width: 100 },
    { field: 'time', headerName: 'QR 코드 태깅', width: 100, filterable: true },
    { field: 'sleep', headerName: '자는 학생', width: 120, filterable: false, renderCell: renderCellExpand },
    { field: 'other', headerName: '딴짓하는 학생', width: 120, filterable: false},
];

const newRowsArray = [
        {
            id : 1, location : "오픈형 1구역", time : "09:02:17", sleep : "없음", other : "없음"
        },
        {
            id : 2, location : "오픈형 2구역", time : "09:03:11", sleep : "없음", other : "없음"
        },
        {
            id : 3, location : "오픈형 3구역", time : "09:04:07", sleep : "박원준", other : "없음"
        },
        {
            id : 4, location : "칸막이 1구역", time : "09:05:01", sleep : "없음", other : "없음"
        },
        {
            id : 5, location : "칸막이 2구역", time : "09:06:31", sleep : "없음", other : "없음"
        },
        {
            id : 6, location : "칸막이 3구역", time : "09:08:31", sleep : "없음", other : "없음"
        }, 
        {
            id : 7, location : "오픈형 1구역", time : "10:33:34", sleep : "없음", other : "없음"
        },
        {
            id : 8, location : "오픈형 2구역", time : "10:34:25", sleep : "없음", other : "없음"
        },
        {
            id : 9, location : "오픈형 3구역", time : "10:35:17", sleep : "없음", other : "없음"
        },
        {
            id : 10, location : "칸막이 1구역", time : "10:36:01", sleep : "없음", other : "없음"
        },
        {
            id : 11, location : "칸막이 2구역", time : "10:37:05", sleep : "없음", other : "없음"
        },
        {
            id : 12, location : "칸막이 3구역", time : "10:38:31", sleep : "없음", other : "없음"
        }, 
        {
            id : 13, location : "오픈형 1구역", time : "13:24:16", sleep : "없음", other : "없음"
        },
        {
            id : 14, location : "오픈형 2구역", time : "13:25:20", sleep : "없음", other : "없음"
        },
        {
            id : 15, location : "오픈형 3구역", time : "13:26:15", sleep : "없음", other : "없음"
        },
        {
            id : 16, location : "칸막이 1구역", time : "13:27:01", sleep : "김민경", other : "없음"
        },
        {
            id : 17, location : "칸막이 2구역", time : "13:28:15", sleep : "없음", other : "없음"
        },
        {
            id : 18, location : "칸막이 3구역", time : "13:29:31", sleep : "없음", other : "없음"
        }, 
        {
            id : 19, location : "오픈형 1구역", time : "14:51:14", sleep : "없음", other : "없음"
        },
        {
            id : 20, location : "오픈형 2구역", time : "14:52:20", sleep : "없음", other : "없음"
        },
        {
            id : 21, location : "오픈형 3구역", time : "14:53:16", sleep : "없음", other : "없음"
        },
        {
            id : 22, location : "칸막이 1구역", time : "14:54:20", sleep : "없음", other : "없음"
        },
        {
            id : 23, location : "칸막이 2구역", time : "14:55:21", sleep : "없음", other : "없음"
        },
        {
            id : 24, location : "칸막이 3구역", time : "14:56:36", sleep : "없음", other : "없음"
        }, 
        {
            id : 25, location : "오픈형 1구역", time : "16:22:04", sleep : "없음", other : "없음"
        },
        {
            id : 26, location : "오픈형 2구역", time : "16:23:21", sleep : "없음", other : "없음"
        },
        {
            id : 27, location : "오픈형 3구역", time : "16:24:18", sleep : "없음", other : "없음"
        },
        {
            id : 28, location : "칸막이 1구역", time : "16:25:20", sleep : "없음", other : "없음"
        },
        {
            id : 29, location : "칸막이 2구역", time : "16:26:29", sleep : "없음", other : "없음"
        },
        {
            id : 30, location : "칸막이 3구역", time : "16:27:36", sleep : "유채은", other : "없음"
        }, 
        {
            id : 31, location : "오픈형 1구역", time : "18:40:09", sleep : "없음", other : "없음"
        },
        {
            id : 32, location : "오픈형 2구역", time : "18:41:21", sleep : "없음", other : "없음"
        },
        {
            id : 33, location : "오픈형 3구역", time : "18:42:35", sleep : "없음", other : "없음"
        },
        {
            id : 34, location : "칸막이 1구역", time : "18:43:39", sleep : "없음", other : "없음"
        },
        {
            id : 35, location : "칸막이 2구역", time : "18:44:10", sleep : "없음", other : "없음"
        },
        {
            id : 36, location : "칸막이 3구역", time : "18:45:05", sleep : "없음", other : "없음"
        }, 
        {
            id : 37, location : "오픈형 1구역", time : "19:35:11", sleep : "없음", other : "없음"
        },
        {
            id : 38, location : "오픈형 2구역", time : "19:36:17", sleep : "김민성", other : "없음"
        },
        {
            id : 39, location : "오픈형 3구역", time : "19:37:12", sleep : "없음", other : "없음"
        },
        {
            id : 40, location : "칸막이 1구역", time : "19:38:28", sleep : "없음", other : "없음"
        },
        {
            id : 41, location : "칸막이 2구역", time : "19:39:10", sleep : "없음", other : "없음"
        },
        {
            id : 42, location : "칸막이 3구역", time : "19:40:05", sleep : "권혁민", other : "없음"
        }, 
        {
            id : 43, location : "오픈형 1구역", time : "21:31:10", sleep : "김다영", other : "없음"
        },
        {
            id : 44, location : "오픈형 2구역", time : "21:32:21", sleep : "없음", other : "없음"
        },
        {
            id : 45, location : "오픈형 3구역", time : "21:33:05", sleep : "없음", other : "없음"
        },
        {
            id : 46, location : "칸막이 1구역", time : "21:34:28", sleep : "없음", other : "없음"
        },
        {
            id : 47, location : "칸막이 2구역", time : "21:35:42", sleep : "없음", other : "없음"
        },
        {
            id : 48, location : "칸막이 3구역", time : "21:36:11", sleep : "없음", other : "없음"
        }
]


const PatrolReportMobile: React.FC<any> = (props) => {
    const classes = useStyles2();
    const [rows, setRows] = useState<any>(newRowsArray);
    const [loading, setLoading] = useState(false);
    const [alignment, setAlignment] = React.useState("0");
    const apiRef = useGridApiRef();

    const handleChange = (e : any, value : any) => {
    }


    const fakeLoading = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 350)
    }


    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
        items: [
            { id: 2, columnField: 'name', operatorValue: 'contains', value: "" }
        ],
    });

    useEffect(()=>{
        const newRows : any = newRowsArray;
        newRows[0].props = fakeLoading;
        setRows(newRows);
    }, [])


    


    return (
        <div style={{width : "100%"}}>


            <div style={{ display: "none", justifyContent: "space-between", marginBottom : "16px" }}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="0"><span style={{ fontFamily: "Apple_SB" }}>1교시</span></ToggleButton>
                    <ToggleButton value="1"><span style={{ fontFamily: "Apple_SB" }}>2교시</span></ToggleButton>
                    <ToggleButton value="2"><span style={{ fontFamily: "Apple_SB" }}>3교시</span></ToggleButton>
                    <ToggleButton value="3"><span style={{ fontFamily: "Apple_SB" }}>4교시</span></ToggleButton>
                    <ToggleButton value="4"><span style={{ fontFamily: "Apple_SB" }}>5교시</span></ToggleButton>
                    <ToggleButton value="5"><span style={{ fontFamily: "Apple_SB" }}>6교시</span></ToggleButton>
                    <ToggleButton value="6"><span style={{ fontFamily: "Apple_SB" }}>7교시</span></ToggleButton>
                    <ToggleButton value="7"><span style={{ fontFamily: "Apple_SB" }}>8교시</span></ToggleButton>

                </ToggleButtonGroup>
            </div>

            <div>
                <div className={classes.root} style={{ height: 350, width: '100%', backgroundColor: "white" }}>

                    <StyledDataGrid loading={loading} rows={rows} columns={columns1}
                        density='compact'
                        filterModel={filterModel}
                        apiRef={apiRef}
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        pagination={true}
                        components={{
                            Pagination: CustomPagination,
                        }}
                        onFilterModelChange={(model) => setFilterModel(model)}
                        getCellClassName={(params: any) => {
                            if(loading === true){
                                return ("white");
                            }else if (params.field != "time") {
                                if (params.field != "location") {
                                    if (params.value === "없음") {
                                        return ''
                                    } else {
                                        return 'strong'
                                    }
                                } else {
                                    return '';
                                }
                            } else {
                                return 'time';
                            }
                        }}
                    />

                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px", paddingRight: "18px", borderTop: "1px solid rgb(224,224,224)" }}>
                    <div style={{ fontWeight: 400, fontSize: "12px" }}>

                    </div>
                    <div style={{ fontWeight: 400, fontSize: "12px" }}>
                        3월4일 순찰일지
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PatrolReportMobile;