import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import styles from "./programs.module.scss";
import { useTranslation } from "next-i18next"; // ✅ use next-i18next
import useLanguage from "@/hooks/useLanguage";
import { programsEN } from "@/constants/programs/en";
import { programsAR } from "@/constants/programs/ar";
import { programsBN } from "@/constants/programs/bn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import NextImage from "@/hooks/NextImage";

interface Program {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
}

export default function ProgramDetail({
  program,
  related = [],
}: {
  program: Program;
  related?: Program[];
}) {
  const isClient = useLanguage();
  const { t } = useTranslation();

  if (!isClient) return null;
  if (!program) return <p>{t("Program not found")}</p>;

  return (
    <>
      <Head>
        <title>{program.title} | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <Container>
          <div className={styles.detailsWrapper}>
            <section className={styles.details}>
              <h2>{program.title}</h2>

              <div className={styles.image}>
                <img src={program.imageUrl} alt={program.title} />
              </div>
              <div className={styles.dateLocation}>
                <p>
                  <strong>
                    <FaCalendarAlt />
                  </strong>{" "}
                  {program.date}
                </p>
                {program.location && (
                  <p>
                    <strong>
                      <FaLocationDot />
                    </strong>{" "}
                    {program.location}
                  </p>
                )}
              </div>
              <p>{program.description}</p>
            </section>

            {/* ✅ Related Programs Section */}
            {related.length > 0 && (
              <section className={styles.related}>
                <h2>{t("Other Programs")}</h2>
                <div className={styles.row}>
                  {related.map((category, index) => (
                    <div key={index} className={styles.wrapper}>
                      <div className={styles.image}>
                        <NextImage src={category.imageUrl} alt={""} />
                      </div>
                      <div className={styles.content}>
                        <h3>{category.title}</h3>
                        {/* <p>{category.description}</p>
                    <h5 className={styles.location}>
                      <IoLocationSharp /> {category.location}
                    </h5> */}
                      </div>
                      <h4 className={styles.date}>{category.date}</h4>
                      <div className={styles.btn}>
                        <Link href={`/programs/${category.slug}`}>
                          {t("Read More")}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths =
    locales?.flatMap((locale) => {
      let programs: Program[] = [];
      if (locale === "en") programs = programsEN;
      if (locale === "ar") programs = programsAR;
      if (locale === "bn") programs = programsBN;

      return programs.map((program) => ({
        params: { slug: program.slug },
        locale,
      }));
    }) || [];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  let programs: Program[] = [];
  if (locale === "en") programs = programsEN;
  if (locale === "ar") programs = programsAR;
  if (locale === "bn") programs = programsBN;

  const program = programs.find((p) => p.slug === params?.slug) || null;

  const related = program
    ? programs.filter((p) => p.slug !== program.slug).slice(0, 3)
    : [];

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      program,
      related, // ✅ always defined
    },
  };
};
