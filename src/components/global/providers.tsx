"use client";

import React, { Fragment } from "react";
import { Toaster } from "../ui/sonner";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <Fragment>
      <Toaster />
      {children}
    </Fragment>
  );
};

export default Providers;
