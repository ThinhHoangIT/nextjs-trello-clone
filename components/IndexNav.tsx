import Image from "next/image";
import Link from "next/link";
import trelloLogo from "@/public/assets/images/trello-logo.svg";

const IndexNav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent h-16 flex items-center justify-between p-4 z-100 lg:justify-between">
      <Link href="/">
        <Image
          src={trelloLogo}
          alt="logo"
          className="ml-4 lg:ml-0 cursor-pointer"
        />
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/sign-in"
          className="underline cursor-pointer text-[#0952cc]"
        >
          Log in
        </Link>
        <Link
          href="/sign-up"
          className="bg-[#0065ff] rounded-md px-4 py-2 text-white border-none cursor-pointer hover:bg-[#0952cc]"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default IndexNav;
