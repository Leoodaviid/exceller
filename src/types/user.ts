export type UserLoginProps = {
  email: string;
  password: string;
}

export type TUser = {
  id: string;
  name: string;
  image: string;
  email: string;
  role: string;
  emailVerified: Date | null;
  hashedPassword: string | null;
  created_at: Date;
  updatedAt: Date;
}
