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
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo Electrónico</th>
          <th>Teléfono</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {employees?.map((emp) => {
          let roleName = emp.role_id === 1 ? 'Employee' : 'Manager';
          return (
            <tr key={emp.email}>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone_number}</td>
              <td>{roleName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
