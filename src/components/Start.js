import {useRef} from 'react'

export default function Start({setUsername}) {

    const inputRef = useRef()
    const handleClick=()=>{
        inputRef.current.value && setUsername(inputRef.current.value)
    }

  return (
    <div className="start">
        <input type="text" placeholder="enter your name" className="startinput"  ref={inputRef}/>
        <button className="startbtn" onClick={handleClick}>start</button>
    </div>
  );
}
