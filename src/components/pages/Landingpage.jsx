import Topbar from "../global_components/Topbar";
import Footer from "../global_components/Footer";

import Hero from "../subcomponents/landing/Hero";
import Features from "../subcomponents/landing/Features";
import About from "../subcomponents/landing/About";
import HowItWorks from "../subcomponents/landing/HowItWorks";
import SeeOnPractice from "../subcomponents/landing/SeeOnPractice";

export default function Landingpage() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[auto_6fr_auto] min-h-screen gap-0">
        <div className="col-span-full bg-gray-950 flex items-center h-16">
          <Topbar collapsed={false} />
        </div>

        <div className="col-span-full bg-slate-900 flex flex-col items-center justify-start text-white">
          <Hero />
          <Features />
          <About />
          <HowItWorks />
          <SeeOnPractice />
        </div>

        <Footer />
      </div>
    </>
  );
}
