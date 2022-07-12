import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import mdx from "@next/mdx";

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight, rehypeSlug],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: "@mdx-js/react",
    },
});

export default withMDX({
    reactStrictMode: true,
    // Append the default value with md extensions
    pageExtensions: ["ts", "tsx", "mdx"],
});