import React from "react";
import { SignInButton } from "@/src/components/oauth_email/sign-in-button";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div>
        <SignInButton className="signin-button" />
      </div>
    </div>
  );
};

export default HomePage;
