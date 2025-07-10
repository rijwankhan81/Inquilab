import useLanguage from "@/hooks/useLanguage";
import styles from "./getinvolved.module.scss";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import NextImage from "@/hooks/NextImage";
import Link from "next/link";

export default function GetInvolved() {
  const { t } = useTranslation();

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <section className={styles.getInvolved}>
        <Container className={styles.container}>
          <div className={styles.row}>
            <div className={styles.image}>
              <NextImage src={"/images/image5.jpg"} alt={""} />
            </div>
            <div className={styles.content}>
              <h2>{t("Get Involved")}</h2>
              <p>{t("Get Involved Title")}</p>
              <ul>
                <li>{t("Get Involved Des")}</li>
              </ul>
              <div className={styles.btns}>
                <Link className={styles.btnOne} href="">
                  {t("Contact")}
                </Link>
                {/* <Link className={styles.btnTwo} href="">
                  {t("Donation")}
                </Link> */}
                <Link className={styles.btnOne} href="">
                  {t("Become a Member")}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
