import { each } from "lodash";

export interface userViolation {
    kind : "late" | "absent" | "early" | "among" | "lunch" | "dinner" | "lateOrAbsent" | "amongOrEarly" | "added";
    detailKind? : "regular" | "sudden" | "notDetermined" | "normal";
    orSuddenDetailKind? : "late" | "absent" | "early" | "among";
    notDeterminedReason? : string;
    enterDateString? : string,
    enterDateTime? : number,
    exitDateString? : string,
    exitDateTime? : number,
    outingDuringMealTimeMin? : number,
    outingDuringStudyTimeMin? : number,
    matchedSuddenNotices? : any[],
    matchedRegularSchedules? : any[],
    regularJustified? : boolean,
    suddenJustified? : boolean,
    enterHours? : number,
    enterMinutes? : number,
    exitHours? : number,
    exitMinutes? : number,
    etc? : string,
    suddenReason? : string,
    regularReason? : string,
    identifyId? : number,
    determinedKind? : string,
    demerit? : number,
    description? : string,
    decided? : string,
    sendDemerit? : string,
    memo? : string,
    cancelDemerit? : string,
    userId? : number,
    targetDate? : Date,
}

const classInfo = [
    {
        classNumber: "zero",
        start: {
            hours: 8,
            minutes: 0
        },
        end: {
            hours: 8,
            minutes: 45
        }

    },
    {
        classNumber: "first",
        start: {
            hours: 9,
            minutes: 0
        },
        end: {
            hours: 10,
            minutes: 15
        }
    },
    {
        classNumber: "second",
        start: {
            hours: 10,
            minutes: 30
        },
        end: {
            hours: 11,
            minutes: 45
        }
    },
    {
        classNumber: "third",
        start: {
            hours: 13,
            minutes: 0
        },
        end: {
            hours: 14,
            minutes: 15
        }
    },
    {
        classNumber: "fourth",
        start: {
            hours: 14,
            minutes: 30
        },
        end: {
            hours: 15,
            minutes: 45
        }

    },
    {
        classNumber: "fifth",
        start: {
            hours: 16,
            minutes: 0
        },
        end: {
            hours: 17,
            minutes: 15
        }
    },
    {
        classNumber: "sixth",
        start: {
            hours: 18,
            minutes: 30
        },
        end: {
            hours: 19,
            minutes: 30
        }

    },
    {
        classNumber: "seventh",
        start: {
            hours: 19,
            minutes: 45
        },
        end: {
            hours: 20,
            minutes: 45
        }

    },
    {
        classNumber: "eighth",
        start: {
            hours: 21,
            minutes: 0
        },
        end: {
            hours: 22,
            minutes: 0
        }
    },
    {
        classNumber : "lunch",
        start : {
            hours : 11,
            minutes : 45
        },
        end : {
            hours : 13,
            minutes : 0
        }
    },
    {
        classNumber : "dinner",
        start : {
            hours : 17,
            minutes : 15
        },
        end : {
            hours : 18,
            minutes : 30
        }
    }

];

var saturdayEndTime = 945;

const canStudyReasonList = [
    "학원", "특강", "보강", "보충", "수업", "단과", "현강", "과외", "T", "시대인재", "메가",
    "러셀", "자료", "상담", "입반", "테스트", "해설", "해설강의", "강의", "입시", "입시 설명회",
    "설명회", "학교", "등교", "내신", "수행평가", "수행", "원서", "모의고사", "접수", "신청", "중간고사",
    "기말고사", "응시", "시험", "경찰대", "사관학교", "정규", "정기", "정기일정", "일정", "기타",
    "자율등원", "확진", "신검", "신체검사"
];

export const filterMainStudentList = (studentList: any, targetDate: Date) => {

    const targetDateTime = targetDate.getTime();

    const newStudentList = studentList.filter((eachStudent: any) => {

        if (eachStudent.firstCome) {

            const firstComeDate = new Date(eachStudent.firstCome);
            const firstComeDateTime = firstComeDate.getTime();

            if (firstComeDateTime <= targetDateTime) {
                return true;
            } else {
                return false;
            }

        } else {
            return true;
        }

    });

    return newStudentList;

}

export const sortMainStudentList = (studentList: any) => {

    //studentlist의 countResult.notSendDemeritRowCounter를 기준으로 내림차순 정렬한다.
    //studentList의 countResult가 없는 경우는 -1으로 간주한다.
    //studentList의 countResult.notSendDemeritRowCounter가 없는 경우는 -1으로 간주한다.

    // studentList.sort((a: any, b: any) => {

    //     var afterCountResult = a.countResult ? a.countResult.notSendDemeritRowCounter ? a.countResult.notSendDemeritRowCounter : -1 : -1;
    //     var beforeCountResult = b.countResult ? b.countResult.notSendDemeritRowCounter ? b.countResult.notSendDemeritRowCounter: -1 : -1;

    //     return beforeCountResult - afterCountResult;

    // })

    //studentlist의 countResult.notDecidedRowCounter를 기준으로 내림차순 정렬한다.
    //studentList의 countResult가 없는 경우는 -1으로 간주한다.
    //studentList의 countResult.notDecidedRowCounter가 없는 경우는 -1으로 간주한다.

    // studentList.sort((a: any, b: any) => {

    //     var afterCountResult = a.countResult ? a.countResult.notDecidedRowCounter ? a.countResult.notDecidedRowCounter : -1 : -1;
    //     var beforeCountResult = b.countResult ? b.countResult.notDecidedRowCounter ? b.countResult.notDecidedRowCounter: -1 : -1;

    //     return beforeCountResult - afterCountResult;

    // })

    // return studentList;


    //studentList를 seat순으로 오름차순 정렬한다.
    //studentList의 seat가 없는 경우는 -1으로 간주한다.
    studentList.sort((a: any, b: any) => {
            
            var afterSeat = a.seat ? +a.seat : -1;
            var beforeSeat = b.seat ? +b.seat : -1;
    
            return afterSeat - beforeSeat;
    
    })
}

