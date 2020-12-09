import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons"


const Player = ({ 
    audioRef, 
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    songInfo, 
    setSongInfo, 
    songs,
    setCurrentSong,
    setSongs

    }) => {

        const activeLibraryHandler = (nextPrev) => {
            //Add active state
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id){
                return{
                    ...song, 
                    active: true,
                }
            } else {
                return{
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs)
        }
    
    //Event Handler
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex( song  => song.id === currentSong.id);

        if (direction === "skip-forward") {
            let newSong = songs[(currentIndex + 1) % songs.length];
        await setCurrentSong(newSong);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
            if(isPlaying) audioRef.current.play()
            return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
            }
            if(isPlaying) audioRef.current.play()
        }
        //Add the styles
        const trackAnim = {
            transform: `translate(${songInfo.animationPercentage}%)`
        }
      //State
    return (
    <div className="player">
        <div className="time-control">
            <p>{songInfo.duration ? getTime(songInfo.currentTime) : "0:00" }</p>
            <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                <input 
                min={0} 
                max={songInfo.duration || 0} 
                value={songInfo.currentTime} 
                onChange={dragHandler} 
                type="range" 
                />
                <div style={trackAnim} className="animate-track"></div>
                </div>
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} classNmae="skip-back" size="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} 
            classNmae="play" 
            size="2x" 
            icon={isPlaying ? faPause : faPlay}/>
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} classNmae="skip-forward" 
            size="2x" 
            icon={faAngleRight} />
        </div>
    </div>
    )
}

export default Player