import React, { useEffect, useState } from "react";
import { GridRenderCellParams, DataGridPro, GridRowsProp, GridColDef, GridToolbar, LicenseInfo, useGridApiRef, GridEditRowsModel, GridFilterModel } from '@mui/x-data-grid-pro';
import { createStyles, makeStyles } from '@mui/styles';
import renderCellExpand from "../data/rendercellexpand";
import { createTheme, darken, lighten } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from "../styles/attendancetable.module.css";

import userList from "../data/users";
import StyledDataGrid from "../data/tablestyles";
import { useMediaQuery } from 'react-responsive'

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
            },
        };
    },
    { defaultTheme },
);


const columns1: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '1교시 시작시간 입실 여부', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand },
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "oneReply_1", headerName : "1교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_1", headerName : "2교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_1", headerName : "3교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_1", headerName : "4교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_1", headerName : "5교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_1", headerName : "6교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];

const columns2: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '위치', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand },
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "oneReply_1", headerName : "1교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_1", headerName : "2교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_1", headerName : "3교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_1", headerName : "4교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_1", headerName : "5교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_1", headerName : "6교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];

const columns3: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '위치', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand },
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "twoReply_1", headerName : "2교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_1", headerName : "1교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_1", headerName : "3교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_1", headerName : "4교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_1", headerName : "5교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_1", headerName : "6교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];

const columns4: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '위치', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand },
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "threeReply_1", headerName : "3교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_1", headerName : "2교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_1", headerName : "1교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_1", headerName : "4교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_1", headerName : "5교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_1", headerName : "6교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];

const columns5: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '위치', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand },
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "fourReply_1", headerName : "4교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_1", headerName : "3교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_1", headerName : "2교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_1", headerName : "1교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_1", headerName : "5교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_1", headerName : "6교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];

const columns6: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '위치', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand},
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "fiveReply_1", headerName : "5교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_1", headerName : "4교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_1", headerName : "3교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_1", headerName : "2교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_1", headerName : "1교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_1", headerName : "6교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];

const columns7: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'status', headerName: '위치', width: 100, filterable: true },
    { field: 'last', headerName: '마지막 기록', width: 250, filterable: false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand },
    { field: 'secondReply', headerName: '최종처리', width: 300, filterable: false, renderCell: renderCellExpand },
    { field : "sixReply_1", headerName : "6교시 상황", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "sixReply_2", headerName : "6교시 최종처리", width : 250, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_1", headerName : "5교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fiveReply_2", headerName : "5교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_1", headerName : "4교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "fourReply_2", headerName : "4교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_1", headerName : "3교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "threeReply_2", headerName : "3교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_1", headerName : "2교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "twoReply_2", headerName : "2교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_1", headerName : "1교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "oneReply_2", headerName : "1교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_1", headerName : "7교시 상황", width : 100, filterable : false, renderCell : renderCellExpand},
    { field : "sevenReply_2", headerName : "7교시 최종처리", width : 100, filterable : false, renderCell : renderCellExpand}
];




const m_columns: GridColDef[] = [
    { field: 'name', headerName: '이름', width: 60, sortable : false },
    { field: 'status', headerName: '정시 입실 여부', width: 95, filterable: true, sortable : false },
    { field: 'last', headerName: '마지막 기록', width: 130, filterable: false, sortable : false },
    { field: 'firstReply', headerName: '자리에 없는 이유', width: 300, filterable: false, renderCell: renderCellExpand, sortable : false },
    { field: 'secondReply', headerName: '최종처리', width: 100, filterable: false, renderCell: renderCellExpand, sortable : false },
];




