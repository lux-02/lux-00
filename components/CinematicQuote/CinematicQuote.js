import { motion } from "framer-motion";
import styles from "./CinematicQuote.module.css";

export default function CinematicQuote({ quote, quoteEn, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1 className={styles.quote}>
          {quote}
          <br />
          <span className={styles.quoteEn}>{quoteEn}</span>
        </h1>

        <div className={styles.description}>{children}</div>
      </motion.div>
    </motion.div>
  );
}
