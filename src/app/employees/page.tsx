"use client"

import Navbar from "@/components/NavBar";
import Header from "@/components/Header";
import EmployeeList from "@/components/EmployeeList";
import { FaSpinner } from "react-icons/fa";
import { useAllEmployees } from "@/react-query-calls/getAllEmployees";

export default function ListEmployee() {
  let { queryEmployees } = useAllEmployees();

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold">
          Only administrators can register employees
        </h1>
        {queryEmployees.isFetching ? (
          <FaSpinner className="h-6 w-6 animate-spin" />
        ) : (
          <EmployeeList employees={queryEmployees.data} />
        )}
      </div>
    </div>
  );
}
