import { Topbar } from "@shared/Topbar";
import { Footer } from "@shared/Footer";

import { Hero } from "@/landing/Hero";
import { Features } from "@/landing/Features";
import { About } from "@/landing/About";
import { HowItWorks } from "@/landing/HowItWorks";
// import { SeeOnPractice } from "@/landing/SeeOnPractice";

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
