import React, { useEffect, useState } from 'react';
import styles from "../styles/cardstyle.module.css";
import { Button, Checkbox, CssVarsProvider, Option, Radio, RadioGroup, Select, Textarea, Typography } from '@mui/joy';

const CardSixthPage = (props: any) => {

    const [disabled, setDisabled] = useState<boolean>(true);


    useEffect(() => {

        //아래 질문들중 *표시가 있는 질문들의 답변이 모두 채워졌는지 확인한다.
        const requiredQuestions = [
            "학습상담에 가장 도움 받고 싶은 과목_5_1",
            "멘토상담에서 가장 필요한 부분_5_2",
            "담임멘토 배정 및 상담에 대한 요청사항_5_3",
        ];

        let isDisabled = false;

        for (let i = 0; i < requiredQuestions.length; i++) {
            if (props.data[requiredQuestions[i]] === undefined || props.data[requiredQuestions[i]] === "") {
                isDisabled = true;
                break;
            }
        }

        setDisabled(isDisabled);


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
                    담임멘토상담 설문
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        학습상담에 가장 도움 받고 싶은 과목<span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup
                            value={props.data["학습상담에 가장 도움 받고 싶은 과목_5_1"] ? props.data["학습상담에 가장 도움 받고 싶은 과목_5_1"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("학습상담에 가장 도움 받고 싶은 과목_5_1", e.target.value);
                            }}
                        >
                            <Radio value="국어" label="국어" variant='soft' />
                            <Radio value="수학" label="수학" variant="soft" />
                            <Radio value="영어" label="영어" variant="soft" />
                            <Radio value="탐구" label="탐구" variant="soft" />
                        </RadioGroup>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        멘토상담에서 가장 필요한 부분<span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup
                            value={props.data["멘토상담에서 가장 필요한 부분_5_2"] ? props.data["멘토상담에서 가장 필요한 부분_5_2"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("멘토상담에서 가장 필요한 부분_5_2", e.target.value);
                            }}
                        >
                            <Radio value="전체적인 공부루틴 확립을 위한 계획수립, 진도체크, 학습이행여부 확인" label={<span style={{lineHeight : 1.3}}>전체적인 공부루틴 확립을 위한 계획수립, 진도체크, 학습이행여부 확인</span>} variant='soft' />
                            <Radio value="약점과목의 성적향상을 위한 과목 상세 코칭" label={<span style={{lineHeight : 1.3}}>약점과목의 성적향상을 위한 과목 상세 코칭</span>} variant="soft" />
                            <Radio value="공부의지 향상을 위한 동기부여와 소통" label={<span style={{lineHeight : 1.3}}>공부의지 향상을 위한 동기부여와 소통</span>} variant="soft" />
                        </RadioGroup>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        담임멘토 배정 및 상담에 대한 요청사항 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={5}
                            variant="soft"
                            color="neutral"
                            value={props.data["담임멘토 배정 및 상담에 대한 요청사항_5_3"] ? props.data["담임멘토 배정 및 상담에 대한 요청사항_5_3"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("담임멘토 배정 및 상담에 대한 요청사항_5_3", e.target.value);
                            }}
                        />
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

export default CardSixthPage;