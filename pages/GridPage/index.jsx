import { useState } from "react";

// usar import da Topbar aqui

import { Footer } from "@shared/Footer";

import { Sidebar } from "@/sidebar/Sidebar";
import { MainPage } from "@/problem/MainPage";

export function Grid() {
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
    <div className="grid-layout">
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
