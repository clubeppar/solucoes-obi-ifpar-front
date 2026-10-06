import { useEffect } from "react";
import { useFetch } from "@hooks";

import { Topbar } from "@components/Topbar";
import { Footer } from "@components/Footer";

import {
  Hero,
  Features,
  About,
  HowItWorks,
  SeeOnPractice,
  AboutOBI,
  WhoWeAre,
  MeetTheTeam,
  ReadyToSolve,
} from "@feats/landingFeat";

export function LandingPage() {
  const { get } = useFetch();

  useEffect(() => {
    async function runAPI() {
      const link = "/api/hello";
      const data = await get(link, { skipLoading: true });
      console.log(data.message);
    }

    runAPI();
  }, [get]);

  return (
    <>
      <div className="landingpage-bg scrollbar">
        <div className="landingpage-topbar-slot">
          <Topbar collapsed={false} />
        </div>

        <div className="landingpage-body">
          <Hero />
          <Features />
          <About />
          <HowItWorks />
          {/* <SeeOnPractice /> */}
          <AboutOBI />
          {/* <WhoWeAre /> */}
          <MeetTheTeam />
          <ReadyToSolve />
        </div>

        <div className="col-span-full">
          <Footer onlyFooter={false} />
        </div>
      </div>
    </>
  );
}
