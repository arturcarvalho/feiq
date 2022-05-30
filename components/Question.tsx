import styles from "../styles/Question.module.css";

type Props = {
  children?: React.ReactNode;
};

export function Title({ children }: Props) {
  return <h3>{children}</h3>;
}

export function Answer({ children }: Props) {
  return (
    <details className={styles.answer}>
      <div className={styles.body}>{children}</div>
      <summary className={styles.summary}>Answer</summary>
    </details>
  );
}

export function Question({ children }: Props) {
  return <article className={styles.question}>{children}</article>;
}
