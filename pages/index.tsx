import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

type Props = {
  children?: React.ReactNode;
};

const Soon = ({ children }: Props) => {
  return (
    <div className="m-4 p-6 border bg-neutral-50 border-neutral-200 rounded-lg text-neutral-500">
      {children}
    </div>
  );
};

const ActiveCard = ({ children }: Props) => {
  return <div className="m-4 p-6 bg-sky-50 border rounded-lg">{children}</div>;
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="uppercase font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-600  to-green-400">
          Front-End Interview Questions
        </h1>

        <p className={styles.description}>
          Practice front-end with flash cards
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <ActiveCard>
            <a href="/typescript">
              <h2>TypeScript &rarr;</h2>
              <p>TypeScript interview questions</p>
            </a>
          </ActiveCard>

          <Soon>
            <h2>JavaScript (soon)</h2>
            <p>JavaScript interview questions</p>
          </Soon>

          <Soon>
            <h2>React (soon)</h2>
            <p>React interview questions</p>
          </Soon>

          <Soon>
            <h2>CSS & HTML (soon)</h2>
            <p>CSS and HTML interview questions</p>
          </Soon>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https:twitter.com/arturcarvalho"
          target="_blank"
          rel="noopener noreferrer"
        >
          built by @arturcarvalho
        </a>
      </footer>
    </div>
  );
};

export default Home;
