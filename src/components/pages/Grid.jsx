import Footer from "../global_components/Footer";

import Sidebar from "../subcomponents/grid/Sidebar";
import MainPage from "../subcomponents/grid/MainPage";

export default function Grid() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] h-screen gap-0">
        <Sidebar />

        <MainPage />

        <Footer />
      </div>
    </>
  );
}