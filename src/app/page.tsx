"use client"

import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Notification from "../components/Notification";
import { useState } from "react";
import Login from "../components/LogIn";

interface notificationProps {
  type: string;
  message: string;
}

export default function Home() {
  const [notification, setNotification] = useState<notificationProps | null>(
    null,
  );

  return (
    <div>
      <Navbar />
      <Header />
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <div className="container flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-bold text-gray-600">
            Fake employee credentials to ONLY watch your own information <small className="text-xs">(can't edit this info)</small>
          </h1>
          <p className="text-base font-semibold text-gray-600">
            Email: FakeEmployee@gmail.com
          </p>
          <p className="text-base font-semibold text-gray-600">
            Password: ImFake123@#
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}
