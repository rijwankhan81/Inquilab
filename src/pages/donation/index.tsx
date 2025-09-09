import useLanguage from "@/hooks/useLanguage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import styles from "./donation.module.scss";
import { GetStaticProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Donation from "@/modules/donation";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import NextImage from "@/hooks/NextImage";
import {
  donationuseEN,
  donationuseAR,
  donationuseBN,
} from "@/constants/donationUse";

export default function Donations() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();

  const selectedLanguage = i18n.language;

  let donationuse;

  switch (selectedLanguage) {
    case "en":
      donationuse = donationuseEN;

      break;
    case "ar":
      donationuse = donationuseAR;

      break;
    default:
      donationuse = donationuseBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Donation</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <div className={styles.wrapper}>
              <h1>{t("Donate")}</h1>
              <h2>{t("Donate Des")}</h2>
              <p>{t("Donate Des Two")}</p>
            </div>
          </Container>
        </section>
        <div className={styles.payDonation}>
          <Donation />
        </div>
        <section className={styles.donationUse}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("How Your Donation Will Be Used")}</h2>
            </div>
            <div className={styles.row}>
              {donationuse.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.image} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
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
