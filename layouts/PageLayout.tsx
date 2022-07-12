import styles from "../styles/PageLayout.module.css";
import useActiveHeading from "../lib/useActiveHeading";
import useEntries from "../lib/useEntries";

type Props = {
  children?: React.ReactNode;
};

// https://www.emgoto.com/react-table-of-contents/

const PageLayout = ({ children }: Props) => {
  const selector = "main h2"; // Could be "main h2, main h3"
  const activeId = useActiveHeading(selector);

  const entries = useEntries(selector);

  return (
    <div className={styles.cols}>
      <div className={styles.left}>{children}</div>
      <nav aria-label="Table of Contents" className={styles.right}>
        <ul>
          {entries.map((e) => (
            <li key={e.id} className={activeId === e.id ? styles.active : ""}>
              <a
                href={`#${e.id}`}
                onClick={(evt) => {
                  evt.preventDefault();

                  document
                    .querySelector(`#${e.id}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PageLayout;
