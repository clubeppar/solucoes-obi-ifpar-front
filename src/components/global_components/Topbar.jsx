import { FiSun } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function Topbar({ collapsed }) {
  const handleThemeToggle = () => {
    console.log("implementar sun/dark mode");
  };

  const handleGithubClick = () => {
    window.location.href = "https://github.com/g-aleixo/solucoes-obi-ifpar/";
  };

  return (
    <header className="grid grid-cols-3 items-center px-3 z-10 w-full">
      {!collapsed ? (
        <img
          className="size-12 invert cursor-pointer ms-4"
          src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
          alt="Logo do Clube de Programação do IFPAR"
        />
      ) : (
        <div></div>
      )}

      <div className="flex justify-center">
        <button className="list-item">Início</button>
        <button className="list-item">Questões</button>
        <button className="list-item">Sobre Nós</button>
      </div>

      <div className="flex justify-end items-center gap-2">
        <button className="cursor-pointer" onClick={handleThemeToggle}>
          <FiSun className="size-8 text-white" />
        </button>
        <button className="cursor-pointer" onClick={handleGithubClick}>
          <FaGithub className="size-8 text-white" />
        </button>
      </div>
    </header>
  );
}
