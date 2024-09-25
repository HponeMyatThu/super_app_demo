import { checkIsAuthenticated } from "@/src/lib/oauth_email/auth/CheckIsAuthenticated";
import DashboardTemplate from "@/src/template/oauth_email/dashboard/DashboardTemplate";
import { redirect } from "next/navigation";

const Dashboard: React.FC = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/auth/sign-in");
  } else {
    return <DashboardTemplate />;
  }
};

export default Dashboard;
