import { useState, useEffect } from "react";

export type Entry = { title: string; depth: number; id: string };

const useEntries = (selector: string) => {
  // TOC entries
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const tocEntries = nodes.map((node: HTMLElement) => {
      return {
        id: node.id,
        title: node.innerText,
        depth: Number(node.nodeName.slice(1)),
      };
    });
    setEntries(tocEntries);
  }, []);

  return entries;
};

export default useEntries;
