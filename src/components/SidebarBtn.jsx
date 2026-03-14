import { useState } from "react";

export default function SidebarBtn({ refType, res}){
  
  const [mostrar, setMostrar] = useState(false);
  

  //isso simula API
  function RelateRef(refType){
    if (refType == 1){
      return {"anos" : [2025, 2024, 2023, 2022, 2021, 2020]};
    }
    else if(refType == 2){
      return {
      "ano" : 2022,
      "fases" : [1, 2, 3]};
    }
    else if(refType == 3){
      return {
      "ano" : 2022,
      "fase" : [1,2,3],
      "níveis": ["j", "1", "2", "s"]};
    }   
    else if(refType == 4){
      return {
      "ano": 2022,
      "fase": 1,
      "nivel": "1",
      "questoes": ["nome", "otonome", "kaio", "AAAAAAAAAAAAAAAA"]};
    }
    else{
      return "error"
    }      
  }
    
  const data = RelateRef(refType)

  return(
    <li>
      <button className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
      onClick={() => setMostrar(prev => !prev)}>
        <p className="pl-10">{res}</p>
        <img src="https://cdn-icons-png.flaticon.com/512/54/54785.png" alt="" 
        className={mostrar?`size-4 invert transition-transform`:`size-4 invert rotate-180 transition-transform`}/>                
      </button>

      <ul className="ml-10">
        {mostrar && data?.fases?.map((fase, index) => (
          <SidebarBtn 
            key={index}
            refType={3}
            res={`Fase ${fase}`}
            id={index}
          />
        ))}

        {mostrar && data?.níveis?.map((nivel, index) => (
          <SidebarBtn 
            key={index}
            refType={4}
            res={`Nivel ${nivel}`}
            id={index}
          />
        ))}

        {mostrar && data?.questoes?.map((questao, index) => (
          <li key={index} className="ml-5 p-1 hover:bg-gray-700 rounded">
            <p className="pl-5">{questao}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}