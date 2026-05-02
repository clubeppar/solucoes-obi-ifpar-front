import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import { Context } from "@src/Provider";

export function Topbar({ collapsed }) {
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
    <header className="topbar-bg">
      {!collapsed ? (
        <Link to="/">
          <FaCode className="ms-2 size-12 text-white light:text-black" />
        </Link>
      ) : (
        <span></span>
      )}

      <div className="topbar-btn-group">
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

      <div className="ms-auto me-2 flex gap-5">
        <button className="topbar-icons" onClick={handleThemeToggle}>
          {!isLightMode ? (
            <FiSun className="size-10" />
          ) : (
            <FiMoon className="size-10" />
          )}
        </button>
        <button
          className="topbar-icons"
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
