import Header from "../components/Header";
import FullHead from "../components/FullHead";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <FullHead
        // socialImage="index2.png"
        title={"FEIQ: Front-End Interview Questions"}
        description={
          "Front-End Interview Questions. TypeScript, JavaScript, React"
        }
        url="https://www.feiq.org"
      />
      <Header />
      <main className="max-width-container main">{children}</main>
    </div>
  );
};

export default Layout;
