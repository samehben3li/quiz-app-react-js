import { useEffect, useState } from "react";
import "./app.css"
import End from "./components/End";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import Timer from "./components/Timer";
import { moneyPyramid, data } from "./data"

function App() {

  const [username, setUsername] = useState(null)
  const [quizNumber, setQuizNumber] = useState(1)
  const [stopWork, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")
  const [isActive,setIsActive] = useState(false)

  const handleQuit = ()=>{
    setUsername(null)
    setQuizNumber(1)
    setStop(false)
    setEarned("$ 0")
    setIsActive(false)
  }

  const handleRestart = () => {
    setQuizNumber(1)
    setStop(false)
    setEarned("$ 0")
    setIsActive(false)
  }

  useEffect(() => {
    quizNumber > 1 && setEarned(moneyPyramid.find(m => m.id === quizNumber - 1).amount)
  }, [quizNumber])

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stopWork ? (<End username={username} handleQuit={handleQuit} handleRestart={handleRestart} earned={earned} />) : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} quizNumber={quizNumber} isActive={ isActive }/></div>
                </div>
                <div className="bottom">
                  <Quiz data={data} setQuizNumber={setQuizNumber} quizNumber={quizNumber} setStop={setStop} stopWork={stopWork} 
                  setIsActive={ setIsActive }/>
                </div>
              </>
            )}

          </div>
          <div className="paramid">
            <ul className="list">
              {moneyPyramid.map(m => {
                return (
                  <li key={m.id} className={ quizNumber > m.id ? "item deja": quizNumber === m.id ? "item active" : "item"}>
                    <span className="item-number">{m.id}</span>
                    <span className="item-amount">{m.amount}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} />}
    </div>
  );
}

export default App;
