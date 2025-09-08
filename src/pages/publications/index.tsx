import Footer from "@/layout/footer";
import styles from "./publication.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import {
  publicationsEN,
  publicationsAR,
  publicationsBN,
} from "@/constants/publications";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
export default function Publication() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let publications;

  switch (selectedLanguage) {
    case "en":
      publications = publicationsEN;

      break;
    case "ar":
      publications = publicationsAR;

      break;
    default:
      publications = publicationsBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Publications | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.publication}>
          <Container className={styles.container}>
            <div className={styles.row}>
              {publications.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.imageUrl} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <h4>
                      <span>{t("Edited by")}:</span> {category.editedby}
                    </h4>
                    <h5>
                      <span>{t("Price")}: </span> <FaBangladeshiTakaSign />{" "}
                      {category.price}
                    </h5>
                    <h6>
                      <span>{t("Available at")}: </span>
                      {category.available}
                    </h6>
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
