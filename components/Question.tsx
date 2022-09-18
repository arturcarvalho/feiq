import React from "react";

type Props = {
  children?: React.ReactNode;
  slug: string;
};

export function Title({ children, slug }: Props) {
  return (
    <h3 className="px-4 py-2 text-xl font-medium text-slate-200">
      {children} <a className="text-indigo-300" href={`#${slug}`}>#</a>
    </h3>
  );
}

export function Answer({ children }: Props) {
  return (
    <details className="bg-code rounded-b-lg text-indigo-300 font-semibold mt-2 border-t-4 border-white -m-4 cursor-pointer">
      <summary className="px-8 py-4 text-indigo-300">Answer</summary>
      <div className="px-8 py-4 text-indigo-100">{children}</div>
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
    <article className="border border-slate-200 rounded-lg text-lg bg-code p-4 my-8" id={slug}>
      {childrenWithProps}
    </article>
  );
}