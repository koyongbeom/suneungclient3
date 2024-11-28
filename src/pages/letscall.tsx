import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../svg/newlogo.svg";
import { ReactComponent as LogoWhite } from "../svg/newlogowhite.svg";
import { Call } from "@mui/icons-material";

const LetsCall: React.FC<any> = (props) => {

    return (
        <div>
            <a href="tel:010-8286-5469" style={{
                textDecoration: 'none',
                color: 'inherit'
            }}>
                <div style={{
                    position: "fixed",
                    top: "50vh",
                    left: "50vw",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{
                        fontSize: "48px",
                    }}>
                        <Call
                            fontSize="inherit"
                        />
                    </div>
                    <div style={{
                        marginTop: "16px",
                        fontSize: "24px",
                        fontWeight: "600"
                    }}>
                        전화 걸기
                    </div>
                </div>
            </a>
            <div style={{
                position: "fixed",
                bottom: 0,
                justifyContent: "center",
                width: "100%",
                display: "flex",
                padding: "10px 0px",
                backgroundColor: "#000000",
            }}>
                <LogoWhite
                    style={{
                        width: "68px",
                    }}
                />
            </div>
        </div>
    )
}

export default LetsCall;