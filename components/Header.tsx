import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="max-width-container">
        <h2>
          <Link href="/">Home</Link>
        </h2>
        <ul>
          {/* <li>
            <Link href="/javascript">JavaScript</Link>
          </li> */}
          <li>
            <Link href="/typescript">TypeScript</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
