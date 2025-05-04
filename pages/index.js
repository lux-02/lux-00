import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 페이지 로딩 효과
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path) => {
    router.push(`/${path}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LUX</title>
        <meta name="description" content="LUX : Light, Reflex, Shadow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 그레인 오버레이 */}
      <div className="absolute inset-0 z-10 pointer-events-none grain-overlay"></div>

      {/* 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        className={styles.contentContainer}
      >
        {/* 로고 이미지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={styles.logoContainer}
        >
          <div className="logo-container">
            <Image
              src="/logo.png"
              alt="Lux-logo"
              width={250}
              height={250}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </motion.div>

        {/* 네비게이션 버튼 */}
        <div className={styles.navContainer}>
          <NavButton
            text="LIGHT"
            subtext="Dev"
            onClick={() => handleNavigation("light")}
            delay={1.2}
          />
          <NavButton
            text="REFLEX"
            subtext="Design"
            onClick={() => handleNavigation("reflex")}
            delay={1.5}
          />
          <NavButton
            text="SHADOW"
            subtext="Security"
            onClick={() => handleNavigation("shadow")}
            delay={1.8}
          />
        </div>
      </motion.div>
    </div>
  );
}

const NavButton = ({ text, subtext, onClick, delay }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.05,
        textShadow: "0 0 15px rgba(255,255,255,0.5)",
      }}
      className={styles.navButton}
      onClick={onClick}
    >
      <span className={styles.navSubtext}>{subtext}</span>
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};
