import Footer from "@/layout/footer";
import styles from "./news.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { newsAR } from "@/constants/news/ar";
import { newsBN } from "@/constants/news/bn";
import { newsEN } from "@/constants/news/en";
import ReadMore from "@/modules/readmore";
export default function News() {
  const isClient = useLanguage();
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  let news;

  switch (selectedLanguage) {
    case "en":
      news = newsEN;

      break;
    case "ar":
      news = newsAR;

      break;
    default:
      news = newsBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>News Gallery | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.gallery}>
          <Container className={styles.container}>
            <div className={styles.row}>
              {news.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.content}>
                    <h3>
                      <ReadMore text={category.title} maxLines={1} />
                    </h3>
                  </div>
                  <div className={styles.image}>
                    <iframe
                      src={category.videoUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
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
