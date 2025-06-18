import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NextImage from "@/hooks/NextImage";
import { useTranslation } from "react-i18next";
import useLanguage from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useTranslation();

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
              <Link className={styles.logo} href="/">
                <NextImage src="/images/logo2.png" alt="Payorio" />
              </Link>
              <p>{t("Footer Title")}</p>
            </div>
            <div className={styles.footer_menu}>
              <h3>{t("Quick Links")}</h3>
              <ul>
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
            </div>
            {/* <div className={styles.footer_menu}>
              <h3>Support</h3>
              <ul>
                <li>
                  <Link href="javascript:void(0)">Documentation</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">Faq</Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">Team</Link>
                </li>
              </ul>
            </div> */}
            <div className={styles.connect}>
              <h3>{t("Follow Us")}</h3>
              <ul>
                <li>
                  <Link href="javascript:void(0)">
                    <FiFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="javascript:void(0)">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_bootom}>
            <p className={styles.copyright}>
              {t("Powered by")}{" "}
              <Link href="https://www.jionex.com/" target="_blank">
                {/* Jionex{" "} */}
                <NextImage
                  className={styles.powerdby}
                  src="/images/jionex_logo_white.png"
                  alt={""}
                />
              </Link>
            </p>
            <div className={styles.policy}>
              <Link href="/privacy-policy">{t("Privacy Policy")}</Link>
              <Link href="/term-and-conditions">{t("Terms & Conditions")}</Link>
            </div>
          </div>
          <p className={styles.copy}>{t("Copyright")}</p>
        </Container>
      </footer>
    </>
  );
}
