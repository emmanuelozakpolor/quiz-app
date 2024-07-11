import React from 'react'
import { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank'

function Quiz() {
  const {score, setScore, setGameState} = useContext(QuizContext)
  const [currQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  
  const nextQuestion = () =>{
    if(Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setCurrentQuestion(currQuestion + 1);
  };
  const finsQuiz = () =>{
    if(Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("endScreen")
  }
  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
          <button onClick={()=>setOptionChosen("optionA")}>{Questions[currQuestion].optionA}</button>
          <button onClick={()=>setOptionChosen("optionB")}>{Questions[currQuestion].optionB}</button>
          <button onClick={()=>setOptionChosen("optionC")}>{Questions[currQuestion].optionC}</button>
          <button onClick={()=>setOptionChosen("optionD")}>{Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion == Questions.length-1?(
        <button onClick={finsQuiz}>Finish Question</button>
      ) : (
      <button onClick={nextQuestion}>Next Question</button>
      )}  
    </div>
  )
}

export default Quiz