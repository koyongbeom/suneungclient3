import React, { useEffect, useState } from "react";
import { DataGridPro, GridColDef, GridToolbar, LicenseInfo, useGridApiRef, GridFilterModel} from '@mui/x-data-grid-pro';
import { Theme, styled } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import renderCellExpand from "../data/rendercellexpand";
import { createTheme, darken, lighten } from '@mui/material/styles';
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
                },
                '& .inclass': {
                    color: "#1b49af",
                },
            },
        };
    },
    { defaultTheme },
);



const columns1: GridColDef[] = [
    { field: 'name', headerName: '시간', width: 100 },
    { field: 'status', headerName: '방향', width: 80, filterable: true },
    { field: 'firstReply', headerName: '외출 시간', width: 250, filterable: false, renderCell: renderCellExpand },
];



const SecondAttendanceViewer: React.FC<any> = (props) => {
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

    const [users, setUsers] = useState();
    const [data, setData] = useState();

    const [first, setFirst] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 9));
    const [second, setSecond] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 10, 30));
    const [third, setThird] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 13, 20));
    const [fourth, setFourth] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 14, 50));
    const [fifth, setFifth] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 16, 20));
    const [sixth, setSixth] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 18, 40));
    const [seventh, setSeventh] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 21, 30));


    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
        items: [
            { id: 2, columnField: 'name', operatorValue: 'contains', value: "" }
        ],
    });

    useEffect(()=>{
        const newRows = [
            {
                id : 1, name : "AM 08:55", status : "입실", firstReply : ""
            },
            {
                id : 2, name : "PM 12:20", status : "퇴실", firstReply : ""
            },
            {
                id : 3, name : "PM 1:15", status : "입실", firstReply : "외출 후 55분 경과"
            },
            {
                id : 4, name : "PM 5:30", status : "퇴실", firstReply : ""
            },
            {
                id : 5, name : "PM 6:20", status : "입실", firstReply : "외출 후 50분 경과"
            }
        ]

        setRows(newRows);
    }, [])


    


    return (
        <div style={{width : "1200px", paddingLeft : "12px"}}>
            <div>
                <div className={classes.root} style={{ height: 500, width: '100%', backgroundColor: "white", marginTop: "8px" }}>

                    <StyledDataGrid loading={loading} rows={rows} columns={columns1}
                        density='compact'
                        filterModel={filterModel}
                        apiRef={apiRef}
                        onFilterModelChange={(model) => setFilterModel(model)}
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

            <div>
                <div style={{fontFamily : "Apple_R", fontSize : "14px"}}>
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

export default SecondAttendanceViewer;