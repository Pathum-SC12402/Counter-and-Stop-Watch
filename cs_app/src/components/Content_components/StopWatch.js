import React, { useEffect, useRef, useState } from 'react';
import ButtonType_1 from './Parts/ButtonType_1';
import './StopWatch.css';

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const [PauseLabel, setPauseLabel] = useState("Pause");


  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function Reset() {
    setElapsedTime(0);
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
  }

  function Start() {
    /*clearInterval(intervalIdRef.current);
    setElapsedTime(0);
    setIsRunning(false);
    setPauseLabel("Pause");*/
    /*Pause();
    Reset();*/
    setIsRunning(true);
    startTimeRef.current = Date.now()- elapsedTime;
    
    
    console.log("run");
  }

  function Pause() {
    if(isRunning){
      setIsRunning(false);
      clearInterval(intervalIdRef.current);
      setPauseLabel("Continue");
    }else{
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTime;
      setPauseLabel("Pause");
    }
  }

  function Stop() {
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
    setPauseLabel("Continue")
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className='stopwatch'>
      <h1>Stop Watch</h1>
      <div className="Structure">
        <input className="area" type="text" value={formatTime()} readOnly />
        <br />
        <div className='counter_buttons'>
          <ButtonType_1 name="Reset" onClick={Reset} />
        </div>
        <div className='counter_buttons'>
          <ButtonType_1 name="Start" onClick={Start} />
          <ButtonType_1 name={PauseLabel} onClick={Pause} />
          <ButtonType_1 name="Stop" onClick={Stop} />
        </div>
      </div>
    </div>
  );
}
