import styles from "../styles/SearchBar.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsUnauthorized from "./useIsUnauthorized";

const searchBar = () => {
  const isUnauthorized = useIsUnauthorized();
  //   if (isUnauthorized) return <></>;
  return (
    !isUnauthorized && (
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
    )
  );
};

export default searchBar;
