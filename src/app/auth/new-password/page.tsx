import NewPasswordForm from "@/components/auth/form-new-password";
import { TravelBanner } from "@/components/auth/travel-banner";
import { Fragment, Suspense } from "react";

export default function NewPasswordPage() {
  return (
    <Fragment>
      <TravelBanner />
      <Suspense fallback={<p>Carregando token...</p>}>
        <NewPasswordForm />
      </Suspense>
    </Fragment>
  );
}
