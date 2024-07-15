import Image from "next/image";
import Link from "next/link";

import trelloLogo from "@/public/assets/images/trello-logo.svg";

export const Logo = () => (
  <div className="cursor-pointer pt-10 md:pt-4">
    <Link href={"/"}>
      <Image
        src={trelloLogo}
        alt="logo"
        className="block h-[2.6rem] w-full mb-10 mx-auto md:mb-4"
      />
    </Link>
  </div>
);
