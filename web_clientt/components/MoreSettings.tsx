import styles from "../styles/MoreSettings.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsUnauthorized from "./useIsUnauthorized";

function MoreSettings() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const isUnauthorized = useIsUnauthorized();

  // if (isUnauthorized) return <></>;

  return (
    !isUnauthorized && (
      <div className={styles.moreSettingsWrapper}>
        <Image
          className={styles.moreIcon}
          width={20}
          height={20}
          src={"/moreIcon.png"}
          alt={"xd"}
          onClick={() => toggleDropdown()}
        />
        {dropdownOpen && (
          <div
            className={styles.dropdown}
            onMouseLeave={() => toggleDropdown()}
          >
            <ul>
              <li>
                <Link href="/concept1" onClick={() => toggleDropdown()}>
                  Concepts
                </Link>
              </li>
              <li>
                <Link href="/uploadQuestion" onClick={() => toggleDropdown()}>
                  Upload Question
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  );
}

export default MoreSettings;
