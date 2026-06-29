import { useState } from "react";

// usar import da Topbar aqui

import { Footer } from "../../components/layout/Footer";

import { ProblemsLayout, ProblemsSidebar } from "../../features/problemsFeat/index";

export function ProblemsPage() {
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
    flag: "",
  });

  const handleClearSelection = () => {
    setMainSelection({
      year: "",
      phase: "",
      level: "",
      problem: "",
      flag: "",
    });
  };

  return (
    <div className="grid-layout">
      <ProblemsSidebar
        selection={selection}
        setSelection={setSelection}
        onQuestionSelect={setMainSelection}
        activeQuestion={mainSelection}
      />

      <ProblemsLayout
        selection={mainSelection}
        clearSelection={handleClearSelection}
      />

      <div className="col-span-full flex w-full">
        <Footer />
      </div>
    </div>
  );
}
