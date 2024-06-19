import './NavigationBar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonType_2 from './Content_components/Parts/ButtonType_2'

export default function NavigationBar() {
  const history = useNavigate();

  function moveCounterPage(){
    history('/counter');
  }
  function moveStopWatchPage(){
    history('/stopwatch'); 
  }
  return (
    <div className='navi_button'>
      <ButtonType_2 name="Counter" onClick={moveCounterPage}/>
      <ButtonType_2 name="Stop Clock" onClick={moveStopWatchPage}/>
    </div>
  )
}
