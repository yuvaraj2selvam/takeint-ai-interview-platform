import InterviewCard from "@/app/components/interview-card";
import MainBanner from "@/app/components/main-banner";
import PastInterviewLayout from "@/app/components/old-interview";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { EmblaCarousel } from "../components/embla-card";
import SuccessShowCaseBanner from "../components/success-showcase-banner";


export default async function Home() {
  //const session = useSession();
  return (
    <main className="" >
      <MainBanner />
      {/* <EmblaCarousel/> */}
      <SuccessShowCaseBanner/>
      <PastInterviewLayout/>
    </main >
  );
}
