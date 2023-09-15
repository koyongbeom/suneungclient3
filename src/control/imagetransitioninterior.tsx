import React, { useEffect, useState } from 'react';
import { animated, useTransition } from "react-spring";
import { list } from "../data/interiorlist";
import { list2 } from "../data/interiorlist";
import styles2 from "../styles/map.module.css";

const ImageTransitionInterior = (props: any) => {
    const [position, setPosition] = useState(0);
    const [whichList, setWhichList] = useState<any>();

    const transitions = useTransition(props.index, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 300 }
    });

    const move = (kind: string) => {
        console.log(2);
        setPosition((index: any) => index + 1);
    }

    useEffect(() => {

        if (!props.location) {
            return;
        }

        switch (props.location) {
            case "gangnam":
                setWhichList(list);
                break;
            case "daechi":
                setWhichList(list2);
                break;
        }


    }, [props.location]);


    return (
        <>
            {
                whichList &&
                <div className={styles2.animatedDivStyle}>
                    {transitions((styles, index) => (
                        <animated.div style={styles}>
                            <img className={styles2.animatedImage} src={`${whichList[index].src}`} alt="img" />
                        </animated.div>
                    ))}
                </div>
            }
        </>
    )
}

export default ImageTransitionInterior;