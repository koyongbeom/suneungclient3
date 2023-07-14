import React, { useEffect, useState } from 'react';
import styles from "../styles/cardstyle.module.css";
import { Button, Checkbox, CssVarsProvider, Input, Option, Radio, RadioGroup, Select, Textarea, Typography } from '@mui/joy';
import { CalendarMonth } from '@mui/icons-material';

const CardThirdPage = (props: any) => {

    const [disabled, setDisabled] = useState<boolean>(true);


    useEffect(() => {

        //아래 질문들중 *표시가 있는 질문들의 답변이 모두 채워졌는지 확인한다.
        const isAllFilled = () => {
            const questions = [
                "등원시작 예정일_2_1",
                "수능선배 알게 된 경로_2_2",
                "수능선배를 선택하게 된 가장 큰 이유_2_3",
                "과외수업_2_4"
            ];

            console.log(":ya");
            console.log(props.data["등원시작 예정일_2_1"]);

            for (const question of questions) {
                if (!props.data[question]) {
                    console.log(question);
                    return false;
                }
            }

            return true;
        }

        //모든 질문에 답변이 채워졌으면 다음 버튼을 활성화한다.
        if (isAllFilled()) {
            setDisabled(false);
        }else{
            setDisabled(true);
        }

    }, [props.data]);

    const onCheckBoxChange = (event : React.ChangeEvent<HTMLInputElement>, title : string) => {
        console.log(event.target.name);
        console.log(event.target.checked);

        //props.data["목표전형"]가 undefined이면 빈 배열을 할당한다.
        if (props.data[title] === undefined) {
            props.handleDataChange(title, []);
        }

        //event.target.checked가 true이면 배열에 event.target.name을 추가한다.
        if (event.target.checked) {
            props.handleDataChange(title, [...props.data[title], event.target.name]);
        }
        //event.target.checked가 false이면 배열에서 event.target.name을 제거한다.
        else {
            props.handleDataChange(title, props.data[title].filter((item : string) => item !== event.target.name));
        }

    }

    return (
        <div>
            <CssVarsProvider>
                <div className={styles.title}>
                    등원 정보
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        등원시작 예정일 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <Input
                        value={props.data["등원시작 예정일_2_1"] ? props.data["등원시작 예정일_2_1"] : ""}
                        onChange={(e) => {
                            console.log(e.target.value);
                            props.handleDataChange("등원시작 예정일_2_1", e.target.value);
                        }}
                        startDecorator={
                            <CalendarMonth />
                        }
                        type="date"
                        variant='soft'
                        />
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        수능선배 알게 된 경로 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("수능선배 알게 된 경로_2_2", value);
                                    }
                                }
                                value={props.data["수능선배 알게 된 경로_2_2"] ? props.data["수능선배 알게 된 경로_2_2"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="네이버 검색">네이버 검색</Option>
                                <Option value="지인 소개">지인 소개</Option>
                                <Option value="길거리 전단지">길거리 전단지</Option>
                                <Option value="아파트 게시판">아파트 게시판</Option>
                                <Option value="디스쿨 등 기타 인터넷 페이지">디스쿨 등 기타 인터넷 페이지</Option>
                                <Option value="기타">기타</Option>
                            </Select>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        수능선배를 선택하게 된 가장 큰 이유 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("수능선배를 선택하게 된 가장 큰 이유_2_3", value);
                                    }
                                }
                                value={props.data["수능선배를 선택하게 된 가장 큰 이유_2_3"] ? props.data["수능선배를 선택하게 된 가장 큰 이유_2_3"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="쾌적한 시설">쾌적한 시설</Option>
                                <Option value="1:1 담임멘토링">1:1 담임멘토링</Option>
                                <Option value="엄격한 생활관리">엄격한 생활관리</Option>
                                <Option value="질의응답 시스템">질의응답 시스템</Option>
                                <Option value="전용앱을 통한 편리한 학원 이용 시스템">전용앱을 통한 편리한 학원 이용 시스템</Option>
                            </Select>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과외수업 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup orientation='horizontal'
                            value={props.data["과외수업_2_4"] ? props.data["과외수업_2_4"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("과외수업_2_4", e.target.value);
                            }}
                        >
                            <Radio value="신청" label="신청" variant='soft' />
                            <Radio value="미신청" label="미신청" variant="soft" />
                            <Radio value="상담 후 결정" label="상담 후 결정" variant="soft" />
                        </RadioGroup>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Button variant="solid" color="neutral" onClick={props.minusPage} sx={{marginRight : "8px"}}>
                        이전
                    </Button>
                    <Button variant="solid" color="primary" onClick={props.plusPage} disabled={disabled}>
                        다음
                    </Button>
                </div>

                <div style={{height : "200px"}}>

                </div>

            </CssVarsProvider>
        </div>
    );
}

export default CardThirdPage;