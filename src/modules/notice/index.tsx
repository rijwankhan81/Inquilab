import notices from "@/constants/notice";
import styles from "./notice.module.scss";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Notice() {
  return (
    <>
      <section className={styles.black_ribbon}>
        <Marquee className={`"bg-dark"`}>
          {notices.map((project) => (
            <div className={styles.ribbon_section} key={project.id}>
              <div className={styles.ribbon_text}>
                <Link href="#">{project.title}</Link>
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
