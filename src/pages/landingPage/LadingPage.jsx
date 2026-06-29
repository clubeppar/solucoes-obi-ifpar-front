import { Topbar } from "../../components/layout/Topbar";
import { Footer } from "../../components/layout/Footer";

import { Hero, Features, About, HowItWorks, SeeOnPractice } from "../../features/landingFeat/index"; // import do arquivo Barrel

export function LandingPage() {
  return (
    <>
      <div className="landingpage-bg">
        <div className="landingpage-topbar-slot">
          <Topbar collapsed={false} />
        </div>

        <div className="landingpage-body">
          <Hero />
          <Features />
          <About />
          <HowItWorks />
          {/* <SeeOnPractice /> */}
        </div>

        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
