import Footer from "@/layout/footer";
import styles from "./services.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { services } from "@/constants/e-services";
export default function Home() {
  return (
    <>
      <Head>
        <title>e-Services</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <div className={styles.content}>
              <h1>e-Services for Citizens</h1>
              <p>
                To make public services more accessible and efficient,
                Chattogram is introducing a range of e-Services that can be
                accessed online. These services are designed to save time,
                reduce paperwork, and improve transparency.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.services}>
          <Container>
            <h2>e-Services</h2>
            <div className={styles.wrapper}>
              {services.map((service, index) => (
                <div key={index} className={styles.service}>
                  <div className={styles.icon}>{service.icon}</div>
                  <div className={styles.content}>
                    <h3>{service.title}</h3>
                    {/* <p>{service.features}</p> */}
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
