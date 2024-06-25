"use client"

import Navbar from "@/components/NavBar";
import Header from "@/components/Header";
import EmployeeForm from "@/components/EmployeeForm";
import Notification from "@/components/Notification";
import { useState } from "react";
import { NotifyContext } from "@/context/NotificationContext";
import { notifyProps } from "@/interfaces/interfaces";
import { useHandlePermissions } from "@/hooks/usePermissions";

export default function AddEmployee() {
  const [notification, setNotification] = useState<notifyProps | null>(null);
  useHandlePermissions();

  return (
    <div>
      <Navbar />
      <Header />
      <NotifyContext.Provider
        key={notification?.type}
        value={{ notification, setNotification }}
      >
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}
        <div className="container">
          <EmployeeForm />
        </div>
      </NotifyContext.Provider>
    </div>
  );
}
