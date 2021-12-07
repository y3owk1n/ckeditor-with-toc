import Head from "next/head";
import "../styles/editor.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CK Editor + Level 1 & 2 TOC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