const SecondTotalAttendanceProcess: React.FC<any> = (props) => {
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
    const [users, setUsers] = useState<any>();
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

    const isMobile = useMediaQuery({
        query : `(max-width : 1024px)`
    })

    useEffect(()=>{
        if(isMobile){
            
        }
    }, [isMobile]);


    useEffect(() => {
        setLoading(true);
        var date = targetDate.getTime();
        start(date, "one");
    }, []);

    useEffect(() => {
        var currentDateTime = new Date();
        var index = -1;

        if (currentDateTime.getTime() > first.getTime()) {
            index = 0;
        }
        if (currentDateTime.getTime() > second.getTime()) {
            index = 1;
        }
        if (currentDateTime.getTime() > third.getTime()) {
            index = 2;
        }
        if (currentDateTime.getTime() > fourth.getTime()) {
            index = 3;
        }
        if (currentDateTime.getTime() > fifth.getTime()) {
            index = 4;
        }
        if (currentDateTime.getTime() > sixth.getTime()) {
            index = 5;
        }
        if (currentDateTime.getTime() > seventh.getTime()) {
            index = 6;
        }


        const newBool = bool;

        for (var i = 0; i <= index + 10; i++) {
            newBool[i] = false;
        }

        setBool([...newBool]);

    }, []);

    const start = async (date: number, currentClass : string) => {
        var token = "";

        fetch("https://peetsunbae.com/fingerprint/totalStampTest?date=" + date, {
            method: "GET",
            headers: { "Authorization": token },
            credentials: "include",
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    const data = result.data;
                    const reply = result.reply;
                    const users = userList;
                    console.log(users);
                    setData(data);
                    setUsers(users);

                    users.forEach((eachUser: any) => {
                        eachUser.records = [];
                        eachUser.reply = [];
                    })

                    data.forEach((eachData: any) => {
                        users.forEach((eachUser: any) => {
                            if (+eachData.userId === +eachUser.user_id) {
                                eachUser.records.push(eachData);
                            }
                        })
                    })

                    reply.forEach((eachReply : any)=> {
                        users.forEach((eachUser : any) => {
                            if(eachReply.fingerprintUserId === +eachUser.user_id){
                                eachUser.reply.push(eachReply);
                            }
                        })
                    })

                    

                    users.sort(function (a: any, b: any) {
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                    });

                    users.forEach((user: any) => {
                        user.records.forEach((record: any) => {
                            record.realTime = `${new Date(+record.time).getDate()} - ${new Date(+record.time).getHours()} - ${new Date(+record.time).getMinutes()}`;
                            // console.log(record.realTime);
                        })
                    })

                    setUserData(users);
                    filterUsers(users, date, currentClass);
                    setLoading(false);
                })
        })
    }

    const filterUsers = (preParsedUsers: any, targetTime: number, currentClass : string) => {
        preParsedUsers.forEach((user: any) => {
            user.records.forEach((record: any) => {
                record.realTime = `${new Date(+record.time).getDate()} - ${new Date(+record.time).getHours()} - ${new Date(+record.time).getMinutes()}`;
            })
        })

        const parsedUsers: any = [];

        preParsedUsers.forEach((each: any) => {
            if (each.access_groups[0].name === "학생" && each.name !== "Administrator") {
                each.records = each.records.filter((record: any) =>
                    +record.time < targetTime
                );

                each.records.forEach((record: any) => {
                    const specify = new Date(+record.time);
                    record.realTime = `${specify.getDate()}, ${specify.getHours()}, ${specify.getMinutes()}`
                })

                parsedUsers.push(each);
            }
        })

        const newRows: any = [];


        parsedUsers.forEach((user: any) => {
            const oneRow: any = {}
            oneRow.id = user.user_id;
            oneRow.name = user.name;
            user.reply.forEach((eachReply: any) => {
                switch (eachReply.period) {
                    case "one":
                        oneRow.oneReply_1 = eachReply.firstReply;
                        oneRow.oneReply_2 = eachReply.secondReply;
                        break;
                    case "two":
                        oneRow.twoReply_1 = eachReply.firstReply;
                        oneRow.twoReply_2 = eachReply.secondReply;
                        break;
                    case "three":
                        oneRow.threeReply_1 = eachReply.firstReply;
                        oneRow.threeReply_2 = eachReply.secondReply;
                        break;
                    case "four":
                        oneRow.fourReply_1 = eachReply.firstReply;
                        oneRow.fourReply_2 = eachReply.secondReply;
                        break;
                    case "five":
                        oneRow.fiveReply_1 = eachReply.firstReply;
                        oneRow.fiveReply_2 = eachReply.secondReply;
                        break;
                    case "six":
                        oneRow.sixReply_1 = eachReply.firstReply;
                        oneRow.sixReply_2 = eachReply.secondReply;
                        break;
                    case "seven":
                        oneRow.sevenReply_1 = eachReply.firstReply;
                        oneRow.sevenReply_2 = eachReply.secondReply;
                        break;
                }

                if(eachReply.period === currentClass){
                    oneRow.firstReply = eachReply.firstReply;
                    oneRow.secondReply = eachReply.secondReply;
                }
            });


            if (user.records.length > 0) {
                const lastRecord = user.records[user.records.length - 1];
                const lastTime = new Date(+lastRecord.time);
                oneRow.last = `${lastTime.getHours() < 10 ? "0" + lastTime.getHours() : lastTime.getHours()}:${lastTime.getMinutes() < 10 ? "0" + lastTime.getMinutes() : lastTime.getMinutes()}`;

                const location = lastRecord.direction === "outside" ? "○" : "✕";
                oneRow.status = location;
                if (location === "○") {
                    oneRow.last = oneRow.last + "에 들어옴";
                } else if (location === "✕") {
                    oneRow.last = oneRow.last + "에 나감";
                    const delayMinutes = Math.floor((targetTime - lastTime.getTime())/60000);
                    const delay = `${Math.floor(delayMinutes/60)}시간 ${delayMinutes%60}분 경과`
                    oneRow.last = oneRow.last + `(${delay})`;
                }
            } else {
                oneRow.last = `${new Date(targetTime).getHours() < 10 ? "0" + new Date(targetTime).getHours() : new Date(targetTime).getHours()}:${new Date(targetTime).getMinutes() < 10 ? "0" + new Date(targetTime).getMinutes() : new Date(targetTime).getMinutes()}까지 기록 없음`;
                oneRow.status = "✕";
            }

            newRows.push(oneRow);
        })

        newRows.sort(function (a: any, b: any) {
            if (a.status === "○" && b.status === "✕") {
                return 1;
            } else if (a.status === "✕" && b.status === "○") {
                return -1;
            } else {
                return 0;
            }
        })

        newRows.sort(function (a: any, b: any) {
            if (a.last.split(" ")[2] === "없음" && b.last.split(" ")[2] !== "없음") {
                return -1;
            } else if (a.last.split(" ")[2] === "없음" && b.last.split(" ")[2] !== "없음") {
                return 1;
            } else {
                return 0;
            }
        })

        const newnewRows : any = [];

        newRows.forEach((eachRow : any)=>{

            console.log(eachRow.name === "최홍석(본도시락)");
            if(eachRow.name === "양송은" || eachRow.name === "최홍석(본도시락)" || eachRow.name === "정지원" || eachRow.name === "김주희" || eachRow.name === "김준석" || eachRow.name === "김동욱" || eachRow.name === "최우영" || eachRow.name === "인소희"){

            }else{
                newnewRows.push(eachRow);
            }
        })

        console.log(newnewRows);
        setRows([...newnewRows]);

    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);

        switch (newAlignment) {
            case "one":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(9, 0);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
            case "two":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(10, 30);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
            case "three":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(13, 20);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
            case "four":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(14, 50);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
            case "five":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(16, 20);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
            case "six":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(18, 40);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
            case "seven":
                setRows([]);
                setLoading(true);
                var newDate = targetDate;
                newDate.setHours(21, 30);
                setTargetDate(newDate);
                start(newDate.getTime(), newAlignment);
                break;
        }
    };

    const handleCommit = async (e: any) => {

        const fingerprintUserId = e.id;
        const field = e.field;
        var value = e.value;

        if (!value) {
            value = "";
        }

        const data = {
            fingerprintUserId,
            field,
            value,
            alignment
        }

        var token = "";

        fetch("https://peetsunbae.com/dashboard/report/attendanceProcess", {
            method: "POST",
            headers: { "Authorization": token, "Content-Type" : "application/json" },
            credentials: "include",
            body : JSON.stringify(data)
        }).then((response: any) => {
            response.json()
                .then((result: any) => {
                    console.log(result.body);
                })
        })
    }


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

    const previousDay = () => {
        setRows([]);
        setLoading(true);
        const newDate = targetDate;
        newDate.setDate(newDate.getDate()-1);
        setTargetDate(newDate);
        start(newDate.getTime(), alignment);
    }

    const nextDay = () => {
        setRows([]);
        setLoading(true);
        const newDate = targetDate;
        newDate.setDate(newDate.getDate()+1);
        setTargetDate(newDate);
        start(newDate.getTime(), alignment);
    }



    return (
        <div className={styles.main} style={{width : "1050px", paddingLeft : "12px", paddingTop : 0}}>
            <div className={styles.choiceDiv} style={{display : "flex", justifyContent : "space-between"}}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton disabled={bool[0]} value="one"><span className={styles.choice} style={{ fontFamily: "Apple_SB" }}>1교시</span></ToggleButton>
                    <ToggleButton disabled={bool[1]} value="two"><span className={styles.choice} style={{ fontFamily: "Apple_SB" }}>2교시</span></ToggleButton>
                    <ToggleButton disabled={bool[2]} value="three"><span className={styles.choice} style={{ fontFamily: "Apple_SB" }}>3교시</span></ToggleButton>
                    <ToggleButton disabled={bool[3]} value="four"><span className={styles.choice} style={{ fontFamily: "Apple_SB" }}>4교시</span></ToggleButton>
                    <ToggleButton disabled={bool[4]} value="five"><span className={styles.choice}  style={{ fontFamily: "Apple_SB" }}>5교시</span></ToggleButton>
                    <ToggleButton disabled={bool[5]} value="six"><span className={styles.choice} style={{ fontFamily: "Apple_SB" }}>6교시</span></ToggleButton>
                </ToggleButtonGroup>

                <div style={{ marginTop: "16px", fontFamily: "Apple_R" }}>
                    <div>
                    </div>
                </div>
            </div>

            

            <div className={styles.tableDivDiv}>
                <div className={`${classes.root} ${styles.tableDiv}`} style={{ height: 500, width: '100%', backgroundColor: "white", marginTop: "16px" }}>

                    <StyledDataGrid loading={loading} rows={rows} columns={isMobile ? m_columns : alignment === "one" ? columns1 : alignment === "two" ? columns2 : alignment === "three" ? columns3 : alignment === "four" ? columns4 : alignment === "five" ? columns5 : alignment === "six" ? columns6 : alignment === "seven" ? columns7 : columns1}
                        density='compact'
                        filterModel={filterModel}
                        apiRef={apiRef}
                        onFilterModelChange={(model) => setFilterModel(model)}
                        onCellEditCommit={handleCommit}
                        onStateChange={tableChange}
                        hideFooter={true} 
                        getCellClassName={(params: any) => {
                            if (params.field != "status") {
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

export default SecondTotalAttendanceProcess;