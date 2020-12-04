import React, {useState} from 'react'
//Import Util
import data from './util'
//Import Styles
import "./styles/app.scss"
//Import components
import Player from './components/Player'
import Song from './components/Song'

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[4])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
    <Song currentSong={currentSong} />
    <Player 
    setIsPlaying={setIsPlaying}
    isPlaying={isPlaying}
    currentSong={currentSong} />
    </div>
  );
}

export default App;
