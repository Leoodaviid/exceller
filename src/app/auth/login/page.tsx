import React, { Fragment } from "react";
import FormLogin from "../../../components/auth/form-login";
import { TravelBanner } from "@/components/auth/travel-banner";

export default function LoginPage() {
  return (
    <Fragment>
      <TravelBanner />
      <FormLogin />
    </Fragment>
  );
}
