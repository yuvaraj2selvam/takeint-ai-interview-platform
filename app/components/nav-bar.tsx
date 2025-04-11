"use server";

import Link from "next/link";
import { auth } from "../(auth-pages)/auth";
import UserProfileIcon from "./user-profile-icon";



const NavBar = async () => {

    const Session = await auth();

    return (
        <header className='h-24 w-full sticky top-0 z-100 bg-white  items-center flex justify-between'>
            <div className="mr-auto">
                <h1 className="text-4xl font-semibold">TakeInt</h1>
            </div>
            <div className="flex items-center gap-10 flex-row">
                {
                    !Session &&
                    <>
                        <Link href={"/login"} >
                            <div className="nav-btn">
                                Sign in
                            </div>
                        </Link>
                        <Link href={"/signup"} >
                            <div className="nav-btn">
                                Sign up
                            </div>
                        </Link>
                    </>
                }
                {
                    Session &&
                    <>
                        <Link href={"/interview"} className="nav-btn">Dashboard</Link>
                        <Link href={"/interview"} className="nav-btn">Pricing</Link>

                        <>
                            {
                                Session?.user?.image
                                    ? <UserProfileIcon />
                                    : <div className="h-[14px] w-[14px] bg-fuchsia-200"></div>
                            }

                        </>


                    </>
                }
            </div>

        </header>
    )
}

export default NavBar
