import Footer from "@/layout/footer";
import styles from "./careers.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { jobOpenings } from "@/constants/jobs";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
export default function Careers() {
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
              <h1>Join Our Team and Build the Future of Chattogram</h1>
              <p>
                Are you passionate about innovation, sustainability, and making
                a meaningful impact? Do you want to be part of a transformative
                journey that is shaping the future of one of Bangladesh’s most
                dynamic cities? If so, we invite you to join our team and
                contribute to the vision of transforming Chattogram into a smart
                and sustainable city.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.openings}>
          <Container>
            <div className={styles.careers}>
              <h2>Current Job Openings</h2>
              <div className={styles.jobListings}>
                {jobOpenings.map((job) => (
                  <div key={job.id} className={styles.jobCard}>
                    <div className={styles.jobIcon}>{job.icon}</div>
                    <div className={styles.jobDetails}>
                      <div className={styles.jobHeader}>
                        <h3>{job.title}</h3>
                        <div className={styles.location}>
                          <IoLocationSharp />
                          <span>Chattogram</span>
                        </div>
                      </div>
                      <p>{job.description}</p>
                    </div>
                    {/* <h3>Requirements:</h3> */}
                    {/* <ul>
                      {job.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul> */}
                    <div className={styles.applyButton}>
                      <a href="#apply">Apply Now</a>
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
              <h2>Join Us </h2>
              <p>
                Ready to take the next step in your career? Join Jionex, where
                your skills, ideas, and passion can make a real difference.
              </p>
            </div>
            <div className={styles.apply}>
              <form className={styles.form}>
                <div className={styles.parentField}>
                  <div className={styles.field}>
                    <label>
                      Your Name
                      <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className={styles.field}>
                    <label>
                      Your E-mail
                      <span>*</span>
                    </label>
                    <input type="email" />
                  </div>
                </div>
                <div className={styles.parentField}>
                  <div className={styles.field}>
                    <label>
                      Phone Number
                      <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className={styles.field}>
                    <label>
                      Job Title
                      <span>*</span>
                    </label>

                    <select name="" id="">
                      <option>Select a job</option>
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
                    Upload Your CV
                    <span>*</span>
                  </label>
                  <div className={styles.fileInput}>
                    <input type="file" name="" id="" />
                    <div className={styles.choose}>
                      <h6>Attach File</h6>
                      <MdOutlineAttachFile />
                    </div>
                  </div>
                </div>
                {/* <div className={styles.textField}>
                  <label>Message</label>
                  <textarea name="" id=""></textarea>
                </div> */}

                <div className={styles.btnField}>
                  <button className={styles.btn}>Submit</button>
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
