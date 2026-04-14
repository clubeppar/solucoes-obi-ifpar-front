import Topbar from "../global_components/Topbar";

export default function Credits() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center h-16">
          <Topbar colapsed={false} />
        </div>

        <div className="col-span-full bg-slate-900 light:bg-white flex flex-col items-center justify-start text-white">
          <div className="text-5xl font-bold text-center mt-16 mb-16">
            Contribuições
          </div>
          <div className="grid grid-cols-4">
            
          </div>
        </div>
      </div>
    </>
  );
}
