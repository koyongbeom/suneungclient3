import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/chart.module.css';


const result = {
    "message": "success",
    "data": {
        "id": 9,
        "studentId": 35,
        "teacherId": 25,
        "information": {
            "addText": "등원 시간과 하원 시간을 고려했을 때 하루 공부 시간이 적어 보임 -> 조금 더 집중력 있게 공부하고 빠르게 하원 하는 연습해보기\n\n강의를 듣는 것은 기본, 결국 복습을 잘해야 자기의 것이 되기 때문에 복습에 소홀히 하지 않기.\n\n틀린 문제는 다시 보기 쉽게 체크 잘해두고, 가능하다면 틀린 이유도 기재해둘 것.",
            "studentId": 35,
            "correctBiology": "5/5",
            "correctOrganic": "4/5",
            "correctPhysics": "",
            "lectureBiology": "윤도영 개념완성 / 오지훈 실력완성",
            "lectureOrganic": "양승진 기출코드",
            "lecturePhysics": "이명학 리로직",
            "feedbackBiology": "생물1\n유전 파트 문제의 기본적인 풀이법을 익힌 것으로 보여짐.",
            "feedbackOrganic": "미적분\n로피탈 사용한 문제 다시풀어보기\n준킬러 문제들 잘 해결했음",
            "feedbackPhysics": "다음 시간까지 빈칸 채우기 5문제 \n풀어오기",
            "nextWeekBiology": "각각 6강(2회차) 씩",
            "nextWeekOrganic": "9강 (3회차)",
            "nextWeekPhysics": "6강 (2회차)",
            "correctChemistry": "",
            "lectureChemistry": "강민철 강기본",
            "beforeWeekBiology": "6강 / 6강   //   5강 / 6강\n급한 과목이 국어 수학이니 지학 1강 밀린 것은 시간이 나면 듣기",
            "beforeWeekOrganic": "9강 / 9강",
            "beforeWeekPhysics": "6강 / 6강",
            "feedbackChemistry": "다음 상담까지 비문학 테스트 풀어오기",
            "nextWeekChemistry": "9강 (3회차)",
            "descriptionBiology": "유전 파트 문제는 매일 1문제씩 풀면서 감 잡기\n\n지구과학은 새롭게 배우는 내용이니, 이론 암기 및 복습 꼼꼼하게 하기",
            "descriptionOrganic": "강의를 듣고 문제 풀기 전에 강의 내용 및 이론 간단하게라도 복습하고 문제 풀기\n\n기출 문제에 강의 내용 적용해서 풀기\n\n아직은 틀린 문제 오답노트를 만들지 말고 일단은 다시 보기 쉽게 인덱스를 붙여두거나 사진으로 문제 찍어두기.\n",
            "descriptionPhysics": "워드마스터 매일 1일 차씩 암기하기 -> 상담 시간이 남을 때 임의로 테스트 할 예정\n\n매일 수특, 수완 지문 문제 풀고 단어 선별해서 암기하기\n\n문제 풀 때 강의에서 배운 내용 적용하기",
            "beforeWeekChemistry": "8강 / 9강\n1강은 주말에 보충 수강하기",
            "descriptionChemistry": "비 문학 문제를 풀 때 한 호흡에 문제를 풀어내는 연습하기\n\n강의를 듣고 기출 문제에 적용해서 연습하기 (하루에 한 번)\n\n국어 진도가 조금 밀렸으니 국어 강의가 밀리지 않게 우선순위를 먼저 둘 것"
        },
        "createdAt": "2022-03-17T07:43:22.000Z",
        "name": "김동훈",
        "studentName": "강다연"
    },
    "month": 3,
    "date": 17
}

