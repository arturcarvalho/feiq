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
      className="block p-6 hover:bg-slate-700 hover:ease-in duration-300 lg:rounded-xl bg-slate-900 text-indigo-300 text-2xl"
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
          <div className="flex lg:w-[1024px] mx-auto my-12">
            <h1 className="px-4 text-left font-title uppercase leading-12 font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400">
              Front-End <br />
              Interview
              <br />
              Questions
            </h1>

            <p className="pl-24 py-3 text-3xl italic text-indigo-100">
              Practice front-end interview questions with flash cards.
              <br />
              <br />
              It&apos;s open source, you can add some <a href="https://github.com/arturcarvalho/feiq">questions on github</a>
            </p>
          </div>
        </div>

        <div className="lg:w-[1024px] w-full mt-8 mx-auto grid grid-cols-2 gap-6">
          <ActiveCard link="/typescript">
            <h2>TypeScript &rarr;</h2>
            {/* <p>TypeScript interview questions</p> */}
          </ActiveCard>

          <Soon>
            <h2>JavaScript - soon</h2>            
          </Soon>

          <Soon>
            <h2>React - soon</h2>
          </Soon>

          <Soon>
            <h2>CSS & HTML - soon</h2>            
          </Soon>
        </div>
      </main>
    </div>
  );
};

export default Home;
