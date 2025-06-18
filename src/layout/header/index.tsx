import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NextImage from "@/hooks/NextImage";
import Head from "next/head";
import LanguageSwitcher from "@/modules/languageSwitch";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import useLanguage from "@/hooks/useLanguage";
import { FaXTwitter } from "react-icons/fa6";
export default function Header() {
  const [show, setShow] = useState(false);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };

  const { t } = useTranslation();

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
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
        <div className={styles.top}>
          <Container>
            <div className={styles.topWrapper}>
              <div className={styles.social}>
                <Link href="">
                  <FaFacebook />
                </Link>
                <Link href="">
                  <RiInstagramFill />
                </Link>
                <Link href="">
                  <FaYoutube />
                </Link>
                <Link href="">
                  <FaXTwitter />
                </Link>
              </div>
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <NextImage src={"/images/logo2.png"} alt={""} />
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    {t("About")}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    {t("Careers")}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    {t("Members")}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    {t("Events")}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    {t("Blogs")}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/">
                    {t("Projects")}
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="">
                    {t("Contact")}
                  </Link>
                </li>
              </ul>
              <div className={styles.btns}>
                <div className={styles.contact}>
                  <Link className={styles.navLink} href="/donation">
                    {t("Donation")}
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
