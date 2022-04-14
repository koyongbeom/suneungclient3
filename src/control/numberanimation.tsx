import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from "react-spring";

const NumberAnimation = (props : any) => {
    const [isVisible_1, setIsVisible_1] = useState(false);
    const ref_1 = useRef<any>();

    const intersect = (entries : any, observer : any) => {
        //console.log(entries[0]);
        if(entries[0].isIntersecting === true){
        setIsVisible_1(true);
        console.log(2);
        }
    }

    useEffect(()=>{
        let options = {
            rootMargin: '0px',
            threshold: 1
          }

        let observer = new IntersectionObserver(intersect, options);
        observer.observe(ref_1.current);
    }, [])

    const numberprops = useSpring({ number: isVisible_1 ? props.number : 0, from: { number: 0 }, delay: props.delay, config: config.gentle });

    return (
    <animated.span ref={ref_1} className="number">
        {numberprops.number.to((number : any) => number.toFixed(props.fixed))}
    </animated.span>
    );
}

export default NumberAnimation;