import { useState, useEffect } from "react";

export function Loading(){
  const [text, setText] = useState("Carregando")
  const [count, setCount] = useState(1)

  useEffect(() => {
    setTimeout(() => {setCount(count + 1); 
      if(count%4==0){
        setText("Carregando")
      } else{
        setText(text + ".")
      }
    }, 500)
  })

  return(
    <div className="z-999 flex flex-col justify-center items-center fixed w-screen h-screen bg-gray-950/50">
      <img src="https://www.svgrepo.com/show/315795/spinner.svg" alt="" 
      className="animate-spin size-20 invert"
      />
      <p className="text-white font-semibold text-xl">{text}</p>
      <div className="h-10 flex items-center">
        {count > 24 && (
          <p className="font-semibold text-white text-2xl pt-3">Algo deu errado, aguarde um pouco mais</p>
        )}
      </div>
    </div>
  )
} export default Loading;