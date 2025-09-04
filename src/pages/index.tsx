import NextImage from "@/hooks/NextImage";
import useLanguage from "@/hooks/useLanguage";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import styles from "@/styles/Home.module.scss";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { IoLocationSharp } from "react-icons/io5";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { programsAR } from "@/constants/programs/ar";
import { programsBN } from "@/constants/programs/bn";
import { programsEN } from "@/constants/programs/en";
import { galleryAR } from "@/constants/gallery/ar";
import { galleryBN } from "@/constants/gallery/bn";
import { galleryEN } from "@/constants/gallery/en";

export default function Home() {
  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let gallery, programs;

  switch (selectedLanguage) {
    case "en":
      gallery = galleryEN;
      programs = programsEN;
      break;
    case "ar":
      gallery = galleryAR;
      programs = programsAR;
      break;
    default:
      gallery = galleryBN;
      programs = programsBN;
  }

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Welcome to Inquilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <Swiper
              key={selectedLanguage} // 🔑 force re-render when lang changes
              className={styles.slider}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Navigation]}
              dir={selectedLanguage === "ar" ? "rtl" : "ltr"} // RTL / LTR
            >
              <SwiperSlide className={styles.slide}>
                <NextImage
                  className={styles.image}
                  src={"/images/banner4.jpg"}
                  alt={""}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <NextImage
                  className={styles.image}
                  src={"/images/banner2.jpg"}
                  alt={""}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <NextImage
                  className={styles.image}
                  src={"/images/banner3.jpg"}
                  alt={""}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <NextImage
                  className={styles.image}
                  src={"/images/banner1.jpg"}
                  alt={""}
                />
              </SwiperSlide>
            </Swiper>
          </Container>
        </section>

        <section className={styles.about}>
          <Container className={styles.container}>
            <div className={styles.row}>
              <div className={styles.image}>
                <NextImage src={"/images/logo.png"} alt={""} />
                <NextImage src={"/images/logo2.png"} alt={""} />
              </div>
              <div className={styles.content}>
                <h2>{t("Who We Are")}</h2>
                <p>{t("Who We Are Des")}</p>
                <p>{t("Who We Are Des Two")}</p>
                <p>{t("Who We Are Des Three")}</p>
                <p>{t("Who We Are Des Four")}</p>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.pragrams}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("Programs")}</h2>
            </div>
            <div className={styles.row}>
              {programs.slice(0, 6).map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.imageUrl} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <h5 className={styles.location}>
                      <IoLocationSharp /> {category.location}
                    </h5>
                  </div>
                  <h4 className={styles.date}>{category.date}</h4>
                  <div className={styles.btn}>
                    <Link href="">{t("Read More")}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.seebtn}>
              <Link href="/programs">{t("See all programs")}</Link>
            </div>
          </Container>
        </section>
        <section className={styles.gallery}>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>{t("News Gallery")}</h2>
            </div>
            <div className={styles.row}>
              {gallery.slice(0, 6).map((category, index) => (
                <div key={index} className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage src={category.imageUrl} alt={""} />
                  </div>
                  <div className={styles.content}>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    {category.location && (
                      <h5 className={styles.location}>
                        <IoLocationSharp /> {category.location}
                      </h5>
                    )}
                  </div>
                  {category.date && (
                    <h4 className={styles.date}>{category.date}</h4>
                  )}

                  <div className={styles.btn}>
                    <Link href="">{t("Read More")}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.seebtn}>
              <Link href="/news">{t("See all news gallery")}</Link>
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
