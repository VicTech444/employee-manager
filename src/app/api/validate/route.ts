import validationModel from '@/model/validationModel'
import Cookie from 'cookie'
import { cookies } from 'next/headers';

export async function POST() {
    let loginCookie = cookies().get('loginEmployee');
    
    let validation = await validationModel.validateEmployee(loginCookie?.value);

    if (!validation) {
        let serialized = Cookie.serialize('loginEmployee', "", {
            maxAge: 0,
            path: '/'
        })

        return Response.json({message: "Error while validation"}, {
            status: 400,
            headers: {
                "Set-Cookie": serialized
            }
        })
    }
    
    return Response.json({ message: "Validation success" })
}