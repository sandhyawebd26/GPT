import '@/styles/globals.css';
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);