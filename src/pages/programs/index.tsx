import Footer from "@/layout/footer";
import styles from "./programs.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { programsAR } from "@/constants/programs/ar";
import { programsBN } from "@/constants/programs/bn";
import { programsEN } from "@/constants/programs/en";
import Link from "next/link";
export default function Programs() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let programs;

  switch (selectedLanguage) {
    case "en":
      programs = programsEN;

      break;
    case "ar":
      programs = programsAR;

      break;
    default:
      programs = programsBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Programs | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.programs}>
          <Container className={styles.container}>
            <div className={styles.row}>
              {programs.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.imageUrl} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    {/* <p>{category.description}</p>
                    <h5 className={styles.location}>
                      <IoLocationSharp /> {category.location}
                    </h5> */}
                  </div>
                  <h4 className={styles.date}>{category.date}</h4>
                  <div className={styles.btn}>
                    <Link href={`/programs/${category.slug}`}>
                      {t("Read More")}
                    </Link>
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
