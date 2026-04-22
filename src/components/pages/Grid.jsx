import { useState } from "react";

import Footer from "../global_components/Footer";

import Sidebar from "../subcomponents/grid/Sidebar";
import MainPage from "../subcomponents/grid/MainPage";

export default function Grid() {
  const [selection, setSelection] = useState({
    year: null,
    phase: null,
    level: null,
  });

  const [mainSelection, setMainSelection] = useState({
    year: "2025",
    phase: "1",
    level: "1",
    problem: "Fila",
  });

  return (
    <div className="grid h-screen grid-cols-[auto_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_40px] gap-0">
      <Sidebar
        selection={selection}
        setSelection={setSelection}
        onQuestionSelect={setMainSelection}
        activeQuestion={mainSelection}
      />

      <MainPage selection={mainSelection} />

      <div className="col-span-full flex w-full">
        <Footer />
      </div>
    </div>
  );
}
