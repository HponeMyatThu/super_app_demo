"use server";

import { auth } from "@/src/lib/oauth_email/auth/_AuthConfig";

export const getUserName = async () => {
  const session = await auth();
  if (session) {
    return session?.user?.name!;
  }
};
