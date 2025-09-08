import Footer from "@/layout/footer";
import styles from "./contact.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
export default function Contact() {
  const isClient = useLanguage();
  const { t } = useTranslation();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Contact | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <div className={styles.wrapper}>
              <h1>{t("Contact Us")}</h1>
              <p>{t("Contact Us Des")}</p>
            </div>
          </Container>
        </section>
        <section className={styles.contact}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.content}>
                  <h3>{t("Phone")}</h3>
                  <Link href="tel:+8801540626150">+88 015 40 62 61 50</Link>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <MdOutlineMailOutline />
                </div>
                <div className={styles.content}>
                  <h3>{t("Email")}</h3>
                  <Link href="mailto:inqilabmoncho@gmail.com">
                    inqilabmoncho@gmail.com
                  </Link>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <FaLocationDot />
                </div>
                <div className={styles.content}>
                  <h3>{t("Address")}</h3>
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/9bbQi1dPBUGYVypBA"
                  >
                    House 32, Mymensingh Lane link Road, Banglamotor, Dhaka
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7304.11269347442!2d90.393586!3d23.74537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b900066fcdef%3A0xe937524867f4120f!2zSW5xaWxhYiBDdWx0dXJhbCBDZW50ZXIg4KaH4Kao4KaV4Ka_4Kay4Ka-4KasIOCmleCmvuCmsuCmmuCmvuCmsCDgprjgp4fgpqjgp43gpp_gpr7gprA!5e0!3m2!1sen!2sbd!4v1757327369714!5m2!1sen!2sbd"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "bn", ["common"])),
    },
  };
};