export const judgeViolation = (preAccessControlData: any[], targetDate: Date) => {

    const targetDateDay = targetDate.getDay();
    var isSaturday = false;

    if (targetDateDay === 6) {
        isSaturday = true;
    }


    const accessControlData = preAccessControlData.filter((eachAccessControl: any) => {

        const date = new Date(+eachAccessControl.time);

        if (isSaturday) {
            const dateHours = date.getHours();
            const dateMin = date.getMinutes();

            //14:40
            const dateCalc = dateHours * 60 + dateMin;

            if (dateCalc < saturdayEndTime) {
                return true;
            } else {
                return false;
            }
        } else {
            if (date.getHours() < 22) {
                return true;
            } else {
                return false;
            }
        }
    });

    console.log("isSaturdata");
    console.log(isSaturday);

    // 오늘이 아닌 날짜의 경우 userViolationList는 이 4가지의 형태를 가질 수 있다.
    // {kind : absent}
    // {kind : late, enterTime : Date}
    // {kind : early, exitTime : Date}
    // {kind : among, enterTime : Date, exitTime : Date}

    //오늘이면서 10시 이하인 경우 userViolationList는 이 4가지의 형태를 가질 수 있다.
    // {kind : lateOrAbsent} 
    // {kind : amongOrEarly, exitTime : Date}
    // {kind : late, enterTime : Date}
    // {kind : among, enterTime : Date, exitTime : Date}

    //console.log("startJudge");

    const userViolationList: userViolation[] = [];

    var targetDateIsToday = false;
    var isOverPm10 = false;

    const date = new Date();

    if (date.getFullYear() === targetDate.getFullYear() && date.getMonth() === targetDate.getMonth() && date.getDate() === targetDate.getDate()) {
        targetDateIsToday = true;
    }

    if (date.getHours() >= 22) {
        isOverPm10 = true;
    }

    if (isSaturday) {

        const dateCalcTime = date.getHours() * 60 + date.getMinutes();

        if (dateCalcTime >= saturdayEndTime) {
            isOverPm10 = true;
        }
    }

    if (!targetDateIsToday || isOverPm10) {


        console.log(accessControlData);

        //결석 판단. 출입기록이 하나도 없는 경우
        if (accessControlData.length === 0) {
            userViolationList.push({ kind: "absent" });
        } else {

            //-------------------------------------------------------------------------------------------------------------------------------------------------------
            //지각 판단. 첫 출입기록이 08:00 이후인 경우
            const firstAccessControlData = accessControlData[0];
            const firstAccessControlDate = new Date(+firstAccessControlData.time);
            const firstAccessControlDateTime = firstAccessControlDate.getTime();
            const firstAccessControlDateString = `${firstAccessControlDate.getFullYear()}-${firstAccessControlDate.getMonth() + 1}-${firstAccessControlDate.getDate()} ${firstAccessControlDate.getHours()}:${firstAccessControlDate.getMinutes()}:${firstAccessControlDate.getSeconds()}`

            if (firstAccessControlDateTime >= new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 8, 1, 0).getTime()) {
                userViolationList.push({ kind: "late", enterDateTime: firstAccessControlDateTime, enterDateString: firstAccessControlDateString });
            }
            //---------------------------------------------------------------------------------------------------------------------------------------------------------

            //---------------------------------------------------------------------------------------------------------------------------------------------------------
            //조퇴 판단. 마지막 출입기록이 OUT인 경우
            const lastAccessControlData = accessControlData[accessControlData.length - 1];
            const lastAccessControlDate = new Date(+lastAccessControlData.time);
            const lastAccessControlDateTime = lastAccessControlDate.getTime();
            const lastAccessControlDateString = `${lastAccessControlDate.getFullYear()}-${lastAccessControlDate.getMonth() + 1}-${lastAccessControlDate.getDate()} ${lastAccessControlDate.getHours()}:${lastAccessControlDate.getMinutes()}:${lastAccessControlDate.getSeconds()}`

            if (lastAccessControlData.direction === "inside") {
                console.log("이건 조퇴 맞앙 !!!");
                userViolationList.push({ kind: "early", exitDateTime: lastAccessControlDateTime, exitDateString: lastAccessControlDateString });
            }

            //---------------------------------------------------------------------------------------------------------------------------------------------------------

            //---------------------------------------------------------------------------------------------------------------------------------------------------------
            //외출 판단. 교시 중 10분 이상 식사시간 60분 이상 외출한 경우
            //accesscontroldata
            //outingData = [
            //   {
            //      exitDateTime, exitDateString, enterDateTime, enterDateString, outingDuringStudyTimeMin, outingDuringMealTimeMin
            //  }
            //              ]

            const outingData: any = [];

            var exitDateTime: any = undefined;
            var exitDateString: any = undefined;
            var enterDateTime: any = undefined;
            var enterDateString: any = undefined;

            accessControlData.forEach((eachAccessControlData: any) => {

                if (eachAccessControlData.direction === "inside") {

                    exitDateTime = +eachAccessControlData.time;

                    const exitDate = new Date(+eachAccessControlData.time);

                    exitDateString = `${exitDate.getFullYear()}-${exitDate.getMonth() + 1}-${exitDate.getDate()} ${exitDate.getHours()}:${exitDate.getMinutes()}:${exitDate.getSeconds()}`;
                }

                if (eachAccessControlData.direction === "outside") {

                    //들어왔는데 그 전에 나간 기록이 없으면 무효화시킨다.
                    if (!exitDateTime) {
                        return;
                    }

                    enterDateTime = +eachAccessControlData.time;

                    const enterDate = new Date(+eachAccessControlData.time);

                    enterDateString = `${enterDate.getFullYear()}-${enterDate.getMonth() + 1}-${enterDate.getDate()} ${enterDate.getHours()}:${enterDate.getMinutes()}:${enterDate.getSeconds()}`;

                    const oneOutingData = {
                        exitDateTime, exitDateString, enterDateTime, enterDateString
                    }

                    outingData.push(oneOutingData);

                    exitDateTime = undefined;
                    exitDateString = undefined;
                    enterDateTime = undefined;
                    enterDateString = undefined;

                }

            });

            outingData.forEach((eachOutingData: any) => {

                //outingData를 수업시간 중 외출 시간이랑 식사 시간 외출 시간으로 나눈다.
                var outingDuringStudyTimeMin = 0;
                var outingDuringMealTimeMin = 0;

                const exitDate = new Date(eachOutingData.exitDateTime);
                const enterDate = new Date(eachOutingData.enterDateTime);

                //console.log("enterDate");
                //console.log(enterDate);

                const exitHours = exitDate.getHours();
                const exitMinutes = exitDate.getMinutes();

                const exitCalcTime = exitHours * 60 + exitMinutes;

                const enterHours = enterDate.getHours();
                const enterMinutes = enterDate.getMinutes();

                const enterCalcTime = enterHours * 60 + enterMinutes;

                classInfo.forEach((eachClassInfo) => {

                    const eachClassInfoStartCalcTime = eachClassInfo.start.hours * 60 + eachClassInfo.start.minutes;
                    const eachClassInfoEndCalcTime = eachClassInfo.end.hours * 60 + eachClassInfo.end.minutes;

                    //console.log(eachClassInfoStartCalcTime);
                    //console.log(eachClassInfoEndCalcTime);
                    //console.log(enterCalcTime);
                    //console.log(exitCalcTime);

                    var sumMin = 0;

                    //나간시간이 교시시작보다 작고 들어온 시간이 교시 끝나는 시간보다 작은 경우. (작, 작)
                    //근데 이 경우는 들어온 시간이 교시 시작시간보다 클 경우만 연산
                    if (exitCalcTime <= eachClassInfoStartCalcTime && enterCalcTime <= eachClassInfoEndCalcTime) {

                        //console.log("letsCalc1");

                        if (enterCalcTime < eachClassInfoStartCalcTime) {
                            return;
                        }
                        sumMin += (enterCalcTime - eachClassInfoStartCalcTime);
                    }

                    //나간시간이 교시시작보다 크고 들어온 시간이 교시 끝나는 시간보다 작은 경우 (크, 작)
                    if (exitCalcTime > eachClassInfoStartCalcTime && enterCalcTime <= eachClassInfoEndCalcTime) {

                        //console.log("letsCalc2");

                        sumMin += (enterCalcTime - exitCalcTime);
                    }

                    //나간시간이 교시시작보다 크고 들어온 시간이 교시 끝나는 시간보다 큰 경우 (크, 크)
                    //근데 이 경우 나간 시간이 교시 끝나는 시간보다 작은 경우만 연산
                    if (exitCalcTime > eachClassInfoStartCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {

                        //console.log("letsCalc3");


                        if (exitCalcTime > eachClassInfoEndCalcTime) {
                            return;
                        }

                        sumMin += (eachClassInfoEndCalcTime - exitCalcTime);

                    }

                    //나간시간이 교시시작보다 작고 들어온 시간이 교시 끝나는 시간보다 큰 경우 (작, 크)
                    if (exitCalcTime <= eachClassInfoStartCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {

                        //console.log("letsCalc4");


                        sumMin += eachClassInfoEndCalcTime - eachClassInfoStartCalcTime;

                    }

                    if (eachClassInfo.classNumber === "lunch" || eachClassInfo.classNumber === "dinner") {
                        outingDuringMealTimeMin += sumMin;
                    } else {
                        outingDuringStudyTimeMin += sumMin;
                    }

                    //점심시간 끝나는 시간이나 저녁시간 끝나는 시간을 끼고 있는지 검사한다.
                    if (eachClassInfo.classNumber === "lunch") {
                        if (exitCalcTime < eachClassInfoEndCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {
                            eachOutingData.hasLunch = true;
                        }
                    }

                    if (eachClassInfo.classNumber === "dinner") {
                        if (exitCalcTime < eachClassInfoEndCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {
                            eachOutingData.hasDinner = true;
                        }
                    }


                })

                eachOutingData.outingDuringMealTimeMin = outingDuringMealTimeMin;
                eachOutingData.outingDuringStudyTimeMin = outingDuringStudyTimeMin;

            });

            //외출 위반 기록을 위반 기록에 넣는다.
            outingData.forEach((eachOutingData: any) => {

                const oneRow: userViolation = {
                    kind: "among",
                    exitDateTime: eachOutingData.exitDateTime,
                    exitDateString: eachOutingData.exitDateString,
                    enterDateTime: eachOutingData.enterDateTime,
                    enterDateString: eachOutingData.enterDateString,
                    outingDuringMealTimeMin: eachOutingData.outingDuringMealTimeMin,
                    outingDuringStudyTimeMin: eachOutingData.outingDuringStudyTimeMin
                }

                if (oneRow.outingDuringStudyTimeMin!! > 10) {
                    userViolationList.push(oneRow);
                } else {
                    if (eachOutingData.hasLunch) {
                        oneRow.kind = "lunch";
                        userViolationList.push(oneRow);
                    }

                    if (eachOutingData.hasDinner) {
                        oneRow.kind = "dinner";
                        userViolationList.push(oneRow);
                    }
                }

            })
            //---------------------------------------------------------------------------------------------------------------------------------------------------------

        }
    }




    //오늘 10시 전 검사일 경우 !!
    if (targetDateIsToday && !isOverPm10) {

        //console.log("todayinspect");

        //오늘이면서 10시 이하인 경우 userViolationList는 이 4가지의 형태를 가질 수 있다.
        // {kind : lateOrAbsent} 
        // {kind : amongOrEarly, exitTime : Date}
        // {kind : late, enterTime : Date}
        // {kind : among, enterTime : Date, exitTime : Date}

        //결석 판단. 출입기록이 하나도 없는 경우
        if (accessControlData.length === 0) {
            userViolationList.push({ kind: "lateOrAbsent" });
        } else {

            //-------------------------------------------------------------------------------------------------------------------------------------------------------
            //지각 판단. 첫 출입기록이 08:00 이후인 경우
            const firstAccessControlData = accessControlData[0];
            const firstAccessControlDate = new Date(+firstAccessControlData.time);
            const firstAccessControlDateTime = firstAccessControlDate.getTime();
            const firstAccessControlDateString = `${firstAccessControlDate.getFullYear()}-${firstAccessControlDate.getMonth() + 1}-${firstAccessControlDate.getDate()} ${firstAccessControlDate.getHours()}:${firstAccessControlDate.getMinutes()}:${firstAccessControlDate.getSeconds()}`

            if (firstAccessControlDateTime >= new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 8, 1, 0).getTime()) {
                userViolationList.push({ kind: "late", enterDateTime: firstAccessControlDateTime, enterDateString: firstAccessControlDateString });
            }
            //---------------------------------------------------------------------------------------------------------------------------------------------------------

            //---------------------------------------------------------------------------------------------------------------------------------------------------------
            //조퇴 판단. 마지막 출입기록이 OUT이면서 교시 중 10분 이상 혹은 식사시간 중 60분 이상 경과한 경우
            const lastAccessControlData = accessControlData[accessControlData.length - 1];
            const lastAccessControlDate = new Date(+lastAccessControlData.time);
            const lastAccessControlDateTime = lastAccessControlDate.getTime();
            const lastAccessControlDateString = `${lastAccessControlDate.getFullYear()}-${lastAccessControlDate.getMonth() + 1}-${lastAccessControlDate.getDate()} ${lastAccessControlDate.getHours()}:${lastAccessControlDate.getMinutes()}:${lastAccessControlDate.getSeconds()}`

            if (lastAccessControlData.direction === "inside") {

                //outingData를 수업시간 중 외출 시간이랑 식사 시간 외출 시간으로 나눈다.
                var outingDuringStudyTimeMin = 0;
                var outingDuringMealTimeMin = 0;

                const exitDate = new Date(lastAccessControlDateTime);
                const enterDate = new Date();


                const exitHours = exitDate.getHours();
                const exitMinutes = exitDate.getMinutes();

                const exitCalcTime = exitHours * 60 + exitMinutes;

                const enterHours = enterDate.getHours();
                const enterMinutes = enterDate.getMinutes();

                const enterCalcTime = enterHours * 60 + enterMinutes;

                classInfo.forEach((eachClassInfo) => {

                    const eachClassInfoStartCalcTime = eachClassInfo.start.hours * 60 + eachClassInfo.start.minutes;
                    const eachClassInfoEndCalcTime = eachClassInfo.end.hours * 60 + eachClassInfo.end.minutes;


                    var sumMin = 0;

                    //나간시간이 교시시작보다 작고 들어온 시간이 교시 끝나는 시간보다 작은 경우. (작, 작)
                    //근데 이 경우는 들어온 시간이 교시 시작시간보다 클 경우만 연산
                    if (exitCalcTime <= eachClassInfoStartCalcTime && enterCalcTime <= eachClassInfoEndCalcTime) {

                        //console.log("letsCalc1");

                        if (enterCalcTime < eachClassInfoStartCalcTime) {
                            return;
                        }
                        sumMin += (enterCalcTime - eachClassInfoStartCalcTime);
                    }

                    //나간시간이 교시시작보다 크고 들어온 시간이 교시 끝나는 시간보다 작은 경우 (크, 작)
                    if (exitCalcTime > eachClassInfoStartCalcTime && enterCalcTime <= eachClassInfoEndCalcTime) {

                        //console.log("letsCalc2");

                        sumMin += (enterCalcTime - exitCalcTime);
                    }

                    //나간시간이 교시시작보다 크고 들어온 시간이 교시 끝나는 시간보다 큰 경우 (크, 크)
                    //근데 이 경우 나간 시간이 교시 끝나는 시간보다 작은 경우만 연산
                    if (exitCalcTime > eachClassInfoStartCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {

                        //console.log("letsCalc3");


                        if (exitCalcTime > eachClassInfoEndCalcTime) {
                            return;
                        }

                        sumMin += (eachClassInfoEndCalcTime - exitCalcTime);

                    }

                    //나간시간이 교시시작보다 작고 들어온 시간이 교시 끝나는 시간보다 큰 경우 (작, 크)
                    if (exitCalcTime <= eachClassInfoStartCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {

                        //console.log("letsCalc4");


                        sumMin += eachClassInfoEndCalcTime - eachClassInfoStartCalcTime;

                    }

                    if (eachClassInfo.classNumber === "lunch" || eachClassInfo.classNumber === "dinner") {
                        outingDuringMealTimeMin += sumMin;
                    } else {
                        outingDuringStudyTimeMin += sumMin;
                    }

                })

                // if (outingDuringMealTimeMin > 60 || outingDuringStudyTimeMin > 10) {
                //     userViolationList.push({ kind: "amongOrEarly", exitDateTime: lastAccessControlDateTime, exitDateString: lastAccessControlDateString, outingDuringMealTimeMin, outingDuringStudyTimeMin });
                // }

                //수업시간 중 10분 이상 넘은 경우만 위반 기록에 넣는다.
                if(outingDuringStudyTimeMin > 10){
                    userViolationList.push({ kind: "amongOrEarly", exitDateTime: lastAccessControlDateTime, exitDateString: lastAccessControlDateString, outingDuringMealTimeMin, outingDuringStudyTimeMin });
                }

            }

            //---------------------------------------------------------------------------------------------------------------------------------------------------------

            //---------------------------------------------------------------------------------------------------------------------------------------------------------
            //외출 판단. 교시 중 10분 이상 식사시간 60분 이상 외출한 경우
            //accesscontroldata
            //outingData = [
            //   {
            //      exitDateTime, exitDateString, enterDateTime, enterDateString, outingDuringStudyTimeMin, outingDuringMealTimeMin
            //  }
            //              ]

            const outingData: any = [];

            var exitDateTime: any = undefined;
            var exitDateString: any = undefined;
            var enterDateTime: any = undefined;
            var enterDateString: any = undefined;

            accessControlData.forEach((eachAccessControlData: any) => {

                if (eachAccessControlData.direction === "inside") {

                    exitDateTime = +eachAccessControlData.time;

                    const exitDate = new Date(+eachAccessControlData.time);

                    exitDateString = `${exitDate.getFullYear()}-${exitDate.getMonth() + 1}-${exitDate.getDate()} ${exitDate.getHours()}:${exitDate.getMinutes()}:${exitDate.getSeconds()}`;
                }

                if (eachAccessControlData.direction === "outside") {

                    //들어왔는데 그 전에 나간 기록이 없으면 무효화시킨다.
                    if (!exitDateTime) {
                        return;
                    }

                    enterDateTime = +eachAccessControlData.time;

                    const enterDate = new Date(+eachAccessControlData.time);

                    enterDateString = `${enterDate.getFullYear()}-${enterDate.getMonth() + 1}-${enterDate.getDate()} ${enterDate.getHours()}:${enterDate.getMinutes()}:${enterDate.getSeconds()}`;

                    const oneOutingData = {
                        exitDateTime, exitDateString, enterDateTime, enterDateString
                    }

                    outingData.push(oneOutingData);

                    exitDateTime = undefined;
                    exitDateString = undefined;
                    enterDateTime = undefined;
                    enterDateString = undefined;

                }

            });

            outingData.forEach((eachOutingData: any) => {

                //outingData를 수업시간 중 외출 시간이랑 식사 시간 외출 시간으로 나눈다.
                var outingDuringStudyTimeMin = 0;
                var outingDuringMealTimeMin = 0;

                const exitDate = new Date(eachOutingData.exitDateTime);
                const enterDate = new Date(eachOutingData.enterDateTime);

                const exitHours = exitDate.getHours();
                const exitMinutes = exitDate.getMinutes();

                const exitCalcTime = exitHours * 60 + exitMinutes;

                const enterHours = enterDate.getHours();
                const enterMinutes = enterDate.getMinutes();

                const enterCalcTime = enterHours * 60 + enterMinutes;

                //console.log("start");
                //console.log(exitHours);
                //console.log(exitMinutes);
                //console.log("enter");
                //console.log(enterHours);
                //console.log(enterMinutes);


                classInfo.forEach((eachClassInfo) => {

                    const eachClassInfoStartCalcTime = eachClassInfo.start.hours * 60 + eachClassInfo.start.minutes;
                    const eachClassInfoEndCalcTime = eachClassInfo.end.hours * 60 + eachClassInfo.end.minutes;

                    var sumMin = 0;

                    //나간시간이 교시시작보다 작고 들어온 시간이 교시 끝나는 시간보다 작은 경우. (작, 작)
                    //근데 이 경우는 들어온 시간이 교시 시작시간보다 클 경우만 연산
                    if (exitCalcTime <= eachClassInfoStartCalcTime && enterCalcTime <= eachClassInfoEndCalcTime) {

                        if (enterCalcTime < eachClassInfoStartCalcTime) {
                            return;
                        }
                        sumMin += (enterCalcTime - eachClassInfoStartCalcTime);
                        //console.log(1);
                        //console.log(sumMin);

                    }

                    //나간시간이 교시시작보다 크고 들어온 시간이 교시 끝나는 시간보다 작은 경우 (크, 작)
                    if (exitCalcTime > eachClassInfoStartCalcTime && enterCalcTime <= eachClassInfoEndCalcTime) {

                        sumMin += (enterCalcTime - exitCalcTime);
                        //console.log(2);
                        //console.log(sumMin);
                    }

                    //나간시간이 교시시작보다 크고 들어온 시간이 교시 끝나는 시간보다 큰 경우 (크, 크)
                    //근데 이 경우 나간 시간이 교시 끝나는 시간보다 작은 경우만 연산
                    if (exitCalcTime > eachClassInfoStartCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {


                        if (exitCalcTime > eachClassInfoEndCalcTime) {
                            return;
                        }

                        sumMin += (eachClassInfoEndCalcTime - exitCalcTime);
                        //console.log(3);
                        //console.log(sumMin);

                    }

                    //나간시간이 교시시작보다 작고 들어온 시간이 교시 끝나는 시간보다 큰 경우 (작, 크)
                    if (exitCalcTime <= eachClassInfoStartCalcTime && enterCalcTime > eachClassInfoEndCalcTime) {


                        sumMin += eachClassInfoEndCalcTime - eachClassInfoStartCalcTime;
                        //console.log(4);
                        //console.log(sumMin);

                    }

                    if (eachClassInfo.classNumber === "lunch" || eachClassInfo.classNumber === "dinner") {
                        outingDuringMealTimeMin += sumMin;
                        //console.log(5);
                        //console.log(sumMin);
                    } else {
                        outingDuringStudyTimeMin += sumMin;
                        //console.log(6);
                        //console.log(sumMin);
                    }

                    //console.log(sumMin);
                    //console.log(eachClassInfo.classNumber);

                })


                eachOutingData.outingDuringMealTimeMin = outingDuringMealTimeMin;
                eachOutingData.outingDuringStudyTimeMin = outingDuringStudyTimeMin;

            });

            //외출 위반 기록을 위반 기록에 넣는다.
            outingData.forEach((eachOutingData: any) => {

                const oneRow: userViolation = {
                    kind: "among",
                    exitDateTime: eachOutingData.exitDateTime,
                    exitDateString: eachOutingData.exitDateString,
                    enterDateTime: eachOutingData.enterDateTime,
                    enterDateString: eachOutingData.enterDateString,
                    outingDuringMealTimeMin: eachOutingData.outingDuringMealTimeMin,
                    outingDuringStudyTimeMin: eachOutingData.outingDuringStudyTimeMin
                }

                // if (oneRow.outingDuringMealTimeMin!! > 60 || oneRow.outingDuringStudyTimeMin!! > 10) {
                //     userViolationList.push(oneRow);
                // }

                //수업시간 중 10분 이상 넘은 경우만 위반 기록에 넣는다.
                if(oneRow.outingDuringStudyTimeMin!! > 10){
                    userViolationList.push(oneRow);
                }

            })
            //---------------------------------------------------------------------------------------------------------------------------------------------------------

        }
    }

    //exitDateTime 순으로 오름차순 정렬하고 만약 exitDateTime이 없는 애는 targetDate 아침 8시로 설정한다.

    const basicExitDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 8, 0, 0);
    const basicExitDateTime = basicExitDate.getTime();

    userViolationList.sort((a: any, b: any) => {

        var afterExitDateTime = a.exitDateTime ? a.exitDateTime : basicExitDateTime;
        var beforeExitDateTime = b.exitDateTime ? b.exitDateTime : basicExitDateTime;

        return afterExitDateTime - beforeExitDateTime;

    });




    console.log(userViolationList);

    return userViolationList;

}

const makeKoreanTypeForDrawingAccessChart = (each: userViolation) => {

    const oneRow: any = {};

    switch (each.kind) {
        case "absent":
            oneRow.kind = "결석";
            if (each.detailKind === "normal") {
                oneRow.kind = "일반결석";
                oneRow.determinedKind = "일반결석";
            }
            if (each.detailKind === "sudden") {
                oneRow.kind = "사유결석";
                oneRow.determinedKind = "사유결석";
            }
            if (each.detailKind === "notDetermined") {
                oneRow.kind = "결석 (미정)";
                oneRow.determinedKind = "미정";
            }
            if (each.detailKind === "regular") {
                oneRow.kind = "정기결석";
                oneRow.determinedKind = "정기결석";
            }
            break;
        case "late":
            oneRow.kind = "지각";
            if (each.detailKind === "normal") {
                oneRow.kind = "일반지각";
                oneRow.determinedKind = "일반지각";
            }
            if (each.detailKind === "sudden") {
                oneRow.kind = "사유지각";
                oneRow.determinedKind = "사유지각";
            }
            if (each.detailKind === "notDetermined") {
                oneRow.kind = "지각 (미정)";
                oneRow.determinedKind = "미정";
            }
            if (each.detailKind === "regular") {
                oneRow.kind = "정기지각";
                oneRow.determinedKind = "정기지각";
            }
            break;
        case "early":
            oneRow.kind = "조퇴";
            if (each.detailKind === "normal") {
                oneRow.kind = "일반조퇴";
                oneRow.determinedKind = "일반조퇴";
            }
            if (each.detailKind === "sudden") {
                oneRow.kind = "사유조퇴";
                oneRow.determinedKind = "사유조퇴";
            }
            if (each.detailKind === "notDetermined") {
                oneRow.kind = "조퇴 (미정)";
                oneRow.determinedKind = "미정";
            }
            if (each.detailKind === "regular") {
                oneRow.kind = "정기조퇴";
                oneRow.determinedKind = "정기조퇴";
            }
            break;
        case "among":
            oneRow.kind = "외출";
            if (each.detailKind === "normal") {
                oneRow.kind = "일반외출";
                oneRow.determinedKind = "일반외출";
            }
            if (each.detailKind === "sudden") {
                oneRow.kind = "사유외출";
                oneRow.determinedKind = "사유외출";
            }
            if (each.detailKind === "notDetermined") {
                oneRow.kind = "외출 (미정)";
                oneRow.determinedKind = "미정";
                oneRow.demerit = "(미정)";
            }
            if (each.detailKind === "regular") {
                oneRow.kind = "정기외출";
                oneRow.determinedKind = "정기외출";
            }
            break;

        case "lateOrAbsent":
            oneRow.kind = "지각OR결석";
            oneRow.determinedKind = "미정";
            if (each.detailKind === "sudden") {
                if (each.orSuddenDetailKind === "absent") {
                    oneRow.determinedKind = "사유결석";
                }
                if (each.orSuddenDetailKind === "late") {
                    oneRow.determinedKind = "사유지각";
                }
            }
            if (each.detailKind === "regular") {
                oneRow.determinedKind = "정기";
            }
            break;
        case "amongOrEarly":
            oneRow.kind = "외출OR조퇴";
            oneRow.determinedKind = "미정";
            if (each.detailKind === "sudden") {
                if (each.orSuddenDetailKind === "early") {
                    oneRow.determinedKind = "사유조퇴";
                }
            }
            if (each.detailKind === "regular") {
                oneRow.determinedKind = "정기";
            }
            break;
        case "lunch":
            oneRow.kind = "3교시 늦은 착석";
            oneRow.determinedKind = "늦은 착석";
            break;
        case "dinner":
            oneRow.kind = "6교시 늦은 착석";
            oneRow.determinedKind = "늦은 착석";
            break;
    }

    return oneRow.kind;

}

export const drawingAccessChart = (userViolationList: userViolation[], suddenNotice: any, regularScheduleFormat: any, targetDate: Date) => {

    const targetDateDay = targetDate.getDay();
    var isSaturday = false;

    if (targetDateDay === 6) {
        isSaturday = true;
    }

    console.log(userViolationList);
    console.log(suddenNotice);
    console.log(regularScheduleFormat);

    const drawingList: any = [];

    const editedSuddenNotice = editSudden(suddenNotice) ? editSudden(suddenNotice) : [];
    const editedRegularScheduleFormat = editRegular(regularScheduleFormat, targetDate) ? editRegular(regularScheduleFormat, targetDate) : [];

    console.log("aaa");

    //위반 기록 순으로 정렬
    userViolationList.forEach((eachUserViolation: any) => {

        if (eachUserViolation.kind === "added") {
            return;
        }

        eachUserViolation.drawingList = [];

        const koreanType = makeKoreanTypeForDrawingAccessChart(eachUserViolation);

        const eachDrawingList: any = [];

        var exitTime = 480;
        var exitTimeString = makeTimeString(exitTime);



        var enterTime = 1320;
        if (isSaturday) {
            enterTime = saturdayEndTime;
        }
        var enterTimeString = makeTimeString(enterTime);

        if (eachUserViolation.exitDateTime) {
            const exitDate = new Date(eachUserViolation.exitDateTime);
            exitTime = exitDate.getHours() * 60 + exitDate.getMinutes();
            exitTimeString = makeTimeString(exitTime);
        }

        if (eachUserViolation.enterDateTime) {
            const enterDate = new Date(eachUserViolation.enterDateTime);
            enterTime = enterDate.getHours() * 60 + enterDate.getMinutes();
            enterTimeString = makeTimeString(enterTime);
        }

        if (eachUserViolation.kind === "lateOrAbsent") {
            const enterDate = new Date();
            enterTime = enterDate.getHours() * 60 + enterDate.getMinutes();
            if (isSaturday) {
                if (enterTime > saturdayEndTime) {
                    enterTime = saturdayEndTime;
                }
            } else {
                if (enterTime > 1320) {
                    enterTime = 1320;
                }
            }
            enterTimeString = makeTimeString(enterTime);
        }

        if (eachUserViolation.kind === "amongOrEarly") {
            const enterDate = new Date();
            enterTime = enterDate.getHours() * 60 + enterDate.getMinutes();
            if (isSaturday) {
                if (enterTime > saturdayEndTime) {
                    enterTime = saturdayEndTime;
                }
            } else {
                if (enterTime > 1320) {
                    enterTime = 1320;
                }
            }
            enterTimeString = makeTimeString(enterTime);
        }

        eachDrawingList.push({
            kind: "access",
            type: eachUserViolation.kind,
            status: "out",
            time: exitTime,
            timeString: exitTimeString,
            koreanType
        });

        eachDrawingList.push({
            kind: "access",
            type: eachUserViolation.kind,
            status: "in",
            time: enterTime,
            timeString: enterTimeString,
            koreanType
        });

        console.log("bbb");


        //얘랑 접점이 있는 suddenNotice를 eachDrawingList에 넣어준다.
        editedSuddenNotice.forEach((eachSuddenNotice: any, index : number) => {

            var suddenExitTime = 480;
            var suddenExitTimeString = makeTimeString(suddenExitTime);

            var suddenEnterTime = 1320;
            if (isSaturday) {
                suddenEnterTime = saturdayEndTime;
            }
            var suddenEnterTimeString = makeTimeString(suddenEnterTime);

            if (eachSuddenNotice.exitHours) {
                suddenExitTime = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;
                suddenExitTimeString = makeTimeString(suddenExitTime);
            }

            if (eachSuddenNotice.enterHours) {
                suddenEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

                if (isSaturday) {
                    if (suddenEnterTime > saturdayEndTime) {
                        suddenEnterTime = saturdayEndTime;
                    }
                } else {
                    if (suddenEnterTime > 1320) {
                        suddenEnterTime = 1320;
                    }
                }

                suddenEnterTimeString = makeTimeString(suddenEnterTime);
            }

            if (suddenEnterTime >= exitTime - 10 && suddenExitTime <= enterTime + 10) {

                eachDrawingList.push({
                    kind: "sudden",
                    id : index,
                    type: eachSuddenNotice.type,
                    status: "out",
                    time: suddenExitTime,
                    timeString: suddenExitTimeString,
                    reason: eachSuddenNotice.reason,
                    parentpermit: eachSuddenNotice.parentpermit,
                    sqlId : eachSuddenNotice.id
                });

                eachDrawingList.push({
                    kind: "sudden",
                    id : index,
                    type: eachSuddenNotice.type,
                    status: "in",
                    time: suddenEnterTime,
                    timeString: suddenEnterTimeString,
                    reason: eachSuddenNotice.reason,
                    parentpermit: eachSuddenNotice.parentpermit,
                    sqlId : eachSuddenNotice.id
                });
            }

        });

        console.log("ccc");

        //얘랑 접점이 있는 regularScheduleFormat을 eachDrawingList에 넣어준다.
        editedRegularScheduleFormat.forEach((eachRegularScheduleFormat: any, index : number) => {

            var regularExitTime = 480;
            var regularExitTimeString = makeTimeString(regularExitTime);

            var regularEnterTime = 1320;
            if (isSaturday) {
                regularEnterTime = saturdayEndTime;
            }
            var regularEnterTimeString = makeTimeString(regularEnterTime);

            if (eachRegularScheduleFormat.exitHours) {
                regularExitTime = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;
                regularExitTimeString = makeTimeString(regularExitTime);
            }

            if (eachRegularScheduleFormat.enterHours) {
                regularEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

                if (isSaturday) {
                    if (regularEnterTime > saturdayEndTime) {
                        regularEnterTime = saturdayEndTime;
                    }
                } else {
                    if (regularEnterTime > 1320) {
                        regularEnterTime = 1320;
                    }
                }


                regularEnterTimeString = makeTimeString(regularEnterTime);
            }

            if (regularEnterTime >= exitTime - 10 && regularExitTime <= enterTime + 10) {

                eachDrawingList.push({
                    kind: "regular",
                    id : index,
                    type: eachRegularScheduleFormat.type,
                    status: "out",
                    time: regularExitTime,
                    timeString: regularExitTimeString,
                    reason: eachRegularScheduleFormat.reason,
                    staffpermit: eachRegularScheduleFormat.staffpermit,
                    parentpermit: eachRegularScheduleFormat.parentpermit,
                    sqlId : eachRegularScheduleFormat.sqlId,
                    indexNumber : eachRegularScheduleFormat.indexNumber
                });

                eachDrawingList.push({
                    kind: "regular",
                    id : index,
                    type: eachRegularScheduleFormat.type,
                    status: "in",
                    time: regularEnterTime,
                    timeString: regularEnterTimeString,
                    reason: eachRegularScheduleFormat.reason,
                    staffpermit: eachRegularScheduleFormat.staffpermit,
                    parentpermit: eachRegularScheduleFormat.parentpermit,
                    sqlId : eachRegularScheduleFormat.sqlId,
                    indexNumber : eachRegularScheduleFormat.indexNumber
                });
            }

        });

        drawingList.push(eachDrawingList);
        eachUserViolation.drawingList.push(eachDrawingList);

    });

    console.log("ddd");

    drawingList.sort((a: any, b: any) => {
        if (a[0].time < b[0].time) {
            return -1;
        } else if (a[0].time > b[0].time) {
            return 1;
        } else {
            return 0;
        }
    });

    drawingList.forEach((eachDrawingList: any) => {

        eachDrawingList.sort((a: any, b: any) => {
            if (a.time < b.time) {
                return -1;
            } else if (a.time > b.time) {
                return 1;
            } else {
                return 0;
            }
        });

    });

    console.log("eee");

    userViolationList.forEach((eachUserViolation: any) => {

            if(!eachUserViolation.drawingList){
                eachUserViolation.drawingList = [];
            }

            eachUserViolation.drawingList.forEach((eachDrawingList: any) => {
    
                eachDrawingList.sort((a: any, b: any) => {
                    if (a.time < b.time) {
                        return -1;
                    } else if (a.time > b.time) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
    
            });
    
    });

    console.log("fff");

    drawingList.forEach((eachDrawingList: any) => {

        var previous: any = undefined;
        var order = 1;

        eachDrawingList.forEach((eachDrawing: any) => {


            if (previous && previous !== eachDrawing.time) {
                order++;
            }

            eachDrawing.order = order;

            previous = eachDrawing.time;

        });

    });

    console.log("ggg");

    userViolationList.forEach((eachUserViolation: any) => {

        eachUserViolation.drawingList.forEach((eachDrawingList: any) => {

            var previous: any = undefined;
            var order = 1;

            eachDrawingList.forEach((eachDrawing: any) => {

                if (previous && previous !== eachDrawing.time) {
                    order++;
                }

                eachDrawing.order = order;

                previous = eachDrawing.time;

            });

        });

    });

    console.log("hhh");


    console.log("letsDraw");
    console.log(drawingList);

    return drawingList;

}

const makeTimeString = (time: number) => {

    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;

}

const editSudden = (suddenNotice: any) => {

    const newSuddenNotice: any = [];

    suddenNotice.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "among") {
            eachSuddenNotice.exitHours = eachSuddenNotice.startHours;
            eachSuddenNotice.exitMinutes = eachSuddenNotice.startMinutes;
            eachSuddenNotice.enterHours = eachSuddenNotice.endHours;
            eachSuddenNotice.enterMinutes = eachSuddenNotice.endMinutes;
        }

        if (eachSuddenNotice.type === "long") {
            eachSuddenNotice.enterHours = eachSuddenNotice.startHours;
            eachSuddenNotice.enterMinutes = eachSuddenNotice.startMinutes;
        }

        if (eachSuddenNotice.type === "early") {
            eachSuddenNotice.exitHours = eachSuddenNotice.endHours;
            eachSuddenNotice.exitMinutes = eachSuddenNotice.endMinutes;
        }

    });

    return suddenNotice;


}

const editRegular = (regularScheduleFormat: any, targetDate: Date) => {

    const editedRegular: any = [];

    if (!regularScheduleFormat) {
        return editedRegular;
    }

    regularScheduleFormat.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.staffpermit !== 1) {
            return;
        }

        const data = eachRegularScheduleFormat.data;

        data.forEach((eachData: any, index : number) => {

            if(eachData["종류"] !== "지각" && eachData["종류"] !== "조퇴" && eachData["종류"] !== "외출" && eachData["종류"] !== "결석"){
                return;
            }

            const parsedDataEach: any = {};
            parsedDataEach.sqlId = eachRegularScheduleFormat.id;
            parsedDataEach.indexNumber = index;
            parsedDataEach.staffpermit = eachRegularScheduleFormat.staffpermit;
            parsedDataEach.parentpermit = eachRegularScheduleFormat.parentpermit;
            //parsedDataEach.type = eachData["종류"];

            switch (eachData["종류"]) {
                case "지각":
                    parsedDataEach.type = "late";
                    break;
                case "조퇴":
                    parsedDataEach.type = "early";
                    break;
                case "외출":
                    parsedDataEach.type = "among";
                    break;
                case "결석":
                    parsedDataEach.type = "absent";
                    break;
            }

            parsedDataEach.date = eachData["날짜"];

            //eachRegularScheduleFormat.day 가 "etc" 인 경우 parsedDataEach.date가 없는 경우 그냥 넘어간다.
            if (eachRegularScheduleFormat.day === "etc" && !parsedDataEach.date) {
                return;
            }

            //parsedDataEach.date가 있는 경우 targetDate의 date가 parsedDataEach.date array에 포함이 안되면 넘어간다.
            if (parsedDataEach.date) {

                const targetDateDate = targetDate.getDate();
                const targetDateDateToString = `${targetDateDate}`;

                if (!parsedDataEach.date.includes(targetDateDateToString)) {
                    return;
                }
            }

            if (eachData["들어오는 시간"]) {
                //eachData["들어오는 시간"]이 "~시 ~분" 혹은 "~시" 형식인데 이걸 hour, minute으로 나누기
                const time = eachData["들어오는 시간"].split(" ");
                if (time.length === 2) {
                    parsedDataEach.hour1 = +time[0].split("시")[0];
                    parsedDataEach.minute1 = +time[1].split("분")[0];
                } else if (time.length === 1) {
                    parsedDataEach.hour1 = +time[0].split("시")[0];
                    parsedDataEach.minute1 = 0;
                }
                //eachData.timeNumber에 시간을 분으로 환산해서 넣기
                parsedDataEach.timeNumber1 = parsedDataEach.hour1 * 60 + parsedDataEach.minute1;
                parsedDataEach.enterHours = parsedDataEach.hour1;
                parsedDataEach.enterMinutes = parsedDataEach.minute1;
            }

            if (eachData["나가는 시간"]) {
                //eachData["나가는 시간"]이 "~시 ~분" 혹은 "~시" 형식인데 이걸 hour, minute으로 나누기
                const time = eachData["나가는 시간"].split(" ");
                if (time.length === 2) {
                    parsedDataEach.hour2 = +time[0].split("시")[0];
                    parsedDataEach.minute2 = +time[1].split("분")[0];
                } else if (time.length === 1) {
                    parsedDataEach.hour2 = +time[0].split("시")[0];
                    parsedDataEach.minute2 = 0;
                }
                //eachData.timeNumber에 시간을 분으로 환산해서 넣기
                parsedDataEach.timeNumber2 = parsedDataEach.hour2 * 60 + parsedDataEach.minute2;
                parsedDataEach.exitHours = parsedDataEach.hour2;
                parsedDataEach.exitMinutes = parsedDataEach.minute2;
            }

            editedRegular.push(parsedDataEach);

        });


    });

    return editedRegular;

}



