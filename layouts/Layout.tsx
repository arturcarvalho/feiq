import Header from "../components/Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="max-width-container main">{children}</main>
    </div>
  );
};

export default Layout;
