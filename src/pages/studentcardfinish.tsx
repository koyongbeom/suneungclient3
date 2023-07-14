import { de } from "date-fns/locale";
import React, {useEffect, useState} from "react";
import { ReactComponent as Logo } from "../svg/newlogo.svg";

const StudentCardFinish = (props: any) => {

    return (
        <div
        style={{height : "100vh"}}
        >
            <div 
            style={{ maxWidth: "500px", margin: "0 auto", width: "91.4%", height : "100%",display : "flex", justifyContent : "center", alignItems : "center" }}
            >
                <div
                style={{
                    fontSize : "24px",
                    fontWeight : 700,
                    textAlign : "center",
                    lineHeight : "1.4"
                }}
                >
                    학생 카드 제출이<br></br>완료되었습니다.<br></br><br></br>
                    <Logo style={{ width: "80px" }} />
                </div>
            </div>
        </div>
    );
}

export default StudentCardFinish;