import { Container } from "react-bootstrap";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NextImage from "@/hooks/NextImage";
import React from "react";
import { useTranslation } from "next-i18next";
import { navTreeBN, navTreeAR, navTreeEN } from "@/constants/navTree";
import { useRouter } from "next/router";
import { contactInfo } from "@/constants/contactinfo";
import useLanguage from "@/hooks/useLanguage";
import { legalNavEN, legalNavAR, legalNavBN } from "@/constants/legalNav";
export default function Footer() {
  const { pathname } = useRouter();

  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  const isActive = (link: string) => pathname === link;

  let legalNav;

  switch (selectedLanguage) {
    case "en":
      legalNav = legalNavEN;

      break;
    case "ar":
      legalNav = legalNavAR;
      break;
    default:
      legalNav = legalNavBN;
  }

  // Determine nav tree by language
  const getNavTree = () => {
    switch (selectedLanguage) {
      case "bn":
        return navTreeBN;
      case "ar":
        return navTreeAR;
      default:
        return navTreeEN;
    }
  };

  const navTree = getNavTree();

  // Filter to exclude top-level items: company, technologies, services
  const filteredNavItems = navTree.filter(
    (item) => !["cultural"].includes(item.id)
  );

  // Get only the children of "cultural" (skip the parent)
  // const culturalChildren =
  //   navTree.find((item) => item.id === "cultural")?.children || [];

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
                <NextImage
                  className={styles.one}
                  src="/images/logo.png"
                  alt=""
                />
                <NextImage
                  className={styles.two}
                  src="/images/logo2.png"
                  alt=""
                />
              </Link>
              <p>{t("Footer Title")}</p>
              <div className={styles.connect}>
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/inqilabmoncho/"
                    >
                      <FiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/InqilabMoncho/"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href="jhttps://x.com/InqilabMoncho">
                      <FaXTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_menu}>
              <h3>{t("Quick Links")}</h3>
              <ul>
                {/* {culturalChildren.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={child.link}
                      className={isActive(child.link) ? styles.active : ""}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))} */}

                {filteredNavItems.map((item) => {
                  if (item.link) {
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.link}
                          className={isActive(item.link) ? styles.active : ""}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            {/* Legal Links */}
            <div className={styles.footer_menu}>
              <h3>{t("Legal")}</h3>
              <ul>
                {legalNav.map((item) =>
                  item.href ? (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={isActive(item.href) ? styles.active : ""}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>

            <div className={styles.contactInfo}>
              <h3>{t("Contact Info")}</h3>
              <ul>
                {contactInfo.map((field, index) => (
                  <li key={index}>
                    <span className={styles.icon}>{field.icon}</span>
                    <span className={styles.text}>
                      {field.value.map((val, i) => {
                        let href = "";

                        if (field.linkType === "email") {
                          href = `mailto:${val}`;
                        } else if (field.linkType === "phone") {
                          href = `tel:${val.replace(/\s+/g, "")}`;
                        }

                        return (
                          <React.Fragment key={i}>
                            {href ? <a href={href}>{val}</a> : val}
                            {i < field.value.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footer_bootom}>
            <p className={styles.copyright}>{t("Copyrights")}</p>
            <p className={styles.copyright}>
              {t("Innovated by")}{" "}
              <Link href="https://www.jionex.com" target="_blank">
                <NextImage src={"/images/jionex_logo_white.png"} alt={""} />
              </Link>
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
