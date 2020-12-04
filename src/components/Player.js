import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Player = ({ currentSong }) => {
     //Ref
    const audioRef = useRef(null)
    //Event Handler
    const playSongHandler = () => {

    }
    return (
    <div className="player">
        <div className="time-control">
            <p>Start Time</p>
                <input type="range" />
            <p>End Time</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon classNmae="skip-back" size="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} classNmae="play" size="2x" icon={faPlay}/>
            <FontAwesomeIcon classNmae="skip-forward" size="2x" icon={faAngleRight}/>
        </div>
        <audio ref={audioRef.current} src={currentSong.audio}></audio>
    </div>
    )
}

export default Player