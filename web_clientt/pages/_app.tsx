import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Header from "components/Header";
import styles from "../styles/App.module.css";

import { store } from "utils/store";
import { Provider } from "react-redux";
import { ProtectRoute } from "components/ProtectRoute";
import Cookies from "universal-cookie";
import Image from "next/image";
export const cookies = new Cookies();
cookies.set("Access-Control-Allow-Credentials", true, { path: "/" });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <ProtectRoute>
        {/* <Header /> */}
        <div className={styles.searchWrapper}>
          <Image
            className={styles.searchIcon}
            width={20}
            height={20}
            src={"/searchIcon.png"}
            alt={"xd"}
          />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
          />
        </div>
        <Component {...pageProps} />
      </ProtectRoute>
    </Provider>
  );
}
