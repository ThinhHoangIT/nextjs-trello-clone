"use client";

import { useState } from "react";
import Link from "next/link";

const UserRegisterForm = () => {
  const [userInformations, setUserInformations] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="block break-words">
        <div className="box-border  block max-w-md w-fit mx-auto relative bg-white rounded-md px-10 py-6 shadow-xl sm:max-w-full sm:w-full md:shadow-none md:bg-[#F9FAFC] md:flex md:items-center md:justify-center sm:h-full md:p-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-80 justify-center items-center gap-4 md:gap-3"
          >
            <h1 className="text-[#5e6c84] text-xl p-4">
              Sign up for your account
            </h1>
            <input
              type="text"
              placeholder="Enter name"
              required
              value={userInformations.name}
              onChange={(e) =>
                setUserInformations({
                  ...userInformations,
                  name: e.target.value,
                })
              }
              className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-[#fafbfc] focus:bg-white focus:border-[#68bcff] transition-all"
            />
            <input
              type="text"
              placeholder="Enter surname"
              required
              value={userInformations.surname}
              onChange={(e) =>
                setUserInformations({
                  ...userInformations,
                  surname: e.target.value,
                })
              }
              className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-[#fafbfc] focus:bg-white focus:border-[#68bcff] transition-all"
            />
            <input
              type="email"
              placeholder="Enter email"
              required
              value={userInformations.email}
              onChange={(e) =>
                setUserInformations({
                  ...userInformations,
                  email: e.target.value,
                })
              }
              className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-[#fafbfc] focus:bg-white focus:border-[#68bcff] transition-all"
            />
            <input
              type="password"
              placeholder="Enter password"
              required
              value={userInformations.password}
              onChange={(e) =>
                setUserInformations({
                  ...userInformations,
                  password: e.target.value,
                })
              }
              className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-[#fafbfc] focus:bg-white focus:border-[#68bcff] transition-all"
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={userInformations.repassword}
              onChange={(e) =>
                setUserInformations({
                  ...userInformations,
                  repassword: e.target.value,
                })
              }
              className="w-full outline-none text-sm rounded-md p-2 border-2 border-[#dfe1e6] bg-[#fafbfc] focus:bg-white focus:border-[#68bcff] transition-all"
            />
            <p className="text-xs text-[#5e6c84] leading-4">
              By signing up, you confirm that you&apos;ve read and accepted our{" "}
              <a href="#" className="text-[#0052cc]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#0052cc]">
                Privacy Policy
              </a>
              .
            </p>
            <button
              type="submit"
              className="bg-[#5aac44] w-full rounded-md p-2 text-white font-bold cursor-pointer hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Complete
            </button>
            <hr className="w-full h-px border-0 border-t border-gray-300 my-2" />
            <Link
              href={"/sign-in"}
              className="text-sm text-[#0052cc] cursor-pointer"
            >
              Already have an account? Log In
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserRegisterForm;