const widerSudden = (suddenNotice: any) => {

    //10분만큼 앞뒤로 이동시킨다.
    const gap = 0;

    suddenNotice.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.enterHours) {

            const enterHours = eachSuddenNotice.enterHours;
            const enterMinutes = eachSuddenNotice.enterMinutes;

            const enterCalcTime = enterHours * 60 + enterMinutes;

            const newEnterCalcTime = enterCalcTime + gap;

            const newEnterHours = Math.floor(newEnterCalcTime / 60);
            const newEnterMinutes = newEnterCalcTime % 60;

            eachSuddenNotice.enterHours = newEnterHours;
            eachSuddenNotice.enterMinutes = newEnterMinutes;

        }


        if (eachSuddenNotice.exitHours) {

            const exitHours = eachSuddenNotice.exitHours;
            const exitMinutes = eachSuddenNotice.exitMinutes;

            const exitCalcTime = exitHours * 60 + exitMinutes;

            const newExitCalcTime = exitCalcTime - gap;

            const newExitHours = Math.floor(newExitCalcTime / 60);
            const newExitMinutes = newExitCalcTime % 60;

            eachSuddenNotice.exitHours = newExitHours;
            eachSuddenNotice.exitMinutes = newExitMinutes;

        }

    });

}

const widerRegular = (regularScheduleFormat: any) => {

    //console.log("widerRegular");
    //console.log(regularScheduleFormat);

    const gap = 0;

    regularScheduleFormat.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.enterHours) {

            const enterHours = eachRegularScheduleFormat.enterHours;
            const enterMinutes = eachRegularScheduleFormat.enterMinutes;

            const enterCalcTime = enterHours * 60 + enterMinutes;

            const newEnterCalcTime = enterCalcTime + gap;

            const newEnterHours = Math.floor(newEnterCalcTime / 60);
            const newEnterMinutes = newEnterCalcTime % 60;

            eachRegularScheduleFormat.enterHours = newEnterHours;
            eachRegularScheduleFormat.enterMinutes = newEnterMinutes;

        }


        if (eachRegularScheduleFormat.exitHours) {

            const exitHours = eachRegularScheduleFormat.exitHours;
            const exitMinutes = eachRegularScheduleFormat.exitMinutes;

            const exitCalcTime = exitHours * 60 + exitMinutes;

            const newExitCalcTime = exitCalcTime - gap;

            const newExitHours = Math.floor(newExitCalcTime / 60);
            const newExitMinutes = newExitCalcTime % 60;

            eachRegularScheduleFormat.exitHours = newExitHours;
            eachRegularScheduleFormat.exitMinutes = newExitMinutes;

        }

    });



}

