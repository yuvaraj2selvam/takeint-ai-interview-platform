import {NextResponse} from "next/server";
import type {NextRequest} from "next/server"


const path = ["/", "/interview", /^\/interview\/.*$/];

export function middleware(request: NextRequest) {
    // const pathName = request.nextUrl.pathname;
    // if (path.includes(pathName)) {
    //     const token = request.cookies.get("next-auth.session-token");
    //     if (!token) {
    //         return NextResponse.redirect(new URL("/login", request.nextUrl))
    //     }
    // }
}


