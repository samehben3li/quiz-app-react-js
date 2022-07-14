import { useEffect, useState } from "react";

export default function Timer({setStop,quizNumber,isActive}) {

    const [timer,setTimer] = useState(30)

    useEffect(()=>{
        if (isActive){
            setTimer(timer)
        }else{
            if (timer===0) return setStop(true)
            const interval= setInterval(()=>{
                setTimer(timer - 1)
            },1000)
            return ()=>clearInterval(interval)
        }
    },[setStop,timer,isActive])
    
    useEffect(()=>{
        setTimer(30)
    },[quizNumber])

  return timer;
}
