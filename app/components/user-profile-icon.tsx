"use server";

import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@radix-ui/react-menubar';
import React from 'react';
import { auth, signOut } from '../(auth-pages)/auth';
import Image from "next/image";
import { SignOutButton } from './sign-out';

const UserProfileIcon = async () => {
    const Session = await auth();

    return (
        Session &&
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <Image
                        src={Session.user?.image ?? "/logo.png"}
                        className="rounded-full object-center"
                        height={40}
                        width={40}
                        alt="user image"
                    />
                </MenubarTrigger>
                <MenubarContent className='bg-gray px-4 py-1.5 min-w-[120px] rounded-sm'>
                    <MenubarItem className='text-dark font-semibold hover:border-0 cursor-pointer'>
                        <SignOutButton />
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default UserProfileIcon;