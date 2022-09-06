import Link from "next/link";
// import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className="py-3 bg-slate-50 shadow">
      <div className="max-width-container text-md">
        <Link href="/">Home</Link>
      </div>
    </header>
  );
};

export default Header;
