import validationModel from '@/model/validationModel'
import Cookie from 'cookie'

export async function POST(req: Request) {
    let { cookies } = await req.json()

    let validation = await validationModel.validateEmployee(cookies);

    if (!validation) {
        let serialized = Cookie.serialize('login', "", {
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