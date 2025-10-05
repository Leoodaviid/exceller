"use client";

import { useSearchParams } from "next/navigation";
import CardWrapper from "./card-wrapper";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/auth/verify";

const NewVerifyForm = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Token inválido!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Algo deu errado!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirmar a verificação"
      backButtonLabel="Voltar ao início de sessão"
      backButtonHref="/auth/login"
      className="lg:w-full"
    >
      <div className="flex flex-col items-center w-full justify-center">
        {!success && !error && <p>Verificando...</p>}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerifyForm;
