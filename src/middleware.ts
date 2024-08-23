import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers";
import { jwtVerify } from 'jose';
import cookieNPM from 'cookie'

export const middleware = async (req: NextRequest) => {
    let cookie = cookies()
    let jwtCookie = cookie.get('login');
    let { pathname } = req.nextUrl

    let protectedRoutes = ["/employees", "/settings", "/add-employee"];
    
    if (protectedRoutes.includes(pathname)) {    
        if (!jwtCookie) {
            return NextResponse.redirect(new URL('/', req.url))
        }

        try {
            let validate = await jwtVerify(jwtCookie.value, new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET));            
            if (pathname === '/employees' || pathname === '/add-employee') {
                let { role } = validate.payload

                if (role == 1) {
                    return NextResponse.redirect(new URL('/settings', req.url))
                }
            }

        } catch (error) {            
            let serialCookie = cookieNPM.serialize("login", "invalid login cookie", {
                maxAge: 0
            })
            return NextResponse.redirect(new URL('/', req.url), {
                headers: {
                    "Set-Cookie": serialCookie
                }
            })
        }
    }

    return NextResponse.next();
}