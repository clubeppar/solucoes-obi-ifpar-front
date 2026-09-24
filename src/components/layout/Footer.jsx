export function Footer() {
  return (
    <div className="flex items-start justify-center bg-[#030712] flex-col">
      <header className="mt-12 pt-6 pb-6 mx-auto flex gap-32"> 
          <div className="flex gap-32">
            <div>
              <div className="flex gap-2 items-center">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M10 2L2 12L10 22" stroke="currentColor" strokeWidth="4"/>
                  <path d="M22 2L30 12L22 22" stroke="currentColor" strokeWidth="4"/>
                </svg>
                <div className="text-2xl leading-8 font-bold text-white">
                  Soluções OBI
                </div>
              </div>

              <p className="Ag text-xs leading- font-medium text-gray-400 max-w-xs">
                Desenvolvido pelo Clube de Programação do IFPAR para incentivar o aprendizado em programação competitiva através da prática.
              </p>
            </div>
            <div className="flex gap-16">
              <nav className="text-base leading-6 font-bold text-white">
                EXPLORAR
                <ul className="text-gray-400 text-base leading-6 font-medium">
                  <li>Início</li>
                  <li>Questões</li>
                  <li>Sobre nós</li>
                </ul>
              </nav>
              <nav className="text-base leading-6 font-bold text-white">
                COMUNIDADE
                <ul className="text-gray-400 text-base leading-6 font-medium">
                  <li>GitHub</li>
                  <li>Discord</li>
                  <li>Site do clube</li>
                </ul>
              </nav>
            </div>
          </div>
      </header>
      <footer className="pt-4 pb-4 flex justify-center items-center gap-4 mx-auto">
        <div className="text-gray-400 text-sm leading-5 font-medium">
          Soluções OBI ifpar
        </div>
        <div className="h-px w-24 bg-gray-400"></div>
        <div className="text-gray-400 text-sm leading-5 font-medium">
          Desenvolvido com ❤️ pelo Clube de Programação do IFPAR.
        </div>
      </footer>
    </div>
  );
}