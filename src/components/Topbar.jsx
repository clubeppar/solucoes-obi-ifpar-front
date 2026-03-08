//LEMBRAR: adicionar as imagens nos assets depois, puxar imagens da internet é uma má ideia.
function Topbar(){
  return(
    <header className="flex p-3 w-screen justify-between
    border-b-3 border-blue-600 border-solid
    ">
      <img          
      className="size-12 invert" 
      src="https://cdn-icons-png.flaticon.com/512/711/711284.png"      
      alt="" />

      <div className="flex align-center">
        <button className="text-white hover:text-blue-500 font-bold px-3 py-1 m-1">
          Inicio
        </button>
        <button className="text-white hover:text-blue-500 font-bold px-3 py-1 m-1">
          Questões
        </button>
        <button className="bg-blue-500 text-white font-bold px-3 py-1 m-1 rounded
         hidden sm:flex items-center gap-2
         border-b-4 border-blue-600
         hover:bg-blue-400
         hover:border-b-0"
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