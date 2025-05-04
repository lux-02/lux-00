import Head from "next/head";
import ImageBackground from "@/components/ImageBackground";
import HomeButton from "@/components/HomeButton";
import styles from "./PageLayout.module.css";

export default function PageLayout({
  title,
  description,
  backgroundImage,
  children,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | LUX</title>
        <meta name="description" content={description} />
      </Head>

      {/* 이미지 배경 */}
      <ImageBackground src={backgroundImage} />

      {/* 그레인 오버레이 */}
      <div className="absolute inset-0 z-10 pointer-events-none grain-overlay"></div>

      {/* 홈 버튼 */}
      <HomeButton />

      {/* 컨텐츠 */}
      {children}
    </div>
  );
}
