import { Metadata } from "next";

import UserRegisterForm from "@/components/forms/UserRegisterForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Register page",
  description: "Register page for Trello",
};

export default function Page() {
  return (
    <>
      <Logo />
      <UserRegisterForm />
    </>
  );
}
