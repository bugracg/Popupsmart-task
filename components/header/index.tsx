import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.leftContainer}>
        <Link href="/">
          <Image src="/logo.svg" width="60px" height="60px" />
        </Link>
        <h1 className={styles.logoText}>modal.cards</h1>
        <div className={styles.menu}>
          <span>Solutions</span>
          <span>Product Tour</span>
          <span> Showcase </span>
          <span>Pricing</span>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <button>Sign in</button>
        <button className={styles.tryForFreeButton}>Try for free</button>
      </div>
    </header>
  );
};

export default Header;
