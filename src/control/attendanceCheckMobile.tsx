import React, { useEffect, useState } from "react";
import { GridColDef, LicenseInfo, useGridApiRef,  GridFilterModel } from '@mui/x-data-grid-pro';
import { makeStyles } from '@mui/styles';
import renderCellExpand from "../data/rendercellexpand";
import { createTheme, darken, lighten } from '@mui/material/styles';
import styles from "../styles/attendancetable.module.css";
import CustomPagination from "../data/custompagination";
// import fullRowDatas from "../data/attendanceCheckRows";
import fullRowDatas from "../data/attendanceCheckRows2";
import StyledDataGrid from "../data/tablestyles";

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
                    // fontSize : "13px !important"
                },
                '& .inclass': {
                    color: "rgb(25, 118, 210)",
                    fontWeight : 700
                    // fontSize : "13px !important"
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




const m_columns: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 60, sortable : false },
    { field: 'status', headerName: '정시 입실 여부', width: 95, filterable: true, sortable : false },
    { field: 'last', headerName: '마지막 기록', width: 130, filterable: false, sortable : false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand, sortable : false },
    { field: 'secondReply', headerName: '최종처리', width: 100, filterable: false, renderCell: renderCellExpand, sortable : false },
];




const SecondTotalAttendanceProcessMobile: React.FC<any> = (props) => {
    const classes = useStyles2();
    const [rows, setRows] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [alignment, setAlignment] = React.useState('one');
    const [targetDate, setTargetDate] = useState(new Date(2022,2,7, 9));
    const apiRef = useGridApiRef();
    const [name, setName] = useState("");
    const [userData, setUserData] = useState<any>();
    const [bool, setBool] = useState([true, true, true, true, true, true, true]);
    const [inNumber, setInNumber] = useState(0);
    const [outNumber, setOutNumber] = useState(0);


    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
        items: [
            { id: 2, columnField: 'name', operatorValue: 'contains', value: "" }
        ],
    });


    const fakeLoading = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 350)
    }

    useEffect(()=>{
        fullRowDatas[1].props = fakeLoading;
        setRows(fullRowDatas);
    }, [])

    const tableChange = () => {
        const params = apiRef.current.getVisibleRowModels();

        var validationCount = 0;
        var inCount = 0;
        var outCount = 0;

        if(params.size){
            params.forEach((each : any)=>{
                if(each){
                    if(each.status === "OUT"){
                        outCount++;
                    }else if(each.status === "IN"){
                        inCount++;
                    }
                }
            })
        }

        setInNumber(inCount);
        setOutNumber(outCount);
    }




    return (
        <div className={styles.main} style={{width : "1050px", paddingLeft : "12px", paddingTop : 0}}>
            
            <div className={styles.tableDivDiv}>
                <div className={`${classes.root} ${styles.tableDiv}`} style={{ height: 500, width: '100%', backgroundColor: "white", marginTop: "16px" }}>

                    <StyledDataGrid loading={loading} rows={rows} columns={m_columns}
                        density='compact'
                        filterModel={filterModel}
                        apiRef={apiRef}
                        pageSize={52}
                        rowsPerPageOptions={[52]}
                        pagination={true}
                        components={{
                            Pagination: CustomPagination,
                        }}
                        onFilterModelChange={(model) => setFilterModel(model)}
                        onStateChange={tableChange}
                        getCellClassName={(params: any) => {
                            if(loading === true){
                                return ("white");
                            }else if (params.field != "status") {
                                return '';
                            } else if (params.value === "○") {
                                return 'inclass';
                            } else {
                                return "outclass"
                            }
                        }}
                        sx={{border : "1px solid rgb(224, 224, 244)"}}
                    />

                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px", paddingRight: "18px", borderTop: "1px solid rgb(224,224,224)" }}>
                <div style={{ fontWeight: 400, fontSize: "12px" }}>

                </div>
                <div style={{ fontWeight: 400, fontSize: "12px" }}>
                    3월4일 출석일지
                </div>
            </div>

            <div>
                <div className={styles.number} style={{fontFamily : "Apple_R", fontSize : "14px"}}>
                    OUT : {outNumber}명 / IN : {inNumber}명
                </div>
            </div>

            {/* {
                (users && data && targetDate) &&
                <SecondOutingTest data={data} users={users} targetDate={targetDate} />
            } */}
            
        </div>
    )
}

export default SecondTotalAttendanceProcessMobile;