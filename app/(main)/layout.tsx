import WebAppexFooter from "@/components/footer";
import { WebAppexNavbar } from "@/components/navbar/webappex-navbar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <WebAppexNavbar />
      <main className="flex flex-col min-h-screen">{children}</main>
      <WebAppexFooter />
    </>
  );
};

export default RootLayout;
