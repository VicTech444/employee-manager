"use client";

import Navbar from "@/components/NavBar";
import Header from "@/components/Header";
import { useHandlePermissions } from "@/hooks/usePermissions";
import UserInformation from "@/components/UserInformation";
import { useHandlePersonalInfo } from "@/react-query-calls/getPersonalInfo";
import { FaSpinner } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";

interface Props {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export default function Settings() {
  const { cookie } = useHandlePermissions();
  const userInformation = useHandlePersonalInfo(cookie as string);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        {!userInformation ? (
          <h1>No content available</h1>
        ) : userInformation.isLoading ? (
          <FaSpinner className="h-6 w-6 animate-spin" />
        ) : (
          <UserInformation {...userInformation.data} />
        )}
      </div>
    </div>
  );
}
