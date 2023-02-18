import './App.css'
import { useState, useEffect, useMemo } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import data from './data'
import Start from './components/Start';
import Crorepati from './components/Crorepati';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber]= useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('₹ 0');
  const [click, setClick] = useState(false);
 

  const moneyPyramid= useMemo(() => 
    [
      {id:1 , amount: "₹ 1000"},
      {id:2 , amount: "₹ 2000"},
      {id:3 , amount: "₹ 3000"},
      {id:4 , amount: "₹ 5000"},
      {id:5 , amount: "₹ 10000"},
      {id:6 , amount: "₹ 20000"},
      {id:7 , amount: "₹ 40000"},
      {id:8 , amount: "₹ 80000"},
      {id:9 , amount: "₹ 160000"},
      {id:10 , amount: "₹ 320000"},
      {id:11 , amount: "₹ 640000"},
      {id:12 , amount: "₹ 1250000"},
      {id:13 , amount: "₹ 2500000"},
      {id:14 , amount: "₹ 5000000"},
      {id:15 , amount: "₹ 1000000"},
    
    ].reverse()
  
  , []);
  


  useEffect(() => {
    questionNumber>1  && setEarned(moneyPyramid.find((m)=> m.id===questionNumber-1).amount)
  }, [moneyPyramid,questionNumber]);
  
  return (

    <div className="App">

    {username?questionNumber!=16? (
      <>
        <div className="main">
        {stop ? (
          <h1 className='endText'>You earned : {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"><Timer  setStop={setStop} questionNumber={questionNumber} click={click} setClick={setClick}/></div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setClick={setClick}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item) => {
            return (
              <li
                className={
                  questionNumber === item.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
                key={item.id}
              >
                <span className="moneyListItemNumber">{item.id}</span>
                <span className="moneyListItemAmount">{item.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
      
      </>


        ):<Crorepati /> :  <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
