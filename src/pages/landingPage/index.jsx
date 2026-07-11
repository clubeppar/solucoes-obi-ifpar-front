import { Topbar } from "@components/Topbar";
import { Footer } from "@components/Footer";

import {
  Hero,
  Features,
  About,
  HowItWorks,
  SeeOnPractice,
} from "@feats/landingFeat";

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
