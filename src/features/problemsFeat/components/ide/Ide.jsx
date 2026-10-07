import { Editor } from "@monaco-editor/react";

import { IoClose } from "react-icons/io5";

import { useState } from "react";

import { LanguagesDropdown } from "./LanguagesDropdown";
import { languageConfig } from "./constants";

// * O nome do arquivo deve ser o nome da questão . a extensão; por exemplo: "jogo.cpp" ou "arara.java"

export function Ide({ closeIDE, problemName, submitCode }) {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp");
  const [codeByLanguage, setCodeByLanguage] = useState(() =>
    Object.fromEntries(
      Object.entries(languageConfig).map(([language, config]) => [
        language,
        config.defaultCode,
      ]),
    ),
  );

  const code = codeByLanguage[selectedLanguage];
  const currentLanguage = languageConfig[selectedLanguage];

  function onSubmit() {
    submitCode({
      filename: `${problemName}${currentLanguage.extension}`,
      file: code,
    });
  }

  return (
    <>
      <div onClick={closeIDE} className="filtermodal-bg-container">
        <div
          onClick={(e) => e.stopPropagation()}
          className="filter-modal-bg-container w-[75%] fixed top-50% left-50% z-100"
        >
          <div className="bg-gray-900 rounded-lg w-full">
            <div className="flex justify-between items-center p-5 pb-1">
              <h2 className="text-lg font-semibold text-white">
                Editor de Código
              </h2>
              <button className="header-btn-submit" onClick={onSubmit}>
                Enviar questão
              </button>
              <button
                className="rounded-md text-white transition hover:cursor-pointer hover:text-blue-600"
                onClick={closeIDE}
              >
                <IoClose className="size-8" />
              </button>
            </div>

            <LanguagesDropdown
              selectedLanguage={selectedLanguage}
              arrayValues={Object.entries(languageConfig).map(
                ([key, value]) => ({
                  key,
                  value: value.name,
                }),
              )}
              onSelect={setSelectedLanguage}
            />

            <div className="px-5">
              <Editor
                value={code}
                onChange={(value) =>
                  setCodeByLanguage((currentCodes) => ({
                    ...currentCodes,
                    [selectedLanguage]: value ?? "",
                  }))
                }
                key={selectedLanguage}
                height="50vh"
                language={currentLanguage.editorLanguage}
                theme="vs-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
