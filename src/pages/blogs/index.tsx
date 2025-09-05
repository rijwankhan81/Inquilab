import Footer from "@/layout/footer";
import styles from "./blogs.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { galleryAR } from "@/constants/gallery/ar";
import { galleryBN } from "@/constants/gallery/bn";
import { galleryEN } from "@/constants/gallery/en";
export default function Blogs() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let gallery;

  switch (selectedLanguage) {
    case "en":
      gallery = galleryEN;

      break;
    case "ar":
      gallery = galleryAR;

      break;
    default:
      gallery = galleryBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Blogs | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.blogs}>
          <Container className={styles.container}>
            <div className={styles.row}>
              {gallery.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.imageUrl} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    {/* <p>{category.description}</p>
                    {category.location && (
                      <h5 className={styles.location}>
                        <IoLocationSharp /> {category.location}
                      </h5>
                    )} */}
                  </div>
                  {category.date && (
                    <h4 className={styles.date}>{category.date}</h4>
                  )}
                  <div className={styles.btn}>
                    <Link href="">{t("Read More")}</Link>
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
