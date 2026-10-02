// name: nome que aparece no selector da página
// editorLanguage: atributo que será usado no Editor do monaco
// filename: nome do arquivo caso usuário faça submissão pelo editor de código*
// code: guarda o código escrito pelo usuário nessa respectiva linguagem (usado como "histórico" caso ele troque de linguagem)
export const languageConfig = {
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