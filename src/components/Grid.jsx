import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Grid() {
	return (
		<>
			<div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
				<div className="col-span-full bg-gray-950 flex items-center">
					<Topbar />
				</div>

				<div className="col-span-1 bg-slate-900 flex items-center justify-center text-white">sidebar</div>
				
				<div className="col-span-3  bg-slate-900 flex items-center justify-center text-white">main page</div>

				<Footer />
			</div>
			</>
	);
}