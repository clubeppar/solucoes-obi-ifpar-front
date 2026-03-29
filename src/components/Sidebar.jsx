import { useState } from "react"

let api1 = {"anos" : [2025, 2024, 2023, 2022, 2021, 2020]};
   
let api2 =  {"ano" : 2022, "fases" : [1, 2, 3]};

let api3 =  {"ano" : 2022,
  "fase" : [1,2,3],
  "niveis": ["j", "1", "2", "s"]};  
    
let api4 = {
  "ano": 2022,
  "fase": 1,
  "nivel": "1",
  "questoes": ["nome", "otonome", "kaio", "AAAAAAAAAAAAAAAA"]
};

function Sidebar(){
  const [questionSelect, setQuestionSelect] = useState(null)

  return(
    <aside className="w-full text-sidebar">
      <ul>
        {api1.anos.map((year , index) => (
          <SidebarItem key={index} text={year} nextCall="Phase" questionSelect={questionSelect} setQuestionSelect={setQuestionSelect}/>
        ))}
      </ul>
    </aside>
  )
} export default Sidebar

//SidebarBtns Abaixo

function SidebarItem({text, nextCall, questionSelect, setQuestionSelect}){
  const [open, setOpen] = useState(false)

  let actualArray = []
  let prefix = "";
  let isSelected = questionSelect === `${text}`; //trocar para ID depois

  switch (nextCall){
    case "Phase":
      actualArray = api2.fases
      nextCall = "Levels"
      prefix = ""
      break
    case "Levels":
      actualArray = api3.niveis
      nextCall = "Questions"
      prefix = "Fase "
      break
    case "Questions":
      actualArray = api4.questoes
      nextCall = "none";
      prefix = "Nivel "
      break
    default:
      nextCall = null;
      break
    }

    return(
      <li>
        <button className={`item-sidebar ${isSelected ? "selected-sidebar" : ""}`}
        onClick={() => { if (!nextCall) {setQuestionSelect(`${text}`)} else {setOpen(!open)} }}>
            <p>{prefix + text}</p>
            {nextCall && (
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-down-icon.png"
              alt=""
              className={open
                ? "size-4 invert transition"
                : "size-4 invert transition rotate-180"}
            />
          )}
        </button>
        {open && (
          <ul className="ml-8 max-w-full overflow-x-hidden">
            <li>
              {actualArray.map((item, index) => (
                <SidebarItem key={index} text={item} nextCall={nextCall} questionSelect={questionSelect} setQuestionSelect={setQuestionSelect}/>
              ))}
            </li>
          </ul>
        )}
    </li>
  )
}