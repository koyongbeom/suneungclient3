import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { ReactComponent as Logo } from "../../svg/newlogo.svg";

const Verification: React.FC = (props: any) => {

    const [loading, setLoading] = useState<any>(false);
    const [formValues, setFormValues] = useState({
        site_cd: "",
        ordr_idxx: "",
        req_tx: "CERT",
        cert_method: "01",
        up_hash: "",
        cert_opt_use: "Y",
        Ret_URL: "http://localhost:3000",
        cert_enc_use_ext: "Y",
        kcp_merchant_time: "",
        kcp_cert_lib_ver: ""
    });

    useEffect(() => {
        start();
    }, [])

    const start = async () => {

        try {
            const upHashResponse = await fetch("https://peetsunbae.com/dashboard/avatar/getuphash", {
                method: "GET"
            });
            const result = await upHashResponse.json();
            console.log(result);

            if (result.message !== "success") {
                throw new Error("Error");
            }

            const upHashData = result.data;

            const upHashReq = upHashData.upHashReq;
            const upHashRes = upHashData.upHashRes;

            console.log(upHashReq);
            console.log(upHashRes);

            setFormValues({
                site_cd: upHashReq.site_cd,
                ordr_idxx: upHashReq.ordr_idxx,
                req_tx: "CERT",
                cert_method: "01",
                up_hash: upHashRes.up_hash,
                cert_opt_use: "Y",
                Ret_URL: "https://peetsunbae.com/dashboard/avatar/certresult",
                cert_enc_use_ext: "Y",
                kcp_merchant_time: upHashRes.kcp_merchant_time,
                kcp_cert_lib_ver: upHashRes.kcp_cert_lib_ver
            });

        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <div
            style={{
                height: "calc(100vh - 64px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection: "column"
            }}
        >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>



            <div
            style={{
                fontSize : "19px",
                fontWeight : 700,
                textAlign : "center",
                lineHeight : "1.4",
                marginBottom : "24px"
            }}
            >
                학생들이 제출한<br></br>학부모님 번호를 정확하게<br></br>확인하기 위한 인증 절차입니다.
            </div>


            <form method="post" action="https://cert.kcp.co.kr/kcp_cert/cert_view.jsp">
                <input type="hidden" name="site_cd" value={formValues.site_cd} />
                <input type="hidden" name="ordr_idxx" value={formValues.ordr_idxx} />
                <input type="hidden" name="req_tx" value={formValues.req_tx} />
                <input type="hidden" name="cert_method" value={formValues.cert_method} />
                <input type="hidden" name="up_hash" value={formValues.up_hash} />
                <input type="hidden" name="cert_opt_use" value={formValues.cert_opt_use} />
                <input type="hidden" name="Ret_URL" value={formValues.Ret_URL} />
                <input type="hidden" name="cert_enc_use_ext" value={formValues.cert_enc_use_ext} />
                <input type="hidden" name="kcp_merchant_time" value={formValues.kcp_merchant_time} />
                <input type="hidden" name="kcp_cert_lib_ver" value={formValues.kcp_cert_lib_ver} />
                <input type="submit" value="번호 인증하기" style={{ width: "120px", height: "40px", fontWeight : 500, backgroundColor : "#1b49af", color : "white", border : "none", marginBottom : "24px" }} />
            </form>

            <div style={{

            }}>
                <Logo style={{ width: "100px" }} />
            </div>

        </div>
    )

}

export default Verification;