const PreviousChart: React.FC<any> = (props) => {

    const [index, setIndex] = useState(0);

    const [loading, setLoading] = useState(false);
    const [uploadBool, setUploadBool] = useState(false);
    const [users, setUsers] = useState<any>();
    const [selectedUser, setSelectedUser] = useState<any>();
    const componentRef = useRef(null);
    const [active, setActive] = useState(false);

    const [month, setMonth] = useState<any>();
    const [date, setDate] = useState<any>();

    const [teacherName, setTeacherName] = useState("");

    const [correctChemistry, setCorrectChemistry] = useState("");
    const [correctOrganic, setCorrectOrganic] = useState("");
    const [correctPhysics, setCorrectPhysics] = useState("");
    const [correctBiology, setCorrectBiology] = useState("");

    const [feedbackChemistry, setFeedbackChemistry] = useState("");
    const [feedbackOrganic, setFeedbackOrganic] = useState("");
    const [feedbackPhysics, setFeedbackPhysics] = useState("");
    const [feedbackBiology, setFeedbackBiology] = useState("");

    const [lectureChemistry, setLectureChemistry] = useState("");
    const [lectureOrganic, setLectureOrganic] = useState("");
    const [lecturePhysics, setLecturePhysics] = useState("");
    const [lectureBiology, setLectureBiology] = useState("");

    const [beforeWeekChemistry, setBeforeWeekChemistry] = useState("");
    const [beforeWeekOrganic, setBeforeWeekOrganic] = useState("");
    const [beforeWeekPhysics, setBeforeWeekPhysics] = useState("");
    const [beforeWeekBiology, setBeforeWeekBiology] = useState("");

    const [nextWeekChemistry, setNextWeekChemistry] = useState("");
    const [nextWeekOrganic, setNextWeekOrganic] = useState("");
    const [nextWeekPhysics, setNextWeekPhysics] = useState("");
    const [nextWeekBiology, setNextWeekBiology] = useState("");

    const [descriptionChemistry, setDescriptionChemistry] = useState("");
    const [descriptionOrganic, setDescriptionOrganic] = useState("");
    const [descriptionPhysics, setDescriptionPhysics] = useState("");
    const [descriptionBiology, setDescriptionBiology] = useState("");

    const [addText, setAddText] = useState("");

    const minus = (e : any) =>{
        if(index === 0){
            // alert("현재 가장 최근 상담일지입니다.")
        }else{
            const newIndex = index;
            setIndex(newIndex - 1);
        }
    }

    const plus = (e : any) => {
        const newIndex = index;
        setIndex(newIndex + 1);
    }


    useEffect(() => {
        setLoading(true);
        console.log("---------");
        async function start() {
            console.log(result);
            setMonth(result.month);
            setDate(result.date);
            const information = result.data.information;
            setCorrectChemistry(information.correctChemistry);
            setCorrectOrganic(information.correctOrganic);
            setCorrectPhysics(information.correctPhysics);
            setCorrectBiology(information.correctBiology);
            setFeedbackChemistry(information.feedbackChemistry);
            setFeedbackOrganic(information.feedbackOrganic);
            setFeedbackPhysics(information.feedbackPhysics);
            setFeedbackBiology(information.feedbackBiology);
            setLectureChemistry(information.lectureChemistry);
            setLectureOrganic(information.lectureOrganic);
            setLecturePhysics(information.lecturePhysics);
            setLectureBiology(information.lectureBiology);
            setBeforeWeekChemistry(information.beforeWeekChemistry);
            setBeforeWeekOrganic(information.beforeWeekOrganic);
            setBeforeWeekPhysics(information.beforeWeekPhysics);
            setBeforeWeekBiology(information.beforeWeekBiology);
            setNextWeekChemistry(information.nextWeekChemistry);
            setNextWeekOrganic(information.nextWeekOrganic);
            setNextWeekPhysics(information.nextWeekPhysics);
            setNextWeekBiology(information.nextWeekBiology);
            setDescriptionChemistry(information.descriptionChemistry);
            setDescriptionOrganic(information.descriptionOrganic);
            setDescriptionPhysics(information.descriptionPhysics);
            setDescriptionBiology(information.descriptionBiology);
            setAddText(information.addText);
            setTeacherName(result.data.name);
            // var token = "";

            // fetch(`https://peetsunbae.com/dashboard/chart/before?userId=${props.selectedUser.id}&index=${index}`, {
            //     method: "GET",
            //     headers: { "Authorization": token },
            //     credentials: "include",
            // }).then((response: any) => {
            //     response.json()
            //         .then((result: any) => {
            //             if(result.message === "success"){
            //             console.log(result);
            //             setMonth(result.month);
            //             setDate(result.date);
            //             const information = result.data.information;
            //             setCorrectChemistry(information.correctChemistry);
            //             setCorrectOrganic(information.correctOrganic);
            //             setCorrectPhysics(information.correctPhysics);
            //             setCorrectBiology(information.correctBiology);
            //             setFeedbackChemistry(information.feedbackChemistry);
            //             setFeedbackOrganic(information.feedbackOrganic);
            //             setFeedbackPhysics(information.feedbackPhysics);
            //             setFeedbackBiology(information.feedbackBiology);
            //             setLectureChemistry(information.lectureChemistry);
            //             setLectureOrganic(information.lectureOrganic);
            //             setLecturePhysics(information.lecturePhysics);
            //             setLectureBiology(information.lectureBiology);
            //             setBeforeWeekChemistry(information.beforeWeekChemistry);
            //             setBeforeWeekOrganic(information.beforeWeekOrganic);
            //             setBeforeWeekPhysics(information.beforeWeekPhysics);
            //             setBeforeWeekBiology(information.beforeWeekBiology);
            //             setNextWeekChemistry(information.nextWeekChemistry);
            //             setNextWeekOrganic(information.nextWeekOrganic);
            //             setNextWeekPhysics(information.nextWeekPhysics);
            //             setNextWeekBiology(information.nextWeekBiology);
            //             setDescriptionChemistry(information.descriptionChemistry);
            //             setDescriptionOrganic(information.descriptionOrganic);
            //             setDescriptionPhysics(information.descriptionPhysics);
            //             setDescriptionBiology(information.descriptionBiology);
            //             setAddText(information.addText);
            //             setTeacherName(result.data.name);
            //             setLoading(false);
            //             }else if(result.message === "NOT"){
            //                 // alert("존재하지 않습니다.");
            //                 setLoading(false);
            //             }
            //         })
            // })
        }

        start();
    }, [index]);



    return (
        <div className={styles.mainModal}>
            <div className={styles.manageModalDivTitle}>
                <div>학습관리({month ? month : ""}월 {date ? date : ""}일) - {teacherName} 담임선생님</div>
                <div></div>
            </div>
            <div className={styles.manageTableModalDiv}>
                <div className={styles.manageModalTable}>
                    <div className={styles.firstRow}>
                        <div>
                            과목
                        </div>
                        <div>
                            국어
                        </div>
                        <div>
                            수학
                        </div>
                        <div>
                            영어
                        </div>
                        <div>
                            탐구
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.secondRow_1}>
                            <div>
                                Weekly<br />ABC<br />test
                            </div>
                        </div>
                        <div className={styles.secondRow_2}>
                            <div>
                                맞은갯수/총갯수
                            </div>
                            <div>
                                피드백
                            </div>
                        </div>
                        <div className={styles.secondRow_3}>
                            <div className={styles.TextFieldwithoutborderradius}>
                                <input value={correctChemistry} className={styles.input} type="text" />
                            </div>
                            <div className={styles.TextFieldwithoutborderradius2}>
                                <textarea  value={feedbackChemistry} className={styles.textarea} />
                            </div>
                        </div>
                        <div className={styles.secondRow_4}>
                            <div>
                                <input  value={correctOrganic} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={feedbackOrganic} className={styles.textarea} />
                            </div>
                        </div>
                        <div className={styles.secondRow_5}>
                            <div>
                                <input  value={correctPhysics} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={feedbackPhysics} className={styles.textarea} />
                            </div>
                        </div>
                        <div className={styles.secondRow_6}>
                            <div>
                                <input  value={correctBiology} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={feedbackBiology} className={styles.textarea} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.thirdRow}>
                        <div className={styles.thirdRow_1}>
                            <div>
                                수강진도
                            </div>
                        </div>
                        <div className={styles.thirdRow_2}>
                            <div>
                                수강강좌
                            </div>
                            <div>
                                전주 학습이행도
                            </div>
                            <div>
                                다음주 계획
                            </div>
                        </div>
                        <div className={styles.thirdRow_3}>
                            <div>
                                <input  value={lectureChemistry} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={beforeWeekChemistry} className={styles.textarea} />
                            </div>
                            <div>
                                <input  value={nextWeekChemistry} className={styles.input} type="text" />
                            </div>
                        </div>
                        <div className={styles.thirdRow_4}>
                            <div>
                                <input  value={lectureOrganic} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={beforeWeekOrganic} className={styles.textarea} />
                            </div>
                            <div>
                                <input  value={nextWeekOrganic} className={styles.input} type="text" />
                            </div>
                        </div>
                        <div className={styles.thirdRow_5}>
                            <div>
                                <input  value={lecturePhysics} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={beforeWeekPhysics} className={styles.textarea} />
                            </div>
                            <div>
                                <input  value={nextWeekPhysics} className={styles.input} type="text" />
                            </div>
                        </div>
                        <div className={styles.thirdRow_6}>
                            <div>
                                <input  value={lectureBiology} className={styles.input} type="text" />
                            </div>
                            <div>
                                <textarea  value={beforeWeekBiology} className={styles.textarea} />
                            </div>
                            <div>
                                <input  value={nextWeekBiology} className={styles.input} type="text" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.fourthRow}>
                        <div className={styles.fourthRow_1}>
                            <div>
                                학습내용<br />상세기입란
                            </div>
                        </div>
                        <div className={styles.fourthRow_2}>
                            <div>
                                <textarea  value={descriptionChemistry} className={styles.textarea} />
                            </div>
                        </div>
                        <div className={styles.fourthRow_3}>
                            <div>
                                <textarea  value={descriptionOrganic} className={styles.textarea} />
                            </div>
                        </div>
                        <div className={styles.fourthRow_4}>
                            <div>
                                <textarea  value={descriptionPhysics} className={styles.textarea} />
                            </div>
                        </div>
                        <div className={styles.fourthRow_5}>
                            <div>
                                <textarea  value={descriptionBiology} className={styles.textarea} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.fifthRow}>
                        <div className={styles.fifthRow_1}>
                            <div>
                                추가사항<br />
                            </div>
                        </div>
                        <div className={styles.fifthRow_2}>
                            <div>
                                <textarea value={addText} className={styles.textarea} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PreviousChart;