import { useSpring, animated, config, useTransition } from "react-spring";
import { useState} from 'react'
import { ReactComponent as DownChevronSvg } from '../svg/chevron-down-light.svg';


function Mount() {
    const [show, set] = useState(false)
    const transitions = useTransition(show, {
      from: { opacity: 1, y : 20 },
      enter: { opacity: 1, y : 0 },
      leave: { opacity: 1, y : 20 },
      reverse: show,
      delay: 0,
      config: config.slow,
      onRest: () => set(!show),
    })
    return transitions(
      (styles : any, item : any) => item && 
      <animated.div style={styles}>
          <DownChevronSvg style={{ width: "32px" }} fill="white" />
      </animated.div>
    )
}

export default Mount;