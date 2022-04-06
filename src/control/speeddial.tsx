import React, { useState } from "react";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { ReactComponent as SupportSvg } from '../svg/support_agent_white.svg';


const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];


const SpeedDialComponent: React.FC<any> = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                {actions.map((action) => (
                    <SpeedDialAction
                        FabProps={{
                            size: "medium"
                        }}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

export default SpeedDialComponent;