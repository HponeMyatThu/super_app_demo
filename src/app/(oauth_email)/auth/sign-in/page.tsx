import { checkIsAuthenticated } from "@/src/lib/oauth_email/auth/CheckIsAuthenticated";
import SignInTemplate from "@/src/template/oauth_email/auth/sign-in/SignInTemplate";
import { redirect } from "next/navigation";

const SignIn: React.FC = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    return <SignInTemplate />;
  }
};

export default SignIn;