const filterNotPermitSudden = (suddenNoticeData: any) => {

    //parentpermit이 1인 것들만 남긴다.
    const filteredSuddenNoticeData = suddenNoticeData.filter((eachSuddenNotice: any) => {
        return eachSuddenNotice.parentpermit === 1;
    });

    return filteredSuddenNoticeData;

}


export const classifyViolation = (userViolationList: userViolation[], suddenNoticeData: any, regularScheduleFormatData: any, targetDate: Date) => {

    userViolationList.forEach((eachUserViolation) => {

        if (eachUserViolation.enterDateTime) {
            const enterDate = new Date(eachUserViolation.enterDateTime);
            eachUserViolation.enterHours = enterDate.getHours();
            eachUserViolation.enterMinutes = enterDate.getMinutes();
        }

        if (eachUserViolation.exitDateTime) {
            const exitDate = new Date(eachUserViolation.exitDateTime);
            eachUserViolation.exitHours = exitDate.getHours();
            eachUserViolation.exitMinutes = exitDate.getMinutes();
        }


    });


    const previousEditedSuddenNotice = editSudden(suddenNoticeData);
    const editedSuddenNotice = filterNotPermitSudden(previousEditedSuddenNotice);
    widerSudden(editedSuddenNotice);

    const editedRegularScheduleFormat = editRegular(regularScheduleFormatData, targetDate);
    widerRegular(editedRegularScheduleFormat);

    //console.log(editedSuddenNotice);
    //console.log("widenRegular");
    //console.log(editedRegularScheduleFormat);

    userViolationList.forEach((eachUserViolation) => {

        switch (eachUserViolation.kind) {

            case "absent":
                classifyAbsent(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
            case "late":
                classifyLate(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat);
                break;
            case "early":
                classifyEarly(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
            case "among":
                classifyAmong(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
            case "lateOrAbsent":
                classifyLateOrAbsent(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
            case "amongOrEarly":
                classifyAmongOrEarly(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
            case "lunch":
                classifyLunch(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
            case "dinner":
                classifyDinner(eachUserViolation, editedSuddenNotice, editedRegularScheduleFormat, targetDate);
                break;
        }

    });

    console.log("finish");
    console.log(userViolationList);

};

const classifyLunch = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate: Date) => {

    console.log("letsClassiFyLunch");

    const targetDateDay = targetDate.getDay();
    var isSaturday = false;

    if (targetDateDay === 6) {
        isSaturday = true;
    }

    const lunchClassInfo = classInfo.find((eachClassInfo) => {
        return eachClassInfo.classNumber === "lunch";
    });

    if (!lunchClassInfo) {
        return;
    }

    const lunchEndCalcTime = lunchClassInfo.end.hours * 60 + lunchClassInfo.end.minutes;
    console.log(lunchEndCalcTime);
    const justifiedList = [];

    //얘랑 접점이 있는 suddenNotice를 eachDrawingList에 넣어준다.
    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        var suddenExitTime = 480;
        var suddenExitTimeString = makeTimeString(suddenExitTime);

        var suddenEnterTime = 1320;
        if (isSaturday) {
            suddenEnterTime = saturdayEndTime;
        }
        var suddenEnterTimeString = makeTimeString(suddenEnterTime);

        if (eachSuddenNotice.exitHours) {
            suddenExitTime = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;
            suddenExitTimeString = makeTimeString(suddenExitTime);
        }

        if (eachSuddenNotice.enterHours) {
            suddenEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

            if (isSaturday) {
                if (suddenEnterTime > saturdayEndTime) {
                    suddenEnterTime = saturdayEndTime;
                }
            } else {
                if (suddenEnterTime > 1320) {
                    suddenEnterTime = 1320;
                }
            }

            suddenEnterTimeString = makeTimeString(suddenEnterTime);
        }

        if (suddenEnterTime >= lunchEndCalcTime && suddenExitTime <= lunchEndCalcTime) {

            justifiedList.push(eachSuddenNotice);

        }

    });

    //얘랑 접점이 있는 regularScheduleFormat을 eachDrawingList에 넣어준다.
    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        var regularExitTime = 480;
        var regularExitTimeString = makeTimeString(regularExitTime);

        var regularEnterTime = 1320;
        if (isSaturday) {
            regularEnterTime = saturdayEndTime;
        }
        var regularEnterTimeString = makeTimeString(regularEnterTime);

        if (eachRegularScheduleFormat.exitHours) {
            regularExitTime = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;
            regularExitTimeString = makeTimeString(regularExitTime);
        }

        if (eachRegularScheduleFormat.enterHours) {
            regularEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

            if (isSaturday) {
                if (regularEnterTime > saturdayEndTime) {
                    regularEnterTime = saturdayEndTime;
                }
            } else {
                if (regularEnterTime > 1320) {
                    regularEnterTime = 1320;
                }
            }


            regularEnterTimeString = makeTimeString(regularEnterTime);
        }

        if (regularEnterTime >= lunchEndCalcTime && regularExitTime <= lunchEndCalcTime) {

            justifiedList.push(eachRegularScheduleFormat);

        }

    });

    if (justifiedList.length > 0) {
        eachUserViolation.detailKind = "regular";
    }

    if (justifiedList.length === 0) {
        eachUserViolation.detailKind = "normal";
    }

}

const classifyDinner = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate: Date) => {

    console.log("letsClassiFyDinner");

    const targetDateDay = targetDate.getDay();
    var isSaturday = false;

    if (targetDateDay === 6) {
        isSaturday = true;
    }

    const lunchClassInfo = classInfo.find((eachClassInfo) => {
        return eachClassInfo.classNumber === "dinner";
    });

    if (!lunchClassInfo) {
        return;
    }

    const lunchEndCalcTime = lunchClassInfo.end.hours * 60 + lunchClassInfo.end.minutes;
    console.log(lunchEndCalcTime);
    const justifiedList = [];

    //얘랑 접점이 있는 suddenNotice를 eachDrawingList에 넣어준다.
    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        var suddenExitTime = 480;
        var suddenExitTimeString = makeTimeString(suddenExitTime);

        var suddenEnterTime = 1320;
        if (isSaturday) {
            suddenEnterTime = saturdayEndTime;
        }
        var suddenEnterTimeString = makeTimeString(suddenEnterTime);

        if (eachSuddenNotice.exitHours) {
            suddenExitTime = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;
            suddenExitTimeString = makeTimeString(suddenExitTime);
        }

        if (eachSuddenNotice.enterHours) {
            suddenEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

            if (isSaturday) {
                if (suddenEnterTime > saturdayEndTime) {
                    suddenEnterTime = saturdayEndTime;
                }
            } else {
                if (suddenEnterTime > 1320) {
                    suddenEnterTime = 1320;
                }
            }

            suddenEnterTimeString = makeTimeString(suddenEnterTime);
        }

        if (suddenEnterTime >= lunchEndCalcTime && suddenExitTime <= lunchEndCalcTime) {

            justifiedList.push(eachSuddenNotice);

        }

    });

    //얘랑 접점이 있는 regularScheduleFormat을 eachDrawingList에 넣어준다.
    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        var regularExitTime = 480;
        var regularExitTimeString = makeTimeString(regularExitTime);

        var regularEnterTime = 1320;
        if (isSaturday) {
            regularEnterTime = saturdayEndTime;
        }
        var regularEnterTimeString = makeTimeString(regularEnterTime);

        if (eachRegularScheduleFormat.exitHours) {
            regularExitTime = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;
            regularExitTimeString = makeTimeString(regularExitTime);
        }

        if (eachRegularScheduleFormat.enterHours) {
            regularEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

            if (isSaturday) {
                if (regularEnterTime > saturdayEndTime) {
                    regularEnterTime = saturdayEndTime;
                }
            } else {
                if (regularEnterTime > 1320) {
                    regularEnterTime = 1320;
                }
            }


            regularEnterTimeString = makeTimeString(regularEnterTime);
        }

        if (regularEnterTime >= lunchEndCalcTime && regularExitTime <= lunchEndCalcTime) {

            justifiedList.push(eachRegularScheduleFormat);

        }

    });

    if (justifiedList.length > 0) {
        eachUserViolation.detailKind = "regular";
    }

    if (justifiedList.length === 0) {
        eachUserViolation.detailKind = "normal";
    }

}

