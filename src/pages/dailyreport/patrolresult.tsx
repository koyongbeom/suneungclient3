import React, { useEffect, useState } from "react";
import styles from "../../styles/dailyreport.module.css";
import MenuBar from "./components/menubar";
import { ReactComponent as Smile } from "../../svg/daily_smile.svg";
import { ReactComponent as Zzz } from "../../svg/daily_zzz.svg";
import { ReactComponent as Cry } from "../../svg/daily_cry.svg";
import { ReactComponent as Xsvg } from "../../svg/daily_x.svg";
import { ReactComponent as NoPhone } from "../../svg/daily_phone.svg";
import { ReactComponent as LastTime } from "../../svg/daily_last_time.svg";
import { ReactComponent as Phone } from "../../svg/daily_use_phone.svg";
import { animate, inView } from "motion";
import { propsToClassKey } from "@mui/styles";
import { didPatrol, distinguishInAndOut, makeMyFullPatrolData, makeTotalPatrolData, prettifyAccessControl, prettifyQrCheckData, sortStudentList } from "./functions/patrolfunction";
import { CircularProgress } from "@mui/joy";


const fullBlockExample = [
    [
        { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "smile", time: "09:00" }, { type: "cry", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "none", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "zzz", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "phone", class: "1교시_1", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "x", time: "09:00" }, { type: "nophone", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "lasttime", time: "22:00" }, {}, {}, {}
    ]
]

const fullGraphExample = [
    [5, 3, 1],
    [3, 4, 0],
    [2, 0, 0],
    [1, 1, 1],
    [0, 1, 3],
    [1, 0, 0],
    [3, 0, 0],
    [2, 2, 1],
]


const WhichSvg: React.FC<any> = (props: any) => {

    const { type } = props;

    switch (type) {
        case "smile":
            return <Smile className={styles.whichSvg} />;
        case "cry":
            return <Cry className={styles.whichSvg} />;
        case "zzz":
            return <Zzz className={styles.whichSvg} />;
        case "x":
            return <Xsvg className={styles.whichSvg} />;
        case "nophone":
            return <NoPhone className={styles.whichSvg} />;
        case "lasttime":
            return <LastTime className={styles.whichSvg} />;
        case "phone":
            return <Phone className={styles.whichSvg} />;
        default:
            return <></>;
    }

}

const OneBlock: React.FC<any> = (props: any) => {

    const { list, index } = props;

    return (
        <div className={`${styles.oneBlock}`}>
            {
                list.map((eachList: any, i: number) => {
                    if (eachList.type && eachList.type !== "none") {
                        return (
                            <div className={styles.eachBlock} key={i}>
                                <div className={styles.eachBlockSvg}>
                                    <WhichSvg type={eachList.type} className={styles.whichSvg} />
                                </div>
                                <div className={styles.eachBlockText}>
                                    {eachList.type === "smile" ? "공부중" : eachList.type === "cry" ? "피해 주는 행동" : eachList.type === "zzz" ? "졸음" : eachList.type === "x" ? "좌석에 없음" : eachList.type === "nophone" ? "학습외 사이트" : eachList.type === "lasttime" ? "의무자습 종료" :  eachList.type === "phone" ? "휴대폰 사용" : ""}
                                </div>
                                <div className={styles.eachBlockTime}>
                                    {eachList.time}
                                </div>
                            </div>
                        )
                    } else if (eachList.type === "none") {
                        return (
                            <div className={styles.noneBlock} key={i}>
                                <div className={styles.noneBlockCircle}>
                                    {eachList.class}
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={styles.eachBlock} key={i}>

                            </div>
                        )
                    }
                })
            }
        </div>
    );
}


