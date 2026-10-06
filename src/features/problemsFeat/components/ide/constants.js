// name: nome que aparece no selector da página
// editorLanguage: atributo que será usado no Editor do monaco
// extension: extensão usada no nome do arquivo enviado pelo editor
export const languageConfig = {
  c: {
    name: "C",
    editorLanguage: "c",
    extension: ".c",
    defaultCode: `#include <stdio.h>

int main(void) {

  return 0;
}`
  },
  cpp: {
    name: "C++",
    editorLanguage: "cpp",
    extension: ".cpp",
    defaultCode: `#include <bits/stdc++.h>
using namespace std;

int main() {

  return 0;
}`
  },
  python: {
    name: "Python",
    editorLanguage: "python",
    extension: ".py",
    defaultCode: `def main():
    pass

if __name__ == "__main__":
    main()`
  },
  java: {
    name: "Java",
    editorLanguage: "java",
    extension: ".java",
    defaultCode: `public class Main {
  public static void main(String[] args) {

  }
}`
  },
};
