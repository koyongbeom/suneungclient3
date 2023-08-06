import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from '../svg/arrow-left-light.svg';
import styles from "../styles/attendancemobile.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import StyledDataGrid from "../data/tablestyles";
import { GridColDef } from '@mui/x-data-grid-pro';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ReactGa from "react-ga4";



const dayList = ["일", "월", "화", "수", "목", "금", "토"]

// const dateList = [
//     [
//         { month: 2, day: 27 },
//         { month: 2, day: 28 },
//         { month: 3, day: 1 },
//         { month: 3, day: 2 },
//         { month: 3, day: 3 },
//         { month: 3, day: 4 },
//         { month: 3, day: 5 }
//     ],
//     [
//         { month: 3, day: 6 },
//         { month: 3, day: 7 },
//         { month: 3, day: 8 },
//         { month: 3, day: 9 },
//         { month: 3, day: 10 },
//         { month: 3, day: 11 },
//         { month: 3, day: 12 }
//     ],
//     [
//         { month: 3, day: 13 },
//         { month: 3, day: 14 },
//         { month: 3, day: 15 },
//         { month: 3, day: 16 },
//         { month: 3, day: 17 },
//         { month: 3, day: 18 },
//         { month: 3, day: 19 }
//     ],
//     [
//         { month: 3, day: 20 },
//         { month: 3, day: 21 },
//         { month: 3, day: 22 },
//         { month: 3, day: 23 },
//         { month: 3, day: 24 },
//         { month: 3, day: 25 },
//         { month: 3, day: 26 }
//     ],
//     [
//         { month: 3, day: 27 },
//         { month: 3, day: 28 },
//         { month: 3, day: 29 },
//         { month: 3, day: 30 },
//         { month: 3, day: 31 },
//         { month: 4, day: 1 },
//         { month: 4, day: 2 }
//     ],
//     [
//         { month: 4, day: 3 },
//         { month: 4, day: 4 },
//         { month: 4, day: 5 },
//         { month: 4, day: 6 },
//         { month: 4, day: 7 },
//         { month: 4, day: 8 },
//         { month: 4, day: 9 }
//     ]
// ]




const deadline = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0).getTime();

const style = {
    outline : "none",
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "65%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1.5,
    p: 0,
    overflow: "hidden"
};

const style2 = {
    outline : "none",
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    opacity : 1,
    transition : "all 500ms ease-in"
  };

  const style3 = {
    outline : "none",
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow : "auto"
  };

  const columns : GridColDef[] = [
    {field : "date", headerName : "부여날짜", width : 70},
    {field : "score", headerName : "벌점", width : 70},
    {field : "description", headerName : "사유", width : 200}
]

