import {useState, useEffect} from 'react'

export default function Timer({setStop, questionNumber, click, setClick}) {

    const [timer, setTimer] = useState(30);

    useEffect(() => {
      const interval = setInterval(()=>{
           
        setTimer((prev => prev-1))
      },1000)


      if(click){
        // setStop(true)
        setClick(false)
        
        clearInterval(interval)
     }


        if(timer ===0) return setStop(true)

       
       
        return ()=> clearInterval(interval)

    }, [setStop, timer]);


    useEffect(() => {
      setTimer(30)
    }, [questionNumber]);

  return timer
}