const classifyAmongOrEarly = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate: Date) => {

    console.log("letsStartAmongOrEarlyClassify");

    eachUserViolation.detailKind = "notDetermined";

    if (!eachUserViolation.exitHours) {
        console.log("noData");
        return;
    }

    var thereIsSuddenAbsence = false;
    var thereIsRegularAbsence = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "absent") {
            thereIsSuddenAbsence = true;
        }

    })

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.type === "absent") {
            thereIsRegularAbsence = true;
        }

    })

    if (thereIsSuddenAbsence || thereIsRegularAbsence) {

        eachUserViolation.detailKind = "notDetermined";

        if (thereIsSuddenAbsence && !thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상태가 아닌데 사유 결석이 제출되어 있음";
        }

        if (!thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상태가 아닌데 정기 결석이 제출되어 있음";
        }

        if (thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상태가 아닌데 사유 결석, 정기 결석이 제출되어 있음";
        }

        return;

    }

    //사유 결석, 정기 결석이 모두 없는 경우. 조퇴 비교로 들어간다.

    const exitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

    var thereIsSuddenEarly = false;
    var thereIsRegularEarly = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {
        if (eachSuddenNotice.type === "early") {
            thereIsSuddenEarly = true;
        }
    })

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {
        if (eachRegularScheduleFormat.type === "early") {
            thereIsRegularEarly = true;
        }
    })

    //겹치는 외출이 있는지 확인한다.

    var isSaturday = false;

    if (targetDate.getDay() === 6) {
        isSaturday = true;
    }

    const enterTime = new Date().getHours() * 60 + new Date().getMinutes();

    const crossedSuddenNotice: any = [];
    const crossedSuddenNoticeAmong: any = [];
    const crossedSuddenNoticeNotAmong: any = [];
    const crossedRegularScheduleFormat: any = [];
    const crossedRegularScheduleFormatAmong: any = [];
    const crossedRegularScheduleFormatNotAmong: any = [];

    //얘랑 접점이 있는 suddenNotice를 eachDrawingList에 넣어준다.
    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        var suddenExitTime = 480;

        var suddenEnterTime = 1320;
        if (isSaturday) {
            suddenEnterTime = saturdayEndTime;
        }

        if (eachSuddenNotice.exitHours) {
            suddenExitTime = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;
        }

        if (eachSuddenNotice.enterHours) {
            suddenEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

            if (isSaturday) {
                if (suddenEnterTime > saturdayEndTime) {
                    suddenEnterTime = saturdayEndTime;
                }
            } else {
                if (suddenEnterTime > 1320) {
                    suddenEnterTime = 1320;
                }
            }

        }

        if (suddenEnterTime >= exitTime && suddenExitTime <= enterTime) {
            crossedSuddenNotice.push(eachSuddenNotice);
            if (eachSuddenNotice.type === "among") {
                crossedSuddenNoticeAmong.push(eachSuddenNotice);
            } else {
                crossedSuddenNoticeNotAmong.push(eachSuddenNotice);
            }
        }

    });

    //얘랑 접점이 있는 regularScheduleFormat을 eachDrawingList에 넣어준다.
    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        var regularExitTime = 480;


        var regularEnterTime = 1320;
        if (isSaturday) {
            regularEnterTime = saturdayEndTime;
        }


        if (eachRegularScheduleFormat.exitHours) {
            regularExitTime = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;
        }

        if (eachRegularScheduleFormat.enterHours) {
            regularEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

            if (isSaturday) {
                if (regularEnterTime > saturdayEndTime) {
                    regularEnterTime = saturdayEndTime;
                }
            } else {
                if (regularEnterTime > 1320) {
                    regularEnterTime = 1320;
                }
            }

        }

        if (regularEnterTime >= exitTime && regularExitTime <= enterTime) {
            crossedRegularScheduleFormat.push(eachRegularScheduleFormat);
            if (eachRegularScheduleFormat.type === "among") {
                crossedRegularScheduleFormatAmong.push(eachRegularScheduleFormat);
            } else {
                crossedRegularScheduleFormatNotAmong.push(eachRegularScheduleFormat);
            }
        }

    });



    //정기조퇴만 있는 경우
    if (!thereIsSuddenEarly && thereIsRegularEarly) {

        //겹치는 외출이 있으면 return;
        if (crossedSuddenNoticeAmong.length > 0 || crossedRegularScheduleFormatAmong.length > 0) {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "정기조퇴가 있는데 겹치는 외출 사유 또는 정기도 있음";
            return;
        }

        //정기조퇴 솎아내기
        var targetRegularEarly: any = undefined;
        var previousExitTimeCalc = 9999;

        regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

            const currentExitTimeCalc = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;

            if (eachRegularScheduleFormat.type === "early" && currentExitTimeCalc < previousExitTimeCalc && eachRegularScheduleFormat.staffpermit === 1) {
                targetRegularEarly = eachRegularScheduleFormat;
                previousExitTimeCalc = currentExitTimeCalc;
            }

        })

        //targetReulgarEarly가 있음.
        if (targetRegularEarly) {

            const targetRegularEarlyExitTime = targetRegularEarly.exitHours * 60 + targetRegularEarly.exitMinutes;

            //exitTime보다 targetRegularEarlyExitTime이 이른 경우
            if (targetRegularEarlyExitTime <= exitTime) {
                eachUserViolation.detailKind = "regular";
                eachUserViolation.etc = "정기조퇴가 있어서 조퇴로 일단 봄";
                return;
            }

        }

    }
    console.log(thereIsSuddenEarly, thereIsRegularEarly);
    //사유조퇴만 있는 경우
    if (thereIsSuddenEarly && !thereIsRegularEarly) {

        console.log("onLySUdden");

        //겹치는 외출이 있으면 return;
        if (crossedSuddenNoticeAmong.length > 0 || crossedRegularScheduleFormatAmong.length > 0) {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "사유조퇴가 있는데 겹치는 외출 사유 또는 정기도 있음";
            return;
        }

        var targetSuddenEarly: any = undefined;
        var previousExitTimeCalc = 9999;

        suddenNoticeData.forEach((eachSuddenNotice: any) => {

            const currentExitTimeCalc = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;

            if (eachSuddenNotice.type === "early" && currentExitTimeCalc < previousExitTimeCalc && eachSuddenNotice.parentpermit === 1) {
                targetSuddenEarly = eachSuddenNotice;
                previousExitTimeCalc = currentExitTimeCalc;
            }
        })

        //targetSuddenEarly가 있음
        if (targetSuddenEarly) {

            const targetSuddenEarlyExitTime = targetSuddenEarly.exitHours * 60 + targetSuddenEarly.exitMinutes;

            //exitTime보다 targetSuddenEarlyExitTime이 이른 경우
            if (targetSuddenEarlyExitTime <= exitTime) {
                eachUserViolation.detailKind = "sudden";
                eachUserViolation.orSuddenDetailKind = "early";
                eachUserViolation.suddenReason = targetSuddenEarly.reason;
                eachUserViolation.etc = "사유 조퇴가 있어서 일단 조퇴로 봄";
                return;
            }

        }

    }

    if (thereIsSuddenEarly && thereIsRegularEarly) {
        eachUserViolation.detailKind = "notDetermined";
        eachUserViolation.notDeterminedReason = "사유 조퇴, 정기 조퇴가 둘 다 제출되어 있음";
    }

    //해당 내역에 외출을 제외한 겹치는 내역이 하나도 없을 경우;
    if (crossedSuddenNoticeNotAmong.length === 0 && crossedRegularScheduleFormatNotAmong.length === 0) {

        console.log("dsjflkasdjflkajsdlkfjalsdkjfadsljadslk");


        if (crossedSuddenNoticeAmong.length === 1 && crossedRegularScheduleFormatAmong.length === 0) {

            const suddenEnterTime = crossedSuddenNoticeAmong[0].enterHours * 60 + crossedSuddenNoticeAmong[0].enterMinutes;
            const suddenExitTime = crossedSuddenNoticeAmong[0].exitHours * 60 + crossedSuddenNoticeAmong[0].exitMinutes;

            const violationEnterTime = new Date().getHours() * 60 + new Date().getMinutes();
            const violationExitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

            if (suddenEnterTime >= violationEnterTime && suddenExitTime <= violationExitTime) {
                eachUserViolation.detailKind = "sudden";
                eachUserViolation.orSuddenDetailKind = "among";
                eachUserViolation.suddenReason = crossedSuddenNoticeAmong[0].reason;
                return;
            }
        }
        if (crossedSuddenNoticeAmong.length === 0 && crossedRegularScheduleFormatAmong.length === 1) {

            const regularEnterTime = crossedRegularScheduleFormatAmong[0].enterHours * 60 + crossedRegularScheduleFormatAmong[0].enterMinutes;
            const regularExitTime = crossedRegularScheduleFormatAmong[0].exitHours * 60 + crossedRegularScheduleFormatAmong[0].exitMinutes;

            const violationEnterTime = new Date().getHours() * 60 + new Date().getMinutes();
            const violationExitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

            if (regularEnterTime >= violationEnterTime && regularExitTime <= violationExitTime) {
                eachUserViolation.detailKind = "regular";
                return;
            }

        }

    }
}

