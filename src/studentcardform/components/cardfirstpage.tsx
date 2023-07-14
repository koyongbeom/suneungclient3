import { Check } from '@mui/icons-material';
import { Button } from '@mui/joy';
import React, { useEffect, useState } from 'react';

const CardFirstPage = (props: any) => {



    return (
        <div
            style={{
            }}
        >
            <div
                style={{
                    fontSize: "24px",
                    fontWeight : 700,
                    textAlign : "center",
                }}
            >
                수능선배 학생카드
            </div>

            <div
                style={{
                    marginTop: "30px",
                    fontSize : "14px",
                    fontWeight : 400,
                    backgroundColor : "white",
                    padding : "16px",
                    paddingTop : "24px",
                    paddingBottom : "24px",
                    borderRadius : "8px",
                    borderColor : "#e0e3e7",

                }}
            >
                <div
                style={{
                    lineHeight : "1.4"
                }}
                >
                    <Check sx={{fontSize : "16px"}} /> 수능선배 재원생은 필수로 작성해야 합니다.
                </div>
                <div
                    style={{
                        marginTop: "12px",
                        lineHeight : "1.4"
                    }}
                >
                    <Check sx={{fontSize : "16px"}} /> 작성 내용은 담임멘토배정, 모의고사 선택과목 등 학원시스템 이용에 전반적으로 반영되므로 신중하게 작성해주시길 바랍니다.
                </div>
                <div
                    style={{
                        marginTop: "12px",
                        lineHeight : "1.4"
                    }}
                >
                    <Check sx={{fontSize : "16px"}} /> 학생카드 작성 완료 후 재원생 전용 어플에서 정기일정을 등록하셔야 됩니다.
                </div>
            </div>

            <div
            style={{
                display : "flex",
                justifyContent : "end",
                marginTop : "24px"
            }}
            >
                <Button variant="solid" color="neutral" onClick={props.plusPage}>
                    시작하기
                </Button>
            </div>
        </div>
    )
}

export default CardFirstPage;