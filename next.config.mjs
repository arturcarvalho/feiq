import rehypeHighlight from "rehype-highlight";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import mdx from "@next/mdx";

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkSlug, remarkToc],
        rehypePlugins: [rehypeHighlight],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
});

export default withMDX({
    reactStrictMode: true,
    // Append the default value with md extensions
    pageExtensions: ["ts", "tsx", "mdx"],
});