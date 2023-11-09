import React, { useEffect, useState } from "react";
import styles from "../../styles/dailyreport.module.css";
import MenuBar from "./components/menubar";
import { ReactComponent as Smile } from "../../svg/daily_smile.svg";
import { ReactComponent as Zzz } from "../../svg/daily_zzz.svg";
import { ReactComponent as Cry } from "../../svg/daily_cry.svg";
import { ReactComponent as Xsvg } from "../../svg/daily_x.svg";
import { ReactComponent as NoPhone } from "../../svg/daily_phone.svg";
import { animate, inView } from "motion";

const fullBlockExample = [
    [
        { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "smile", time: "09:00" }, { type: "cry", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "zzz", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "none", class: "1교시_1", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "smile", time: "09:00" }, { type: "nophone", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }
    ],
    [
        { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, { type: "smile", time: "09:00" }, {}, {}, {}
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
                                    {eachList.type === "smile" ? "공부중" : eachList.type === "cry" ? "피해 주는 행동" : eachList.type === "zzz" ? "졸음" : eachList.type === "x" ? "좌석에 없음" : eachList.type === "nophone" ? "학습외 사이트" : ""}
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


const PatrolResult: React.FC<any> = () => {

    const [currentMenu, setCurrentMenu] = useState(1);
    const [goAnimation, setGoAnimation] = useState(false);
    const [fullGraphMaxNumber, setFullGraphMaxNumber] = useState(0);

    useEffect(() => {

        if (currentMenu === 2) {
            calculateFullGraphMaxNumber(fullGraphExample);
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


    return (
        <div className={styles.compBody}>
            <div className={styles.compTitle1}>
                오늘의 순찰결과를 확인하세요
            </div>
            <div className={styles.compSubTitle1}>
                윤종웅 님의 10월 17일 순찰결과
            </div>

            <MenuBar text={["나의 순찰결과", "지점별 순찰결과"]} changeCurrentMenu={changeCurrentMenu} />

            {
                currentMenu === 1 ?
                    <div className={styles.myPatrolResult}>
                        <div className={styles.myPatrol}>
                            {
                                fullBlockExample.map((eachList: any, i: number) => {
                                    return (
                                        <OneBlock key={i} list={eachList} index={i} />
                                    )
                                })
                            }
                        </div>
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
                                    fullGraphExample.map((eachClass: number[], classNumber: number) => {
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
                                                    {classNumber + 1}교시
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