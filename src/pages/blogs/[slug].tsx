import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Container } from "react-bootstrap";
import styles from "./blogs.module.scss";
import { useTranslation } from "next-i18next"; // ✅ use next-i18next
import useLanguage from "@/hooks/useLanguage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import NextImage from "@/hooks/NextImage";
import { blogsAR } from "@/constants/blogs/ar";
import { blogsBN } from "@/constants/blogs/bn";
import { blogsEN } from "@/constants/blogs/en";

interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
}

export default function BlogDetail({
  blog,
  related = [],
}: {
  blog: Blog;
  related?: Blog[];
}) {
  const isClient = useLanguage();
  const { t } = useTranslation();

  if (!isClient) return null;
  if (!blog) return <p>{t("blog not found")}</p>;

  return (
    <>
      <Head>
        <title>{blog.title} | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <Container>
          <div className={styles.detailsWrapper}>
            <section className={styles.details}>
              <h2>{blog.title}</h2>

              <div className={styles.image}>
                <img src={blog.imageUrl} alt={blog.title} />
              </div>
              <div className={styles.dateLocation}>
                {blog.date && (
                  <p>
                    <strong>
                      <FaCalendarAlt />
                    </strong>{" "}
                    {blog.date}
                  </p>
                )}

                {blog.location && (
                  <p>
                    <strong>
                      <FaLocationDot />
                    </strong>{" "}
                    {blog.location}
                  </p>
                )}
              </div>
              <p>{blog.description}</p>
            </section>

            {/* ✅ Related blogs Section */}
            {related.length > 0 && (
              <section className={styles.related}>
                <h2>{t("Other Blogs")}</h2>
                <div className={styles.row}>
                  {related.map((blog, index) => (
                    <div key={index} className={styles.wrapper}>
                      <div className={styles.image}>
                        <NextImage src={blog.imageUrl} alt={""} />
                      </div>
                      <div className={styles.content}>
                        <h3>{blog.title}</h3>
                        {/* <p>{blog.description}</p>
                    <h5 className={styles.location}>
                      <IoLocationSharp /> {blog.location}
                    </h5> */}
                      </div>
                      <h4 className={styles.date}>{blog.date}</h4>
                      <div className={styles.btn}>
                        <Link href={`/blogs/${blog.slug}`}>
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
      let blogs: Blog[] = [];
      if (locale === "en") blogs = blogsEN;
      if (locale === "ar") blogs = blogsAR;
      if (locale === "bn") blogs = blogsBN;

      return blogs.map((program) => ({
        params: { slug: program.slug },
        locale,
      }));
    }) || [];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  let blogs: Blog[] = [];
  if (locale === "en") blogs = blogsEN;
  if (locale === "ar") blogs = blogsAR;
  if (locale === "bn") blogs = blogsBN;

  const blog = blogs.find((p) => p.slug === params?.slug) || null;

  const related = blog
    ? blogs.filter((p) => p.slug !== blog.slug).slice(0, 3)
    : [];

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      blog,
      related, // ✅ always defined
    },
  };
};
