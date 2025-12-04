"use client"

import { SignIn } from "next-auth/react";

export async function loginUser(email: string, password: string) {
  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });
  return res;
}