import ResetForm from "@/components/auth/form-reset";
import { TravelBanner } from "@/components/auth/travel-banner";
import { Fragment } from "react";

export default function ResetPage() {
  return (
    <Fragment>
      <TravelBanner />
      <ResetForm />
    </Fragment>
  );
}
