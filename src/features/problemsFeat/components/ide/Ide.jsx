import { IoClose } from 'react-icons/io5'
import { LanguagesDropdown } from './LanguagesDropdown';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

import { languageConfig } from '@feats/problemsFeat/components/ide/constants';

// * O nome do arquivo deve ser o nome da questão . a extensão; por exemplo: "jogo.cpp" ou "arara.java"

export function Ide() {

  const [selectedLanguage, setSelectedLanguage] = useState('cpp');
  //const [code, setCode] = useState(languageConfig[selectedLanguage].defaultCode);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-950 opacity-40">
      </div>
      <div className="filter-modal-bg-container w-[75%] fixed top-50% left-50% z-100">
        <div className="bg-gray-900 rounded-lg w-full">
          <div className="flex justify-between items-center p-5 pb-1">
            <h2 className="text-lg font-semibold text-white">Editor de Código</h2>
            <button className="rounded-md  text-white transition hover:cursor-pointer hover:text-blue-600">
              <IoClose className="size-8" />
            </button>
          </div>

          <LanguagesDropdown
            selectedLanguage={selectedLanguage}
            arrayValues={Object.entries(languageConfig).map(([key, value]) => ({
              key,
              value: value.name
            }))}
            onSelect={setSelectedLanguage}
          />

          <div className="px-5">
            <Editor
              key={selectedLanguage}
              height="50vh"
              defaultLanguage={languageConfig[selectedLanguage].editorLanguage}
              defaultValue={languageConfig[selectedLanguage].defaultCode}
              theme="vs-dark"
            />
          </div>
        </div>
      </div>
    </>
  )
}