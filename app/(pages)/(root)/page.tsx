import InterviewCard from "@/app/components/interview-card";
import MainBanner from "@/app/components/main-banner";
import PastInterviewLayout from "@/app/components/old-interview";
import { User } from "@/app/lib/models/user";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";


export default async function Home() {
  //const session = useSession();
  return (
    <React.Fragment >
      <MainBanner />
      <PastInterviewLayout/>
    </React.Fragment >
  );
}
