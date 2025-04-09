"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const AuthHeader = () => {
    const pathname = usePathname()
    const isSignUpSelected = pathname === '/signup'

    return (
        <section className='flex flex-col text-dark gap-5 items-center justify-center w-full max-w-md p-3'>
            <div className='text-center flex flex-col gap-1'>
                <h2 className=' font-semibold text-xl md:text-2xl'>Log in to your account</h2>
                <p className='text-sm md:text-[16px]'>Welcome back! Please Enter your details.</p>
            </div>
            <div className="flex flex-row items-center justify-center w-full text-center">
                <Link href="/signup" className="flex-1">
                    <div className={`w-full border-none py-2 rounded-tl-3xl rounded-br-2xl-2xl font-semibold  ${isSignUpSelected ? "btn-select" : "btn-deselect"}`}>
                        Sign up
                    </div>
                </Link>

                <Link href="/login" className="flex-1">
                    <div className={`w-full border-none py-2 rounded-br-3xl font-semibold  ${!isSignUpSelected ? "btn-select" : "btn-deselect"}`}>
                        Log in
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default AuthHeader