import React, { useEffect, useState, useRef } from 'react';

import { throttle } from "lodash";
import styles from "../styles/header.module.css";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Button from '@mui/material/Button';
import { ReactComponent as MenuSvg } from '../svg/bars-regular.svg';
import { ReactComponent as Xmark } from "../svg/xmark-regular.svg";

import { ReactComponent as Logo } from "../svg/newlogo.svg";
import { ReactComponent as LogoWhite } from "../svg/newlogowhite.svg";


import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Header: any = (props: any) => {



    const ref = useRef<any>(null);

    const listener = (e: any) => {
        if (!ref.current) return;

        console.log(ref.current.scrollLeft);

        window.menuScrollX = ref.current.scrollLeft;
    }

    useEffect(() => {

        if (!ref.current) return;

        ref.current.scrollTo(window.menuScrollX, 0);

        const throttledFn = throttle(listener, 100);
        if (ref.current) {
            ref.current.addEventListener("scroll", throttledFn);
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener("scroll", throttledFn);
            }
        };

    }, [ref.current])









    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };


    const [open2, setOpen2] = React.useState(false);
    const handleClick2 = () => {
        setOpen2(!open2);
    };



    const [hover, setHover] = useState(false);
    const [hoverKind, setHoverKind] = useState("");
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const navigate = useNavigate();

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
                    <div>수능선배 소개</div>
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
                            담임멘토 소개
                        </div>
                    </Link>
                    <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            강남점
                        </div>
                    </Link>
                    <Link to="/daechimap" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            대치점
                        </div>
                    </Link>
                    <Link to="/bundangmap" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            분당점
                        </div>
                    </Link>
                    <Link to="/price" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            비용 안내
                        </div>
                    </Link>
                </Collapse>
                <Link to="/winterschool" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.mobileMenuList}>
                        2025 윈터스쿨
                    </div>
                </Link>
                <Link to="/studysystem" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.mobileMenuList}>
                        학습시스템
                    </div>
                </Link>
                <Link to="/review" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className={styles.mobileMenuList}>
                        합격생 이야기
                    </div>
                </Link>
                <div onClick={handleClick2} className={styles.mobileMenuList}>
                    <div>커뮤니티</div>
                    {open2 ? <ExpandLess sx={{ color: "rgb(66, 75, 88)" }} /> : <ExpandMore sx={{ color: "rgb(66, 75, 88)" }} />}
                </div>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <Link to="/notification" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            공지사항
                        </div>
                    </Link>
                    <Link to="/storys" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            수능선배 이야기
                        </div>
                    </Link>
                    <Link to="/faq" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className={styles.mobileSubMenuList}>
                            자주 묻는 질문
                        </div>
                    </Link>
                </Collapse>
            </List>
        </Box>
    );


    return (
        <div>
            <div className={`${styles.main} ${props.headerKind === "transparent" ? styles.transparent : ""} ${props.headerKind === "white" ? styles.white : ""}`}>
                <div className={styles.mainDiv}>
                    <div className={`${styles.logo} ${styles.onlymobile}`}>
                        {props.headerKind === "white" && <Logo className={styles.logoimg} />}
                        {props.headerKind === "transparent" && <LogoWhite className={styles.logoimg} />}
                    </div>
                    <div className={`${styles.logo} ${styles.onlyPC}`}>
                        <Logo className={styles.logoimg} />
                    </div>
                    <div className={`${styles.menu} ${styles.onlyPC}`}>
                        <ul className={styles.menuUl}>
                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => { setHover(true); setHoverKind("introduce"); }} onMouseLeave={() => { setHover(false); setHoverKind("") }}
                            >
                                수능선배 소개
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
                                                    담임멘토 소개
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    강남점
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/daechimap" style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    대치점
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/bundangmap" style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    분당점
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/price" style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    비용 안내
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                }
                            </li>
                            <Link to="/winterschool" style={{ textDecoration: "none", color: "inherit" }}>
                                <li
                                    onMouseEnter={() => { setHover(true); setHoverKind("winterschool"); }} onMouseLeave={() => setHover(false)}
                                >
                                    2025 윈터스쿨
                                </li>
                            </Link>
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
                            {/* <Link to="/faq" style={{ textDecoration: "none", color: "inherit" }}>
                                <li
                                    onMouseEnter={() => { setHover(true); setHoverKind("community"); }} onMouseLeave={() => setHover(false)}
                                >
                                    자주 묻는 질문
                                </li>
                            </Link> */}

                            <li
                                style={{ position: "relative" }}
                                onMouseEnter={() => { setHover(true); setHoverKind("community"); }} onMouseLeave={() => { setHover(false); setHoverKind("") }}
                            >
                                커뮤니티
                                {
                                    hoverKind === "community" &&
                                    <div className={styles.cateBox}>
                                        <Link to="/notification" style={{ textDecoration: "none", color: "inherit" }} className={styles.pcLink}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    공지사항
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/storys" style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    수능선배 이야기
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/faq" style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className={styles.cateSubMenu}>
                                                <span className={styles.cateSubMenuText}>
                                                    자주 묻는 질문
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                }
                            </li>
                        </ul>
                    </div>
                    <div className={styles.onlyPC}>
                        <Button onClick={(e: any) => { navigate("/register") }} sx={{ backgroundColor: "#1b49af !important", width: "163px", height: "51px", borderRadius: "9px", fontWeight: 700 }} variant="contained" startIcon={<PermIdentityOutlinedIcon />}>
                            상담 신청하기
                        </Button>
                    </div>
                    <div className={`${styles.mainRightSection} ${styles.onlymobile}`}>
                        {
                            props.headerKind === "white" &&
                            <div onClick={(e: any) => { navigate("/register") }} className={`${styles.mobileRegisterBtn}`}>
                                상담 신청
                            </div>
                        }
                        <div onClick={toggleDrawer("top", true)} className={`${styles.menubar} ${styles.onlymobile}`}>
                            <MenuSvg style={{ width: "20px" }} fill={`${props.headerKind === "white" ? "rgb(176,184,193)" : "white"} `} />
                        </div>
                    </div>

                </div>
            </div>


            {
                (props.isBottomMenu && props.headerKind === "white") &&
                <div className={`${styles.bottomMenuBar} ${styles.onlymobile}`}>
                    <div ref={ref} className={styles.bottomMenuDiv}>
                        <div className={styles.listTab}>
                            <div onClick={(e: any) => { navigate("/winterschool") }} className={styles.bottomMenuList}>
                                2025 윈터스쿨
                                <div className={styles.dot1}>

                                </div>
                            </div>
                            <div onClick={(e: any) => { navigate("/teachers") }} className={styles.bottomMenuList}>
                                담임멘토
                                <div className={styles.dot1}>

                                </div>
                            </div>
                            <div onClick={(e: any) => { navigate("/studysystem") }} className={styles.bottomMenuList}>
                                학습시스템
                                <div className={styles.dot2}>

                                </div>
                            </div>
                            <div onClick={(e: any) => { navigate("/price") }} className={styles.bottomMenuList}>
                                비용안내
                            </div>
                            <div onClick={(e: any) => { navigate("/map") }} className={styles.bottomMenuList}>
                                강남점
                            </div>
                            <div onClick={(e: any) => { navigate("/daechimap") }} className={styles.bottomMenuList}>
                                대치점
                            </div>
                            <div onClick={(e: any) => { navigate("/bundangmap") }} className={styles.bottomMenuList}>
                                분당점
                            </div>
                            <div onClick={(e: any) => { navigate("/review") }} className={styles.bottomMenuList}>
                                합격자후기
                            </div>
                            <div onClick={(e: any) => { navigate("/storys") }} className={styles.bottomMenuList}>
                                스토리
                            </div>
                            <div onClick={(e: any) => { navigate("/notification") }} className={styles.bottomMenuList}>
                                공지사항
                            </div>
                            <div onClick={(e: any) => { navigate("/faq") }} className={styles.bottomMenuList}>
                                자주묻는질문
                            </div>
                            <div onClick={(e: any) => { navigate("/ceo") }} className={styles.bottomMenuList}>
                                대표소개
                            </div>
                        </div>
                    </div>
                </div>

            }

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

export default Header;