import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
