import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export function Topbar({ collapsed }) {
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
        <Link to="/problems">
          <button className="list-item">Questões</button>
        </Link>
        <Link to="/credits">
          <button className="list-item">Sobre Nós</button>
        </Link>
      </div>

      <div className="ms-auto me-2 flex gap-5">
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
