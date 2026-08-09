import { IoMdPeople } from "react-icons/io";

export function WhoWeAre() {
  return (
    <div className="about-container">
      <div className="about-icon-container">
        <IoMdPeople className="w-6 h-6 mr-1" />
        Quem somos
      </div>

      <div className="flex items-center">
        <div className="flex flex-col justify-end items-end mr-10">
          <h2 className="text-3xl font-bold mb-2 text-right">
            Um Projeto Criado por
          </h2>
          <h2 className="text-3xl font-bold mb-2 text-right">
            <span className="text-blue-500">Estudantes para Estudantes</span>
          </h2>
          <p className="text-balance text-right">Criado pelo Clube de Programação do IFPAR, o Soluções OBI IFPAR nasceu para tornar o treinamento para a OBI mais simples, gratuito e acessível, enquanto proporciona aos estudantes a experiência de desenvolver software em um ambiente colaborativo.</p>
          <a
            href="https://github.com/clubeppar"
            className="bg-blue-600 hover:bg-blue-700 mt-6 custom-transition px-4 py-2 rounded-lg cursor-pointer text-sm leading-5 font-medium shadow-sm"
          >
            Acesse nosso GitHub
          </a>
        </div>
        <div className="w-2/3 border border-amber-300">
          <img src="src/assets/images/others/capivara_NotFound.png" alt="Quem somos"></img>
        </div>
      </div>
    </div>
  )
}