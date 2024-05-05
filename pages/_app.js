import Layout from "@/layout/Layout";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);