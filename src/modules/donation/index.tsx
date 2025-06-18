import useLanguage from "@/hooks/useLanguage";
import styles from "./donation.module.scss";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Donation() {
  const { t } = useTranslation();

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <section className={styles.donation}>
        <Container>
          <h2>{t("Donate to Muslim Hands")}</h2>
        </Container>
        <div className={styles.wrapper}>
          <Container>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.donationType}>
                  <select name="" id="">
                    <option value="">{t("Single Donation")}</option>
                    <option value="">{t("Regular Donation")}</option>
                  </select>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.amount}>
                  <div className={styles.currency}>৳</div>
                  <input type="text" placeholder={t("Amount")} />
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.donationName}>
                  <select name="" id="">
                    <option value="">{t("Sadaqa")}</option>
                    <option value="">{t("Zakat")}</option>
                    <option value="">{t("General Charity")}</option>
                    <option value="">{t("Interest")}</option>
                  </select>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.quickDonation}>
                  <button>{t("Quick Donation")}</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
