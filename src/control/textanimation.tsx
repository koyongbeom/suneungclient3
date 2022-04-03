import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated, config } from "react-spring";

const TextAnimation = (props: any) => {
    const [isVisible_1, setIsVisible_1] = useState(false);
    const ref_1 = useRef<any>();

    const intersect = (entries: any, observer: any) => {
        console.log(entries[0]);
        if (entries[0].isIntersecting === true) {
            setIsVisible_1(true);
            console.log(2);
        }
    }

    useEffect(() => {
        let options = {
            rootMargin: '0px',
            threshold: 0.1
        }

        let observer = new IntersectionObserver(intersect, options);
        observer.observe(ref_1.current);
    }, [])

    const titleprops = useSpring({ to: isVisible_1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }, from: { opacity: 0, y: 50 }, config: {...config.slow, duration : 500}, delay: 300 })

    return (
        <animated.div ref={ref_1} style={titleprops}>
            {props.html}
        </animated.div>
    );
}

export default TextAnimation;