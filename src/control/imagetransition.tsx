import React, {useState, useEffect} from 'react';
import { animated, useTransition } from "react-spring";

const images = [
    "newpic/dsc03650_e", "patrol33333", "answer2", "tutor6", "newpic/dsc03594_3"
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