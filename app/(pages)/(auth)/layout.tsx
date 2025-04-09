import { google } from "@ai-sdk/google";
import "../../globals.css";
import Image from "next/image";

import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-grotesk',
})

export const metadata = {
    title: 'Take Interview',
    description: 'AI Interview Platform',
}



export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${grotesk.variable} h-full w-full`}>
            <body className="bg-[#FFFFFF] h-full w-full">
                {children}
            </body>
        </html>
    )
}
