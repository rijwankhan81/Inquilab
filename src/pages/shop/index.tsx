import { Container, Dropdown, Pagination } from "react-bootstrap";
import styles from "./Shop.module.scss";
import NextImage from "@/hooks/NextImage";
import Link from "next/link";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign, FaList } from "react-icons/fa6";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import categoriesAR from "@/constants/shop/categoriesAR";
import categoriesBN from "@/constants/shop/categoriesBN";
import categoriesEN from "@/constants/shop/categoriesEN";

export default function Shop() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("latest");
  const itemsPerPage = 16;
  const router = useRouter();
  const { categoryId } = router.query;

  const { i18n, t } = useTranslation();
  const selectedLanguage = i18n.language;

  let categories;

  switch (selectedLanguage) {
    case "en":
      categories = categoriesEN;
      break;
    case "ar":
      categories = categoriesAR;
      break;
    default:
      categories = categoriesBN;
  }

  useEffect(() => {
    if (categoryId) {
      setActiveTab(parseInt(categoryId as string, 10));
    } else {
      setActiveTab(null);
    }
  }, [categoryId]);

  const handleTabClick = (id: number | null) => {
    setActiveTab(id);
    setCurrentPage(1);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  // Collect items based on the active tab
  const itemsToShow =
    activeTab === null
      ? categories.flatMap((category) => category.items)
      : categories.find((category) => category.id === activeTab)?.items || [];

  // Sorting logic
  const sortedItems = [...itemsToShow].sort((a, b) => {
    if (sortOrder === "a-to-z") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "latest") {
      return b.name.localeCompare(a.name); // Assuming latest by reverse alphabetical order for now
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const isClient = useLanguage();

  if (!isClient) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Shop | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <Container className={styles.container}>
          <div className={styles.head}>
            <h2>{t("Inqilab Cultural Center")}</h2>
          </div>
          <div className={styles.pageWrapper}>
            <div className={styles.categories}>
              <div className={styles.categoriesHeader}>
                <FaList /> <h2>Categories</h2>
              </div>
              <ul>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className={`${styles.category} ${
                      activeTab === category.id ? styles.active : ""
                    }`}
                    onClick={() => handleTabClick(category.id)} // Show specific category
                  >
                    <Link href="#">
                      <div className={styles.image}>
                        <NextImage src={category.image} alt={""} />
                      </div>
                      <h3 className={styles.name}>{category.name}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.shopProducts}>
              <div className={styles.productsHeader}>
                <div className={styles.categoryTitle}>
                  <h2>
                    {activeTab === null
                      ? "All Products"
                      : categories.find((category) => category.id === activeTab)
                          ?.name}
                  </h2>
                </div>
                <div className={styles.sortContainer}>
                  <Dropdown onSelect={handleSortChange}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {t("Sort by")}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleTabClick(null)}>
                        Show All Products
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="latest">Latest</Dropdown.Item>
                      <Dropdown.Item eventKey="a-to-z">A to Z</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                {/* <div className={styles.chooseLocation}>
                  <input type="search" placeholder="Choose Your Location" />
                  <IoLocationOutline />
                </div> */}
              </div>

              <div className={styles.products}>
                <div className={styles.productsWrapper}>
                  {currentItems.map((item) => (
                    <div className={styles.productCard} key={item.id}>
                      <Link href={`/shop/${item.id}`}>
                        <div className={styles.image}>
                          <NextImage
                            src={item.image}
                            alt={item.name}
                            className={styles.itemImage}
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className={styles.content}>
                          <h3 className={styles.name}>{item.name}</h3>
                          <p className={styles.price}>
                            <FaBangladeshiTakaSign />
                            {item.price} {item.unit}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <Pagination className={styles.pagination}>
                <Pagination.Prev
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
        </Container>
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
