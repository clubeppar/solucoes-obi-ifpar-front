import { useState } from "react";
import SidebarBtn from "./SidebarBtn";

function Sidebar(){
  const data1 = {"anos" : [2025, 2024, 2023, 2022, 2021, 2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999]};
  //Nao se importe com a largura desse teste

  return(
    <aside className="w-full text-sidebar">
      <ul>
        {data1.anos.map((res1 , index) => (
          <SidebarBtn key={index} refType={2} res={res1}/>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar;