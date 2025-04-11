import {NextResponse} from "next/server";
import type {NextRequest} from "next/server"


const path = [ "/interview", /^\/interview\/.*$/];

export function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    if (path.includes(pathName)) {
        const token = request.cookies.get("authjs.session-token");
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.nextUrl))
        }
    }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};


