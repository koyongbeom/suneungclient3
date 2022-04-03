import React, {useState, useEffect} from 'react';
import { useSpring, animated, config, useTransition } from "react-spring";

const images = [
    "guide2", "patrol5", "answer2", "team11", "tutor6"
]

const ImageTransition = (props : any) => {
    const [position, setPosition] = useState(0);

    const transitions = useTransition(position, {
        from : {opacity : 0},
        enter : {opacity : 1},
        leave : {opacity : 0},
        config : {duration : 2000}
    });

    useEffect(() => {
        setInterval(()=>{
            setPosition((index : any)=> (index + 1) % images.length);
        }, 3000)
    }, [])

    return (
        <div>
            {transitions((styles, index) => (
                <animated.div style={styles}>
                        <img style={{position : "absolute"}} src={`img/${images[index]}.webp`} alt="img" />
                </animated.div>
            ))}
        </div>
    )
}

export default ImageTransition;