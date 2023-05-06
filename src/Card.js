import React, { useEffect, useRef, useState } from 'react'
import './Card.css'
import audiofile from './night.mp3'
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Graph from './Graph';

const Card = () => {
  const audioRef = useRef(new Audio(audiofile));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const stopmusic = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressBarWidth = (currentTime / duration) * 100;
  return (
    <>
      <Accordion className='card-div'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div className="card-content">
              <div>
                <img src="card1.png" alt="" className="card-img" />
                <p className="img-text">Blue <br /> Gold</p>
              </div>
              <div className="card-text">
                <div className="head">
                  <div className="card-heading">
                    <p className="time-head">Sleep Story  <span className="time">3 min</span> </p>
                    <h1 className="heading">Blue Gold</h1>
                    <p className="time-head">Stephen Fry</p>
                  </div>
                </div>
                <div className="graph">
                  <Graph />
                </div>
              </div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="card-player">
              <div className="track-icons">
                <ion-icon name="shuffle"></ion-icon>
                <div className="play-div">
                  <ion-icon name="play-skip-back"></ion-icon>
                  <div className="pause">
                    <button onClick={stopmusic}>
                      {isPlaying ? <ion-icon name="pause"></ion-icon> : <ion-icon name="play"></ion-icon>}
                    </button>
                  </div>
                  <ion-icon name="play-skip-forward"></ion-icon>
                </div>
                <ion-icon name="volume-high"></ion-icon>
              </div>
              <div className="progressbar">
                <div className="progress" style={{ width: `${progressBarWidth}%` }}></div>
              </div>
              <div className="track-time">
                <div className="start-time">{formatTime(currentTime)}</div>
                <div className="end-time">{formatTime(duration)}</div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Card