import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Front-End Interview Questions</h1>

        <p className={styles.description}>
          {/* same text as <FullHead> description */}
          Practice TypeScript with flash cards. <br />
          It&apos;s open source, so you can help us writing some flash cards in
          MDX!
        </p>

        <div className={styles.grid}>
          <a href="/typescript" className={styles.card}>
            <h2>TypeScript &rarr;</h2>
            <p>TypeScript interview questions</p>
          </a>

          <div className={styles.soonCard}>
            <h2>JavaScript (soon)</h2>
            <p>JavaScript interview questions</p>
          </div>

          <div className={styles.soonCard}>
            <h2>React (soon)</h2>
            <p>React interview questions</p>
          </div>

          <div className={styles.soonCard}>
            <h2>CSS & HTML (soon)</h2>
            <p>CSS and HTML interview questions</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https:twitter.com/arturcarvalho"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by @arturcarvalho
        </a>
      </footer>
    </div>
  );
};

export default Home;
