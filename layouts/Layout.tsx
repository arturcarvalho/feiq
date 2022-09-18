import Header from "../components/Header";
import Footer from "../components/Footer";
import FullHead from "../components/FullHead";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <FullHead
        // socialImage="index2.png"
        title={"FEIQ: Front-End Interview Questions"}
        description={
          "Practice Front-End with flash cards. Anyone is welcome to add flash card!"
        }
        url="https://www.feiq.org"
      />

      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
