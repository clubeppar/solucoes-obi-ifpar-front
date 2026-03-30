import Topbar from "./Topbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import MainPage from "./MainPage";

export default function Grid() {
	return (
		<>
			<div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] h-screen gap-0">
				<div className="col-span-full bg-gray-950 flex items-center">
					{/* <Topbar /> */}
				</div>

				<Sidebar />
				
				<MainPage />

				<Footer />
			</div>
		</>
	);
}