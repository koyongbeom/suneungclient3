import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/dailyreport.module.css";
import { ReactComponent as Flute } from "../../svg/daily_flute.svg";
import { ReactComponent as Sweat } from "../../svg/daily_sweat.svg";
import { ca, is } from "date-fns/locale";
import { set } from "lodash";

const myStudyTimes = [
    430, 480, 600, 0, 480, 240, 200
]

const averageStudyTimes = [
    480, 540, 600, 540, 660, 480, 240
]

var ctxTwoLayer : CanvasRenderingContext2D | null = null;

const StudytimeChart: React.FC<any> = (props) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRef2 = useRef<HTMLCanvasElement>(null);
    const canvasParentRef = useRef<HTMLDivElement>(null);
    const [update, setUpdate] = useState(0);
    const [message, setMessage] = useState("");
    const [currentDataPoints, setCurrentDataPoints] = useState<{ x: number, y: number }[]>([]);
    
    const infoRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);
    const myTimeRef = useRef<HTMLDivElement>(null);
    const averageTimeRef = useRef<HTMLDivElement>(null);

    const [currentBar, setCurrentBar] = useState(0);

    useEffect(() => {

        const myTime = myTimeRef.current;
        const averageTime = averageTimeRef.current;
        const dateDiv = dateRef.current;

        if (!myTime) {
            return;
        }

        if (!averageTime) {
            return;
        }

        if (!dateDiv) {
            return;
        }

        const date = new Date();
        date.setDate(date.getDate() - (6 - (currentBar - 1)));

        const currentMyTime = myStudyTimes[currentBar - 1];
        const currentAverageTime = averageStudyTimes[currentBar - 1];

        //myTime div에 "10시간 10분" 이라는 텍스트를 넣는다.
        myTime.innerText = `${Math.floor(currentMyTime/60)}시간 ${currentMyTime%60}분`;
        averageTime.innerText = `${Math.floor(currentAverageTime/60)}시간 ${currentAverageTime%60}분`;
        dateDiv.innerHTML = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}(${["일", "월", "화", "수", "목", "금", "토"][date.getDay()]})`;

        if(ctxTwoLayer && currentDataPoints.length > 0 && currentDataPoints[currentBar - 1])
        drawDotWithAnimation(ctxTwoLayer, currentDataPoints[currentBar - 1].x, currentDataPoints[currentBar - 1].y, 4);

    }, [currentBar]);

    useEffect(() => {

        window.addEventListener("resize", () => {
            setUpdate(Math.random())
        });

        return () => {
            window.removeEventListener("resize", () => {
                setUpdate(Math.random())
            });
        }
    }, []);

    useEffect(() => {

        if (!canvasRef.current) {
            return;
        }

        if (!canvasRef2.current) {
            return;
        }

        if (!canvasParentRef.current) {
            return;
        }

        if(!infoRef.current){
            return;
        }

        const canvas = canvasRef.current;
        const canvas2 = canvasRef2.current;
        const canvasDiv = canvasParentRef.current;
        const infoDiv = infoRef.current;

        const canvasDivRect = canvasDiv.getBoundingClientRect();
        const canvasWidth = canvasDivRect.width;
        const eachBarWidth = canvasWidth / 7;
        const eachLimits : number[] = [];

        new Array(7).fill(0).forEach((el, index) => {
            eachLimits.push(eachBarWidth * (index + 1));
        });

        canvasDiv.addEventListener("touchstart", (event) => {
            handleTouch(event, canvasDiv, infoDiv, eachLimits);
        });

        canvasDiv.addEventListener("touchmove", (event) => {
            handleTouch(event, canvasDiv, infoDiv, eachLimits);
        });

        canvasDiv.addEventListener("touchend", (event) => {
            stopTouch(event, infoDiv);
        });

        //canvas의 width와 height를 구한다.
        const { width, height } = canvasDiv.getBoundingClientRect();
        const devicePixelRatio = window.devicePixelRatio || 1;

        console.log("devicePixelRatio");
        console.log(devicePixelRatio);

        canvas.width = Math.floor(width * devicePixelRatio);
        canvas.height = Math.floor(height * devicePixelRatio);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        canvas2.width = Math.floor(width * devicePixelRatio);
        canvas2.height = Math.floor(height * devicePixelRatio);

        canvas2.style.width = `${width}px`;
        canvas2.style.height = `${height}px`;

        console.log("width, height");
        console.log(width, height);

        if (width === 0 || height === 0) {
            return;
        }

        const ctx = canvas.getContext("2d");
        const ctx2 = canvas2.getContext("2d");
        ctxTwoLayer = ctx2;

        if (!ctx) {
            return;
        }

        if (!ctx2) {
            return;
        }

        const myDataPoints = makeDataPoints(width * devicePixelRatio, height * devicePixelRatio, myStudyTimes, averageStudyTimes);
        setCurrentDataPoints(myDataPoints);
        const averageDataPoints = makeDataPoints(width * devicePixelRatio, height * devicePixelRatio, averageStudyTimes, myStudyTimes);

        console.log(myDataPoints);

        draw(averageDataPoints, ctx, ctx2, false);
        draw(myDataPoints, ctx, ctx2, true);

        return () => {
            canvasDiv.removeEventListener("touchstart", (event) => {
                handleTouch(event, canvasDiv, infoDiv, eachLimits);
            });

            canvasDiv.removeEventListener("touchmove", (event) => {
                handleTouch(event, canvasDiv, infoDiv, eachLimits);
            });

            canvasDiv.removeEventListener("touchend", (event) => {
                stopTouch(event, infoDiv);
            });
        }


    }, [canvasRef, canvasRef.current, canvasRef2, canvasRef2.current, canvasParentRef, canvasParentRef.current, update]);

    const draw = (dataPoints: { x: number, y: number }[], ctx: CanvasRenderingContext2D, ctx2: CanvasRenderingContext2D, mine: boolean) => {

        const devicePixelRatio = window.devicePixelRatio || 1;

        dataPoints.forEach((point, index) => {
            if (index < dataPoints.length - 1) {
                drawLine(ctx, point.x, point.y, dataPoints[index + 1].x, dataPoints[index + 1].y, mine);
            }
        });

        dataPoints.forEach((point, index) => {
            // if (index === dataPoints.length - 1 && mine) {
            //     drawDotWithAnimation(ctx2, point.x, point.y, 4);
            // } else {
                drawDot(ctx, point.x, point.y, 4, mine);
            
        });

    };

    const makeDataPoints = (width: number, height: number, targetStudyTimes: number[], otherStudyTimes: number[]) => {

        const eachBardWidth = width / 7;

        const startXPoint = eachBardWidth / 2;
        const XPointGap = eachBardWidth;

        const dataPoints: { x: number, y: number }[] = [];

        var max = 0;

        targetStudyTimes.forEach(time => {
            if (time > max) {
                max = time;
            }
        });

        otherStudyTimes.forEach(time => {
            if (time > max) {
                max = time;
            }
        });

        var startX = startXPoint;
        targetStudyTimes.forEach((time, index) => {

            const yPoint = (height - 20) - ((time / max) * height * 0.90);

            dataPoints.push({
                x: startX,
                y: yPoint
            });

            startX += XPointGap;

        });

        return dataPoints;
    }


    const drawLine = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, mine: boolean) => {

        const devicePixelRatio = window.devicePixelRatio || 1;

        ctx.beginPath();
        ctx.lineWidth = 2 * devicePixelRatio;
        if (mine) {
            ctx.strokeStyle = "#1E6EF4";
        } else {
            ctx.strokeStyle = "#E2E2E2";
        }

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    const drawDotWithAnimation = (ctx: CanvasRenderingContext2D, x: number, y: number, initialRadius: number) => {

        const devicePixelRatio = window.devicePixelRatio || 1;

        var radius = initialRadius;
        var maxRadius = initialRadius * 1.75;
        var minRadius = initialRadius;
        var alpha = 1;
        var expanding = true;

        const draw = () => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.beginPath();
            ctx.fillStyle = `rgba(30, 110, 244, ${alpha})`;
            ctx.arc(x, y, radius * devicePixelRatio, 0, 2 * Math.PI);
            ctx.fill();

            // 각 프레임에서의 증가/감소량을 줄여서 애니메이션 속도를 느리게 함
            const radiusIncrement = 0.1; // 반지름 증가량
            const alphaIncrement = 0.01; // 투명도 변화량

            if (expanding) {
                radius += radiusIncrement;
                alpha -= alphaIncrement;
                if (alpha < 0) alpha = 0; // Ensure alpha doesn't go negative
            } else {
                radius -= radiusIncrement;
                alpha += alphaIncrement;
                if (alpha > 1) alpha = 1; // Ensure alpha doesn't go above 1
            }

            if (radius > maxRadius) {
                expanding = false;
            } else if (radius < minRadius) {
                expanding = true;
                radius = initialRadius; // Reset radius to initial value
                alpha = 1; // Reset alpha to full opacity
            }

            requestAnimationFrame(draw);
        }

        draw();

    }

    const drawDot = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, mine: boolean) => {

        const devicePixelRatio = window.devicePixelRatio || 1;

        ctx.beginPath();
        if (mine) {
            ctx.fillStyle = `#1E6EF4`;
        } else {
            ctx.fillStyle = "#E2E2E2";
        }

        ctx.arc(x, y, radius * devicePixelRatio, 0, 2 * Math.PI);
        ctx.fill();

    }

    const handleTouch = (event: TouchEvent, canvasDiv: HTMLDivElement, infoDiv : HTMLDivElement, eachLimits : number[]) => {

        const clientRect = canvasDiv.getBoundingClientRect();

        const touchableArea = {
            x: clientRect.left,
            y: clientRect.top,
            width: clientRect.width,
            height: clientRect.height
        }

        const touch = event.touches[0];
        const x = touch.clientX - touchableArea.x;
        const y = touch.clientY - touchableArea.y;

        //x가 eachLimits에 어떤 index에 속하는지 구한다.
        var index = 1;
        eachLimits.forEach((limit, i) => {
            if (x > limit) {
                index = i + 2;
            }
        });
        setCurrentBar(index);

        const infoClientRect = infoDiv.getBoundingClientRect();
        const infoWidth = infoClientRect.width;
        var isOverScreenXAxis = false;
        var isOverScreenYAxis = false;

        if (x + infoWidth > touchableArea.width) {
            isOverScreenXAxis = true;
        }

        if (y + 50 > touchableArea.height) {
            isOverScreenYAxis = true;
        }

        if (!isOverScreenXAxis) {
            infoDiv.style.left = `${x}px`;
        } else {
            infoDiv.style.left = `${x - infoWidth}px`;
        }

        // if (!isOverScreenYAxis) {
        //     infoDiv.style.top = `${y + 50}px`;
        // } else {
        //     infoDiv.style.top = `${y - 75}px`;
        // }

        infoDiv.style.top = `${y - 85}px`;

        if(x > 0 && y > 0 && x < touchableArea.width && y < touchableArea.height){
            infoDiv.style.visibility = "visible";
        }else{
            infoDiv.style.visibility = "hidden";
        }

        /*

        if(x > 0)
        setMessage(`x : ${x}, y : ${y}, width : ${touchableArea.width}, height : ${touchableArea.height}`);
        else
        setMessage('');
        */
    }

    const stopTouch = (event: TouchEvent, infoDiv : HTMLDivElement) => {

        if(ctxTwoLayer){
            console.log("lets delete canvas2");
            console.log(ctxTwoLayer.canvas.width, ctxTwoLayer.canvas.height)
            ctxTwoLayer.clearRect(0, 0, ctxTwoLayer.canvas.width, ctxTwoLayer.canvas.height);
        }
        else{
            console.log("ctxTwoLayer is null");
        }
        event.preventDefault();
        infoDiv.style.visibility = "hidden";


    }




    return (
        <div className={styles.compBody}>
            <div className={styles.compTitleDiv}>
                <div className={`${styles.compTitle2} ${styles.compTitleBreak} ${styles.nonSelect}`}>
                    오늘은 평소보다<br />32분 더 공부하셨네요!
                </div>
                <div className={styles.fluteDiv}>
                    <Flute className={styles.flute} />
                </div>
            </div>
            <div className={`${styles.compSubTitle1} ${styles.nonSelect}`}>
                1주일 평균 공부시간 <span>7시간 10분</span>
            </div>
            <div className={styles.canvasDiv} ref={canvasParentRef}>
                <canvas
                    className={styles.canvas}
                    ref={canvasRef}
                />
                <canvas
                    className={styles.canvas2}
                    ref={canvasRef2}
                />
                <div className={styles.canvasInfoTab} ref={infoRef}>
                    <div className={styles.dateInfo} ref={dateRef}>
                    </div>
                    <div className={styles.myTimeInfo}>
                        <div className={styles.infoDot} />
                        <div className={styles.myTime} ref={myTimeRef}>
                        </div>
                    </div>
                    <div className={styles.averageTimeInfo}>
                        <div className={styles.infoDot} />
                        <div className={styles.averageTime} ref={averageTimeRef}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.chartDateDiv}>
                {
                    new Array(7).fill(0).map((el, index) => {

                        const date = new Date();
                        date.setDate(date.getDate() - (6 - index));

                        const month = date.getMonth() + 1;
                        const dateNumber = date.getDate();

                        const day = date.getDay();
                        var dayString = "";

                        dayString = "일월화수목금토"[day];

                        return (
                            <div className={styles.eachDateDiv} key={index}>
                                <div className={styles.eachDate}>
                                    {month}.{dateNumber}
                                </div>
                                <div className={styles.eachDay}>
                                    {dayString}요일
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.chartNameDiv}>
                <div className={`${styles.myNameDiv} ${styles.nameDiv}`}>
                    <div className={styles.line}>

                    </div>
                    <div className={styles.name}>
                        윤종웅님
                    </div>
                </div>
                <div className={`${styles.averageNameDiv} ${styles.nameDiv}`}>
                    <div className={styles.line}>

                    </div>
                    <div className={styles.name}>
                        강남점 평균
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudytimeChart;