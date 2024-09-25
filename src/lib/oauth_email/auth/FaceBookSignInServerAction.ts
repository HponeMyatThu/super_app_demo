"use server";

import { signIn } from "@/src/lib/oauth_email/auth/_AuthConfig";

export const handleFacebookSignIn = async () => {
  try {
    await signIn("facebook", {
      redirectTo: "/dashboard",
    });
  } catch (error) {
    throw error;
  }
};
