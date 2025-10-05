import React, { Fragment } from "react";
import { TravelBanner } from "@/components/auth/travel-banner";
import RegisterForm from "@/components/auth/form-register";

export default function RegisterPage() {
  return (
    <Fragment>
      <TravelBanner />
      <RegisterForm />
    </Fragment>
  );
}
