import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import { Context } from "../../Provider";

export default function Topbar({ collapsed }) {
  const { isDarkMode, setIsDarkMode } = useContext(Context);
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-center h-16 px-4 z-10 w-full">
      {!collapsed ? <FaCode className="size-12 text-white" /> : <span></span>}

      <div className="hidden md:flex justify-center gap-6">
        <button className="list-item" onClick={() => handleNavigate("/")}>
          Início
        </button>
        <button className="list-item" onClick={() => handleNavigate("/grid")}>
          Questões
        </button>
        <button
          className="list-item"
          onClick={() => handleNavigate("/credits")}
        >
          Sobre Nós
        </button>
      </div>

      <div className="me-4 flex justify-end gap-3 sm:gap-5">
        <button
          className="cursor-pointer text-white hover:text-blue-500 transition-colors"
          onClick={handleThemeToggle}
        >
          {isDarkMode ? (
            <FiSun className="size-10" />
          ) : (
            <FiMoon className="size-10" />
          )}
        </button>
        <button
          className="cursor-pointer text-white hover:text-blue-500 transition-colors"
          onClick={() =>
            handleNavigate("https://github.com/G-Aleixo/solucoes-obi-ifpar")
          }
        >
          <FaGithub className="size-8 sm:size-10" />
        </button>
      </div>
    </header>
  );
}
