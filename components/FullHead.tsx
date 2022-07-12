import Head from "next/head";

interface HeadFields {
  title: string;
  description: string;
  socialImage?: string;
  url: string;
}

// title: the title that shows on google
// description: the summary that shows after the title on google search
function FullHead(fields: HeadFields) {
  const { title, description, url } = fields;

  return (
    <Head>
      {/* cant put the lang here, putting on _document.js */}
      {/* https://github.com/vercel/next.js/issues/20924 */}
      {/* <html lang="en" /> */}
      <link rel="icon" href="/logo.svg" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        name="keywords"
        content="Front-End Interview Questions, JavaScript questions, TypeScript interview questions"
      />
      <meta name="author" content="Artur Carvalho" />
      <meta charSet="UTF-8" />

      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@coderanx" />
      <meta name="twitter:creator" content="@coderanx" />
      <meta
        name="twitter:image"
        content={`https://www.coderanx.com/assets/${socialImage}`}
      /> */}

      {/* Open Graph / Facebook  */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://www.coderanx.com/assets/${socialImage}`}
      /> */}
      <meta property="og:url" content={url} />
    </Head>
  );
}

export default FullHead;
