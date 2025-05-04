import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./HomeButton.module.css";

export default function HomeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={styles.container}
    >
      <Link href="/" className={styles.button}>
        ← 홈으로
      </Link>
    </motion.div>
  );
}
