import employeeModel from '@/model/employeeModel'

export async function GET() {
    let response = await employeeModel.getAllEmployees();

    if (!response) {
        return Response.json({ message: "An error has been occured" }, { status: 500 })
    }

    return Response.json(response)
}

export async function POST(req: Request) {
    let response = await employeeModel.getEmployee(req.body);

    if (!response) {
        return Response.json({message: "User was not found"}, {status: 400})
    }

    Response.json({ message: response })
}