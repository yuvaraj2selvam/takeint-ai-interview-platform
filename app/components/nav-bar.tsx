"use client";

import React, {useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import {signOut, useSession} from 'next-auth/react';


const NavBar = () => {
    const session = useSession();

    return (
        <header className='py-6 px-2 items-center flex justify-between'>
            <div className='flex items-center flex-row  gap-2'>
                <Image src={"/take-prep-logo.png"} height={30} width={40} alt='logo'></Image>
                <h2 className='text-2xl font-semibold'>TakeINT</h2>
            </div>
            <div className='flex items-center gap-3.5 flex-row'>
                {
                    session.data?.user ?
                        <>
                            <button type="submit" onClick={async () => await signOut({callbackUrl: "/"})}
                                    className=" flex font-bold gap-2 items-center hover:text-hovercolor  ">
                                <span className="">SignOut</span>
                            </button>
                            <Image src={"/usericon.png"} height={30} width={40} alt='logo'></Image>

                        </> :
                        <>
                            <Link href={"/login"}>LogIn</Link>
                            <Link href={"/signup"}>SignUp</Link>
                        </>
                }
            </div>

        </header>
    )
}

export default NavBar