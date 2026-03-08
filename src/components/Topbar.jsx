//LEMBRAR: adicionar as imagens nos assets depois, puxar imagens da internet é uma má ideia.
function Topbar(){
  return(
    <header className="flex w-screen justify-between relative z-10 shadow-xl/60">
      
      
      <img          
      className="size-12 invert cursor-pointer ms-4" 
      src="https://cdn-icons-png.flaticon.com/512/711/711284.png"      
      alt="" />

      <div className="flex align-center me-4">
        <button className="list-item">
          Inicio
        </button>
        <button className="list-item">
          Questões
        </button>
        <button className="btn-info-3d hidden sm:flex items-center gap-2 cursor-pointer"
         onClick={()=> window.location.href= "https://github.com/G-Aleixo/solucoes-obi-ifpar"}
        >
          <img className="size-6" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="" />
          Github
        </button>
      </div>
    </header>
  );
}

export default Topbar;