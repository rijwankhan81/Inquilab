import Footer from "@/layout/footer";
import styles from "./about.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
export default function Home() {
  const isClient = useLanguage();
  const { t } = useTranslation();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>About Us | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <div className={styles.content}>
              <div className={styles.wrapper}>
                <h1>{t("About Us")}</h1>
                <p>{t("About Us Des")}</p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.ourStory}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/image1.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <p>{t("About Us Des Two")}</p>
                <p>{t("About Us Des Three")}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.objective}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Objectives and Aims of Inqilab Moncho")}</h2>
            </div>
            <div className={styles.video}>
              <iframe
                width="1110"
                height="624"
                src="https://www.youtube.com/embed/SUgVNoqFG-0"
                title="ইনকিলাব মঞ্চ কি? কি এর লক্ষ্য উদ্দেশ্য? Inqilab Moncho ki || inqilab moncho goals"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
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
