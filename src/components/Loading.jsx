import { useState, useEffect } from "react";

export function Loading(){
  const [secondsLeft, setSecondsLeft] = useState(3);
  const [text, setText] = useState("Carregando.")

  useEffect(() => {
    setTimeout(() => {setText(text += ".")}, 1000)
  })


  
  
  return(
    <div className="z-999 flex flex-col justify-center items-center fixed w-screen h-screen bg-blue-950/25">
      <img src="https://www.svgrepo.com/show/315795/spinner.svg" alt="" 
      className="animate-spin size-20 invert"
      />
      <p className="text-white font-semibold text-xl">{text}</p>
    </div>
  )
} export default Loading;