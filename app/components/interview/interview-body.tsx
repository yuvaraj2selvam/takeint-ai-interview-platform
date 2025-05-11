"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";


const InterviewBody = () => {

    const session = useSession();

    return (
        <section className="flex items-center justify-center gap-x-5 z-60">
            <div className="flex w-full max-w-xl bg-[#e7e9fb] flex-col items-center justify-center border-2 gap-y-4 border-black py-10 p-4 rounded-[50px]">
                <div className="relative flex items-center justify-center w-[240px] h-[240px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-20 -translate-y-1/2 w-[120px] h-[120px] bg-[#f78c74] bg-opacity-45 rounded-full animate-ping"></div>
                    <Image
                        className=" rounded-full p-4 z-50"
                        src="/robot-orange.png"
                        height={240}
                        width={240}
                        alt="ai image"
                    />
                </div>
                <span className="text-xl font-semibold">AI Interviewer</span>
            </div>
            <div className="flex w-full max-w-xl bg-[#e7e9fb] flex-col items-center justify-center border-2 gap-y-4 border-black py-10 p-4 rounded-[50px]">
                <Image className="rounded-full"
                    src={session.data?.user?.image || "/profile-image.png"}
                    height={240}
                    width={240}
                    alt="ai image"
                />
                <span className="text-xl font-semibold">{session.data?.user?.name || ""} (You)</span>
            </div>
        </section>
    )
}

export default InterviewBody