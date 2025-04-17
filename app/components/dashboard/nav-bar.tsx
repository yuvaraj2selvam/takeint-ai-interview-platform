


import React from 'react'
import UserProfileIcon from "../auth/user-profile-icon";
import { auth } from '@/app/(auth-pages)/auth';
import TabBar from './tab-bar';
import Link from 'next/link';





const DashboardNavBar = async() => {

    const session =await auth();

  return (
      <div className='py-10 flex flex-row justify-between z-10'>
          <Link href={"/"}>
              <h3 className='text-3xl hover:bg-green border-[1px] border-black rounded-3xl px-3 py-2.5 font-semibold flex items-center'><span className='font-bold text-4xl'>T</span>akeInt</h3>
          </Link>
          <div className='flex flex-row items-center gap-2.5'>
              <TabBar/>
              <UserProfileIcon/>
          </div>
    </div>
  )
}

export default DashboardNavBar