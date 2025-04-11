// app/components/sign-out.tsx
'use client';

import { signOut } from "next-auth/react";

export function SignOutButton() {
    return (
        <button onClick={() => signOut({redirectTo:"/login"})} className="text-dark font-semibold cursor-pointer">
            Sign out
        </button>
    );
}
