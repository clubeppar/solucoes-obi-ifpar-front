import { useState } from "react";

import { Topbar } from "@components/Topbar";
import { Footer } from "@components/Footer";

import { ProblemsLayout, ProblemsSidebar } from "@feats/problemsFeat";

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

      <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)]">
        <div className="bg-gray-950">
          <Topbar collapsed={true} />
        </div>

        <ProblemsLayout
          selection={mainSelection}
          clearSelection={handleClearSelection}
        />
      </div>

      <div className="col-span-full flex w-full">
        <Footer />
      </div>
    </div>
  );
}
