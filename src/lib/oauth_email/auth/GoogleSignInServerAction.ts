"use server";

import { signIn } from "@/src/lib/oauth_email/auth/_AuthConfig";

export const handleGoogleSignIn = async () => {
  try {
    await signIn("google", {
      redirectTo: "/dashboard",
    });
  } catch (error) {
    throw error;
  }
};