const PatrolResult: React.FC<any> = (props) => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const [goAnimation, setGoAnimation] = useState(false);
    const [fullGraphMaxNumber, setFullGraphMaxNumber] = useState(0);
    const [month, setMonth] = useState(0);
    const [date, setDate] = useState(0);
    const [loading, setLoading] = useState(false);
    const [fullMyPatrolData, setFullMyPatrolData] = useState<any>();
    const [totalPatrolData, setTotalPatrolData] = useState<any>();


    useEffect(() => {

        if(!props.targetDate){
            return;
        }

        setMonth(props.targetDate.getMonth() + 1);
        setDate(props.targetDate.getDate());

    }, [props.targetDate]);

    useEffect(() => {

        if (currentMenu === 2) {
            calculateFullGraphMaxNumber(totalPatrolData);
        }

    }, [currentMenu]);


    const calculateFullGraphMaxNumber = (data: number[][]) => {
        var maxNumber = 0;
        data.forEach((eachClass: number[]) => {
            eachClass.forEach((eachNumber: number) => {
                if (eachNumber > maxNumber) {
                    maxNumber = eachNumber;
                }
            })
        })

        console.log(data);
        console.log("maxNumber");
        console.log(maxNumber);
        setFullGraphMaxNumber(maxNumber);
    }

    const changeCurrentMenu = (menu: number) => {
        setCurrentMenu(menu);
        if(menu === 2){
            setTimeout(() => {
                setGoAnimation(true);
            }, 0);
        }else{
            setGoAnimation(false);
        }
    }

    useEffect(() => {

        if (!props.where || !props.targetDate || !props.userId || !props.name) {
            console.log("noWhereOrTargetDate");
            return;
        }

        start(+props.userId, props.targetDate, props.where);

    }, [props.where, props.targetDate, props.userId, props.name]);

    const start = async (myId : number, targetDate : Date, where : "gangnam" | "daechi") => {

        try {

            console.log("gogogogogogo");

            setLoading(true);

            console.log(1);

            const { data, qrCheckData } = await getUsersData();

            const studentList = data;

            prettifyAccessControl(studentList);
            console.log(2);
            prettifyQrCheckData(qrCheckData);
            console.log(3);
            const seatPatrolData = didPatrol(qrCheckData, where);
            console.log(4);
            distinguishInAndOut(studentList, seatPatrolData, targetDate);
            console.log(5);
            sortStudentList(studentList);
            console.log(6);

            console.log("studentList");
            console.log(studentList);

            const myFullPatrolData = makeMyFullPatrolData(studentList, myId, targetDate);
            console.log(7);

            const totalPatrolData = makeTotalPatrolData(studentList, targetDate);
            console.log(8);

            //console.log(myFullPatrolData);

            console.log(totalPatrolData);

            setFullMyPatrolData(myFullPatrolData);
            setTotalPatrolData(totalPatrolData);

            setLoading(false);

        } catch (e) {
            console.log(e);
        }


    }

    const getUsersData = async () => {

        try {

            const data = {
                location: props.where,
                targetDateTime: props.targetDate.getTime()
            }

            const response = await fetch("https://peetsunbae.com/dashboard/report/patrolmanager/gettotal", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

            if (result.message !== "success") {
                throw new Error("서버와의 통신에 실패했습니다.");
            }

            return result;

        } catch (e) {
            console.log(e);
            throw new Error("서버와의 통신에 실패했습니다.");
        }

    }


    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                오늘의 순찰결과를 확인하세요
            </div>
            <div className={styles.compSubTitle1}>
                {props.name} 님의 {month}월 {date}일 순찰결과
            </div>

            <MenuBar text={["나의 순찰결과", "지점별 순찰결과"]} changeCurrentMenu={changeCurrentMenu} />

            {
                currentMenu === 1 ?
                    <div className={styles.myPatrolResult}>
                        {
                            !loading ?
                                <div className={styles.myPatrol}>
                                    {
                                        fullMyPatrolData &&
                                        fullMyPatrolData.map((eachList: any, i: number) => {
                                            return (
                                                <OneBlock key={i} list={eachList} index={i} />
                                            )
                                        })
                                    }
                                </div>
                                :
                                ""
                        }
                        {
                            loading ?
                                <div className={styles.patrolLoading}>
                                    <CircularProgress />
                                </div>
                                :
                                ""
                        }


                    </div>
                    :
                    ""
            }

            {
                currentMenu === 2 ?
                    <div className={styles.ourPatrolResult}>
                        <div className={styles.ourPatrolList}>
                            {
                                ["졸음", "학습 외 사이트 접속", "피해 주는 행동"].map((eachList: any, i: number) => {
                                    return (
                                        <div key={i} className={`${styles.ourPatrolListDiv} ${styles[`ourPatrolListDiv${i}`]}`}>
                                            <div className={styles.dot}>
                                            </div>
                                            <div style={{
                                                width: "12px"
                                            }}>
                                            </div>
                                            <div className={styles.ourPatrolListText}>
                                                {eachList}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className={styles.ourPatrolGraph}>
                            <div className={styles.ourPatrolGraphDiv}>
                                {
                                    totalPatrolData &&
                                    totalPatrolData.map((eachClass: number[], classNumber: number) => {
                                        var classMaxNumber = 0;
                                        var maxIndex = 0;
                                        eachClass.forEach((eachNumber: number, i: number) => {
                                            if (eachNumber > classMaxNumber) {
                                                classMaxNumber = eachNumber;
                                                maxIndex = i;
                                            }
                                        });

                                        return (
                                            <div className={styles.ourPatrolGraphClass} key={classNumber}>
                                                <div className={styles.ourPatrolGraphPics}>
                                                    {
                                                        eachClass.map((eachNumber: number, i: number) => {
                                                            return (
                                                                <div className={styles.ourPatrolGraphWrapper} key={i}>
                                                                    {
                                                                        i === maxIndex
                                                                        &&
                                                                        <div className={styles.ourPatrolGraphPicText} style={{left : (i === 0 ? 6 : i === 1 ? -3 : i === 2 ? -8 : 0)  + "px"}}>
                                                                            {classMaxNumber}명
                                                                        </div>
                                                                    }

                                                                    <div id="graphh" className={`${styles.ourPatrolGraphPic} ${styles['ourPatrolGraphPic' + i]}`} style={{
                                                                        height: `${(fullGraphMaxNumber === 0 || !goAnimation) ? 0 : (eachNumber === 0 ? 0.01 : eachNumber / fullGraphMaxNumber) * 9.375}rem`
                                                                    }}>
                                                                    </div>



                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className={styles.ourPatrolClassNumber}>
                                                    {classNumber}교시
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }

        </div>
    );
};

export default PatrolResult;