const classifyLateOrAbsent = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate: Date) => {


    console.log("classifyLateOrAbsent!!");
    console.log("!!!!");

    eachUserViolation.detailKind = "notDetermined";

    var thereIsSuddenAbsence = false;
    var thereIsRegularAbsence = false;
    var isSuddenAbsenceParentPermit = false;
    var isRegularAbsenceParentPermit = false;
    var suddenReason = "";

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "absent") {
            thereIsSuddenAbsence = true;
            if (eachSuddenNotice.parentpermit === 1) {
                isSuddenAbsenceParentPermit = true;
                suddenReason = eachSuddenNotice.reason;
            }
        }

    })

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.type === "absent") {
            thereIsRegularAbsence = true;
            if (eachRegularScheduleFormat.parentpermit === 1) {
                isRegularAbsenceParentPermit = true;
            }
        }

    })

    //사유결석 정기 결석이 모두 있는 경우. notDetermined
    if (thereIsSuddenAbsence && thereIsRegularAbsence) {
        eachUserViolation.detailKind = "notDetermined";
        eachUserViolation.notDeterminedReason = "사유 결석, 정기 결석이 둘 다 제출되어 있음";
        return;
    }

    //정기결석만 있고 사유결석이 없는 경우
    if (!thereIsSuddenAbsence && thereIsRegularAbsence) {
        //학부모 허가가 있으면 regular 없으면 normal
        if (isRegularAbsenceParentPermit) {
            eachUserViolation.detailKind = "regular";
            eachUserViolation.etc = "정기 결석이 제출되어 있어서 일단 결석으로 봄";
            return;
        } else {
            eachUserViolation.detailKind = "normal";
            return;
        }
    }

    //사유결석만 있고 정기결석이 없는 경우
    if (thereIsSuddenAbsence && !thereIsRegularAbsence) {
        //학부모 허가가 있으면 sudden 없으면 normal
        if (isSuddenAbsenceParentPermit) {
            eachUserViolation.detailKind = "sudden";
            eachUserViolation.orSuddenDetailKind = "absent";
            eachUserViolation.etc = "사유 결석이 제출되어 있어서 일단 결석으로 봄";
            eachUserViolation.suddenReason = suddenReason;
            return;
        } else {
            eachUserViolation.detailKind = "normal";
            return;
        }
    }

    //사유결석 정기결석이 모두 없는 경우. 지각 비교로 들어간다.
    if (!thereIsSuddenAbsence && !thereIsRegularAbsence) {

        var thereIsSuddenLate = false;
        var thereIsRegularLate = false;

        suddenNoticeData.forEach((eachSuddenNotice: any) => {

            if (eachSuddenNotice.type === "long") {
                thereIsSuddenLate = true;
            }

        });

        regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

            if (eachRegularScheduleFormat.type === "late") {
                thereIsRegularLate = true;
            }

        });

        console.log(thereIsSuddenLate);
        console.log(thereIsRegularLate);

        //둘 다 없는 경우
        if (!thereIsSuddenLate && !thereIsRegularLate) {
            eachUserViolation.detailKind = "normal";
            return;
        }

        //둘 다 있는 경우  --- 나중에 좀 더 세분화 할 필요 있을듯.
        if (thereIsSuddenLate && thereIsRegularLate) {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "사유 지각, 정기 지각 둘 다 제출되어 있음";
            return;
        }


        //사유지각과 정기지각이 둘 중 하나만 있는 경우인데 이 중에 학부모 허락 받았는지 여부랑 가장 늦은 지각만 가져온다.
        var targetSuddenLate: any = undefined;
        var previousEnterTimeCalc = 0;

        suddenNoticeData.forEach((eachSuddenNotice: any) => {

            const currentEnterTimeCalc = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

            if (eachSuddenNotice.type === "long" && currentEnterTimeCalc > previousEnterTimeCalc && eachSuddenNotice.parentpermit === 1) {
                targetSuddenLate = eachSuddenNotice;
                previousEnterTimeCalc = currentEnterTimeCalc;
            }

        });

        var targetRegularLate: any = undefined;
        previousEnterTimeCalc = 0;

        regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

            const currentEnterTimeCalc = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

            if (eachRegularScheduleFormat.type === "late" && currentEnterTimeCalc > previousEnterTimeCalc && eachRegularScheduleFormat.staffpermit === 1) {
                targetRegularLate = eachRegularScheduleFormat;
                previousEnterTimeCalc = currentEnterTimeCalc;
            }

        });


        //사유 지각만 있는 경우
        if (thereIsSuddenLate && !thereIsRegularLate) {

            if (!targetSuddenLate) {
                eachUserViolation.detailKind = "normal";
                eachUserViolation.etc = "승인 된 사유 지각이 없음";
                return;
            }

            const targetSuddenLateCalcTime = targetSuddenLate.enterHours * 60 + targetSuddenLate.enterMinutes;
            const violationLateCalcTime = new Date().getHours() * 60 + new Date().getMinutes();

            if (targetSuddenLateCalcTime >= violationLateCalcTime) {
                eachUserViolation.detailKind = "sudden";
                eachUserViolation.orSuddenDetailKind = "late";
                eachUserViolation.suddenReason = targetSuddenLate.reason;
                eachUserViolation.etc = "사유 지각이 제출되어 있어서 지각으로 일단 봄";
                eachUserViolation.suddenReason = targetSuddenLate.reason;
                return;
            } else {
                eachUserViolation.detailKind = "normal";
                eachUserViolation.etc = "사유 지각이 제출되어 있으나 지각 시간이 더 늦음";
                return;
            }

        }

        //정기 지각만 있는 경우
        if (!thereIsSuddenLate && thereIsRegularLate) {

            if (!targetRegularLate) {
                eachUserViolation.detailKind = "normal";
                eachUserViolation.etc = "승인 된 정기 지각이 없음";
                return;
            }

            const targetRegularLateCalcTime = targetRegularLate.enterHours * 60 + targetRegularLate.enterMinutes;
            const violationLateCalcTime = new Date().getHours() * 60 + new Date().getMinutes();

            if (targetRegularLateCalcTime >= violationLateCalcTime) {
                eachUserViolation.detailKind = "regular";
                eachUserViolation.etc = "정기 지각이 제출되어 있어서 정기지각으로 일단 봄";
                return;
            } else {
                eachUserViolation.detailKind = "normal";
                eachUserViolation.etc = "정기 지각이 제출되어 있으나 지각 시간이 더 늦음";
                return;
            }

        }

    }

};


const classifyAmong = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate: Date) => {


    console.log("letsSTART AMONG !!! classify");

    eachUserViolation.detailKind = "notDetermined";

    if (!eachUserViolation.exitHours || !eachUserViolation.enterHours) {

        console.log("noData");
        return;

    }

    var thereIsSuddenAbsence = false;
    var thereIsRegularAbsence = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "absent") {
            thereIsSuddenAbsence = true;
        }

    })

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.type === "absent") {
            thereIsRegularAbsence = true;
        }

    })

    if (thereIsSuddenAbsence || thereIsRegularAbsence) {

        eachUserViolation.detailKind = "notDetermined";

        if (thereIsSuddenAbsence && !thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상황이 아닌데 사유 결석이 제출되어 있음";
        }

        if (!thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상황이 아닌데 정기 결석이 제출되어 있음";
        }

        if (thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상황이 아닌데 사유 결석, 정기 결석이 제출되어 있음";
        }

        return;

    }

    var isSaturday = false;

    if (targetDate.getDay() === 6) {
        isSaturday = true;
    }

    const exitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;
    const enterTime = eachUserViolation.enterHours * 60 + eachUserViolation.enterMinutes!!;

    const crossedSuddenNotice: any = [];
    const crossedRegularScheduleFormat: any = [];

    //얘랑 접점이 있는 suddenNotice를 eachDrawingList에 넣어준다.
    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        var suddenExitTime = 480;

        var suddenEnterTime = 1320;
        if (isSaturday) {
            suddenEnterTime = saturdayEndTime;
        }

        if (eachSuddenNotice.exitHours) {
            suddenExitTime = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;
        }

        if (eachSuddenNotice.enterHours) {
            suddenEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

            if (isSaturday) {
                if (suddenEnterTime > saturdayEndTime) {
                    suddenEnterTime = saturdayEndTime;
                }
            } else {
                if (suddenEnterTime > 1320) {
                    suddenEnterTime = 1320;
                }
            }

        }

        if (suddenEnterTime >= exitTime && suddenExitTime <= enterTime) {
            crossedSuddenNotice.push(eachSuddenNotice);
        }

    });

    //얘랑 접점이 있는 regularScheduleFormat을 eachDrawingList에 넣어준다.
    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        var regularExitTime = 480;


        var regularEnterTime = 1320;
        if (isSaturday) {
            regularEnterTime = saturdayEndTime;
        }


        if (eachRegularScheduleFormat.exitHours) {
            regularExitTime = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;
        }

        if (eachRegularScheduleFormat.enterHours) {
            regularEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

            if (isSaturday) {
                if (regularEnterTime > saturdayEndTime) {
                    regularEnterTime = saturdayEndTime;
                }
            } else {
                if (regularEnterTime > 1320) {
                    regularEnterTime = 1320;
                }
            }

        }

        if (regularEnterTime >= exitTime && regularExitTime <= enterTime) {
            crossedRegularScheduleFormat.push(eachRegularScheduleFormat);
        }

    });

    //둘 다 0개인 경우. 종류 normal
    if (crossedSuddenNotice.length === 0 && crossedRegularScheduleFormat.length === 0) {
        eachUserViolation.detailKind = "normal";
        return;
    }

    //둘 다 0개 이상인 경우. 종류 notDetermined
    if (crossedSuddenNotice.length > 0 && crossedRegularScheduleFormat.length > 0) {
        eachUserViolation.detailKind = "notDetermined";
        eachUserViolation.notDeterminedReason = "사유 정기 둘 다 해당 외출과 겹치는게 있음";
        return;
    }

    //sudden만 0개 이상인 경우.
    if (crossedSuddenNotice.length > 0 && crossedRegularScheduleFormat.length === 0) {

        //sudden이 2개 이상인 경우. NotDetermined
        if (crossedSuddenNotice.length > 1) {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "사유 외출이 2개 이상 겹침";
            return;
        }

        //사유가 1개인 경우. 해당 type이 among이 아니면 notDetermined
        if (crossedSuddenNotice[0].type !== "among") {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "겹치고 있는 사유의 종류가 외출이 아님";
            return;
        }

        //사유가 1개이면서 해당 type이 among일 경우 사유가 시간 포함하면 sudden, 아니면 regular
        if (crossedSuddenNotice[0].type === "among") {

            const suddenEnterTime = crossedSuddenNotice[0].enterHours * 60 + crossedSuddenNotice[0].enterMinutes;
            const suddenExitTime = crossedSuddenNotice[0].exitHours * 60 + crossedSuddenNotice[0].exitMinutes;

            const violationEnterTime = eachUserViolation.enterHours * 60 + eachUserViolation.enterMinutes!!;
            const violationExitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

            if (suddenEnterTime >= violationEnterTime && suddenExitTime <= violationExitTime) {
                eachUserViolation.detailKind = "sudden";
                eachUserViolation.suddenReason = crossedSuddenNotice[0].reason;
                return;
            } else {
                eachUserViolation.detailKind = "normal";
                return;
            }

        }

    }

    //regular만 1개 이상인 경우.
    if (crossedSuddenNotice.length === 0 && crossedRegularScheduleFormat.length > 0) {


        //regular이 2개 이상인 경우. NotDetermined
        if (crossedRegularScheduleFormat.length > 1) {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "정기가 2개 이상 겹침";
            return;
        }

        //정기가 1개인 경우. 해당 type이 among이 아니면 notDetermined
        if (crossedRegularScheduleFormat[0].type !== "among") {
            eachUserViolation.detailKind = "notDetermined";
            eachUserViolation.notDeterminedReason = "겹치고 있는 정기일정의 종류가 외출이 아님";
            return;
        }

        //정기가 1개이면서 해당 type이 among일 경우 정기가 시간 포함하면 regular, 아니면 normal
        if (crossedRegularScheduleFormat[0].type === "among") {

            const regularEnterTime = crossedRegularScheduleFormat[0].enterHours * 60 + crossedRegularScheduleFormat[0].enterMinutes;
            const regularExitTime = crossedRegularScheduleFormat[0].exitHours * 60 + crossedRegularScheduleFormat[0].exitMinutes;

            const violationEnterTime = eachUserViolation.enterHours * 60 + eachUserViolation.enterMinutes!!;
            const violationExitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

            if (regularEnterTime >= violationEnterTime && regularExitTime <= violationExitTime) {
                eachUserViolation.detailKind = "regular";
                return;
            } else {
                eachUserViolation.detailKind = "normal";
                return;
            }
        }

    }


};



const classifyAbsent = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate : Date) => {

    eachUserViolation.detailKind = "notDetermined";

    var thereIsSuddenAbsence = false;
    var thereIsRegularAbsence = false;
    var isSuddenAbsenceParentPermit = false;
    var isRegularAbsenceParentPermit = false;
    var suddenReason = "";

    console.log("letsclassifyabsent");
    console.log(eachUserViolation);
    console.log(regularScheduleFormatData);
    console.log(suddenNoticeData);

    const targetDateDay = targetDate.getDay();
    var isSaturday = false;

    var dayEndTime = 1320;
    
    if (targetDateDay === 6) {
        isSaturday = true;
    }

    if(isSaturday){
        console.log("itssaturday");
        dayEndTime = saturdayEndTime;
    }

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "absent") {
            thereIsSuddenAbsence = true;
            if (eachSuddenNotice.parentpermit === 1) {
                isSuddenAbsenceParentPermit = true;
                suddenReason = eachSuddenNotice.reason;
            }
        }

    });

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.type === "absent") {
            thereIsRegularAbsence = true;
            if (eachRegularScheduleFormat.parentpermit === 1) {
                isRegularAbsenceParentPermit = true;
            }
        }
    });



    //둘 다 없는 경우
    if (!thereIsSuddenAbsence && !thereIsRegularAbsence) {

        console.log("lets go");

        var isDetermined = false;

        //지각이 혹시 결석 포함하는지 보고 포함하면 미정으로 내려준다.
        regularScheduleFormatData.forEach((eachRegularScheduleFormat : any) => {

            if(eachRegularScheduleFormat.type === "late"){
                const regularScheduleEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

                //시간이 더 뒤인지 확인하고 부모님 허가가 있으면 미정으로 내려준다.
                if(dayEndTime <= regularScheduleEnterTime && eachRegularScheduleFormat.parentpermit === 1){
                    eachUserViolation.detailKind = "notDetermined";
                    eachUserViolation.notDeterminedReason = "현재 결석 상황인데 정기결석이 아닌 정기지각이 해당 결석 위반을 포함하고 있음";
                    console.log(regularScheduleEnterTime);
                    console.log(dayEndTime);
                    console.log("gogogogogogogogo!!#!@#!@#!@#!@3")
                    isDetermined = true;
                    return;
                }
            }
    
        })

        if(isDetermined){
            return;
        }

        //사유지각이 혹시 결석 포함하는지 보고 포함하면 미정으로 내려준다.
        suddenNoticeData.forEach((eachSuddenNotice : any) => {

            if(eachSuddenNotice.type === "long"){
                const suddenNoticeEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

                //시간이 더 뒤인지 확인하고 부모님 허가가 있으면 미정으로 내려준다.
                if(dayEndTime <= suddenNoticeEnterTime && eachSuddenNotice.parentpermit === 1){
                    eachUserViolation.detailKind = "notDetermined";
                    eachUserViolation.notDeterminedReason = "현재 결석 상황인데 사유결석이 아닌 사유지각이 해당 결석 위반을 포함하고 있음";
                    isDetermined = true;
                    return;
                }
            }
        })

        if(isDetermined){
            return;
        }


        eachUserViolation.detailKind = "normal";
        return;
    }

    //둘 다 있는 경우
    if (thereIsSuddenAbsence && thereIsRegularAbsence) {
        eachUserViolation.detailKind = "notDetermined";
        eachUserViolation.notDeterminedReason = "사유 결석, 정기 결석 둘 다 제출되어 있음";
        return;
    }

    //사유 결석만 있는 경우
    if (thereIsSuddenAbsence && !thereIsRegularAbsence) {

        //부모님 허가 있으면 sudden 없으면 normal
        if (isSuddenAbsenceParentPermit) {
            eachUserViolation.detailKind = "sudden";
            eachUserViolation.suddenReason = suddenReason;
            return;
        } else {
            eachUserViolation.detailKind = "normal";
            return;
        }

    }

    //정기 결석만 있는 경우
    if (!thereIsSuddenAbsence && thereIsRegularAbsence) {

        //부모님 허가 있으면 regular 없으면 normal
        if (isRegularAbsenceParentPermit) {
            eachUserViolation.detailKind = "regular";
            return;
        } else {
            eachUserViolation.detailKind = "normal";
            return;
        }

    }

}

