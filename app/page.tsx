import IndexNav from "@/components/IndexNav";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Landing page",
  description: "Landing page for Trello",
};

export default function IndexPage() {
  return (
    <>
      <IndexNav />
      <div className="bg-gradient-to-b from-[#eae6ff] to-[#ffffff] text-[#091e42] w-full flex justify-center">
        <section className="flex min-h-screen pt-16 flex-row items-center justify-center gap-[10%] lg:flex-col-reverse lg:pt-24 lg:items-stretch lg:gap-[5%]">
          <div className="box-border flex-1">
            <div className="w-[39rem] flex flex-col items-end sm:w-[19rem] sm:items-center">
              <h1 className="text-5xl font-semibold sm:text-1.5xl sm:text-center">
                Trello helps teams move work forward.
              </h1>
              <h3 className="mt-2 font-sans text-[1.3rem] text-left leading-[1.5] sm:text-[1rem] sm:text-center sm:px-12">
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </h3>
              <Link
                className="mt-8 text-[1.25rem] bg-[#0065ff] w-fit rounded-md px-8 py-3 text-white border-none cursor-pointer hover:bg-[#0952cc] lg:mt-6 lg:w-full"
                href="/sign-up"
              >
                Sign up - it&apos;s free
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:max-h-[300px]">
            <Image
              src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp"
              alt="Hero"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[400.5px] aspect-[auto_465.5_/_602.5] h-[540.5px] max-w-[unset]   lg:w-[300px] lg:h-[272px]"
            />
          </div>
        </section>
      </div>
    </>
  );
}
