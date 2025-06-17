import { data } from "@/constants/keyData";
import { ongoingProjects } from "@/constants/ongoingProjects";
import { videos } from "@/constants/videos";
import NextImage from "@/hooks/NextImage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Notice from "@/modules/notice";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Hefazat-e-Islam — Guardians of Islamic Values</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <NextImage
              className={styles.video}
              src={"/images/bg.gif"}
              alt={""}
            />
          </Container>
        </section>
        <section className={styles.donation}>
          <Container>
            <h2>Donate to Muslim Hands</h2>
          </Container>
          <div className={styles.wrapper}>
            <Container>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.donationType}>
                    <select name="" id="">
                      <option value="">Single Donation</option>
                      <option value="">Regular Donation</option>
                    </select>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.amount}>
                    <div className={styles.currency}>৳</div>
                    <input type="text" placeholder="Amount" />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.donationName}>
                    <select name="" id="">
                      <option value="">Sadaqa</option>
                      <option value="">Zakat</option>
                      <option value="">General Charity</option>
                      <option value="">Interest</option>
                    </select>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.quickDonation}>
                    <button>Quick Donation</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className={styles.welcome}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.content}>
                <h2>Who We Are</h2>
                <p>
                  Hefazat-e-Islam is a leading Islamic organization dedicated to
                  preserving the purity of Islamic education, strengthening
                  Islamic institutions, and fostering unity within the Muslim
                  community. <br />
                  Established by renowned Islamic scholars (ulama) and community
                  leaders, we aim to promote moral guidance, justice, peace, and
                  compassion in conformity with the Qur’ān and Sunnah.
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
              <h2>Our Mission</h2>
              <p>
                To empower Muslims through education, service, and unity —
                following the path of the Prophet صلى الله عليه وآله وسلم — and
                to protect Islamic traditions while addressing the moral and
                social challenges of our time.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.ameer}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Message from Ameer</h2>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/ameer.webp"} alt={""} />
              </div>
              <div className={styles.content}>
                <h3>
                  <span>Allama Junaid Babunagari</span>
                  Ameer, Hefazat-e-Islam Bangladesh
                </h3>
                <h4>
                  In the name of Allah, the Most Gracious, the Most Merciful.
                </h4>
                <p>
                  As we strive to guide our community toward justice, peace,
                  unity, and moral purity, we must remain firm upon the Qur’ān
                  and Sunnah.
                  <br />
                  Hefazat-e-Islam stands as a guardian of Islamic education,
                  institutions, and values — upholding the rich traditions that
                  enable us to raise a generation anchored in knowledge,
                  compassion, and fairness.
                  <br />
                  We invite all Muslims to join us in this mission, to
                  contribute to a future forged by strong faith, strong
                  character, and unity under the guidance of Islam.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.progress}>
          <Container>
            <h2>Stories & Speeches</h2>
            <div className={styles.row}>
              {/* <div className={styles.videos}>
                <iframe
                  src="https://www.youtube.com/embed/ybYb819WuLo"
                  title="১১ বছর আগের খালেদা জিয়ার ভুমিকা মনে রেখেছেন ড. মুহাম্মদ ইউনূস? ইচ্ছা পূরণ হয়নি শেখ হাসিনার!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div> */}
              {videos.map((category, index) => (
                <div className={styles.videos}>
                  <iframe
                    key={index}
                    src={category.video}
                    // width="560"
                    // height="314"
                    // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              ))}
            </div>
            <div className={styles.btn}>
              <Link href="">See All Videos</Link>
            </div>
          </Container>
        </section>
        {/* <section className={styles.keyPillars} id="key">
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
        </section> */}
        <section className={styles.ongoingProjects} id="projects">
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2> Our Commitment to Serve</h2>
            </div>
            <div className={styles.row}>
              {ongoingProjects.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.icon}>
                    <h3>{category.icon}</h3>
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className={styles.getInvolved}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Get Involved</h2>
              <p>
                Hefazat-e-Islam invites you to become a part of this mission.
              </p>
            </div>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/image5.jpg"} alt={""} />
              </div>
              <div className={styles.content}>
                <ul>
                  <li>
                    Together, we can make a difference by strengthening our
                    community, upholding justice, and spreading compassion.
                  </li>
                </ul>
                <div className={styles.btns}>
                  <Link className={styles.btnOne} href="">
                    Contact
                  </Link>
                  <Link className={styles.btnTwo} href="">
                    Donation
                  </Link>
                  <Link className={styles.btnOne} href="">
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
