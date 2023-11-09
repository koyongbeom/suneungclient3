import React, { useEffect, useState, useRef } from "react";
import styles from "./smallmenubarstyle.module.css";

const SmallMenubar: React.FC<any> = (props : any) => {

    const [activeIndex, setActiveIndex] = useState(1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selectorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if(!props.menuList || !wrapperRef || !wrapperRef.current || !selectorRef || !selectorRef.current){
            return;
        }

        const totalCount = props.menuList.length;

        const length = props.menuList.length;
        const wrapperDiv = wrapperRef.current;

        wrapperDiv.style.display = "grid";
        wrapperDiv.style.gridTemplateColumns = `repeat(${length}, 1fr)`;

        const wrapperRect = wrapperDiv.getBoundingClientRect();
        const wrapperWidth = wrapperRect.width;

        const selectorWidth = wrapperWidth / totalCount;

        const selectorDiv = selectorRef.current;
        selectorDiv.style.width = `${selectorWidth}px`;
        
        const seconds = 0.3 / totalCount;

        selectorDiv.style.transition = `all ${seconds}s ease-in-out`;

    }, [props.menuList, wrapperRef, wrapperRef.current, selectorRef, selectorRef.current]);


    const handleClick = (selectedIndex : number) => {

        setActiveIndex(selectedIndex);

        var index = selectedIndex - 1;
        var targetPercent = index * 100;

        const selectorDiv = selectorRef.current;

        if(!selectorDiv){
            return;
        }

        selectorDiv.style.transform = `translate(${targetPercent}%, -50%)`;

    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper} ref={wrapperRef}>
                {
                    (props.menuList && props.menuList.length > 0) &&
                    props.menuList.map((item : string, index : number) => {
                        return (
                            <div key={index} className={`${styles.menuItem} ${activeIndex === index + 1 ? styles.active : ""}`}
                            onClick={(e : any) => {
                                handleClick(index + 1);
                            }}
                            >
                                {item}
                            </div>
                        )
                    })
                }
                <div className={styles.selector} ref={selectorRef}>
                    
                </div>
            </div>
        </div>
    )
}

export default SmallMenubar;