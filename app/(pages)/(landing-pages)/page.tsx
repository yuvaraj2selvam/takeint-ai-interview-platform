
import MainBanner from "@/app/components/banners/main-banner";
import PastInterviewLayout from "@/app/components/interview/old-interview";
import React from "react";
import ShowCaseBanner1 from "../../components/banners/showcase-banner-1";
import ShowcaseBanner2 from "../../components/banners/showcase-banner-2";
import ShowcaseBanner3 from "../../components/banners/showcase-banner-3";
import SubBanner from "../../components/banners/sub-banner";


export default async function Home() {

  //const session = useSession();
  return (
    <main className="px-4 sm:px-6 md:px-8 max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1280px] mx-auto" >
      <MainBanner />
      <SubBanner />
      <ShowCaseBanner1 />
      <ShowcaseBanner2 />
      <ShowcaseBanner3 />
    </main >
  );
}
