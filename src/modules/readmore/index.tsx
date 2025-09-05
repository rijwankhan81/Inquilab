import { useEffect, useRef, useState } from "react";
import styles from "./ReadMore.module.scss";

type ReadMoreProps = {
  text: string;
  maxLines?: number;
};

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLines = 2 }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsClamped(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [text, maxLines]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={textRef}
        className={`${styles.text} ${expanded ? styles.expanded : ""}`}
        style={{ WebkitLineClamp: expanded ? "unset" : maxLines }}
      >
        {text}
        {isClamped && !expanded && (
          <span className={styles.fade}>
            …{" "}
            <button className={styles.toggle} onClick={() => setExpanded(true)}>
              Read More
            </button>
          </span>
        )}
        {expanded && (
          <button className={styles.toggle} onClick={() => setExpanded(false)}>
            Read Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ReadMore;
