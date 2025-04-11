import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
const MainBanner = () => {
  return (
      <section className="pt-18 pb-20 md:rounded-4xl items-center w-full justify-between flex flex-col-reverse md:flex-row gap-8">
          <div className='flex items-start gap-6 flex-col max-w-[540px]'>
              <div className='flex gap-6 flex-col'>
                  <h2 className='text-left text-5xl leading-[52px] font-semibold'>AI Interview  Practice – Your Ultimate Online Interview Practice ToolTool</h2>
                  <span className='text-left text-sm leading-[28px] lg:text-lg'>Face the toughest mock interviews in the world—rigorous standards, intense questions, and zero room for error. Practice with industry giants and gain the confidence and skills you need to ace any real interview with ease.</span>
              </div>
              <Link href={"/interview"}>
                  <Button className='bg-dark text-2xl text-white cursor-pointer px-10 py-8 hover:text-black hover:bg-white border-black border-[1px]'>Start an Interview</Button>
              </Link>
          </div>
          <Image className='items-end m-w-[400px]  self-end' src={"/robot.png"} height={500} width={620} alt='robot'></Image>
      </section>
  )
}   

export default MainBanner