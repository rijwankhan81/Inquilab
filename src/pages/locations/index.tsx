import Footer from "@/layout/footer";
import styles from "./office.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { locations } from "@/constants/locations";
import { useState } from "react";
import NextImage from "@/hooks/NextImage";
export default function Office() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Office Locations</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.officeLocations}>
          <Container>
            <div className={styles.wrapper}>
              <h1>Select an Office Location</h1>
              <div className={styles.dropdown}>
                <div
                  className={styles.dropdownHeader}
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  {selectedLocation ? selectedLocation.name : "-- Select --"}
                </div>
                {isDropdownOpen && (
                  <ul className={styles.dropdownList}>
                    {locations.map((location) => (
                      <li
                        key={location.id}
                        onClick={() => {
                          setSelectedLocation(location);
                          setDropdownOpen(false);
                        }}
                      >
                        {location.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {selectedLocation && (
                <div className={styles.deatils}>
                  <h2>{selectedLocation.name}</h2>
                  <div className={styles.info}>
                    <div className={styles.image}>
                      <NextImage
                        src={selectedLocation.image}
                        alt={selectedLocation.name}
                        width="300"
                      />
                    </div>
                    <div className={styles.map}>
                      <iframe
                        src={selectedLocation.mapLink}
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
