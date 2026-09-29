import { IoClose } from 'react-icons/io5'
import { LanguagesDropdown } from './LanguagesDropdown';
import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

// name: nome que aparece no selector da página
// editorLanguage: atributo que será usado no Editor do monaco
// filename: nome do arquivo caso usuário faça submissão pelo editor de código*
// code: guarda o código escrito pelo usuário nessa respectiva linguagem (usado como "histórico" caso ele troque de linguagem)
const languageConfig = {
  c: {
    name: "C",
    editorLanguage: "c",
    filename: "main.c",
    code: "",
    defaultCode: `#include <stdio.h>

int main(void) {

  return 0;
}
`
  },
  cpp: {
    name: "C++",
    editorLanguage: "cpp",
    filename: "main.cpp",
    code: "",
    defaultCode: `#include <bits/stdc++.h>
using namespace std;

int main() {

  return 0;
}
    `
  },
  python: {
    name: "Python",
    editorLanguage: "python",
    filename: "main.py",
    code: "",
    defaultCode: `def main():
    pass


if __name__ == "__main__":
    main()
`
  },
  java: {
    name: "Java",
    editorLanguage: "java",
    filename: "Main.java",
    code: "",
    defaultCode: `public class Main {
  public static void main(String[] args) {

  }
}
`
  },
};

// * O nome do arquivo deve ser o nome da questão . a extensão; por exemplo: "jogo.cpp" ou "arara.java"

export function ModalIde() {

  const [selectedLanguage, setSelectedLanguage] = useState('cpp');
  //const [code, setCode] = useState(languageConfig[selectedLanguage].defaultCode);

  return (
    <div className="filter-modal-bg-container fixed top-0 left-50% z-100">
      <div className="filtermodal-container">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-lg ms-5 font-semibold text-white">Editor de Código</h2>
          <button className="rounded-md p-1  text-white transition hover:cursor-pointer hover:text-blue-600">
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
          />
        </div>
      </div>
    </div>
  )
}