import styles from "../styles/MoreSettings.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function MoreSettings() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
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
        <div className={styles.dropdown} onMouseLeave={() => toggleDropdown()}>
          <ul>
            <li>
              <Link href="/concepts" onClick={() => toggleDropdown()}>
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
  );
}

export default MoreSettings;
