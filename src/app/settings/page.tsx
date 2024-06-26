"use client";

import Navbar from "@/components/NavBar";
import Header from "@/components/Header";
import { useHandlePermissions } from "@/hooks/usePermissions";
import UserInformation from "@/components/UserInformation";
import { useHandlePersonalInfo } from "@/react-query-calls/getPersonalInfo";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export default function Settings() {
  const [data, setData] = useState<Props | null>(null);
  const { cookie } = useHandlePermissions();
  const { data: userInfo, error, isLoading } = useHandlePersonalInfo(cookie as string);

  useEffect(() => {
    if (!isLoading && userInfo) {
      setData(userInfo.message[0]);
    }
  }, [userInfo, isLoading]);

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container flex flex-col gap-y-4">
        {isLoading || !userInfo ? (
          <FaSpinner className="h-6 w-6 animate-spin" />
        ) : (
          <UserInformation {...data!} />
        )}
      </div>
    </div>
  );
}