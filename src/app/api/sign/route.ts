import { signEmployeeCredentials } from "@/schema/signEmployee";
import signEmployeeModel from '@/model/signEmployeeModel'


export async function POST(req: Request) {
    let { firstName, lastName, email, phone, password, roleId } = await req.json()
    let newData = await signEmployeeCredentials({ firstName, lastName, email, phone, password, roleId });

    if (!newData.success) {
        return Response.json({message: newData.error.message}, {status: 400})
    }

    let response = await signEmployeeModel.signEmployee(newData.data);

    if (!response) {
        return Response.json({message: "An error has been occured while creating the user"}, {status: 500});
    }

    return Response.json({message: "User created succesfully"}, {status: 200})
}