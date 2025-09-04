import Head from "next/head";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";
import NextImage from "../../hooks/NextImage";
import LanguageSwitcher from "../../modules/languageSwitch";
import { useTranslation } from "next-i18next";
import useLanguage from "@/hooks/useLanguage";
import { navTreeEN, navTreeBN, navTreeAR, NavItem } from "@/constants/navTree";

export default function Header() {
  const { i18n, t } = useTranslation("common");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setShowMenu(false);
      setOpenDropdown(null);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        setOpenDropdown(null);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const isClient = useLanguage();
  if (!isClient) return null;

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const isActive = (path: string) => router.pathname === path;

  // Language-specific nav
  const lang = i18n.language;
  const navTree =
    { en: navTreeEN, bn: navTreeBN, ar: navTreeAR }[lang] || navTreeEN;

  // Temporary stub for dynamic children
  const getDynamicChildren = () => {
    return [];
  };

  const renderNavItem = (item: NavItem) => {
    const children = item.dynamic ? getDynamicChildren() : item.children;

    const hasDropdown = item.dropdown || (children && children.length > 0);

    if (hasDropdown && children) {
      return (
        <li
          key={item.id}
          className={`${styles.navItem} ${styles.dropdownMenu}`}
        >
          <Link href={item.link || "#"} className={styles.navLink}>
            {item.title}
          </Link>
          <span
            className={styles.arrow}
            onClick={() => toggleDropdown(item.id)}
          >
            <IoIosArrowDown />
          </span>
          <div
            className={`${styles.servicesWrapper} ${
              openDropdown === item.id ? styles.dropShow : ""
            }`}
          >
            {children.map((child) => (
              <div className={styles.service} key={child?.id}>
                <Link
                  className={`${
                    isActive(child.link || "") ? styles.active : ""
                  } ${styles.subNavLink}`}
                  href={child.link || "#"}
                >
                  <h3 className={styles.name}>{child.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </li>
      );
    }

    return (
      <li key={item.id} className={styles.navItem}>
        <Link
          className={`${isActive(item.link || "") ? styles.active : ""} ${
            styles.navLink
          }`}
          href={item.link || "#"}
        >
          {item.title}
        </Link>
      </li>
    );
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </Head>

      <header id="header" className={styles.header}>
        <Container>
          <div className={styles.headWrapper}>
            <div className={styles.logo}>
              <Link href="/">
                <NextImage src="/images/logo.png" alt="Jionex" />
              </Link>
            </div>

            <div className={styles.menuParent} ref={menuRef}>
              <div className={`${showMenu ? styles.show : ""} ${styles.menu}`}>
                <ul className={styles.ul}>{navTree.map(renderNavItem)}</ul>
              </div>

              <div className={styles.languageSelector}>
                <div className={styles.donation}>
                  <Link href="/">{t("Donation")}</Link>
                </div>
                <LanguageSwitcher />
                <div
                  className={styles.hamMenu}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
