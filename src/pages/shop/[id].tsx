// pages/shop/[id].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import styles from "./Shop.module.scss";

// Icons
import { FaBangladeshiTakaSign, FaMinus } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";

// Categories (static product data)
import categoriesEN from "@/constants/shop/categoriesEN";
import categoriesAR from "@/constants/shop/categoriesAR";
import categoriesBN from "@/constants/shop/categoriesBN";
import { HiShoppingCart } from "react-icons/hi";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  unit: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
  items: Product[];
}

// Explicitly type the imports
const categoriesENTyped: Category[] = categoriesEN as Category[];
const categoriesARTyped: Category[] = categoriesAR as Category[];
const categoriesBNTyped: Category[] = categoriesBN as Category[];

// Flatten into one product list
const allProducts: Product[] = [
  ...categoriesENTyped.flatMap((cat) => cat.items),
  ...categoriesARTyped.flatMap((cat) => cat.items),
  ...categoriesBNTyped.flatMap((cat) => cat.items),
];

interface ProductPageProps {
  id: string;
}

const ProductPage = ({ id }: ProductPageProps) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  // Pick categories based on current locale
  const categories: Category[] =
    locale === "ar"
      ? categoriesAR
      : locale === "en"
      ? categoriesEN
      : categoriesBN;

  // Find product + category
  let product: Product | undefined;
  let category: Category | undefined;

  for (const cat of categories) {
    const found = cat.items.find((item) => item.id.toString() === id);
    if (found) {
      product = found;
      category = cat;
      break;
    }
  }

  if (!product || !category) {
    return (
      <Container>
        <h1>{t("Product not found")}</h1>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | Inqilab Moncho</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <Container>
          {/* Breadcrumbs */}
          <div className={styles.breadCrumb}>
            <ul>
              <li>
                <Link href="/shop">{t("Shop")}</Link>
              </li>
              <MdKeyboardArrowRight />
              <li>
                <Link href="/shop">{category.name}</Link>
              </li>
              <MdKeyboardArrowRight />
              <li>
                <Link href="#">{product.name}</Link>
              </li>
            </ul>
          </div>

          {/* Product details */}
          <div className={styles.product}>
            <Row className={styles.row}>
              <Col lg={5}>
                <div className={styles.image}>
                  <NextImage
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                  />
                </div>
              </Col>
              <Col lg={7}>
                <div className={styles.deatils}>
                  <h2>{product.name}</h2>
                  <div className={styles.description}>
                    {/* <p>{product.description}</p> */}
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repudiandae et, vero voluptatem ipsum non ullam quasi
                      obcaecati ea perspiciatis rerum, modi veniam tempora,
                      magni cumque incidunt explicabo sequi iste assumenda.
                    </p>
                  </div>
                  <div className={styles.stock}>
                    <h3>
                      {t("Availability")}: <span>{t("In Stock")}</span>
                    </h3>
                  </div>
                  <div className={styles.price}>
                    <FaBangladeshiTakaSign />
                    {product.price.toFixed(2)} {product.unit}
                  </div>
                  <div className={styles.cartbtn}>
                    <div className={styles.qty}>
                      <button className={styles.minus}>
                        <FaMinus />
                      </button>
                      <input type="number" placeholder="1" />
                      <button className={styles.plus}>
                        <TiPlus />
                      </button>
                    </div>
                    <div className={styles.cart}>
                      <button>
                        <HiShoppingCart /> Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Related products */}
          <div className={styles.related}>
            <h3>{t("Related Products")}</h3>
            <div className={styles.products}>
              <div className={styles.productsWrapper}>
                {category.items
                  .filter((item) => item.id !== product!.id)
                  .map((item) => (
                    <Link href={`/shop/${item.id}`} key={item.id}>
                      <div className={styles.productCard}>
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
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;

// ✅ Required for SSG dynamic routes
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths =
    locales?.flatMap((locale) =>
      allProducts.map((product) => ({
        params: { id: product.id.toString() },
        locale,
      }))
    ) ?? [];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  return {
    props: {
      id,
      ...(await serverSideTranslations(context.locale ?? "bn", ["common"])),
    },
  };
};
