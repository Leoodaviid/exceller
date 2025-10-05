import NewVerifyForm from "@/components/auth/form-verify";
import { Suspense } from "react";

export default function VerifyEmailPage() {
  return (
    <div className="w-full flex justify-center items-center">
      <Suspense fallback={<p>Carregando token...</p>}>
        <NewVerifyForm />
      </Suspense>
    </div>
  );
}
