"use client";

import { useRouter } from "next/navigation";
import { handleSignOut } from "@/src/lib/oauth_email/auth/SignOutServerAction";

export const SignOutButton = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <button
      className={props.className}
      style={{ cursor: "pointer" }}
      onClick={() => handleSignOut()}
    >
      {props.children || "Sign Out"}
    </button>
  );
};
