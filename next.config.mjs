import rehypeHighlight from "rehype-highlight";
// import javascript from "highlight.js/lib/languages/javascript";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // loader: "@mdx-js/loader",
    remarkPlugins: [],
    rehypePlugins: [
      rehypeHighlight,
      // rehypeHighlight({
      //   languages: {
      //     // requires are needed, imports don't reduce the bundle size.
      //     javascript,
      //   },
      // }),
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "mdx"],
});
