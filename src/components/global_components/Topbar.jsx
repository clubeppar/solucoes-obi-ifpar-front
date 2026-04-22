import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import { Context } from "../../Provider";

export default function Topbar({ collapsed }) {
  const { isLightMode, setisLightMode } = useContext(Context);
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    setisLightMode((prev) => !prev);
  };

  const handleNavigate = (url) => {
    if (url.includes("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    navigate(url);
  };

  return (
    <header className="relative flex items-center h-16 px-4 z-10 w-full light:bg-gray-500">
      {!collapsed ? <Link to="/"><FaCode className="ms-2 size-12 text-white light:text-black" /></Link> : <span></span>}

      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center gap-6">
        <button className="list-item light:text-black light:hover:text-gray-300" onClick={() => handleNavigate("/")}>
          Início
        </button>
        <button className="list-item light:text-black light:hover:text-gray-300" onClick={() => handleNavigate("/grid")}>
          Questões
        </button>
        <button
          className="list-item light:text-black light:hover:text-gray-300"
          onClick={() => handleNavigate("/credits")}
        >
          Sobre Nós
        </button>
      </div>

      <div className="ms-auto me-2 flex gap-5">
        <button
          className="cursor-pointer text-white hover:text-blue-500 transition-colors light:text-black light:hover:text-gray-300"
          onClick={handleThemeToggle}
        >
          {!isLightMode ? (
            <FiSun className="size-10" />
          ) : (
            <FiMoon className="size-10" />
          )}
        </button>
        <button
          className="cursor-pointer text-white hover:text-blue-500 transition-colors light:text-black light:hover:text-gray-300"
          onClick={() =>
            handleNavigate("https://github.com/G-Aleixo/solucoes-obi-ifpar")
          }
        >
          <FaGithub className="size-10" />
        </button>
      </div>
    </header>
  );
}
