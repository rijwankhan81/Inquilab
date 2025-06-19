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
import { uniqueAR, uniqueBN, uniqueEN } from "@/constants/unique";
import GetInvolved from "@/modules/getInvolved";
export default function Home() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let unique;

  switch (selectedLanguage) {
    case "en":
      unique = uniqueEN;

      break;
    case "ar":
      unique = uniqueAR;

      break;
    default:
      unique = uniqueBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <div className={styles.content}>
              <h1>{t("About Banner Title")}</h1>
              <p>{t("About Banner Des")}</p>
              <p>{t("About Banner Des Two")}</p>
              <p>{t("About Banner Des Three")}</p>
            </div>
          </Container>
        </section>
        <section className={styles.ourStory}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/image6.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <h2>{t("Our Story")}</h2>
                <p>
                  {t("Our Story Des")} <br />
                  {t("Our Story Des Two")} <br />
                  {t("Our Story Des Three")}
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.unique} id="key">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("What Makes Us Unique")}</h2>
            </div>
            <div className={styles.row}>
              {unique.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.image} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.ahead}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/image7.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <h2>{t("Looking Ahead")}</h2>
                <p>{t("Our focus today is to")}</p>
                <ul>
                  <li>{t("Looking Ahead One")}</li>
                  <li>{t("Looking Ahead Two")}</li>
                  <li>{t("Looking Ahead Three")}</li>
                  <li>{t("Looking Ahead Four")}</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <GetInvolved />
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
