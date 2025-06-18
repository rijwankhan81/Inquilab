import useLanguage from "@/hooks/useLanguage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import styles from "./donation.module.scss";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Donation from "@/modules/donation";
import { donationsAR, donationsBN, donationsEN } from "@/constants/donations";

export default function Donations() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let donations;

  switch (selectedLanguage) {
    case "en":
      donations = donationsEN;

      break;
    case "ar":
      donations = donationsAR;

      break;
    default:
      donations = donationsBN;
  }

  const isClient = useLanguage();

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
        <div className={styles.payDonation}>
          <Donation />
        </div>
        <section className={styles.donation} id="key">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Support the Mission of Faith, Unity & Service")}</h2>
              <p>{t("Support Des")}</p>
            </div>
            <div className={styles.row}>
              {donations.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>{category.icon}</div>
                  <div className={styles.content}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.contribution}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.image}>🌟</div>
              <div className={styles.content}>
                <h2>{t("Your Contribution Changes Lives")}</h2>
                <p>{t("Contribution Des")}</p>
              </div>
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
