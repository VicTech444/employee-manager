import employeeModel from '@/model/employeeModel'

export async function GET() {
    let response = await employeeModel.getAllEmployees();

    if (!response) {
        return Response.json({ message: "An error has been occured" }, { status: 500 })
    }

    return Response.json(response)
}

export async function POST(req: Request) {
    let {email, userName, role} = await req.json()
    let response = await employeeModel.getEmployee({email, userName, role});

    if (!response) {
        return Response.json({message: "User was not found"}, {status: 400})
    }

    return Response.json({ message: response })
}