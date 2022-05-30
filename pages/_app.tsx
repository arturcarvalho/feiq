import "highlight.js/styles/github.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
