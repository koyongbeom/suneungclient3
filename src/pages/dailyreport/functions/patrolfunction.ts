import { each, max } from "lodash"
import { patrolTime, qrSeatData } from "../data/data"

interface PatrolResult {
    type: "smile" | "cry" | "zzz" | "x" | "nophone" | "none" | "lasttime" | "phone";
    time: string;
    class?: string;
}

interface QrCheckData {
    id: number;
    location: string;
    room: string;
    createdAt: string;
    dateString : string;
}

interface SeatPatrolData {
    [index : number] : {
        [key : string] : {
            didPatrol : boolean;
            createdAt? : string;
            dateString? : string;
        }
    } 
}

export const sortStudentList = (studentList: any[]) => {

    studentList.sort((a, b) => {
        const aSeat = a.seat ? +a.seat : 0;
        const bSeat = b.seat ? +b.seat : 0;

        if (aSeat < bSeat) {
            return -1;
        }

        if (aSeat > bSeat) {
            return 1;
        }

        return 0;

    });

}

export const prettifyQrCheckData = (qrCheckDatas: QrCheckData[]) => {

    qrCheckDatas.forEach((eachQrCheckData) => {

        const date = new Date(eachQrCheckData.createdAt);
        const dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + date.getSeconds();
        eachQrCheckData.dateString = dateString;

    })

}

export const prettifyAccessControl = (studentList: any) => {

    studentList.forEach((eachStudent: any) => {

        eachStudent.accessControl.forEach((eachAccessControl: any) => {

            const date = new Date(+eachAccessControl.time);

            //datestring YYYY-MM-DD HH:MM:SS
            const dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + date.getSeconds();

            eachAccessControl.dateString = dateString;

        })

    })

}

export const distinguishInAndOut = (studentList: any, seatPatrolData: SeatPatrolData, targetDate : Date) => {

    var isToday = false;

    const date = new Date();

    if(targetDate.getFullYear() === date.getFullYear() && targetDate.getMonth() === date.getMonth() && targetDate.getDate() === date.getDate()){
        isToday = true;
    }

    const currentTargetTime = date.getHours() * 60 + date.getMinutes();

    studentList.forEach((eachStudent: any) => {
        eachStudent.patrolData = {};

        patrolTime.forEach((eachPatrol, classNumber) => {

            eachPatrol.time.forEach((eachTime, number) => {

                const title = `${classNumber}교시_${number}`;

                const targetHour = +eachTime.split(":")[0];
                const targetMinute = +eachTime.split(":")[1];
                const targetTime = targetHour * 60 + targetMinute;

                if(isToday && currentTargetTime < targetTime){
                    return;
                }

                eachStudent.patrolData[title] = {
                    didPatrol: false
                }
            });

        })

        const eachStudentSeatNumber = eachStudent.seat ? +eachStudent.seat : 0;

        if (!eachStudentSeatNumber) {
            console.log("returned");
            return;
        }

        const eachStudentSeatPatrolData = seatPatrolData[eachStudentSeatNumber];

        for (const key in eachStudentSeatPatrolData) {
            const didPatrol = eachStudentSeatPatrolData[key].didPatrol;
            if (didPatrol && eachStudent.patrolData[key]) {
                eachStudent.patrolData[key].didPatrol = true;
                eachStudent.patrolData[key].createdAt = eachStudentSeatPatrolData[key].createdAt;
                eachStudent.patrolData[key].dateString = eachStudentSeatPatrolData[key].dateString;
                eachStudent.patrolData[key].status = "out";

                const patrolCreatedAt = eachStudentSeatPatrolData[key].createdAt;
                const createdAtDate = new Date(patrolCreatedAt!!);
                const createdAtTime = createdAtDate.getTime();

                var lastAccessControl: any;

                eachStudent.accessControl.forEach((eachAccessControl: any) => {
                    const accessControlTime = +eachAccessControl.time;
                    if (createdAtTime > accessControlTime) {
                        lastAccessControl = eachAccessControl;
                    }
                });
                if (lastAccessControl && lastAccessControl.direction === "outside") {
                    eachStudent.patrolData[key].status = "in";
                }

            }
        }

        eachStudent.patrolManager.forEach((eachPatrolManager: any) => {

            const createdAtDate = new Date(eachPatrolManager.createdAt);
            const evaluateTime = createdAtDate.getHours() * 60 + createdAtDate.getMinutes();

            // 각 교시에 각 자리에 대한 QR 체크 데이터가 있는지 확인
            patrolTime.forEach((eachPatrol, classNumber) => {
                eachPatrol.time.forEach((eachTime, number) => {
                    const oneRow: any = {};

                    const title = `${classNumber}교시_${number}`;

                    const targetHour = +eachTime.split(":")[0];
                    const targetMinute = +eachTime.split(":")[1];
                    const targetTime = targetHour * 60 + targetMinute;

                    const targetMinimum = targetTime - 5;
                    const targetMaximum = targetTime + 15;

                    if (evaluateTime > targetMinimum && evaluateTime <= targetMaximum) {
                        eachPatrolManager.title = title;
                        eachStudent.patrolData[title].fault = eachPatrolManager;
                        eachStudent.patrolData[title].isFault = true;
                    }

                })
            });

        });
    })

    //console.log(studentList);

}

