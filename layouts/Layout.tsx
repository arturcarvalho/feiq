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
          "Practice TypeScript with flash cards. It's open source, so you can help us writing some flash cards in MDX!"
        }
        url="https://www.feiq.org"
      />
      <Header />
      <main className="max-width-container main">{children}</main>
    </div>
  );
};

export default Layout;
