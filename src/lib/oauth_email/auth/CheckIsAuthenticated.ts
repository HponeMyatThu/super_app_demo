"use server";

import { auth } from "@/src/lib/oauth_email/auth/_AuthConfig";

export const checkIsAuthenticated = async () => {
  const session = await auth();
  if (session) {
    return true;
  } else {
    return false;
  }
};
