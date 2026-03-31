import Topbar from "../global_components/Topbar";
import Footer from "../global_components/Footer";
import LandingHero from "../subcomponents/LandingHero";
import LandingFeatures from "../subcomponents/LandingFeatures";
import LandingAbout from "../subcomponents/LandingAbout";
import LandingHowItWorks from "../subcomponents/LandingHowItWorks";
import LandingSeeOnPractice from "../subcomponents/LandingSeeOnPractice";

function Landingpage() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center">
          <Topbar collapsed={false} />
        </div>

        <div className="col-span-full bg-slate-900 flex flex-col items-center justify-start text-white">
          <LandingHero />
          <LandingFeatures />
          <LandingAbout />
          <LandingHowItWorks />
          <LandingSeeOnPractice />

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Landingpage;