import { useEffect, useState } from "react";
import "./quiz.css"
import useSound from "use-sound"
import playSound from "../assets/sounds/play.mp3"
import correctSound from '../assets/sounds/correct.mp3'
import wrongSound from '../assets/sounds/wrong.mp3';
import waitSound from "../assets/sounds/wait.mp3"

export default function Quiz({data,setQuizNumber,quizNumber,setStop,stopWork,setIsActive}) {

  const [question,setQuestion] = useState(null)
  const [selectAnswer,setSelectAnswer] = useState(null)
  const [className,setClassName] = useState("answer")

  const [play] = useSound(playSound)
  const [correct] = useSound(correctSound)
  const [wrong] = useSound(wrongSound)
  const [wait] = useSound(waitSound)

  useEffect(()=>{
    play()
  },[play])

  useEffect(()=>{
    !stopWork && wait()
  },[stopWork,quizNumber,wait])

  useEffect(()=>{
    setQuestion(data[quizNumber-1])
    setIsActive(false)
  },[data,quizNumber])

  const handleCilck = (a)=>{
    setSelectAnswer(a)
    setClassName("answer active")
    setIsActive(true)
    setTimeout(()=>{
      setClassName(a.correct ? "answer correct" : "answer wrong")
    },3000)
    setTimeout(()=>{
      if (a.correct){
        correct()
        setTimeout(()=>{
          setQuizNumber(quizNumber+1)
          setSelectAnswer(null)
        },1000)
      }else{
        wrong()
        setTimeout(()=>{
          setStop(true)
        },1000)
      }
    },5000)
  }

  return (
    <div className="quiz">
      <div className="question">{ question?.question }</div>
      <div className="answers">
      {question?.answers.map((a) => (
          <div className={selectAnswer===a ? className : "answer"} onClick={()=> selectAnswer===null && handleCilck(a)}>
            {a.text}
          </div>
        ))}
      </div>
    </div>
    );
}
