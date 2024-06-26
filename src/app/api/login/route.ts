import { validateEmployeeCredentials } from "@/schema/logEmployee";
import LoginEmployeeModel from '@/model/loginEmployeeModel'
import Cookies from 'cookie'

export async function POST(req: Request, res: Response) {
    let { email, password } = await req.json();

    let newData = await validateEmployeeCredentials({ email, password });

    if (!newData.success) {
        console.log(newData.error)
        return Response.json({ message: newData.error.message }, {
            status: 400
        })
    }

    let response = await LoginEmployeeModel.logEmployee(newData.data);

    if (!response) {
        return Response.json({ message: "Invalid credentials" }, {
            status: 400
        })
    }

    const isProduction = process.env.NODE_ENV === 'production';

    let serialized = Cookies.serialize('login', response, {
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
        httpOnly: isProduction,
        secure: isProduction,
    })

    return Response.json({ message: "Logged succesfully" }, {
        headers: {
            "Set-Cookie": serialized
        }
    })
}
