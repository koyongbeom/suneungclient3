import React, { useEffect, useState } from 'react';
import styles from "../styles/cardstyle.module.css";
import { Check } from '@mui/icons-material';
import { Button, Checkbox, CssVarsProvider, Input, Option, Radio, RadioGroup, Select, Textarea, Typography } from '@mui/joy';

const CardFourthPage = (props: any) => {

    const [disabled, setDisabled] = useState<boolean>(true);


    useEffect(() => {

        //아래 질문들중 *표시가 있는 질문들의 답변이 모두 채워졌는지 확인한다.
        const isAllFilled = () => {
            if (!props.data["계열_3_1"] || !props.data["국어 선택과목_3_2"] || !props.data["수학 선택과목_3_3"] || !props.data["최근 수능(모의고사) 성적_3_8"]) {
                return false;
            }
            else {
                return true;
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
                    학습정보 개요
                </div>

                <div className={styles.subTitle} style={{marginBottom : "24px"}}>
                    <Check sx={{fontSize : "14px"}} /> <span style={{fontWeight : 500}}>필수 작성 (담임멘토 배정 및 모의고사 진행 시 활용)</span>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        계열 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup orientation='horizontal'
                            value={props.data["계열_3_1"] ? props.data["계열_3_1"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("계열_3_1", e.target.value);
                            }}
                        >
                            <Radio value="문과" label="문과" variant='soft' />
                            <Radio value="이과" label="이과" variant="soft" />
                            <Radio value="예체능" label="예체능" variant="soft" />
                        </RadioGroup>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        국어 선택과목 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup
                            value={props.data["국어 선택과목_3_2"] ? props.data["국어 선택과목_3_2"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("국어 선택과목_3_2", e.target.value);
                            }}
                        >
                            <Radio value="언어와 매체" label="언어와 매체" variant='soft' />
                            <Radio value="화법과 작문" label="화법과 작문" variant="soft" />
                        </RadioGroup>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        수학 선택과목 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup
                            value={props.data["수학 선택과목_3_3"] ? props.data["수학 선택과목_3_3"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("수학 선택과목_3_3", e.target.value);
                            }}
                        >
                            <Radio value="확률과 통계" label="확률과 통계" variant='soft' />
                            <Radio value="미분과 적분" label="미분과 적분" variant="soft" />
                            <Radio value="기하와 벡터" label="기하와 벡터" variant="soft" />
                        </RadioGroup>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        사탐 선택1
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("사회탐구 선택 1과목_3_4", value);
                                    }
                                }
                                value={props.data["사회탐구 선택 1과목_3_4"] ? props.data["사회탐구 선택 1과목_3_4"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="생활과 윤리">생활과 윤리</Option>
                                <Option value="윤리와 사상">윤리와 사상</Option>
                                <Option value="한국지리">한국지리</Option>
                                <Option value="세계지리">세계지리</Option>
                                <Option value="동아시아사">동아시아사</Option>
                                <Option value="세계사">세계사</Option>
                                <Option value="경제">경제</Option>
                                <Option value="정치와 법">정치와 법</Option>
                                <Option value="사회와 문화">사회와 문화</Option>
                                <Option value="미정">미정</Option>
                            </Select>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        사탐 선택2
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("사회탐구 선택 2과목_3_5", value);
                                    }
                                }
                                value={props.data["사회탐구 선택 2과목_3_5"] ? props.data["사회탐구 선택 2과목_3_5"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="생활과 윤리">생활과 윤리</Option>
                                <Option value="윤리와 사상">윤리와 사상</Option>
                                <Option value="한국지리">한국지리</Option>
                                <Option value="세계지리">세계지리</Option>
                                <Option value="동아시아사">동아시아사</Option>
                                <Option value="세계사">세계사</Option>
                                <Option value="경제">경제</Option>
                                <Option value="정치와 법">정치와 법</Option>
                                <Option value="사회와 문화">사회와 문화</Option>
                                <Option value="미정">미정</Option>
                            </Select>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과탐 선택1
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("과학탐구 선택 1과목_3_6", value);
                                    }
                                }
                                value={props.data["과학탐구 선택 1과목_3_6"] ? props.data["과학탐구 선택 1과목_3_6"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="화학 I">화학 I</Option>
                                <Option value="생명과학 I">생명과학 I</Option>
                                <Option value="물리 I">물리 I</Option>
                                <Option value="지구과학 I">지구과학 I</Option>
                                <Option value="화학 II">화학 II</Option>
                                <Option value="생명과학 II">생명과학 II</Option>
                                <Option value="물리 II">물리 II</Option>
                                <Option value="지구과학 II">지구과학 II</Option>
                                <Option value="미정">미정</Option>
                            </Select>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        과탐 선택2
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("과학탐구 선택 2과목_3_7", value);
                                    }
                                }
                                value={props.data["과학탐구 선택 2과목_3_7"] ? props.data["과학탐구 선택 2과목_3_7"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="화학 I">화학 I</Option>
                                <Option value="생명과학 I">생명과학 I</Option>
                                <Option value="물리 I">물리 I</Option>
                                <Option value="지구과학 I">지구과학 I</Option>
                                <Option value="화학 II">화학 II</Option>
                                <Option value="생명과학 II">생명과학 II</Option>
                                <Option value="물리 II">물리 II</Option>
                                <Option value="지구과학 II">지구과학 II</Option>
                                <Option value="미정">미정</Option>
                            </Select>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        최근 수능(모의고사) 성적 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5}}>
                        예) 25학년도 수능 : 국어(언매) 98, 수학(미적) 74, 영어 1, 화1 97, 생물1 88
                        <br />
                        예) 10월 학평 : 국어(언매) 1등급, 수학(확통) 2등급, 영어 1, 화1 3등급, 생1 2등급
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            minRows={3}
                            variant="soft"
                            color="neutral"
                            value={props.data["최근 수능(모의고사) 성적_3_8"] ? props.data["최근 수능(모의고사) 성적_3_8"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("최근 수능(모의고사) 성적_3_8", e.target.value);
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

export default CardFourthPage;