export const didPatrol = (qrCheckDatas: QrCheckData[], location: "gangnam" | "daechi") => {

    var patrolData: any = {};

    if(location === "gangnam"){
        gangnamAlphatbetToNumber(qrCheckDatas);
    }

    // 각 교시에 각 자리에 대한 QR 체크 데이터가 있는지 확인
    patrolTime.forEach((eachPatrol, classNumber) => {
        eachPatrol.time.forEach((eachTime, number) => {
            const oneRow: any = {};

            const title = `${classNumber}교시_${number}`;

            patrolData[title] = [];

            const targetHour = +eachTime.split(":")[0];
            const targetMinute = +eachTime.split(":")[1];
            const targetTime = targetHour * 60 + targetMinute;

            const targetMinimum = targetTime - 5;
            const targetMaximum = targetTime + 15;

            qrCheckDatas.forEach((eachQrCheckData) => {

                const qrcheckTime = new Date(eachQrCheckData.createdAt);
                const evaluateTime = qrcheckTime.getHours() * 60 + qrcheckTime.getMinutes();

                if (evaluateTime > targetMinimum && evaluateTime <= targetMaximum) {
                    patrolData[title].push(eachQrCheckData);
                }

            });

        })
    });

    //console.log(patrolData);

    const seatData = qrSeatData[location];

    const arrayedSeatData = Object.entries(seatData);

    var maxSeat = 0;

    arrayedSeatData.forEach((eachPatrolData: any) => {

        if (eachPatrolData[1].max > maxSeat) {
            maxSeat = eachPatrolData[1].max;
        }
    });

    //console.log(maxSeat);

    const seatPatrolData : SeatPatrolData = {};

    new Array(maxSeat).fill(0).forEach((each, index) => {

        const seatNumber = index + 1;
        var myQrCheckNumber = 0;

        seatPatrolData[seatNumber] = {};

        arrayedSeatData.forEach((eachSeatData: any) => {
            if (eachSeatData[1].min <= seatNumber && eachSeatData[1].max >= seatNumber) {
                myQrCheckNumber = eachSeatData[0];
            }
        })

        patrolTime.forEach((eachPatrol, classNumber) => {

            eachPatrol.time.forEach((eachTime, number) => {

                const title = `${classNumber}교시_${number}`;
                seatPatrolData[seatNumber][title] = {
                    didPatrol : false
                }

                const classPatrolData = patrolData[title];

                classPatrolData.forEach((eachQrCheckData: QrCheckData) => {
                    if(+eachQrCheckData.room === +myQrCheckNumber){
                        seatPatrolData[seatNumber][title].didPatrol = true;
                        seatPatrolData[seatNumber][title].createdAt = eachQrCheckData.createdAt;
                        seatPatrolData[seatNumber][title].dateString = eachQrCheckData.dateString;
                    }
                });

            });

        })

    });

    //console.log(seatPatrolData);

    return seatPatrolData

}



const gangnamAlphatbetToNumber = (qrCheckDatas: QrCheckData[]) => {

    qrCheckDatas.forEach((eachQrCheckData) => {

        switch (eachQrCheckData.room) {
            case "a":
                eachQrCheckData.room = "1";
                break;
            case "b":
                eachQrCheckData.room = "2";
                break;
            case "c":
                eachQrCheckData.room = "3";
                break;
            case "d":
                eachQrCheckData.room = "4";
                break;
            case "e":
                eachQrCheckData.room = "5";
                break;
            case "f":
                eachQrCheckData.room = "6";
                break;
            case "g":
                eachQrCheckData.room = "7";
                break;
            case "h":
                eachQrCheckData.room = "8";
                break;
            case "i":
                eachQrCheckData.room = "9";
                break;
            case "j":
                eachQrCheckData.room = "10";
                break;
            case "k":
                eachQrCheckData.room = "11";
                break;
            case "l":
                eachQrCheckData.room = "12";
                break;
        }

    });

}

