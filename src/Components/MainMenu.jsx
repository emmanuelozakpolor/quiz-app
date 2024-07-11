import React, {UseSTate, useContext} from 'react'
import { QuizContext } from '../Helpers/Context'


export default function MainMenu() {
  const {GameState, setGameState} = useContext(QuizContext);
  return (
    <div className='Menu'>
      <button onClick={() => 
        {setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}