const classifyEarly = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any, targetDate : Date) => {

    eachUserViolation.detailKind = "notDetermined";

    const targetDateDay = targetDate.getDay();
    var isSaturday = false;

    var dayEndTime = 1320;
    
    if (targetDateDay === 6) {
        isSaturday = true;
    }

    if(isSaturday){
        console.log("itssaturday");
        dayEndTime = saturdayEndTime;
    }


    if (!eachUserViolation.exitHours) {

        console.log("noData");
        return;
    }

    console.log("classifyEarly");
    console.log(eachUserViolation);
    console.log(suddenNoticeData);
    console.log(regularScheduleFormatData);

    var thereIsSuddenAbsence = false;
    var thereIsRegularAbsence = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {
        if (eachSuddenNotice.type === "absent") {
            thereIsSuddenAbsence = true;
        }
    })

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {
        if (eachRegularScheduleFormat.type === "absent") {
            thereIsRegularAbsence = true;
        }
    })

    if (thereIsSuddenAbsence || thereIsRegularAbsence) {

        eachUserViolation.detailKind = "notDetermined";

        if (thereIsSuddenAbsence && !thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "현재 결석 상황이 아닌데 사유 결석이 제출되어 있음";
        }

        if (!thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "현재 결석 상황이 아닌데 정기 결석이 제출되어 있음";
        }

        if (thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "현재 결석 상황이 아닌데 사유 결석, 정기 결석이 제출되어 있음";
        }

        return;

    }

    var thereIsSuddenEarly = false;
    var thereIsRegularEarly = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {
        if (eachSuddenNotice.type === "early") {
            thereIsSuddenEarly = true;
        }
    })

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {
        if (eachRegularScheduleFormat.type === "early") {
            thereIsRegularEarly = true;
        }
    })

    //둘 다 없는 경우
    if (!thereIsSuddenEarly && !thereIsRegularEarly) {

        console.log("adhsfkasdjflkjasdflk");
        console.log(eachUserViolation);
        console.log(regularScheduleFormatData);

        //외출 정기일정이 해당 조퇴 위반을 포함하고 있는지 확인한다.
        var isDetermined = false;

        regularScheduleFormatData.forEach((eachRegularScheduleFormat : any) => {

            if(eachRegularScheduleFormat.type === "among"){
                const regularScheduleExitTime = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;
                const regularScheduleEnterTime = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

                if(!eachUserViolation.exitHours){
                    return;
                }
                
                const violationExitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

                // 조퇴로 나간시간보다 더 일찍 정기일정이 되어 잇고 클래스 끝나는 시간보다 정기일정이 더 늦으면 미정으로 내려준다.
                if(violationExitTime >= regularScheduleExitTime && regularScheduleEnterTime >= dayEndTime && eachRegularScheduleFormat.parentpermit === 1){

                    eachUserViolation.detailKind = "notDetermined";
                    eachUserViolation.notDeterminedReason = "현재 조퇴 상황인데 정기 조퇴가 아닌 정기외출이 해당 조퇴 위반을 포함하고 있음";
                    isDetermined = true;
                    return;

                }

            }
        });

        if(isDetermined){
            return;
        }

        //외출 사유일정이 해당 조퇴 위반을 포함하고 있는지 확인한다.

        suddenNoticeData.forEach((eachSuddenNotice : any) => {

            if(eachSuddenNotice.type === "among"){
                const suddenNoticeExitTime = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;
                const suddenNoticeEnterTime = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

                if(!eachUserViolation.exitHours){
                    return;
                }

                const violationExitTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

                // 조퇴로 나간시간보다 더 일찍 사유일정이 되어 잇고 클래스 끝나는 시간보다 사유일정이 더 늦으면 미정으로 내려준다.
                if(violationExitTime >= suddenNoticeExitTime && suddenNoticeEnterTime >= dayEndTime && eachSuddenNotice.parentpermit === 1){

                    eachUserViolation.detailKind = "notDetermined";
                    eachUserViolation.notDeterminedReason = "현재 조퇴 상황인데 사유 조퇴가 아닌 사유외출이 해당 조퇴 위반을 포함하고 있음";
                    isDetermined = true;
                    return;
                }
            }
        });

        if(isDetermined){
            return;
        }

        eachUserViolation.detailKind = "normal";
        return;
    }

    //둘 다 있는 경우
    if (thereIsSuddenEarly && thereIsRegularEarly) {
        eachUserViolation.detailKind = "notDetermined";
        eachUserViolation.notDeterminedReason = "사유 조퇴, 정기 조퇴 둘 다 제출되어 있음";
        return;
    }

    //사유 조퇴나 정기 조퇴 중 하나만 있는 경우 학부모 허락 받았는지 여부랑 가장 빠른 조퇴만 가져온다.

    var targetSuddenEarly: any = undefined;
    var previousExitTimeCalc = 9999;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        const currentExitTimeCalc = eachSuddenNotice.exitHours * 60 + eachSuddenNotice.exitMinutes;

        if (eachSuddenNotice.type === "early" && currentExitTimeCalc < previousExitTimeCalc && eachSuddenNotice.parentpermit === 1) {
            targetSuddenEarly = eachSuddenNotice;
            previousExitTimeCalc = currentExitTimeCalc;
        }
    })

    var targetRegularEarly: any = undefined;
    previousExitTimeCalc = 9999;

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        const currentExitTimeCalc = eachRegularScheduleFormat.exitHours * 60 + eachRegularScheduleFormat.exitMinutes;

        if (eachRegularScheduleFormat.type === "early" && currentExitTimeCalc < previousExitTimeCalc && eachRegularScheduleFormat.staffpermit === 1) {
            targetRegularEarly = eachRegularScheduleFormat;
            previousExitTimeCalc = currentExitTimeCalc;
        }

    })

    //사유 조퇴만 있는 경우
    if (thereIsSuddenEarly && !thereIsRegularEarly) {

        if (!targetSuddenEarly) {
            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "승인 된 사유 조퇴가 없음";
            return;
        }

        const targetSuddenEarlyCalcTime = targetSuddenEarly.exitHours * 60 + targetSuddenEarly.exitMinutes;
        const violationEarlyCalcTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

        if (targetSuddenEarlyCalcTime <= violationEarlyCalcTime) {

            eachUserViolation.detailKind = "sudden";
            eachUserViolation.etc = "사유 조퇴가 제출되어 있음";
            eachUserViolation.suddenReason = targetSuddenEarly.reason;
            return;

        } else {

            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "사유 조퇴가 제출되어 있지만 위반 시간보다 빨리 나감"
            return;

        }

    }

    //정기 조퇴만 있는 경우
    if (!thereIsSuddenEarly && thereIsRegularEarly) {

        if (!targetRegularEarly) {
            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "승인 된 정기 조퇴가 없음";
            return;
        }

        const targetRegularEarlyCalcTime = targetRegularEarly.exitHours * 60 + targetRegularEarly.exitMinutes;
        const violationEarlyCalcTime = eachUserViolation.exitHours * 60 + eachUserViolation.exitMinutes!!;

        if (targetRegularEarlyCalcTime <= violationEarlyCalcTime) {

            eachUserViolation.detailKind = "regular";
            eachUserViolation.etc = "정기 조퇴가 제출되어 있음";
            return;

        } else {

            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "정기 조퇴가 제출되어 있지만 위반 시간보다 빨리 나감"
            return;

        }


    }


}


const classifyLate = (eachUserViolation: userViolation, suddenNoticeData: any, regularScheduleFormatData: any) => {

    eachUserViolation.detailKind = "notDetermined";

    if (!eachUserViolation.enterHours) {

        console.log("noData");
        return;
    }

    console.log("classifyLate");
    console.log(eachUserViolation);
    console.log(suddenNoticeData);
    console.log(regularScheduleFormatData);

    var thereIsSuddenAbsence = false;
    var thereIsRegularAbsence = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "absent") {
            thereIsSuddenAbsence = true;
        }

    });

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.type === "absent") {
            thereIsRegularAbsence = true;
        }

    });



    if (thereIsSuddenAbsence || thereIsRegularAbsence) {

        eachUserViolation.detailKind = "notDetermined";

        if (thereIsSuddenAbsence && !thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상황이 아닌데 사유 결석이 제출되어 있음";
        }

        if (!thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상황이 아닌데 정기 결석이 제출되어 있음";
        }

        if (thereIsSuddenAbsence && thereIsRegularAbsence) {
            eachUserViolation.notDeterminedReason = "결석상황이 아닌데 사유 결석, 정기 결석이 제출되어 있음";
        }

        return;

    }

    var thereIsSuddenLate = false;
    var thereIsRegularLate = false;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        if (eachSuddenNotice.type === "long") {
            thereIsSuddenLate = true;
        }

    });

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        if (eachRegularScheduleFormat.type === "late") {
            thereIsRegularLate = true;
        }

    });

    console.log(thereIsSuddenLate);
    console.log(thereIsRegularLate);

    //둘 다 없는 경우
    if (!thereIsSuddenLate && !thereIsRegularLate) {
        eachUserViolation.detailKind = "normal";
        return;
    }

    //둘 다 있는 경우  --- 나중에 좀 더 세분화 할 필요 있을듯.
    if (thereIsSuddenLate && thereIsRegularLate) {
        eachUserViolation.detailKind = "notDetermined";
        eachUserViolation.notDeterminedReason = "사유 지각, 정기 지각 둘 다 제출되어 있음";
        return;
    }


    //사유지각과 정기지각이 둘 중 하나만 있는 경우인데 이 중에 학부모 허락 받았는지 여부랑 가장 늦은 지각만 가져온다.
    var targetSuddenLate: any = undefined;
    var previousEnterTimeCalc = 0;

    suddenNoticeData.forEach((eachSuddenNotice: any) => {

        const currentEnterTimeCalc = eachSuddenNotice.enterHours * 60 + eachSuddenNotice.enterMinutes;

        if (eachSuddenNotice.type === "long" && currentEnterTimeCalc > previousEnterTimeCalc && eachSuddenNotice.parentpermit === 1) {
            targetSuddenLate = eachSuddenNotice;
            previousEnterTimeCalc = currentEnterTimeCalc;
        }

    });

    var targetRegularLate: any = undefined;
    previousEnterTimeCalc = 0;

    regularScheduleFormatData.forEach((eachRegularScheduleFormat: any) => {

        const currentEnterTimeCalc = eachRegularScheduleFormat.enterHours * 60 + eachRegularScheduleFormat.enterMinutes;

        if (eachRegularScheduleFormat.type === "late" && currentEnterTimeCalc > previousEnterTimeCalc && eachRegularScheduleFormat.staffpermit === 1) {
            targetRegularLate = eachRegularScheduleFormat;
            previousEnterTimeCalc = currentEnterTimeCalc;
        }

    });


    //사유 지각만 있는 경우
    if (thereIsSuddenLate && !thereIsRegularLate) {

        if (!targetSuddenLate) {
            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "승인 된 사유 지각이 없음";
            return;
        }

        const targetSuddenLateCalcTime = targetSuddenLate.enterHours * 60 + targetSuddenLate.enterMinutes;
        const violationLateCalcTime = eachUserViolation.enterHours * 60 + eachUserViolation.enterMinutes!!;

        if (targetSuddenLateCalcTime >= violationLateCalcTime) {
            eachUserViolation.detailKind = "sudden";
            eachUserViolation.etc = "사유 지각이 제출되어 있음";
            console.log("lets REASON!!!");
            console.log(targetSuddenLate);
            console.log(targetSuddenLate.reason);
            eachUserViolation.suddenReason = targetSuddenLate.reason;
            return;
        } else {
            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "사유 지각이 제출되어 있으나 지각 시간이 더 늦음";
            return;
        }

    }

    //정기 지각만 있는 경우
    if (!thereIsSuddenLate && thereIsRegularLate) {

        if (!targetRegularLate) {
            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "승인 된 정기 지각이 없음";
            return;
        }

        const targetRegularLateCalcTime = targetRegularLate.enterHours * 60 + targetRegularLate.enterMinutes;
        const violationLateCalcTime = eachUserViolation.enterHours * 60 + eachUserViolation.enterMinutes!!;

        if (targetRegularLateCalcTime >= violationLateCalcTime) {
            eachUserViolation.detailKind = "regular";
            eachUserViolation.etc = "정기 지각이 제출되어 있음";
            return;
        } else {
            eachUserViolation.detailKind = "normal";
            eachUserViolation.etc = "정기 지각이 제출되어 있으나 지각 시간이 더 늦음";
            return;
        }

    }


};


