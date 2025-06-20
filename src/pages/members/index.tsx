import Footer from "@/layout/footer";
import styles from "./members.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import GetInvolved from "@/modules/getInvolved";
import {
  memberListEN,
  memberListAR,
  memberListBN,
} from "@/constants/teamMembers";
export default function Members() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let memberList;

  switch (selectedLanguage) {
    case "en":
      memberList = memberListEN;

      break;
    case "ar":
      memberList = memberListAR;

      break;
    default:
      memberList = memberListBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Members</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{t("Members Banner Title")}</h1>
              <p>
                {t("Members Banner Des")}
                <br />
                {t("Members Banner Des Two")}
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.members}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Meet Our Leadership")}</h2>
              <h4>{t("Leadership")}</h4>
              <p>{t("Leadership Des")}</p>
            </div>
            <div className={styles.row}>
              {memberList.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.image} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.name}</h3>
                    <p>{category.position}</p>
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
