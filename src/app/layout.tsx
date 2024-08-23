"use client";

import { Inter } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import React from "react";
import { queryClient } from "@/react-query-calls/queryClient";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
