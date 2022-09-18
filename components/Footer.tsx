import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center py-4 mt-16 border-t border-gray-200 w-full">
      <Link href="/">home</Link>
      &nbsp; - &nbsp;
      <a
        href="https://twitter.com/arturcarvalho"
        target="_blank"
        rel="noopener noreferrer"
      >
        started by @arturcarvalho
      </a>
    </footer>
  );
}
