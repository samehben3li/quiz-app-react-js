import "./end.css"

const End = ({username,handleQuit,handleRestart,earned}) => {

  return (
    <div className="end">
      <h1 className="endGame">{ username } erned : {earned}</h1>
      <div className="btns">
        <button className="endBtn btnRestart" onClick={handleRestart}>Restart</button>
        <button className="endBtn btnQuit" onClick={handleQuit}>Quit</button>
      </div>
    </div>
  )
}

export default End