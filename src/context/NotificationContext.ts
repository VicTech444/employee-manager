import { createContext } from "react";

interface notifyProps {
    type: string;
    message: string;
  }

interface notifyContext {
    notification: notifyProps | null;
    setNotification: (newNotification: notifyProps | null) => void
  }

export const NotifyContext = createContext<notifyContext | null>(null);