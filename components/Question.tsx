import styles from "../styles/Question.module.css";
import React from "react";

type Props = {
  children?: React.ReactNode;
  slug: string;
};

export function Title({ children, slug }: Props) {
  return (
    <h3 className={styles.title}>
      {children} <a className={styles.slug} href={`#${slug}`}>#</a>
    </h3>
  );
}

export function Answer({ children }: Props) {
  return (
    <details className={styles.answer}>
      <div className={styles.body}>{children}</div>
      <summary className={styles.summary}>Answer</summary>
    </details>
  );
}

export function Question({ children, slug }: Props) {
  const childrenWithProps = React.Children.map(children, (child) => {
    // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { slug });
    }
    return child;
  });
  return (
    <article className={styles.question} id={slug}>
      {childrenWithProps}
    </article>
  );
}
