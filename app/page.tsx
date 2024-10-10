
import NavbarBlack from "./components/navbar-black";
import AlertTitle1 from "./components/alert";
import Resizable122 from "./components/resizable";
import Link from "next/link";
import Table from "./components/table";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black">
      <NavbarBlack />
      <AlertTitle1 />
      <div className="items-center flex flex-col text-center ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          All Features Unlocked !!!
        </h1>
        <h2 className="scroll-m-20 text-yellow-400 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Take Pictures With No Limit
    </h2>
    <div className="pt-12">
      <a href="./public/oldrollv0122991.apk" download className=" px-8 py-2 bg-white rounded-sm text-l text-black">Download</a>
    </div>
      </div>
      <div className="items-center flex-col px-36 py-12 hidden lg:block">
      <Resizable122 />
      </div>
      <div className="px-12 lg:px-32">
        <Table />
      </div>
      <footer className="px-8 py-4 border-t border-white space-x-4">
        <Link href="/terms">
          Terms & Conditions
        </Link>
        <Link href="/contact">
        Contact Us
        </Link>
      </footer>
    </div>
  );
}
