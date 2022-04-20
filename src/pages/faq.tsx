import React, { useEffect, useState, useRef } from "react";
import HeaderTwo from "../components/header2";
import styles from "../styles/faq.module.css";

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { ReactComponent as RightChevronSvg } from '../svg/chevron-right-thin.svg';
import { ReactComponent as HouseSvg } from '../svg/house-thin.svg';
import { ReactComponent as ChevronDownSvg } from '../svg/chevron-down-regular.svg';
import { ReactComponent as QSvg } from '../svg/q-solid.svg';

import SearchIcon from '@mui/icons-material/Search';
import list from "../data/faq";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from "../components/footer";

import smoothscroll from "smoothscroll-polyfill";
import SpeedDialComponent from "../control/speeddial";

import ReactGa from "react-ga4";




const categoryList = [
    {
        name : "전체",
        en : "total"
    },
    {
        name : "등록",
        en : "register"
    },
    {
        name : "생활관리",
        en : "management"
    },
    {
        name : "담임상담",
        en : "mentor"
    },
    {
        name : "질의응답",
        en : "question"
    },
    {
        name : "컨텐츠",
        en : "contents"
    },
    {
        name : "과외",
        en : "coaching"
    },
    {
        name : "배치상담",
        en : "where"
    },
    {
        name : "식사",
        en : "meal"
    },
    {
        name : "시설 이용",
        en : "interior"
    },
    {
        name : "비용 및 결제",
        en : "price"
    },
    {
        name : "기타",
        en : "etc"
    }
];



