"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";


const InterviewBody = () => {

    const session = useSession();

    return (
        <section className="flex items-center justify-center gap-6 z-60">

            <div className="flex flex-col items-center justify-center h-[400px] w-full max-w-xl p-6 border-2 border-black rounded-[45px] bg-[#e7e9fb] shadow-md ">
                <div className="relative w-60 h-60 flex items-center justify-center">
                    <div className="absolute w-28 h-28 bg-[#f78c74]/45 rounded-full animate-ping z-10" />
                    <Image
                        src="/robot-orange.png"
                        alt="AI Interviewer"
                        width={240}
                        height={240}
                        className="rounded-full p-4 z-20 pointer-events-none"
                    />
                </div>
                <span className="text-xl font-semibold text-center">AI Interviewer</span>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center h-[400px] w-full max-w-xl p-6 border-2 border-black rounded-[45px] bg-[#e7e9fb] shadow-md gap-4">
                <Image
                    src={session.data?.user?.image || "/profile-image.png"}
                    alt="User Image"
                    width={180}
                    height={180}
                    className="rounded-full pointer-events-none"
                />
                <span className="text-xl font-semibold text-center">
                    {session.data?.user?.name || "You"} (You)
                </span>
            </div>
        </section>
    );

}

export default InterviewBody