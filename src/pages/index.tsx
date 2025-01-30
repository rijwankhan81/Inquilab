import { data } from "@/constants/keyData";
import NextImage from "@/hooks/NextImage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { GiTrafficLightsRed } from "react-icons/gi";
import { IoGlobe } from "react-icons/io5";
import { LuTrees } from "react-icons/lu";
import { TbSolarElectricity } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transforming Chattogram into a Smart and Sustainable City</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <video
              className={styles.video}
              width="640"
              height="360"
              autoPlay
              loop
              muted
            >
              <source src="/images/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Container>
        </section>
        <section className={styles.welcome}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.content}>
                <h2>
                  Welcome to the Future of Chattogram: A Smart and Sustainable
                  City
                </h2>
                <p>
                  Chattogram, the bustling port city of Bangladesh, is on a
                  transformative journey to become a smart and sustainable urban
                  hub. With its rich history, strategic location, and economic
                  significance, Chattogram is embracing innovation, technology,
                  and eco-friendly practices to enhance the quality of life for
                  its residents and create a model city for the future.
                </p>
              </div>
              <div className={styles.image}>
                <div className={styles.inner}>
                  <NextImage src={"/images/image1.jpg"} alt={""} />
                  <NextImage src={"/images/image2.jpg"} alt={""} />
                </div>
                <NextImage src={"/images/image3.jpg"} alt={""} />
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.vission} id="vision">
          <Container className={styles.container}>
            <div className={styles.content}>
              <h2>Our Vision</h2>
              <p>
                To transform Chattogram into a globally recognized smart and
                sustainable city that leverages cutting-edge technology,
                promotes environmental stewardship, and ensures inclusive growth
                for all its citizens.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.mayor}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>A Message from the City Mayor</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/mayor.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <h3>
                  <span>Dr. Shahadat Hossain</span>
                  Honorable Mayor <br /> Chittagong City Corporation
                </h3>
                <p>
                  &#34;Chattogram is not just a city; it is the heartbeat of
                  Bangladesh&#39;s economy and a symbol of resilience and
                  progress. As we embark on this ambitious journey to transform
                  our city into a smart and sustainable urban center, I am
                  committed to ensuring that every citizen benefits from this
                  transformation. Together, we will build a city that is not
                  only technologically advanced but also environmentally
                  responsible and socially inclusive. Let us work hand in hand
                  to create a brighter, greener, and smarter future for
                  Chattogram.&#34;
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.keyPillars} id="key">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Key Pillars of Transformation</h2>
            </div>
            <div className={styles.row}>
              {data.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.image} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.ongoingProjects} id="projects">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Ongoing Projects</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <GiTrafficLightsRed />
                </div>
                <div className={styles.content}>
                  <h3>Smart Traffic Management System</h3>
                  <p>
                    Reducing congestion and improving road safety through
                    AI-powered traffic control.
                  </p>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <LuTrees />
                </div>
                <div className={styles.content}>
                  <h3>Chattogram Green City Initiative</h3>
                  <p>
                    Planting 1 million trees and creating urban green belts.
                  </p>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <TbSolarElectricity />
                </div>
                <div className={styles.content}>
                  <h3>Renewable Energy Adoption</h3>
                  <p>
                    Installing solar panels on public buildings and promoting
                    rooftop solar for households.
                  </p>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.icon}>
                  <IoGlobe />
                </div>
                <div className={styles.content}>
                  <h3>Digital Chattogram Platform</h3>
                  <p>
                    A one-stop portal for citizens to access government
                    services, pay bills, and report issues.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.getInvolved}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Get Involved</h2>
              <p>
                Transforming Chattogram into a smart and sustainable city is a
                collective effort. Here’s how you can contribute:
              </p>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/image5.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    <span>Residents</span>: Adopt sustainable practices,
                    participate in community programs, and stay informed about
                    city initiatives.
                  </li>
                  <li>
                    <span>Businesses</span>: Invest in green technologies,
                    support local innovation, and collaborate with the
                    government on smart city projects.
                  </li>
                  <li>
                    <span>Government and NGOs</span>: Partner with stakeholders
                    to implement policies and programs that drive sustainable
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