const Faq: React.FC<any> = (props) => {

    const [current, setCurrent] = useState("total");
    const [age, setAge] = React.useState<any>(0);
    const [currentList, setCurrentList] = useState<any>([]);
    const [startIndex, setStartIndex] = useState(0);
    const [clickedNumber, setClickedNumber] = useState(300);
    const [searchList, setSearchList] = useState<any>([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [autoCompleteKey, setAutoCompleteKey] = useState(Math.random());
    const [autoCompleteValue, setAutoCompleteValue] = useState<any>(0);

    const listRef = useRef<any>(null);
    const eachRef = useRef<any>(new Array());

    //ga event------------------------------------------------
    useEffect(() => {
        // ReactGa.event({
        //     category: "view",
        //     action: "faqpageview"
        // })

        ReactGa.send({
            hitType : "pageview",
            page_title : "faq"
        });

    }, []);
    //--------------------------------------------------------

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])


    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
      };

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as any);
    };


    const getTitle = (list : any) => {
        list.forEach((each: any) => {
            switch (each.category) {
                case "register":
                    each.string = "등록"
                    break;
                case "management":
                    each.string = "생활관리"
                    break;
                case "mentor":
                    each.string = "담임상담"
                    break;
                case "question":
                    each.string = "질의응답"
                    break;
                case "contents":
                    each.string = "컨텐츠"
                    break;
                case "coaching":
                    each.string = "과외"
                    break;
                case "where":
                    each.string = "배치상담"
                    break;
                case "meal":
                    each.string = "식사"
                    break;
                case "interior":
                    each.string = "시설 이용"
                    break;
                case "price":
                    each.string = "비용 및 결제"
                    break;
                case "etc":
                    each.string = "기타"
                    break;
            }
        });
    }

    const filterTargetData = (value: string, index: number) => {
        if (value === "total") {
            const newList : any = list.slice(index, index + 10);

            getTitle(newList);

            setCurrentList(newList);
            if(list.length > 0){
                setPageCount(Math.floor(list.length/10)+1);
            }

        } else {
            console.log(2);
            const previousNewList = list.filter((each: any) => each.category === current);
            setPageCount(Math.floor(previousNewList.length/10)+1);
            const newList = previousNewList.slice(index, index + 10);
            getTitle(newList);
            if (newList.length > 0) {
                setCurrentList(newList);
            } else {
                setCurrentList([]);
            }
        }
    }

    useEffect(() => {
        filterTargetData(current, 0);
        setCurrentPage(1);
        setClickedNumber(300);
        setAutoCompleteKey(Math.random());
    }, [current]);

    useEffect(()=>{
        filterTargetData(current, currentPage * 10 - 10);
        setClickedNumber(300);
        setAutoCompleteKey(Math.random());

    }, [currentPage]);

    useEffect(()=>{
        if(age === 0){
            const newSearchList : any = [];
            list.forEach((each : any, index : any)=>{
                const newRow : any = {};
                newRow.label = each.question;
                newRow.position = index;
                newSearchList.push(newRow);
                setSearchList(newSearchList);
            })
        }else{
            const newSearchList : any = [];
            list.forEach((each : any, index : any)=>{
                const newRow : any = {};
                newRow.label = each.answer;
                newRow.position = index;
                newSearchList.push(newRow);
                setSearchList(newSearchList);
            })
        }
    }, [age])

    useEffect(()=>{
        if(autoCompleteValue){
            const newSearchList = [];
            newSearchList.push(list[autoCompleteValue.position]);
            getTitle(newSearchList);
            setCurrentList(newSearchList);
        }
    }, [autoCompleteValue]);

    useEffect(()=>{
        smoothscroll.polyfill();
    });

    const mobileChange = (type : string, eachIndex : number) => {
        setCurrent(type);
        const targetScroll = eachRef.current[eachIndex].getBoundingClientRect().x;
        listRef.current.scrollTo({ left: targetScroll + listRef.current.scrollLeft - 120, behavior: "smooth" });
    }

    const click = (e: any, index: number) => {
        if (index === clickedNumber) {
            setClickedNumber(300);
        } else {
            setClickedNumber(index);
        }
    }



    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div className={styles.headerBar}
                style={{ backgroundImage: "url(img/faq.webp)" }}
            >
                자주 묻는 질문
            </div>
            <div className={`${styles.currentMenuViewerDiv} ${styles.onlyPC}`}>
                <div className={styles.currentMenuViewer}>
                    <HouseSvg className={styles.houseSvg} />
                    <RightChevronSvg className={styles.rightChevron} />
                    <div className={styles.currentMenuViewerText_2}>
                        자주 묻는 질문
                    </div>
                </div>
            </div>
            <div className={`${styles.currentMenuViewerBoarder} ${styles.onlyPC}`}>
            </div>

            <div className={`${styles.titleText} ${styles.onlyPC}`}>
                문제가 해결되지 않았다면<br></br>언제든 연락해주세요.
            </div>

            <div ref={listRef} className={`${styles.mobileTitleList} ${styles.onlymobile}`}>
                {categoryList.map((eachList, indexNumber) => {
                    return (
                        <div key={indexNumber} ref={(element) => { eachRef.current.push(element) }} onClick={() => { mobileChange(eachList.en, indexNumber); }} className={`${styles.mobileEachListTitle} ${current === eachList.en ? styles.active : ""}`}>
                            {eachList.name.split(" ")[0]}
                        </div>
                    );
                })}
            </div>

            <div className={`${styles.listDiv} ${styles.onlyPC}`}>
                <div onClick={(e: any) => { setCurrent("total") }} className={`${styles.eachList} ${current === "total" ? styles.active : ""}`}>
                    전체
                </div>
                <div onClick={(e: any) => { setCurrent("register") }} className={`${styles.eachList} ${current === "register" ? styles.active : ""}`}>
                    등록
                </div>
                <div onClick={(e: any) => { setCurrent("management") }} className={`${styles.eachList} ${current === "management" ? styles.active : ""}`}>
                    생활관리
                </div>
                <div onClick={(e: any) => { setCurrent("mentor") }} className={`${styles.eachList} ${current === "mentor" ? styles.active : ""}`}>
                    담임상담
                </div>
                <div onClick={(e: any) => { setCurrent("question") }} className={`${styles.eachList} ${current === "question" ? styles.active : ""}`}>
                    질의응답
                </div>
                <div onClick={(e: any) => { setCurrent("contents") }} className={`${styles.eachList} ${current === "contents" ? styles.active : ""}`}>
                    컨텐츠
                </div>
                <div onClick={(e: any) => { setCurrent("coaching") }} className={`${styles.eachList} ${current === "coaching" ? styles.active : ""}`}>
                    과외
                </div>
                <div onClick={(e: any) => { setCurrent("where") }} className={`${styles.eachList} ${current === "where" ? styles.active : ""}`}>
                    배치상담
                </div>
                <div onClick={(e: any) => { setCurrent("meal") }} className={`${styles.eachList} ${current === "meal" ? styles.active : ""}`}>
                    식사
                </div>
                <div onClick={(e: any) => { setCurrent("interior") }} className={`${styles.eachList} ${current === "interior" ? styles.active : ""}`}>
                    시설 이용
                </div>
                <div onClick={(e: any) => { setCurrent("price") }} className={`${styles.eachList} ${current === "price" ? styles.active : ""}`}>
                    비용 및 결제 관련
                </div>
                <div onClick={(e: any) => { setCurrent("etc") }} className={`${styles.eachList} ${current === "etc" ? styles.active : ""}`}>
                    기타
                </div>
            </div>

            <div className={styles.selectDiv}>
                <Box sx={{ width: 138, "@media (max-width : 1024px)" : { width : "28.9%"} }}>
                    <FormControl fullWidth>
                        <Select
                            sx={{ boxSizing: "border-box", borderRadius: 0, border: "2px solid black", fontWeight: 700, "&:hover": { border: "2px solid black" }, "& .MuiOutlinedInput-notchedOutline": { border: "0px solid transparent !important" }, "& .MuiSvgIcon-root": { color: "black" } }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>제목</MenuItem>
                            <MenuItem value={1}>내용</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Autocomplete
                    key={autoCompleteKey}
                    onChange={(event : any, value : any)=>{setAutoCompleteValue(value);}}
                    disablePortal
                    id="combo-box-demo"
                    options={searchList}
                    sx={{ width: 234, marginLeft: "14px", border: "2px solid black", "& .MuiOutlinedInput-root": { borderRadius: 0 }, "&:hover": { border: "2px solid black" }, "@media (max-width : 1024px)" : { width : "54.93%", marginLeft : "3.5%"} }}
                    renderInput={(params: any) => <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <SearchIcon fontSize="large" sx={{ cursor: "pointer" }} />
                            ),
                        }}
                        sx={{ border: "0px !important", color: "black !important", "& .MuiOutlinedInput-root": { paddingRight: "12px !important" }, "& .MuiOutlinedInput-notchedOutline": { border: "0px solid black !important" } }} placeholder="Search" />}
                />
            </div>

            <div className={styles.questionListDiv}>
                {
                    currentList.map((eachList: any, index: number) => {

                        var isA = false;
                        var description;

                        if(eachList.answer.includes("<a")){
                            isA = true;
                            description = { __html : eachList.answer}
                        }

                        return (
                            <div key={eachList.question} className={styles.eachQuestion}>
                                <div className={styles.question} onClick={(e: any) => { click(e, index) }}>
                                    <div className={styles.questionForward}>
                                        <div className={styles.qSvgDiv}>
                                            <QSvg className={`${styles.qSvg}`} />
                                        </div>
                                        <div className={styles.questionText}>
                                            [{eachList.string}] {eachList.question}
                                        </div>
                                    </div>
                                    <div className={styles.questionBackward}>
                                        <ChevronDownSvg className={`${styles.chevronDown} ${clickedNumber === index ? styles.active : ""}`} />
                                    </div>
                                </div>
                                <div className={`${styles.answer} ${clickedNumber === index ? styles.active : ""}`}>
                                    {
                                        isA ? 
                                        <div dangerouslySetInnerHTML={description}></div> 
                                        :
                                         eachList.answer
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            
            <div className={`${styles.pagination} ${styles.onlyPC}`}>
                <Stack spacing={2}>
                    <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} size="large" shape="rounded" />
                </Stack>
            </div>

            <div className={`${styles.pagination} ${styles.onlymobile}`}>
                <Stack spacing={2}>
                    <Pagination siblingCount={1} count={pageCount} page={currentPage} onChange={handlePageChange} size="medium" shape="rounded" />
                </Stack>
            </div>

            <div className={styles.bottomInfoDiv}>
                <span className={styles.bottomInfoText}>
                    24시 문의사항
                </span>
                <span className={styles.bottomInfoNumber}>
                    050-7871-3574
                </span>
            </div>

            <SpeedDialComponent />

            <Footer />
        </div>
    );
}

export default Faq;