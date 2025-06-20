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
import GetInvolved from "@/modules/getInvolved";
import { blogsEN, blogsAR, blogsBN } from "@/constants/blogs";
export default function Blogs() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let blogs;

  switch (selectedLanguage) {
    case "en":
      blogs = blogsEN;

      break;
    case "ar":
      blogs = blogsAR;

      break;
    default:
      blogs = blogsBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{t("Blogs Banner Title")}</h1>
              <p>
                {t("Blogs Banner Des")}
                <br />
                {t("Blogs Banner Des Two")}
                <br />
                {t("Blogs Banner Des Three")}
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.blogs}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Blogs")}</h2>
            </div>
            <div className={styles.blogsWrapper}>
              {blogs.map((blog) => (
                <div className={styles.blog} key={blog.id}>
                  <div className={styles.image}>
                    <NextImage src={blog.image} alt={blog.name} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <h3>{blog.date}</h3>
                      <h4>{blog.name}</h4>
                    </div>
                    <div className={styles.des}>
                      <span>{blog.description}</span>
                    </div>
                  </div>
                </div>
              ))}
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
