import Topbar from "./Topbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center">
          <Topbar />
        </div>

        <div className="col-span-full bg-slate-900 flex flex-col items-center justify-start text-white">
          <div className="flex flex-col justify-center items-center w-1/3 m-10">
            <h1 className="text-4xl font-bold m-5">Soluções OBI</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat id distinctio molestiae deleniti quod ut ipsam perspiciatis, expedita tempore nulla iste omnis, voluptatem harum beatae magni libero perferendis nisi repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat id distinctio molestiae deleniti quod ut ipsam perspiciatis, expedita tempore nulla iste omnis</p>
          </div>
          <div className="flex justify-between w-1/5 m-5">
            <button className="btn-info-3d items-center cursor-pointer text-xl w-25">
              Creditos
            </button>

            <Link to="/grid" className="btn-info-3d items-center cursor-pointer text-xl w-25">
              Provas
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Landingpage;