const AttendanceMobileReal: React.FC<any> = (props) => {


    const [dateList, setDateList] = useState<any>();
    const [data, setData] = useState<any>();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const [totalScore, setTotalScore] = useState(0);




    const [targetArray, setTargetArray] = useState<any>();
    const [targetMonth, setTargetMonth] = useState(3);
    const [targetDate, setTargetDate] = useState(1);
    const [targetDay, setTargetDay] = useState("월");
    const [rows, setRows] = useState([
        {id : 1, date : "3/5", score : "3", description : "토요일 10:07분 등원 (사유 지각)"},
        {id : 2, date : "3/9", score : "5", description : "수요일 10:29분 등원 (무단 지각)"},
        {id : 3, date : "3/12", score : "3", description : "토요일 10:12분 등원 (사유 지각)"},
        {id : 4, date : "3/119", score : "3", description : "토요일 12:07분 등원 (사유 지각)"}
    ]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const navigate = useNavigate();

    const ref = useRef<any>(null);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setOpen2(true);
    //     }, 300);
    // }, [])

    useEffect(()=>{

        console.log("query", query.get("id"));
        const previousId : any = query.get("id");
        const id : any =  Math.floor(((+previousId)-10)/500);

        
        ReactGa.event({
            category : "attendanceCheckParent",
            action : "attendanceCheckParent",
            label : `${id}`
        });

    }, [])



    useEffect(() => {


        async function start(id : number) {
            var token = "";
            //-----// 만약 electron 이라면 저장되어 있는 토큰 가져오는 기능----------

            //------------------------------------------------------------------

            fetch(`https://peetsunbae.com/fingerprint/totalMonthStampReal?id=${id}`, {
                method: "GET",
                headers: { 'Authorization': token }
            }).then((response) => {
                response.json()
                    .then((result) => {
                        console.log(result);
                        const newArray: any = [];
                        for (var i = 0; i < 31; i++) {
                            newArray.push([]);
                        }

                        result.data.forEach((each: any) => {
                            const date = new Date(+each.time);
                            var targetDate = date.getDate();
                            each.hours = date.getHours();

                            if(each.hours < 2){
                                targetDate = targetDate - 1;
                            }

                            if(each.hours >= 0 && each.hours < 2){
                                each.hours = each.hours + 24;
                            }

                            each.minutes = date.getMinutes();
                            each.hoursString = each.hours < 10 ? "0" + each.hours : each.hours;
                            each.minutesString = each.minutes < 10 ? "0" + each.minutes : each.minutes;
                            each.countedTime = each.hours * 60 + each.minutes;

                            if(targetDate > 0){
                                newArray[targetDate - 1].push(each);
                            }
                        });

                        const newRows : any = [];
                        result.demerit.forEach((each : any)=>{
                            const oneRow : any = {};
                            const date = new Date(each.createdAt);
                            const month = date.getMonth() + 1;
                            const dateNumber = date.getDate();

                            oneRow.id = each.id;
                            oneRow.score = each.score;
                            oneRow.description = each.description;
                            oneRow.date = `${month}/${dateNumber}`

                            newRows.push(oneRow);
                        })

                        var newTotalScore = 0;

                        if(result.demeritTotal.length > 0){
                            newTotalScore = result.demeritTotal[0].totalDemerit;
                        }

                        console.log(newArray);
                        setTotalScore(newTotalScore)
                        setData(newArray);
                        setRows(newRows);
                    })
            }).catch(error => {
                console.log(error);
            })
        }


        console.log("query", query.get("id"));
        const previousId = query.get("id");

        if(previousId){
            const id =  Math.floor(((+previousId)-10)/500);
            console.log(id);

            start(id);
        }

    }, [])
    //-----------------------------------------------------------------------

    const showDetail = (e: any, month: number, day: number, dayNumber: number) => {
        if(month != new Date().getMonth() + 1){
            return;
        }

        setTargetDate(day);
        setTargetMonth(month);
        setTargetArray(data[day - 1]);

        switch (dayNumber) {
            case 0:
                setTargetDay("일");
                break;
            case 1:
                setTargetDay("월");
                break;
            case 2:
                setTargetDay("화");
                break;
            case 3:
                setTargetDay("수");
                break;
            case 4:
                setTargetDay("목");
                break;
            case 5:
                setTargetDay("금");
                break;
            case 6:
                setTargetDay("토");
                break;
        }


        handleOpen();
    }



    useEffect(()=>{
        const date = new Date();
        const monthFirstDate = new Date(date.getFullYear(), date.getMonth(), 1);
        const monthLastDate = new Date(date.getFullYear(), date.getMonth()+1, 0);
        const monthFirstDay = monthFirstDate.getDay();
        console.log(monthFirstDay);

        const count = -(monthFirstDay) + 1;
        console.log(count);

        const calendarFirstDate = new Date(date.getFullYear(), date.getMonth(), count);

        const array = [1,2,3,4,5,6];

        const data : any = [];
        array.forEach((each : any)=>{
            const weekData : any = [];
            for(var i =0; i < 7; i++){
                const row : any = {};

                row.month = calendarFirstDate.getMonth() + 1;
                row.day = calendarFirstDate.getDate();

                weekData.push(row);

                calendarFirstDate.setDate(calendarFirstDate.getDate()+1);
            }
            data.push(weekData);
        })

        console.log(data);

        setDateList(data);

    }, [])



    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div onClick={props.handleClose} className={styles.monthDiv}>
                    <ArrowLeft className={styles.arrowLeft} />
                    <div className={styles.monthTitle}>
                        {new Date().getMonth() + 1}월
                    </div>
                </div>
                <div>
                    <div onClick={handleOpen3} className={styles.showDemerit}>
                        벌점 보기
                    </div>
                </div>
            </div>

            <div className={styles.dayList}>
                {
                    dayList.map((each: string, index: number) => {
                        return (
                            <div key={each} className={`${styles.dayTitle} ${index === 0 ? styles.active : ""}`}>
                                {each}
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.dateList}>
                {
                    dateList && dateList.map((eachWeek: any, dayNumber: number) => {
                        return (
                            <div key={Math.random()} className={styles.eachWeekDiv}>
                                {
                                    eachWeek.map((eachDay: any, index: number) => {
                                        return (
                                            <div onClick={(e) => { showDetail(e, eachDay.month, eachDay.day, index) }} key={eachDay.day} className={`${styles.eachDay} ${index % 7 === 0 ? styles.sunday : ""} ${eachDay.month !== new Date().getMonth() + 1 ? styles.deactive : ""}`} >
                                                {eachDay.day}
                                                {
                                                    data && data.map((eachData: any, indexNumber: number) => {
                                                        if (eachDay.month === new Date().getMonth() + 1) {
                                                            if (indexNumber + 1 === eachDay.day) {
                                                                var totalTime = 0;

                                                                if (eachData && eachData.length > 0) {
                                                                    totalTime = eachData[eachData.length - 1].countedTime - eachData[0].countedTime;
                                                                }

                                                                return (
                                                                    <div key={eachData.id}>
                                                                        {
                                                                            eachData.length > 0 &&
                                                                            <div className={`${styles.time} ${styles.first}`}>
                                                                                {eachData[0].hoursString}:{eachData[0].minutesString}
                                                                            </div>

                                                                        }
                                                                        {
                                                                            (eachData.length > 1 && +eachData[0].time < deadline) &&
                                                                            <div className={styles.time}>
                                                                                {eachData[eachData.length - 1].hoursString}:{eachData[eachData.length - 1].minutesString}
                                                                            </div>
                                                                        }
                                                                        {
                                                                            (eachData.length > 1 && +eachData[0].time < deadline && totalTime > 0) &&
                                                                            <div className={`${styles.time} ${styles.last}`}>
                                                                                {Math.floor(totalTime / 60)}h{totalTime % 60}m
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                );
                                                            }
                                                        }
                                                    })
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.modalMain}>
                        <div className={styles.modalDay}>
                            {targetDay}요일
                        </div>
                        <div className={styles.modalDate}>
                            {targetMonth}월 {targetDate}일
                        </div>
                        <div className={styles.modalBorder}>
                        </div>
                        <div className={styles.records}>
                            {
                                (targetArray && targetArray.length > 0) &&
                                targetArray.map((eachData: any, index: number) => {
                                    return (
                                        <div key={index} className={styles.eachMove}>
                                            <div className={`${styles.colorBar} ${eachData.direction === "inside" ? styles.inside : ""}`}>

                                            </div>
                                            <div className={styles.modalTimeDiv}>
                                                <div className={styles.modalTime}>
                                                    {
                                                        (targetArray && targetArray.length > 0) &&
                                                        `${eachData.hoursString}:${eachData.minutesString}`
                                                    }
                                                </div>
                                                <div className={`${styles.timeDescription} ${eachData.direction === "inside" ? styles.none : ""}`}>
                                                    입실 {(index > 0 && eachData.direction === "outside") ? `(외출 ${data[targetDate - 1][index].countedTime - data[targetDate - 1][index - 1].countedTime}분 경과)` : ""}
                                                </div>
                                                <div className={`${styles.timeDescription} ${eachData.direction === "outside" ? styles.none : ""}`}>
                                                    퇴실
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            <div className={styles.voidHeight}>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>


            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style2}>
                    <div>
                        <div className={styles.secondModalDescription}>
                            각 일자별 자세한 출입기록을 보시려면 해당 날짜 칸을 클릭해주세요!
                        </div>
                        <div className={styles.btnDiv}>
                            <div>

                            </div>
                            <div>
                                <Button onClick={handleClose2} variant="contained" sx={{ backgroundColor: "#1b49af", width: "30px", fontSize: "12px", height: "26px", borderRadius: "14px" }}>
                                    <span className={styles.btnText}>
                                        확인
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>

            <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style3}>
                        <div style={{height : "350px", width : "100%", paddingBottom : "24px"}}>
                            <StyledDataGrid hideFooter={true} columns={columns} rows={rows} />
                            <div style={{fontFamily : "Apple_SB",  textAlign : "end", marginTop : "8px"}}>
                                이번달 누적 벌점 : {totalScore}점
                            </div>
                        </div>
                </Box>
            </Modal>

        </div>
    );
}

export default AttendanceMobileReal;