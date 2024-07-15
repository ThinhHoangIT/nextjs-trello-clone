import { Metadata } from "next";

import UserAuthForm from "@/components/forms/UserAuthForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Login page",
  description: "Login page for Trello",
};

export default function Page() {
  return (
    <>
      <Logo />
      <UserAuthForm />
    </>
  );
}
