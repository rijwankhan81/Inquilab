import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NextImage from "@/hooks/NextImage";
import Head from "next/head";
export default function Header() {
  const [show, setShow] = useState(false);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/images/logo.jpg"
          type="image/svg+xml"
          data-next-head=""
        ></link>
      </Head>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <NextImage src={"/images/logo.jpg"} alt={""} />
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    About
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    Careers
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    Members
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    Events
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    Blogs
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    Projects
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={styles.btns}>
                <div className={styles.contact}>
                  <Link className={styles.navLink} href="/">
                    Donation
                  </Link>
                </div>
                <div className={styles.hamMenu} onClick={toggleClass}>
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
