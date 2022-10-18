import type { NextPage } from "next";

type Props = {
  children?: React.ReactNode;
};

type ActiveProps = {
  children?: React.ReactNode;
  link: string;
};

const Soon = ({ children }: Props) => {
  return (
    <div className="p-6 border bg-slate-200 lg:rounded-xl text-slate-400 italic">
      {children}
    </div>
  );
};

const ActiveCard = ({ children, link }: ActiveProps) => {
  return (
    <a
      href={link}
      className="block p-6 hover:bg-slate-700 hover:ease-in duration-300 lg:rounded-xl bg-slate-900 text-indigo-300 lg:text-2xl text-md"
    >
      {children}
    </a>
  );
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col">
        <div className="bg-slate-900">
          <div className="flex lg:w-[1024px] mx-auto lg:my-12 my-4 lg:flex-nowrap flex-wrap lg:justify-start justify-center">
            <h1 className="px-4 lg:text-left text-center font-title uppercase leading-12 font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400">
              Front-End <br />
              Interview
              <br />
              Questions
            </h1>

            <p className="lg:pl-24 px-2 py-3 text-3xl italic text-indigo-100 text-center">
              Practice front-end interview questions with flash cards.
              <br />
              <br />
              It&apos;s open source, you can add some <a href="https://github.com/arturcarvalho/feiq">questions on github</a>
            </p>
          </div>
        </div>

        <div className="lg:w-[1024px] w-full mt-8 mx-auto grid grid-cols-2 gap-2 lg:gap-6">
          <ActiveCard link="/typescript">
            <h2 className="lg:text-3xl text-2xl">TypeScript &rarr;</h2>
            {/* <p>TypeScript interview questions</p> */}
          </ActiveCard>

          <Soon>
            <h2 className="lg:text-3xl text-2xl">JavaScript - soon</h2>            
          </Soon>

          <Soon>
            <h2 className="lg:text-3xl text-2xl">React - soon</h2>
          </Soon>

          <Soon>
            <h2 className="lg:text-3xl text-2xl">CSS & HTML - soon</h2>            
          </Soon>
        </div>
      </main>
    </div>
  );
};

export default Home;
