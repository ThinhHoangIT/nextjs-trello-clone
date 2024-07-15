"use client";

import { useState, useCallback } from "react";
import { UserInfor } from "@/types/types";
import Link from "next/link";

const LoginForm = ({
  userInfor,
  setUserInfor,
  handleSubmit,
}: {
  userInfor: UserInfor;
  setUserInfor: React.Dispatch<React.SetStateAction<UserInfor>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => (
  <form
    onSubmit={handleSubmit}
    className="flex flex-col w-80 justify-center items-center gap-4 md:gap-2.5"
  >
    <h1 className="text-[#5e6c84] text-base p-4 font-semibold">
      Log in to Trello
    </h1>
    <input
      type="email"
      placeholder="Enter email"
      required
      value={userInfor.email}
      onChange={(e) =>
        setUserInfor({
          ...userInfor,
          email: e.target.value,
        })
      }
      className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-transparent focus:bg-white focus:border-[#68bcff] transition-all"
    />
    <input
      type="password"
      placeholder="Enter password"
      required
      value={userInfor.password}
      onChange={(e) =>
        setUserInfor({
          ...userInfor,
          password: e.target.value,
        })
      }
      className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-[#fafbfc] focus:bg-white focus:border-[#68bcff] transition-all"
    />
    <button
      type="submit"
      className="bg-[#5aac44] w-full rounded-md p-2 text-white font-bold hover:bg-gradient-to-b from-[#61bd4f] to-[#5aac44]"
    >
      Log in
    </button>
    <hr className="w-full block h-px border-0 border-t border-gray-300 my-2" />
    <Link className="text-[#0052cc] cursor-pointer text-sm" href={"/sign-up"}>
      Sign up for an account
    </Link>
  </form>
);

const UserAuthForm: React.FC = () => {
  const [userInfor, setUserInfor] = useState<UserInfor>({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(userInfor);
    },
    [userInfor]
  );

  return (
    <>
      <section className="block break-words">
        <div className="box-border block max-w-md w-fit mx-auto relative bg-white rounded-md px-10 py-6 shadow-xl sm:max-w-full sm:w-full md:shadow-none md:bg-[#F9FAFC] md:flex md:items-center md:justify-center sm:h-full md:p-2">
          <LoginForm
            userInfor={userInfor}
            setUserInfor={setUserInfor}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </>
  );
};

export default UserAuthForm;
