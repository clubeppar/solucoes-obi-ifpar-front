import { useState } from "react";

import Footer from "../global_components/Footer";

import Sidebar from "../subcomponents/grid/Sidebar";
import MainPage from "../subcomponents/grid/MainPage";

export default function Grid() {
  const [selection, setSelection] = useState({
  year: null,
  phase: null,
  level: null,
  problem: null
  });

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] h-screen gap-0">
        <Sidebar selection={selection} setSelection={setSelection}/>
        <MainPage />
        <Footer />
      </div>
    </>
  );
}
