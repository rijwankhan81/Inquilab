import Footer from "@/layout/footer";
import styles from "./careers.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { jobOpeningsAR, jobOpeningsBN, jobOpeningsEN } from "@/constants/jobs";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import {
  opportunitiesAR,
  opportunitiesBN,
  opportunitiesEN,
} from "@/constants/opportunities";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Careers() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let jobOpenings, opportunities;

  switch (selectedLanguage) {
    case "en":
      jobOpenings = jobOpeningsEN;
      opportunities = opportunitiesEN;
      break;
    case "ar":
      jobOpenings = jobOpeningsAR;
      opportunities = opportunitiesAR;
      break;
    default:
      jobOpenings = jobOpeningsBN;
      opportunities = opportunitiesBN;
  }
  const isClient = useLanguage();
  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Careers</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{t("About Banner Title")}</h1>
              <p>
                {t("About Banner Des")}
                <br />
                {t("About Banner Des Two")}
                <br />
                {t("About Banner Des Three")}
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.opportunities}>
          <Container>
            <div className={styles.head}>
              <h2>{t("Opportunities Available")}</h2>
              <p>{t("Opportunities Available Des")}</p>
            </div>

            <div className={styles.wrapper}>
              {opportunities.map((service, index) => (
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
        <section className={styles.openings}>
          <Container>
            <div className={styles.careers}>
              <h2>{t("Current Job Openings")}</h2>
              <div className={styles.jobListings}>
                {jobOpenings.map((job) => (
                  <div key={job.id} className={styles.jobCard}>
                    <div className={styles.jobIcon}>{job.icon}</div>
                    <div className={styles.jobDetails}>
                      <div className={styles.jobHeader}>
                        <h3>{job.title}</h3>
                        <div className={styles.location}>
                          <IoLocationSharp />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    {/* <h3>Requirements:</h3> */}
                    {/* <ul>
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul> */}
                    <div className={styles.applyButton}>
                      <a href="#apply">{t("Apply Now")}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.joinUs} id="apply">
          <Container>
            <div className={styles.head}>
              <h2>{t("Join Us")} </h2>
            </div>
            <div className={styles.apply}>
              <form className={styles.form}>
                <div className={styles.parentField}>
                  <div className={styles.field}>
                    <label>
                      {t("Your Name")}
                      <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className={styles.field}>
                    <label>
                      {t("Your E-mail")}
                      <span>*</span>
                    </label>
                    <input type="email" />
                  </div>
                </div>
                <div className={styles.parentField}>
                  <div className={styles.field}>
                    <label>
                      {t("Phone Number")}
                      <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className={styles.field}>
                    <label>
                      {t("Job Title")}
                      <span>*</span>
                    </label>

                    <select name="" id="">
                      <option>{t("Select a job")}</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} className={styles.jobCard}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label>
                    {t("Upload Your CV")}
                    <span>*</span>
                  </label>
                  <div className={styles.fileInput}>
                    <input type="file" name="" id="" />
                    <div className={styles.choose}>
                      <h6>{t("Attach File")}</h6>
                      <MdOutlineAttachFile />
                    </div>
                  </div>
                </div>
                {/* <div className={styles.textField}>
                  <label>Message</label>
                  <textarea name="" id=""></textarea>
                </div> */}

                <div className={styles.btnField}>
                  <button className={styles.btn}>{t("Submit")}</button>
                </div>
              </form>
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
