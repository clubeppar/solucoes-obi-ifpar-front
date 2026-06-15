import { useState } from "react";

// usar import da Topbar aqui

import { Footer } from "@shared/Footer";

import { Sidebar } from "@/sidebar/Sidebar";
import { MainPage } from "@/problem/MainPage";

import { useNotification } from "@hooks";

export function Grid() {
  const [selection, setSelection] = useState({
    year: null,
    phase: null,
    level: null,
  });

  const [mainSelection, setMainSelection] = useState({
    year: "",
    phase: "",
    level: "",
    problem: "",
  });

  const handleClearSelection = () => {
    setMainSelection({
      year: "",
      phase: "",
      level: "",
      problem: "",
    });
  };

  const { haveNotification } = useNotification();

  return (
    <div className="grid-layout">
      <Sidebar
        selection={selection}
        setSelection={setSelection}
        onQuestionSelect={setMainSelection}
        activeQuestion={mainSelection}
      />

      {haveNotification && <Notification />}

      <MainPage
        selection={mainSelection}
        clearSelection={handleClearSelection}
      />

      <div className="col-span-full flex w-full">
        <Footer />
      </div>
    </div>
  );
}
