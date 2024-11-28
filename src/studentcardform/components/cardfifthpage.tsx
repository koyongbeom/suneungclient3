import React, { useEffect, useState } from 'react';
import styles from "../styles/cardstyle.module.css";
import { Check } from '@mui/icons-material';
import { Button, Checkbox, CssVarsProvider, Input, Option, Radio, RadioGroup, Select, Textarea, Typography } from '@mui/joy';

const CardFifthPage = (props: any) => {

    const [disabled, setDisabled] = useState<boolean>(true);


    useEffect(() => {

        //아래 질문들중 *표시가 있는 질문들의 답변이 모두 채워졌는지 확인한다.
        const isAllFilled = () => {
            if (props.data["과목별 학습 상세 현황 - 국어_4_1"] && props.data["과목별 학습 상세 현황 - 수학_4_2"] && props.data["과목별 학습 상세 현황 - 영어_4_3"] && props.data["과목별 학습 상세 현황 - 탐구1_4_4"] && props.data["과목별 학습 상세 현황 - 탐구2_4_5"]) {
                return true;
            }
            else {
                return false;
            }
        }

        //모든 질문들의 답변이 채워졌으면 다음 버튼을 활성화한다.
        if (isAllFilled()) {
            setDisabled(false);
        }
        else {
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
                <div className={styles.title} style={{marginBottom : "24px"}}>
                    학습정보 상세
                </div>

                <div className={styles.subTitle}>
                    <Check sx={{fontSize : "14px"}} /> <span style={{fontWeight : 500}}>담임멘토 배정 및 상담에 중요</span>합니다.
                </div>
                <div className={styles.subTitle} style={{marginBottom : "24px"}}>
                    <Check sx={{fontSize : "14px"}} /> 과목별 현재 공부 중인 <span style={{fontWeight : 500}}>교재, 수강강사, 커리큘럼</span> 등 자세히 적어주세요.
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과목별 학습 상세 현황 - <span style={{fontWeight : 600}}>국어</span> <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={5}
                            variant="soft"
                            color="neutral"
                            value={props.data["과목별 학습 상세 현황 - 국어_4_1"] ? props.data["과목별 학습 상세 현황 - 국어_4_1"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("과목별 학습 상세 현황 - 국어_4_1", e.target.value);
                            }}
                        />
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과목별 학습 상세 현황 - <span style={{fontWeight : 600}}>수학</span> <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={5}
                            variant="soft"
                            color="neutral"
                            value={props.data["과목별 학습 상세 현황 - 수학_4_2"] ? props.data["과목별 학습 상세 현황 - 수학_4_2"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("과목별 학습 상세 현황 - 수학_4_2", e.target.value);
                            }}
                        />
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과목별 학습 상세 현황 - <span style={{fontWeight : 600}}>영어</span> <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={5}
                            variant="soft"
                            color="neutral"
                            value={props.data["과목별 학습 상세 현황 - 영어_4_3"] ? props.data["과목별 학습 상세 현황 - 영어_4_3"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("과목별 학습 상세 현황 - 영어_4_3", e.target.value);
                            }}
                        />
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과목별 학습 상세 현황 - <span style={{fontWeight : 600}}>탐구1</span> <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={5}
                            variant="soft"
                            color="neutral"
                            value={props.data["과목별 학습 상세 현황 - 탐구1_4_4"] ? props.data["과목별 학습 상세 현황 - 탐구1_4_4"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("과목별 학습 상세 현황 - 탐구1_4_4", e.target.value);
                            }}
                        />
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과목별 학습 상세 현황 - <span style={{fontWeight : 600}}>탐구2</span> <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={5}
                            variant="soft"
                            color="neutral"
                            value={props.data["과목별 학습 상세 현황 - 탐구2_4_5"] ? props.data["과목별 학습 상세 현황 - 탐구2_4_5"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("과목별 학습 상세 현황 - 탐구2_4_5", e.target.value);
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

                <div style={{height : "230px"}}>

                </div>

            </CssVarsProvider>
        </div>
    );
}

export default CardFifthPage;