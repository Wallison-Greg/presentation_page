import type { AppProps } from "next/app";

//estilos globais
import "../styles/global.scss"

//components
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}
