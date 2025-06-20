import Footer from "@/layout/footer";
import styles from "./events.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import GetInvolved from "@/modules/getInvolved";
import { eventsEN, eventsAR, eventsBN } from "@/constants/events";
import { IoLocationSharp } from "react-icons/io5";
export default function Events() {
  const isClient = useLanguage();
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let events;

  switch (selectedLanguage) {
    case "en":
      events = eventsEN;

      break;
    case "ar":
      events = eventsAR;

      break;
    default:
      events = eventsBN;
  }

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{t("Events Banner Title")}</h1>
              <p>
                {t("Events Banner Des")}
                <br />
                {t("Events Banner Des Two")}
              </p>
            </div>
          </Container>
        </section>

        <section className={styles.events}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Events")}</h2>
              <p>{t("Events Des")}</p>
            </div>
            <div className={styles.eventsWrapper}>
              {events.map((event) => (
                <div className={styles.event} key={event.id}>
                  <div className={styles.image}>
                    <NextImage src={event.image} alt={event.title} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <h3>{event.date}</h3>
                      <h4>{event.title}</h4>
                    </div>
                    <div className={styles.des}>
                      <span>{event.description}</span>
                    </div>
                    <div className={styles.location}>
                      <IoLocationSharp /> {event.location}
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
