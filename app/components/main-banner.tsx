import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
const MainBanner = () => {
  return (
      <section className="bg-gradient-to-b  from-[#171532] to-[#08090D] mt-14 pt-6 px-2 pb-6 md:p-10 md:rounded-4xl  items-center max-h-320 w-full justify-around flex flex-col-reverse md:flex-row gap-y-5">
          <div className='flex items-center gap-4 flex-col'>
              <div className='flex gap-6 flex-col'>
                  <h2 className='text-center text-4xl font-bold'>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                  <span className='text-center text-sm lg:text-lg'>Practice real interview questions & get instant feedback.</span>
              </div>
              <Link href={"/interview"}>
                  <Button className='primary-button'>Start an Interview</Button>
              </Link>
          </div>
          <Image className='m-w-[400px] items-center self-baseline' src={"/robot.png"} height={300} width={400} alt='robot'></Image>
      </section>
  )
}

export default MainBanner