//LEMBRAR: adicionar as imagens nos assets depois, puxar imagens da internet é uma má ideia.
function Topbar({collapsed}){
  return(
    <header className="grid grid-cols-3 items-center px-3 z-10 w-full">
      {!collapsed && (
        <img          
        className="size-12 invert cursor-pointer ms-4" 
        src="https://cdn-icons-png.flaticon.com/512/711/711284.png"      
        alt="" />
      )}

      {collapsed && (
        <div></div>
      )}

      <div className="flex justify-center">
        <button className="list-item">
          Inicio
        </button>
        <button className="list-item">
          Questões
        </button>
        <button className="list-item">
          Sobre Nós
        </button>
      </div>

      <div className="flex justify-end items-center gap-2">
        <button className="h-9 items-center cursor-pointer">
          <img src="https://static.thenounproject.com/png/4808961-200.png" alt=""
          className="invert size-8"
          />
        </button>
        <button>
          <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt=""
            className="size-6 invert" 
          />
        </button>
        <button className="btn-info-3d h-9 hidden sm:flex items-center gap-2 cursor-pointer"
          onClick={()=> window.location.href= "https://github.com/G-Aleixo/solucoes-obi-ifpar"}
        >
          Github
        </button>
      </div>
    </header>
  );
}

export default Topbar;