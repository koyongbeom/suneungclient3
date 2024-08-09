import React, { useEffect, useState } from 'react';
import styles from "../styles/cardstyle.module.css";
import { Button, Checkbox, CssVarsProvider, Option, Radio, RadioGroup, Select, Textarea, Typography } from '@mui/joy';

const CardSeventhPage = (props: any) => {

    const [disabled, setDisabled] = useState<boolean>(true);


    useEffect(() => {

        //아래 질문들중 *표시가 있는 질문들의 답변이 모두 채워졌는지 확인한다.
        const isAllAnswered = ["[등록비 안내]_1", "[환불 안내]_2", "[지정석 제공]_3", "[자리 변경]_4", "[교시제 운영]_5", "[학원운영시간]_6", "[출석 체크]_7", "[교시 중 출입]_8", "[담임멘토 1:1 학습관리 시스템]_9", "[질의응답 시스템]_10", "[사유 제출]_12", "[정기 일정]_13", 
        "[식사 안내]_14", "[프린트 안내]_15", "[자습실 이용 규칙]_16", "[자습실 내 생활관리]_17", "[벌점 제도]_18", "[와이파이 방화벽]_19"
    ].every((title : string) => {
            return props.data[title] !== undefined && props.data[title].length > 0;
        }

        );

        //모든 질문에 답변이 채워졌으면 다음 페이지로 넘어갈 수 있도록 버튼을 활성화한다.
        if (isAllAnswered) {
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
                    확인 사항
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                        [등록비 안내] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>

                    - 등록비에 멘토 상담, 24시간 좌석 이용, 생활관리, 질의응답 등 모든 원내 학습서비스가 포함됩니다.
  (단, 도시락 신청, 모의고사 신청 비용 별도)<br/><br/>

- 등록은 매월 1일~말 일 까지 한 달 단위로 진행되며, 매월 20일 경 다음달에 대한 등록비 안내가 나갑니다.<br/><br/>

- 카드결제, 계좌이체 모두 가능하며, 계좌이체 후 현금영수증 발급을 원하시는 경우 데스크로 문의해주시길 바랍니다.
<br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[등록비 안내]_1")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [환불 안내] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    환불은 학원법 제 18조 3항에 따라 적용됩니다.<br/><br/>
                    ① 이용시작 전 : 수강료 전액 환불<br/><br/>
                    ② 1/3 경과 전 : 수강료 2/3 해당액 환불<br/><br/>
                    ③ 1/2 경과 전 : 수강료의 1/2 해당액 환불<br/><br/>
                    ④ 1/2이상이 경과한 경우 수강료 환불 불가 
<br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[환불 안내]_2")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [지정석 제공] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    등록하신 자리는 고정석으로 운영되며, 데스크로 문의주시면 자리 변경 가능합니다.
<br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[지정석 제공]_3")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [자리 변경] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    자리 변경을 원하시는 경우, 프로그램 '메시지'  및 '의견보내기' 메뉴에서 글을 작성해주시면 가능합니다.
<br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[자리 변경]_4")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [교시제 운영] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 의무자습시간은 평일 오전 8시 ~ 오후 10시, 토요일 오전 8시 ~ 오후 3시까지 입니다.<br/><br/>
- 의무자습시간 내 원내 시간표에 따라 학습시간 및 휴식시간으로 운영됩니다. 
<br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[교시제 운영]_5")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [학원운영시간] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 의무자습시간과 별개로 학원운영시간은 오전 6시 ~ 오후 12시 이므로, 해당 시간 내 자습실 사용이 가능합니다.<br/><br/>
- 자습실 이용은 연중무휴를 원칙으로 하므로, 일요일 및 기타 공휴일에도 이용 가능합니다.
<br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[학원운영시간]_6")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [출석 체크] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    ① 매교시마다 직접 순찰하며 착석 여부를 확인합니다.<br/><br/>
                    ② 매교시마다 입출입 기록 데이터와 대조 확인합니다.<br/><br/>
                    ③ 모든 입출입 기록은 학부모 알림톡으로 발송됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[출석 체크]_7")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [교시 중 출입] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 교시 중간에 등원을 하는 경우 중간 입실이 불가능하며, 휴게실에서 대기 후 다음 쉬는 시간에 입실 가능합니다.<br/><br/>
- 이미 등원한 상태인 경우, 교시 중 휴게실의 자율적 이용이 가능합니다.<br/><br/>
- 교시 중 10분 이내로 화장실 이용이 가능합니다. 10분 초과 시 벌점 사유가 됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[교시 중 출입]_8")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [담임멘토 1:1 학습관리 시스템] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 매주 3-40분 개인 담임 멘토와의 1:1 대면 상담이 진행됩니다. 커리큘럼 및 계획표 관리를 통해 일주일 간 인강 진도 및 과목별 복습 방법 등의 상담이 이뤄집니다. 
- 담임 멘토 변경 원할 시 프로그램 내 '메시지' 및 '의견 보내기'로 글 작성해주시면 됩니다.<br/><br/>
- 다른 학생의 갑작스러운 불참 등으로 부득이하게 상담시간이 조정될 수 있는 점 양해부탁드립니다.<br/><br/>
- 점심/저녁 시간 중 상담은 가급적 배정을 피하도록 노력하고 있으나 불가피하게 상담이 진행될 수 있습니다. 식사 시간 내 상담이 배정되는 경우 데스크에 말씀해주시면 출석상황에 식사시간 보장을 받을 수 있도록 하고 있습니다.<br/><br/>
- 멘토상담 스케줄은 방학중 상담시간은 학기중 상담시간에서 변동될 수 있습니다.<br/><br/>
- 중간/기말 고사 기간 동안 멘토 상담이 일시적으로 휴강/시간변동 될 수 있습니다.<br/><br/>
- 멘토와 개인 연락처 교환 및 직접 연락은 제한됩니다. 문의사항은 어플 메시지로 해주시면 됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[담임멘토 1:1 학습관리 시스템]_9")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [질의응답 시스템] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    질의응답은 두 가지 방법으로 신청하실 수 있습니다.<br/><br/>
① 대면 질의응답 - 각 과목별 백분위 99% 이상의 튜터가 원내 상담실에서 진행<br/><br/>
② 온라인 질의응답 - 프로그램 '질의응답 메뉴'를 통해 가능<br/><br/>
* 스케줄 내 다른 학생의 갑작스러운 불참 등의 경우, 신청한 질의응답 시간은 조정될 수 있습니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[질의응답 시스템]_10")}}/>
                        </div>
                    </div>
                </div>


                {/* <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [1:1 과외 시스템] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 상위 1% 의치약 재학 중인 튜터를 통해 과외가 진행됩니다. 과외 신청 원하실 경우  프로그램 내 '메시지' 및 '의견 보내기'로 글 작성하시면, 담당 과목 튜터와 직접 상담 후 결정됩니다.<br/><br/>
- 과외비는 별도이며 상세 금액은 홈페이지에서 확인 가능합니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[1:1 과외 시스템]_11")}}/>
                        </div>
                    </div>
                </div> */}


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [사유 제출] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    지각/결석/외출/조퇴 해야되는 경우 프로그램 내 '사유제출' 메뉴를 통해 사유 제출하면 됩니다. 모든 내역은 학부모 알림톡으로 전송되며, 승인 여부에 따라 벌점이 차등 부여 됩니다.<br/><br/>
* 조퇴/외출 시 급한 상황인 경우 사유 제출 후 승인 이전에 먼저 귀가하셔도 되며, 이후 승인 여부에 따라 벌점은 차등 부여됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[사유 제출]_12")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [정기 일정] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    정기적인 일정이 있을 경우 첫 등원 시 또는 매 달 1일에 프로그램 내 '정기일정' 메뉴를 통해 등록 가능합니다. 모든 정기 일정 신청은 학원 승인 후 부모님 알림톡 승인까지 완료돼야 최종 반영됩니다.<br/><br/>
- 정기일정에 등록되지 않는 사유는 모두 벌점 부여 기준이 됩니다.<br/><br/>
- 정기일정 제출 기한은 매달 1일까지 이며, 이후 수정은 불가하니 신중하게 작성 부탁드립니다. 이후 수정사항이 생기는 경우, 데스크로 문의주시면 됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[정기 일정]_13")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [식사 안내] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 점심 및 저녁 식사는 정해진 시간 내에 휴게실 또는 외부에서 가능합니다.<br/><br/>
- 외출 식사의 경우 1시간 이내로 가능하며, 초과 시 벌점이 부여됩니다.<br/><br/>
- 단체 도시락 신청은 프로그램 내 '도시락 신청' 메뉴에서 신청하시면 됩니다.<br/><br/>
- 개인 도시락의 경우 휴게실에서 식사 가능합니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[식사 안내]_14")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [프린트 안내] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 프린트는 데스크 프린트용 컴퓨터를 이용하시면 됩니다.<br/><br/>
- 등록 시 생성된 개인 계정으로 로그인하여 사용하시면 됩니다.<br/><br/>
- 프린트비는 익월 등록비에 합산 청구됩니다. (A4 50원/장, B4 100원/장 *단면,양면 동일)
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[프린트 안내]_15")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [자습실 이용 규칙] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 자습실 내 음료를 제외한 모든 섭취는 금지됩니다.<br/><br/>
- 사탕, 초콜릿 등 냄새가 나지 않는 음식은 휴게실에서 섭취 가능합니다.<br/><br/>
- 향이 나는 제품(향수, 향이 진한 핸드크림 등)도 금지됩니다.<br/><br/>
- 자습실 내 3색 볼펜, 키보드, 마우스 사용은 금지됩니다. 필요 시 휴게실에서 이용 가능합니다.<br/>
 (단, 무소음 키보드, 마우스 제외)<br/><br/>
- 다른 학생에 관한 건의 내용은 학생 간 직접 전달을 금지하며, 프로그램 내 '메시지' 및 '의견보내기' 메뉴를 이용해주시면 됩니다. <br/><br/>
- 학원은 함께 사용하는 시설입니다. 이후 사용할 학생들을 위해 책상에 칼질을 하거나 칸막이, 의자에 오염이 될 만한 행동들은 삼가주시면 감사하겠습니다. :)
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[자습실 이용 규칙]_16")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [자습실 내 생활관리] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 다른 학생분들의 면학분위기를 위해 자습실 내 사감직원분의 안내를 적극적으로 따라주시길 바랍니다.<br/><br/>
- 교시 중 2회 연속 수면 시, 휴게실에 나가서 스탠딩 테이블에서 공부하며 잠을 깨고 다시 입실하는 것이 원칙입니다.<br/><br/>
- 교시 중 3회 연속 수면 시, 부모님께 벌점 0점과 함께 알림 카톡이 전송되며, 이후 지속적인 수면 시 벌점이 부여됩니다.<br/><br/>
- 자습실 내 휴대폰 소지는 전 시간 금지입니다.<br/> (1회 적발 시 경고, 2회 적발 시 퇴원)<br/><br/>
- 인강 외 다른 어플 이용은 금지되며, 최초 적발 시 경고와 함께 벌점 3점이 부여되고, 반복 시 자습실 내 기기사용이 제한됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[자습실 내 생활관리]_17")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [벌점 제도] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 본원은 벌점제도로 운영하고 있습니다.<br/><br/>
- 누적벌점 20점의 경우, 일요일 의무등원 대상이 됩니다.<br/><br/>
- 누적벌점 50점의 경우 강제 퇴원 대상이 됩니다.<br/><br/>
- 일요일에 등원하는 경우 순공시간 1시간 마다 벌점 1점이 차감됩니다.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[벌점 제도]_18")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.eachQuestion}>
                    <div className={styles.questionTitle}>
                    [와이파이 방화벽] <span className={styles.redStar}>*</span>
                    </div>
                    <div className={styles.questionSubTitle} style={{lineHeight : 1.5, fontSize : "13px", fontWeight : 400, marginBottom : "24px", marginTop : "16px"}}>
                    - 원 내 와이파이는 방화벽이 설치되어 학습 이외 사이트 접속이 불가합니다.<br/><br/>
- 학습 사유로 방화벽 해제가 필요한 경우, 데스크로 문의해주세요.
                    <br/>
                    </div>
                    <div className={styles.answerBox}>
                        <div className={styles.checkBoxWrapper}>
                            <Checkbox variant='soft' color='neutral' label="확인했습니다" name="확인했습니다" onChange={(e) => {onCheckBoxChange(e, "[와이파이 방화벽]_19")}}/>
                        </div>
                    </div>
                </div>


                <div className={styles.buttons}>
                    <Button variant="solid" color="neutral" onClick={props.minusPage} sx={{marginRight : "8px"}}>
                        이전
                    </Button>
                    {
                        !props.isView
                        &&
                        <Button variant="solid" color="success" onClick={props.submit} disabled={disabled}>
                            제출하기
                        </Button>
                    }

                </div>



                <div style={{height : "200px"}}>

                </div>

            </CssVarsProvider>
        </div>
    );
}

export default CardSeventhPage;