import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import record from './public/App/welcome.mp3'
import glitch from './public/App/digital_error.wav'
import pixelSFX from './public/App/the-eagle-has-landed.mp3'
import bounce from './public/App/bounce.wav';
import computerSound from './public/App/little-robot-sound.mp3';
import speaker from './public/App/speakerIcon.jpg'
import speakerMute from './public/App/speakerMute.jpg'

import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home.jsx'
import Proyects from './Components/Proyects/Proyects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


function App() {

  const [activateSound, setActivateSound] = useState(null);
  const[playHome] = useSound(record,
    {
      volume:0.5,
    soundEnabled: activateSound,
    playbackRate: 1.2,
    })
  const[playProyects]=useSound(computerSound, {
    volume:0.1,
    soundEnabled: activateSound,
  }) 
  const[playNavbar, {stopNavbar}] = useSound(glitch, {
      volume:0.1,
      soundEnabled: activateSound,
    })
  const[play] = useSound(pixelSFX, {
      volume:0.1,
      soundEnabled: activateSound,
  })
  const[play2, {stop}] = useSound(bounce, {
      volume:0.1,
      soundEnabled: activateSound,
      playbackRate: 0.7,
     
  })
  const storageSound = () => {
      setActivateSound(!activateSound);
      if (!activateSound) {
          localStorage.setItem('activateSound', 'true')
      } else {
          localStorage.setItem('activateSound', 'false')
      }
  }

  const storage = localStorage.getItem('activateSound');
 
  
  useEffect(() => {
    setActivateSound(JSON.parse(storage))
   console.log('USEEFFECT')
}, [activateSound, storage])

console.log('SETACTSOUND=>', activateSound)

  const speakerButton = () => {
      return (
          <button className='speaker' onClick={() => storageSound()}>
             {  activateSound && JSON.parse(storage) ?
                  <img src={speaker} alt='speaker' /> :
                  <img src={speakerMute} alt='speaker muted' /> }
          </button>
      )
  }


  return (
 
    <Router>

      <Switch> 
    
        <Route exact path="/">
          <Landing
          button={speakerButton()}
          play={play}
          play2={play2}
          playNavbar={playNavbar}
          stopNavbar={stopNavbar}
          stop={stop}
          />
        </Route>

        <Route exact path="/home">
          <Home 
           button={speakerButton()}
           play={playHome}
           play2={play2}
           playNavbar={playNavbar}
           stopNavbar={stopNavbar}
           stop={stop}
          />
        </Route>

        <Route  path="/proyects">
          <Proyects 
           button={speakerButton()}
           playProyects={playProyects}
           playNavbar={playNavbar}
          stopNavbar={stopNavbar}
           stop={stop}
           />
        </Route>

        <Route exact path="/about">
          <About
           button={speakerButton()}
           play={play}
           play2={play2}
           playNavbar={playNavbar}
          stopNavbar={stopNavbar}
           stop={stop}
            />
        </Route>

        <Route exact path="/contact">
          <Contact
           button={speakerButton()}
           play={play}
           play2={play2}
           playNavbar={playNavbar}
          stopNavbar={stopNavbar}
           stop={stop}
           />
        </Route>

        </Switch>
      </Router>
    
  );
}

export default App;
