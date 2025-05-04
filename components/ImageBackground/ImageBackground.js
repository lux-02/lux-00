import Image from "next/image";
import styles from "./ImageBackground.module.css";

export default function ImageBackground({ src }) {
  return (
    <div className={styles.imageBackground}>
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt="배경 이미지"
          fill
          priority
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}
