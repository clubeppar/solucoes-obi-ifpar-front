import { Topbar } from "@/global_components/Topbar";
import { Footer } from "@/global_components/Footer";

import { Hero } from "@/subcomponents/landing/Hero";
import { Features } from "@/subcomponents/landing/Features";
import { About } from "@/subcomponents/landing/About";
import { HowItWorks } from "@/subcomponents/landing/HowItWorks";
import { SeeOnPractice } from "@/subcomponents/landing/SeeOnPractice";

export function Landingpage() {
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
