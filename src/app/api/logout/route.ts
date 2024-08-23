import Cookie from 'cookie'

export async function POST() {
    const isProduction = process.env.NODE_ENV === 'production';

    let serialized = Cookie.serialize('loginEmployee', "", {
        maxAge: 0,
        path: '/',
        httpOnly: isProduction,
        secure: isProduction
    })
    
    return Response.json({message: "Logged succesfully"}, {
        headers: {
            "Set-Cookie": serialized
        }
    })
}