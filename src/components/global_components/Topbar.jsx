// import { useContext } from "react";
import { Link } from "react-router-dom";

// import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

// import { Context } from "@src/Provider";

export function Topbar({ collapsed }) {
  // const { isLightMode, setisLightMode } = useContext(Context);

  // const handleThemeToggle = () => {
  //   setisLightMode((prev) => !prev);
  // };

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
        <Link to="/">
          <button className="list-item">Início</button>
        </Link>
        <Link to="/grid">
          <button className="list-item">Questões</button>
        </Link>
        <Link to="/credits">
          <button className="list-item">Sobre Nós</button>
        </Link>
      </div>

      <div className="ms-auto me-2 flex gap-5">
        {/* <button className="topbar-icons" onClick={handleThemeToggle}>
          {!isLightMode ? (
            <FiSun className="size-10" />
          ) : (
            <FiMoon className="size-10" />
          )}
        </button> */}
        <Link
          className="topbar-icons"
          to="https://github.com/G-Aleixo/solucoes-obi-ifpar"
          target="_blank"
        >
          <FaGithub className="size-10" />
        </Link>
      </div>
    </header>
  );
}
