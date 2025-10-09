"use client";

import React, { Fragment } from "react";
import { Toaster } from "sonner";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <Fragment>
      <Toaster richColors theme="dark" position="bottom-center" />
      {children}
    </Fragment>
  );
};

export default Providers;
