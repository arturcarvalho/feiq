import Link from "next/link";
import Image from "next/Image";
// import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className="py-6 shadow min-w-full bg-slate-50">
      <div className="lg:w-[1024px] w-full lg:px-0 px-4 m-auto text-md uppercase font-title text-3xl">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image  width="24px" height="24px" src="/logo.svg" alt="logo" />
            <span className="ml-3 text-indigo-400">FEIQ</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
