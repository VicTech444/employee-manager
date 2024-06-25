"use client"

import Navbar from "@/components/NavBar";
import Header from "@/components/Header";
import EmployeeList from "@/components/EmployeeList";
import { FaSpinner } from "react-icons/fa";
import { getAllEmployees } from "@/react-query-calls/getAllEmployees";
import { useHandlePermissions } from "@/hooks/usePermissions";

export default function ListEmployee() {
  let { queryEmployees } = getAllEmployees();

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">
          Only administrators can register employees
        </h1>
        {queryEmployees.isLoading ? (
          <FaSpinner className="h-6 w-6 animate-spin" />
        ) : (
          <EmployeeList employees={queryEmployees.data} />
        )}
      </div>
    </div>
  );
}
