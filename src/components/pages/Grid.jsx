import Topbar from "../global_components/Topbar";
import Footer from "../global_components/Footer";
import Sidebar from "../global_components/Sidebar";
import Loading from "../global_components/Loading";
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