export const makeTotalPatrolData = (studentList : any, targetDate : Date) => {

    var isSaturday = false;

    const day = targetDate.getDay();

    if(day === 6){
        isSaturday = true;
    }

    const totalRows : any = [];

    studentList.forEach((eachStudent : any) => {

        const patrolData = eachStudent.patrolData;

        for (let [key, value] of Object.entries(patrolData)){

            const oneRow = makePatrolData(value, key); 
            totalRows.push(oneRow);    

        }

    });

    const totalGraphData : any = [];

    var i = 9;

    if(isSaturday){
        i = 5;
    }

    for(let j = 0; j < i; j++){
        totalGraphData.push([0, 0, 0]);
    }

    console.log(totalGraphData);

    totalRows.forEach((eachRow : any) => {

        const classNumber = +eachRow.class.split("교시")[0];

        if(!totalGraphData[classNumber]){
            return;
        }

        var secondIndex

        if(eachRow.type === "zzz"){
            secondIndex = 0;
        }

        if(eachRow.type === "nophone"){
            secondIndex = 1;
        }

        if(eachRow.type === "cry"){
            secondIndex = 2;
        }

        if(!secondIndex && secondIndex !== 0){
            return;
        }

        totalGraphData[classNumber][secondIndex]++;

    });

    return totalGraphData;

}

export const makeMyFullPatrolData = (studentList : any, myId : number, targetDate : Date) => {

    const myFullPatrolData : PatrolResult[][] = [];

    var isSaturday = false;

    const day = targetDate.getDay();

    if(day === 6){
        isSaturday = true;
    }

    studentList.forEach((eachStudent : any) => {

        if(eachStudent.id !== myId){
            return;
        }

        const patrolData = eachStudent.patrolData;

        var i = 0;
        var j = 0;

        console.log(patrolData)

        for (let [key, value] of Object.entries(patrolData)){

            if(isSaturday){
                if(i >= 19){
                    break;
                }
            }

            if(i%6 === 0 ){
                myFullPatrolData[j] = [];
                j++;
            }

            const oneRow = makePatrolData(value, key);     
            myFullPatrolData[j-1].push(oneRow);

            i++;
        }

        console.log(i, j);

        if(isSaturday){
            if(j===4 && i === 19){
                const oneRow : PatrolResult = {
                    type : "lasttime",
                    time : "15:40",
                    class : "4교시"
                }
                myFullPatrolData[3].push(oneRow);
            }
        }else{
            if(j=== 6 && i === 32){
                const oneRow : PatrolResult = {
                    type : "lasttime",
                    time : "22:00",
                    class : "8교시"
                }
                myFullPatrolData[5].push(oneRow);
            }
        }

    });

    return myFullPatrolData;

}



const makePatrolData = (data : any, classString : string) => {

    const {didPatrol, createdAt, dateString, status, fault, isFault} = data;

    const result : PatrolResult[][] = [];

    const date = new Date(createdAt);

    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const timeString = hour + ":" + minute;



    //순찰 안했을 경우
    if(!didPatrol){
        const type = "none";

        const oneRow : PatrolResult = {
            type,
            time : timeString,
            class : classString
        }

        return oneRow;
    }

    //자리에 없는 경우
    if(status === "out"){

        const type = "x";

        const oneRow : PatrolResult = {
            type,
            time : timeString,
            class : classString
        }

        return oneRow;

    }

    //공부중인 경우
    if(!isFault){

        const type = "smile";

        const oneRow : PatrolResult = {
            type,
            time : timeString,
            class : classString
        }

        return oneRow;
    }

    //잘못에 걸린 경우

    var type : any = "";

    const selectedType = fault.selectedType;

    switch (selectedType) {
        case "sleep" :
            type = "zzz";
            break;
        case "site" :
            type = "nophone";
            break;
        case "phone" :
            type = "phone";
            break;
        case "bad" :
            type = "cry";
            break;
    }

    const oneRow : PatrolResult = {
        type : type ? type : "none",
        time : timeString,
        class : classString
    }

    return oneRow;

}