export const demeritAddWithDb = (userViolationList: userViolation[], demeritListData: []) => {

    console.log("demeritAdd");

    console.log(demeritListData);

    if (!demeritListData) {
        return;
    }

    //고유의 id 삽입
    userViolationList.forEach((eachUserViolation: userViolation) => {

        if (eachUserViolation.exitDateTime) {

            const exitDate = new Date(eachUserViolation.exitDateTime);
            const exitDateCalc = exitDate.getHours() * 60 + exitDate.getMinutes();
            eachUserViolation.identifyId = exitDateCalc;

        } else {
            eachUserViolation.identifyId = 5000;
        }

    });

    demeritListData.forEach((eachDemerit: any) => {

        if (eachDemerit.identifyId && eachDemerit.identifyId > 10000) {
            const oneUserViolation: userViolation = {
                kind: "added",
                identifyId: eachDemerit.identifyId,
            }

            userViolationList.push(oneUserViolation);

        }

    });

    //demeritListData에 있는 것들을 identifyId가 동일한 userViolationList에 넣어준다.

    userViolationList.forEach((eachUserViolation: userViolation) => {

        demeritListData.forEach((eachDemerit: any) => {

            if (eachUserViolation.identifyId === eachDemerit.identifyId) {

                eachUserViolation.cancelDemerit = eachDemerit.cancelDemerit;
                eachUserViolation.decided = eachDemerit.decided;
                eachUserViolation.demerit = eachDemerit.demerit;
                eachUserViolation.description = eachDemerit.description;
                eachUserViolation.determinedKind = eachDemerit.determinedKind;
                eachUserViolation.memo = eachDemerit.memo;
                eachUserViolation.sendDemerit = eachDemerit.sendDemerit;

            }

        });

    });

};


export const exceptRegularViolation = (userViolationList: userViolation[]) => {

    //detailKind가 regular인 것들을 제외한다.
    const filteredViolationList: userViolation[] = userViolationList.filter((eachUserViolation: userViolation) => {
        return eachUserViolation.detailKind !== "regular";
    });

    return filteredViolationList;

}

export const makeRowsForDemeritList = (userViolationList : userViolation[]) => {

    if(!userViolationList){
        return;
    }

    const newRows : any = [];

    userViolationList.forEach((each: any, index : number) => {

        const oneRow: any = {};

        oneRow.id = index + 1;
        oneRow.justOrder = index + 1;
        oneRow.userId = each.userId;
        oneRow.targetDate = each.targetDate;
        oneRow.determinedKindEng = each.kind;

        var justMatchingKind1 = "";
        var justMatchingKind2 = "";

        switch (each.kind) {
            case "absent":
                oneRow.kind = "결석";
                justMatchingKind1 = "결석";
                justMatchingKind2 = "";
                if(each.detailKind === "normal"){
                    oneRow.kind = "일반결석";
                    oneRow.determinedKind = "일반결석";
                }
                if(each.detailKind === "sudden"){
                    oneRow.kind = "사유결석";
                    oneRow.determinedKind = "사유결석";
                }
                if(each.detailKind === "notDetermined"){
                    oneRow.kind = "결석 (미정)";
                    oneRow.determinedKind = "미정";
                }
                if(each.detailKind === "regular"){
                    oneRow.kind = "정기결석";
                    oneRow.determinedKind = "정기결석";
                }
                break;
            case "late":
                oneRow.kind = "지각";
                justMatchingKind1 = "지각";
                justMatchingKind2 = "";
                if(each.detailKind === "normal"){
                    oneRow.kind = "일반지각";
                    oneRow.determinedKind = "일반지각";
                }
                if(each.detailKind === "sudden"){
                    oneRow.kind = "사유지각";
                    oneRow.determinedKind = "사유지각";
                }
                if(each.detailKind === "notDetermined"){
                    oneRow.kind = "지각 (미정)";
                    oneRow.determinedKind = "미정";
                }
                if(each.detailKind === "regular"){
                    oneRow.kind = "정기지각";
                    oneRow.determinedKind = "정기지각";
                }
                break;
            case "early":
                oneRow.kind = "조퇴";
                justMatchingKind1 = "조퇴";
                justMatchingKind2 = "";
                if(each.detailKind === "normal"){
                    oneRow.kind = "일반조퇴";
                    oneRow.determinedKind = "일반조퇴";
                }
                if(each.detailKind === "sudden"){
                    oneRow.kind = "사유조퇴";
                    oneRow.determinedKind = "사유조퇴";
                }
                if(each.detailKind === "notDetermined"){
                    oneRow.kind = "조퇴 (미정)";
                    oneRow.determinedKind = "미정";
                }
                if(each.detailKind === "regular"){
                    oneRow.kind = "정기조퇴";
                    oneRow.determinedKind = "정기조퇴";
                }
                break;
            case "among":
                oneRow.kind = "외출";
                justMatchingKind1 = "외출";
                justMatchingKind2 = "";
                if (each.detailKind === "normal") {
                    oneRow.kind = "일반외출";
                    oneRow.determinedKind = "일반외출";
                }
                if (each.detailKind === "sudden") {
                    oneRow.kind = "사유외출";
                    oneRow.determinedKind = "사유외출";
                }
                if (each.detailKind === "notDetermined") {
                    oneRow.kind = "외출 (미정)";
                    oneRow.determinedKind = "미정";
                    oneRow.demerit = "(미정)";
                }
                if (each.detailKind === "regular") {
                    oneRow.kind = "정기외출";
                    oneRow.determinedKind = "정기외출";
                }

                if (each.outingDuringStudyTimeMin && each.outingDuringStudyTimeMin > 60) {
                    oneRow.description = `자습시간 중 ${each.outingDuringStudyTimeMin}분 외출`;
                    oneRow.outingDemerit = 3;
                }

                // if (each.outingDuringStudyTimeMin && (each.outingDuringStudyTimeMin <= 60 && each.outingDuringStudyTimeMin > 10) && (each.outingDuringMealTimeMin > 60)) {
                //     oneRow.description = `자습시간 중 ${each.outingDuringStudyTimeMin}분 외출 / 식사시간 중 ${each.outingDuringMealTimeMin}분 외출`;
                //     oneRow.outingDemerit = 2;
                // }

                if (each.outingDuringStudyTimeMin && (each.outingDuringStudyTimeMin <= 60 && each.outingDuringStudyTimeMin > 10) && (each.outingDuringMealTimeMin <= 60)) {
                    oneRow.description = `자습시간 중 ${each.outingDuringStudyTimeMin}분 외출`;
                    oneRow.outingDemerit = 1;
                }

                // if ((each.outingDuringStudyTimeMin <= 10) && (each.outingDuringMealTimeMin >= 60)) {
                //     oneRow.description = `식사시간 중 ${each.outingDuringMealTimeMin}분 외출`;
                //     oneRow.outingDemerit = 1;
                // }
                break;

            case "lateOrAbsent":
                oneRow.kind = "지각OR결석";
                justMatchingKind1 = "지각";
                justMatchingKind2 = "결석";
                oneRow.determinedKind = "미정";
                if(each.detailKind === "sudden"){
                    if(each.orSuddenDetailKind === "absent"){
                        oneRow.determinedKind = "사유결석";
                    }
                    if(each.orSuddenDetailKind === "late"){
                        oneRow.determinedKind = "사유지각";
                    }
                }   
                if(each.detailKind === "regular"){
                    oneRow.determinedKind = "정기";
                }                 
                break;
            case "amongOrEarly":
                oneRow.kind = "외출OR조퇴";
                justMatchingKind1 = "외출";
                justMatchingKind2 = "조퇴";
                oneRow.determinedKind = "미정";
                if(each.detailKind === "sudden"){
                    if(each.orSuddenDetailKind === "early"){
                        oneRow.determinedKind = "사유조퇴";
                    }
                    if(each.orSuddenDetailKind === "among"){
                        oneRow.determinedKind = "사유외출";
                    }
                }
                if(each.detailKind === "regular"){
                    oneRow.determinedKind = "정기";
                }           
                break;
            case "lunch":
                oneRow.kind = "3교시 늦은 착석";
                justMatchingKind1 = "착석";
                justMatchingKind2 = "";
                oneRow.determinedKind = "늦은 착석";
                break;
            case "dinner":
                oneRow.kind = "6교시 늦은 착석";
                justMatchingKind1 = "착석";
                justMatchingKind2 = "";
                oneRow.determinedKind = "늦은 착석";
                break;
            case "added" :
                oneRow.kind = "수동추가";
                oneRow.determinedKind = "미정";
        }


        if(each.enterDateTime){

            const newDate = new Date(each.enterDateTime);

            oneRow.enterTime = `${newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()}:${newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()}`;

        }

        if(each.exitDateTime){

            const newDate = new Date(each.exitDateTime);

            oneRow.exitTime = `${newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()}:${newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()}`;

        }

        oneRow.notDeterminedReason = each.notDeterminedReason;
        oneRow.etc = each.etc;
        oneRow.suddenReason = each.suddenReason;

        //구별을 위한 Id 삽입
        oneRow.identifyId = each.identifyId;


        //db와 연동작업.
        if(each.determinedKind){
            if(oneRow.determinedKind === "미정" && (each.determinedKind.slice(-2) === justMatchingKind1 || each.determinedKind.slice(-2) === justMatchingKind2)){
                oneRow.determinedKind = each.determinedKind;
            }
            if(oneRow.kind === "수동추가"){
                oneRow.determinedKind = each.determinedKind;
            }
        }
        if(each.demerit || each.demerit === 0){
            oneRow.selectedDemerit = each.demerit;
        }
        if(each.description){
            oneRow.description = each.description;
        }
        if(each.decided){
            const decidedDeterminedKind = each.decided.split("__")[3];
            if(oneRow.determinedKind === decidedDeterminedKind){
                oneRow.decided = each.decided;
            }
        }
        if(each.sendDemerit){
            oneRow.sendDemerit = each.sendDemerit;
        }
        if(each.memo){
            oneRow.memo = each.memo;
        }
        if(each.cancelDemerit){
            oneRow.cancelDemerit = each.cancelDemerit;
        }

        newRows.push(oneRow);

    });

    newRows.forEach((eachRow : any) => {
        giveDemeritScore(eachRow);
    });

    return newRows;


}


const giveDemeritScore = async (eachRow : any) => {


    switch (eachRow.determinedKind) {
        case "일반결석":
            eachRow.demerit = 10;
            break;
        case "사유결석":
            eachRow.demerit = 5;
            break;
        case "일반지각":
            eachRow.demerit = 5;
            break;
        case "사유지각":
            eachRow.demerit = 3;
            break;
        case "일반조퇴":
            eachRow.demerit = 5;
            break;
        case "사유조퇴":
            eachRow.demerit = 3;
            break;
        case "일반외출":
            eachRow.demerit = eachRow.outingDemerit;
            break;
        case "사유외출":
            eachRow.demerit = 1;
            break;
        case "늦은 착석":
            eachRow.demerit = 1;
            break;
        case "미정":
            eachRow.demerit = 999;
            break;
        case "정기결석":
            eachRow.demerit = 0;
            break;
        case "정기지각":
            eachRow.demerit = 0;
            break;
        case "정기조퇴":
            eachRow.demerit = 0;
            break;
        case "정기외출":
            eachRow.demerit = 0;
            break;
    }

    //eachRow.determinedKind가 "사유" 키워드를 포함하고 있으면, eachRow.suddenReason에 canStudyReasonList에 있는 키워드가 포함되어 있다면 eachRow.demerit = "미정"으로 처리한다.
    if (eachRow.determinedKind && eachRow.determinedKind.includes("사유") && eachRow.suddenReason) {

        let isNotDetermined = false;

        canStudyReasonList.forEach((eachReason: string) => {

            if (eachRow.suddenReason.includes(eachReason)) {
                isNotDetermined = true;
            }

        });

        if (isNotDetermined) {
            eachRow.demerit = 999;
            eachRow.notDeterminedDemeritReason = "사유에 학원/과외 등의 벌점이 0점이 될 가능성이 있는 키워드를 포함하고 있습니다.";
        }

    }

    console.log("thispart");
    console.log(eachRow.selectedDemerit);

    //selectedDemerit이 demerit값과 다를 경우
    if ((eachRow.selectedDemerit || eachRow.selectedDemerit === 0) && eachRow.selectedDemerit !== eachRow.demerit) {

        eachRow.isDemeritNotSame = true;
        eachRow.demerit = eachRow.selectedDemerit;

    }

}


export const countNeededList = (newRows : any) => {

    if (!newRows) {
        return;
    }

    var notDecidedRowCounter = 0;
    var notSendDemeritRowCounter = 0;

    //oneRow.decied가 없는 애들과 sendDemerit이 없는 애들을 세준다.
    newRows.forEach((eachRow: any) => {
        if(eachRow.cancelDemerit){
            return;
        }

        if (!eachRow.decided) {
            notDecidedRowCounter++;
        }
        if (!eachRow.sendDemerit) {
            notSendDemeritRowCounter++;
        }
    });

    return {
        notDecidedRowCounter,
        notSendDemeritRowCounter,
    }

};



