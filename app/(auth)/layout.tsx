import Image from "next/image";
import LeftImage from "@/public/assets/images/trello-left.svg";
import RightImage from "@/public/assets/images/trello-right.svg";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative w-full h-screen bg-[#f9fafc] overflow-hidden">
      <div className="absolute z-[10] w-[30vw] max-w-[400px] left-0 bottom-0 xs:hidden sm:hidden">
        <Image
          className="align-middle w-full h-full"
          src={LeftImage}
          alt="background right image"
        />
      </div>
      <div className="relative h-full overflow-y-auto">{children}</div>
      <div className="absolute z-[10] w-[30vw] max-w-[400px] right-0 bottom-0 xs:hidden sm:hidden">
        <Image
          className="align-middle w-full h-full"
          src={RightImage}
          alt="background left image"
        />
      </div>
    </div>
  );
};

export default Layout;
