import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen w-full flex justify-between">{children}</div>;
};

export default AuthLayout;
