interface formProps {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role_id: number;
}

export default function EmployeeList({
  employees,
}: {
  employees: formProps[];
}) {
  return (
    <div className="container mx-auto my-4 p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Phone number</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((emp) => {
              let roleName = emp.role_id === 1 ? 'Employee' : 'Manager';
              return (
                <tr key={emp.email} className="even:bg-gray-100 hover:bg-gray-200">
                  <td className="border px-4 py-2" data-label="Name">
                    {emp.first_name}
                  </td>
                  <td className="border px-4 py-2" data-label="Last Name">
                    {emp.last_name}
                  </td>
                  <td className="border px-4 py-2" data-label="Email Address">
                    {emp.email}
                  </td>
                  <td className="border px-4 py-2" data-label="Phone number">
                    {emp.phone_number}
                  </td>
                  <td className="border px-4 py-2" data-label="Role">
                    {roleName}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}