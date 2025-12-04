import { email, z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().min(4).max(30),
  username: z.string().min(4).max(20),
  password: z.string().min(3).max(100)
})

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

