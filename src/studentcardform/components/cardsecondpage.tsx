import React, { useEffect, useState } from 'react';
import styles from "../styles/cardstyle.module.css";
import { Button, Checkbox, CssVarsProvider, Option, Radio, RadioGroup, Select, Textarea, Typography } from '@mui/joy';

const CardSecondPage = (props: any) => {

    const [disabled, setDisabled] = useState<boolean>(true);


    useEffect(() => {

        //아래 질문들중 *표시가 있는 질문들의 답변이 모두 채워졌는지 확인한다.
        const isAllFilled = () => {
            if (props.data["이름_1_1"] && props.data["성별_1_2"] && props.data["학부모 연락처_1_3"] && props.data["생년월일_1_4"] && props.data["수능응시횟수_1_5"] && props.data["목표전형_1_6"] && props.data["목표전형_1_6"].length > 0) {
                return true;
            }
            else {
                return false;
            }
        }

        //isAllFilled()의 결과에 따라 버튼을 활성화한다.
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
                <div className={styles.title}>
                    학생 정보
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        이름 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            variant="soft"
                            color="neutral"
                            value={props.data["이름_1_1"] ? props.data["이름_1_1"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("이름_1_1", e.target.value);
                            }}
                        />
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        성별 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                        <RadioGroup orientation='horizontal'
                            value={props.data["성별_1_2"] ? props.data["성별_1_2"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("성별_1_2", e.target.value);
                            }}
                        >
                            <Radio value="남학생" label="남학생" variant='soft' />
                            <Radio value="여학생" label="여학생" variant="soft" />
                        </RadioGroup>
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        학부모 연락처 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                        (ex) 01056785678 - 숫자만 입력 가능
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            variant="soft"
                            color="neutral"
                            value={props.data["학부모 연락처_1_3"] ? props.data["학부모 연락처_1_3"] : ""}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                var isNumeric = /^\d+$/.test(inputValue); // Check if input is numeric
                                if (inputValue === "") {
                                    isNumeric = true;
                                }
                                if (isNumeric && inputValue.length <= 11) { // Ensure max length is 11
                                    props.handleDataChange("학부모 연락처_1_3", inputValue);
                                }
                            }}
                            //endDecorator에 현재 학부모 연락처의 길이를 표시한다.
                            endDecorator={
                                <Typography level="body3" sx={{ ml: 'auto' }}>
                                    {
                                        props.data["학부모 연락처_1_3"] ? props.data["학부모 연락처_1_3"].length : 0
                                    }/11
                                </Typography>
                            }
                        />
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        생년월일 <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                        (ex) 020324 - 숫자만 입력 가능
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            variant="soft"
                            color="neutral"
                            value={props.data["생년월일_1_4"] ? props.data["생년월일_1_4"] : ""}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                var isNumeric = /^\d+$/.test(inputValue); // Check if input is numeric
                                if (inputValue === "") {
                                    isNumeric = true;
                                }
                                if (isNumeric && inputValue.length <= 6) { // Ensure max length is 11
                                    props.handleDataChange("생년월일_1_4", inputValue);
                                }
                            }}
                            endDecorator={
                                <Typography level="body3" sx={{ ml: 'auto' }}>
                                    {
                                        props.data["생년월일_1_4"] ? props.data["생년월일_1_4"].length : 0
                                    }/6
                                </Typography>
                            }
                        />
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        학년 (25' 기준) <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("수능응시횟수_1_5", value);
                                    }
                                }
                                value={props.data["수능응시횟수_1_5"] ? props.data["수능응시횟수_1_5"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="고2">고2</Option>
                                <Option value="고3">고3</Option>
                                <Option value="재수">재수</Option>
                                <Option value="삼수 이상">삼수 이상</Option>
                                <Option value="기타">기타</Option>
                            </Select>
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        목표전형 (복수선택 가능) <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle}>
                        
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="정시" name="정시" checked={(props.data && props.data["목표전형_1_6"] && props.data["목표전형_1_6"].includes("정시") ? true : false )} onChange={(e) => {onCheckBoxChange(e, "목표전형_1_6")}}/>
                        </div>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="수시(학종)" name="수시(학종)" checked={(props.data && props.data["목표전형_1_6"] && props.data["목표전형_1_6"].includes("수시(학종)") ? true : false )}  onChange={(e) => {onCheckBoxChange(e, "목표전형_1_6")}} />
                        </div>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="수시(교과)" name="수시(교과)" checked={(props.data && props.data["목표전형_1_6"] && props.data["목표전형_1_6"].includes("수시(교과)") ? true : false )} onChange={(e) => {onCheckBoxChange(e, "목표전형_1_6")}} />
                        </div>
                        <div>
                            <Checkbox variant='soft' color='neutral' label="수시(논술)" name="수시(논술)" checked={(props.data && props.data["목표전형_1_6"] && props.data["목표전형_1_6"].includes("수시(논술)") ? true : false )} onChange={(e) => {onCheckBoxChange(e, "목표전형_1_6")}} />
                        </div>
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        출신고
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            variant="soft"
                            color="neutral"
                            value={props.data["출신고_1_7"] ? props.data["출신고_1_7"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("출신고_1_7", e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        내신등급
                    </div>
                    <div className={styles.questionSubTitle}>

                    </div>
                    <div className={styles.answerBox}>
                            <Select
                                onChange={
                                    (e, value) => {
                                        props.handleDataChange("내신등급_1_8", value);
                                    }
                                }
                                value={props.data["내신등급_1_8"] ? props.data["내신등급_1_8"] : ""}
                                variant="soft"
                                color="neutral"
                            >
                                <Option value="1등급~2등급">1등급~2등급</Option>
                                <Option value="2등급~3등급">2등급~3등급</Option>
                                <Option value="3등급~4등급">3등급~4등급</Option>
                                <Option value="4등급 이하">4등급 이하</Option>
                            </Select>
                    </div>
                </div>

                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        현재 재학 중인 대학교 및 학과 (선택사항)
                    </div>
                    <div className={styles.questionSubTitle}>
                    </div>
                    <div className={styles.answerBox}>
                        <Textarea
                            variant="soft"
                            color="neutral"
                            value={props.data["현재 재학중인 대학교 및 학과_1_9"] ? props.data["현재 재학중인 대학교 및 학과_1_9"] : ""}
                            onChange={(e) => {
                                props.handleDataChange("현재 재학중인 대학교 및 학과_1_9", e.target.value);
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

export default CardSecondPage;