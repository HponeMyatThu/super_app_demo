"use server";

import { signOut } from "@/src/lib/oauth_email/auth/_AuthConfig";

export const handleSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};
