import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "A senha é obrigatório!" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "O Email é obrigatório!" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "O Email é obrigatório!" }),
  password: z.string().min(6, { message: "A senha é obrigatório!" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório!" }),
  email: z.string().email({ message: "O Email é obrigatório!" }),
  password: z.string().min(6, { message: "A senha é obrigatório!" }),
});

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório!" }),
  surname: z.string().min(1, { message: "O sobrenome é obrigatório!" }),
  email: z.string().email({ message: "O Email é obrigatório!" }),
  message: z.string().min(1, { message: "A mensagem é obrigatório!" }),
});

export const NewsSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório!" }),
  surname: z.string().min(1, { message: "O sobrenome é obrigatório!" }),
  email: z.string().email({ message: "O Email é obrigatório!" }),
});
