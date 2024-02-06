import React, {useState} from 'react'
import audio1 from '../audio1.mp3';
import audio2 from '../audio2.mp3';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setToZero } from '../features/counterSlice';

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const counter = useSelector((state) =>  state.counter.value);
    const dispatch = useDispatch();
    // Function to handle button click and play the alert sound
    const handleClick = (audioFile) => {
       
      // Play the alert sound
      const audioObject = new Audio(audioFile);
        audioObject.play();
  
      // Set the state to indicate that the sound is playing
      setIsPlaying(true);
  
      // Pause the sound after 1 second
      setTimeout(() => {
        setIsPlaying(false);
      }, 1000);
    }

  return (
    <div className='container'>
    <div className='d-flex justify-content-center'>
        <div className='counter-circle circle bg-dark text-light justify-content-center align-items-center d-flex'>
            <p className='text-light h1 p-5 m-5'>{counter}</p>

        </div>




    </div>
    <div className='d-flex justify-content-center my-4 p-4'>
<button onClick={() => {handleClick(audio1);dispatch(increment())}} className='counter-control-button h1 px-2 mx-1'><i className="bi bi-arrow-up-circle"></i></button>
<button onClick={() => {handleClick(audio2);dispatch(setToZero())}} className='counter-control-button h1 px-2 mx-1'><i className="bi bi-arrow-counterclockwise"></i></button>
<button disabled={counter===0} onClick={() => {handleClick(audio1);dispatch((decrement()))}} className='counter-control-button h1 px-2 mx-1'><i className="bi bi-arrow-down-circle"></i></button>
        </div>
    </div>
  )
}
