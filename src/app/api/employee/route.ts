import employeeModel from '@/model/employeeModel'

export async function GET() {
    let response = await employeeModel.getAllEmployees();

    if (!response) {
        return Response.json({message: "An error has been occured"}, {status: 500})
    }

    return Response.json(response)
}