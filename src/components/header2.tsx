import React, { useEffect, useState } from 'react';
import styles from "../styles/header.module.css";
import SendIcon from '@mui/icons-material/Send';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Button from '@mui/material/Button';
import { ReactComponent as MenuSvg } from '../svg/bars-regular.svg';
import { ReactComponent as Xmark } from "../svg/xmark-regular.svg";
import { ReactComponent as Logo } from "../svg/newlogo.svg";

import { rgbToHex } from '@mui/material';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItemButton from '@mui/material/ListItemButton';
import { rgb } from '@react-spring/shared';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const HeaderTwo: any = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const [hover, setHover] = useState(false);
    const [hoverKind, setHoverKind] = useState("");
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={styles.headerLogoBar}>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo className={styles.logoimg} />
                </Link>
                <Xmark onClick={toggleDrawer(anchor, false)} style={{ width: "16.4px" }} fill="rgb(176,184,193)" />
            </div>
            <List>
                <div onClick={handleClick} className={styles.mobileMenuList}>
                    <div>학원소개</div>
                    {open ? <ExpandLess sx={{ color: "rgb(66, 75, 88)" }} /> : <ExpandMore sx={{ color: "rgb(66, 75, 88)" }} />}
                </div>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Link to="/ceo" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            대표 소개
                        </div>
                    </Link>
                    <Link to="/teachers" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            담임선생님 소개
                        </div>
                    </Link>
                    <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            위치 및 시설 소개
                        </div>
                    </Link>
                    <div className={styles.mobileSubMenuList}>
                        비용 안내
                    </div>
                </Collapse>
                <Link to="/studysystem" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.mobileMenuList}>
                        학습시스템
                    </div>
                </Link>
                <div className={styles.mobileMenuList}>
                    전용 프로그램
                </div>
                <Link to="/review" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.mobileMenuList}>
                        합격생 이야기
                    </div>
                </Link>
                <div className={styles.mobileMenuList}>
                    커뮤니티
                </div>
            </List>
        </Box>
    );


    return (
        <div>
            <div className={`${styles.main2}`}>
                <div className={styles.logo}>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <Logo className={styles.logoimg} />
                    </Link>
                </div>
                <div className={`${styles.menu} ${styles.onlyPC}`}>
                    <ul className={styles.menuUl}>
                        <li
                            style={{position : "relative"}}
                            onMouseEnter={() => { setHover(true); setHoverKind("introduce"); }} onMouseLeave={() => {setHover(false); setHoverKind("")}}
                        >
                            <Link to="/ceo"  style={{ textDecoration: "none", color: "inherit" }}>
                                학원소개
                            </Link>
                            {
                                hoverKind === "introduce" &&
                                <div className={styles.cateBox}>
                                    <Link to="/ceo" style={{ textDecoration: "none", color: "inherit" }} className={styles.pcLink}>
                                        <div className={styles.cateSubMenu}>
                                            <span className={styles.cateSubMenuText}>
                                                대표 소개
                                            </span>
                                        </div>
                                    </Link>
                                    <Link to="/teachers" style={{ textDecoration: "none", color: "inherit" }}>
                                        <div className={styles.cateSubMenu}>
                                            <span className={styles.cateSubMenuText}>
                                                담임선생님 소개
                                            </span>
                                        </div>
                                    </Link>
                                    <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                                        <div className={styles.cateSubMenu}>
                                            <span className={styles.cateSubMenuText}>
                                                위치 및 시설
                                            </span>
                                        </div>
                                    </Link>
                                    <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                                        <div className={styles.cateSubMenu}>
                                            <span className={styles.cateSubMenuText}>
                                                비용 안내
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            }
                        </li>
                        <Link to="/studysystem" style={{ textDecoration: "none", color: "inherit" }}>
                            <li
                                onMouseEnter={() => { setHover(true); setHoverKind("study"); }} onMouseLeave={() => setHover(false)}
                            >
                                학습시스템
                            </li>
                        </Link>
                        <Link to="/review" style={{ textDecoration: "none", color: "inherit" }}>
                            <li
                                onMouseEnter={() => { setHover(true); setHoverKind("honor"); }} onMouseLeave={() => setHover(false)}
                            >
                                합격생 이야기
                            </li>
                        </Link>
                        <Link to="/faq" style={{ textDecoration: "none", color: "inherit" }}>
                            <li
                                onMouseEnter={() => { setHover(true); setHoverKind("community"); }} onMouseLeave={() => setHover(false)}
                            >
                                자주 묻는 질문
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.onlyPC}>
                    <Button sx={{ backgroundColor: "#1b49af", width: "163px", height: "51px", borderRadius: "24.6px", fontWeight: 700 }} variant="contained" startIcon={<PermIdentityOutlinedIcon />}>
                        상담 신청하기
                    </Button>
                </div>
                <div onClick={toggleDrawer("top", true)} className={`${styles.menubar} ${styles.onlymobile}`}>
                    <MenuSvg style={{ width: "20px", transition: "all 150ms ease-in" }} fill="rgb(176,184,193)" />
                </div>
            </div>


            <SwipeableDrawer
                anchor="top"
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                onOpen={toggleDrawer("top", true)}
            >
                {list("top")}
            </SwipeableDrawer>
        </div>
    )
}

export default HeaderTwo;