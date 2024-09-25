"use server";

import { signIn } from "@/src/lib/oauth_email/auth/_AuthConfig";

export const handleAppleSignIn = async () => {
  try {
    console.log("apple sign in");
  } catch (error) {
    throw error;
  }
};
