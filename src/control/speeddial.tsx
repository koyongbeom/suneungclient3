import React, { useState } from "react";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import SmsIcon from '@mui/icons-material/Sms';
import EditIcon from '@mui/icons-material/Edit';

import { ReactComponent as SupportSvg } from '../svg/support_agent_white.svg';
import { useNavigate } from "react-router-dom";

import ReactGa from "react-ga4";



const actions = [
    { icon: <CallIcon />, name: '전화문의' },
    { icon: <MailIcon />, name: '문자문의' },
    { icon: <SmsIcon />, name: '카카오톡' },
    { icon: <EditIcon />, name: '상담신청' },
];


const SpeedDialComponent: React.FC<any> = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const click = (e : any, index : number) => {
        if(index === 0){
            window.location.href = "tel://05078713574";
            
            ReactGa.event({
                category : "contact",
                action : "call"
            })

        }
        if(index === 1){
            window.location.href = "sms:05078713574";

            ReactGa.event({
                category : "contact",
                action : "sms"
            })

        }
        if(index === 2){
            window.location.href = "http://pf.kakao.com/_ViHeb/chat";

            ReactGa.event({
                category : "contact",
                action : "kakao"
            })

        }
        if(index === 3){
            navigate("/register");
        }
        handleClose();
    }

    return (
        <Box sx={{ height: open ? "100vh" : 330, width : open ? "100vw" : "auto",transform: 'translateZ(0px)', flexGrow: 1, position: "fixed", bottom: 0, right: 0, zIndex : 999 }}>
            <Backdrop open={open} />
            <SpeedDial
                FabProps={{
                    size: "large",
                    sx: {
                        backgroundColor: "white !important"
                    }
                }}
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'absolute', bottom: 18, right: 12 }}
                icon={<SupportSvg />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action, index: number) => (

                        <SpeedDialAction
                            FabProps={{
                                size: "medium"
                            }}
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={(e)=>{click(e, index)}}
                        />
                ))}
            </SpeedDial>
        </Box>
    );
}

export default SpeedDialComponent;