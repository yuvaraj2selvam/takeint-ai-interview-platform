"use server";

import React from 'react';
import Image from "next/image";
import AuthForm from '@/app/components/auth-form';
import AuthHeader from '@/app/components/auth-header';


const formItems = [
    { name: "Email", type: "email", placeHolder: "enter your email" },
    { name: "Password", type: "password", placeHolder: "enter your password" },
]


const SignInPage = async () => {
    return (
        <article className='bg-gray flex items-center gap-5 flex-col justify-center h-full'>
            <AuthHeader />
            <div className='w-2xs md:w-md'>
                <AuthForm formItems={formItems} type='LOGIN' />
            </div>
        </article>
    )
}

export default SignInPage