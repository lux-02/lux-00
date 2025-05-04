import { useEffect } from "react";

export default function VideoBackground({ src }) {
  useEffect(() => {
    // 비디오가 로드되었을 때 자동 재생
    const video = document.getElementById("background-video");
    if (video) {
      video.play().catch((error) => {
        console.error("비디오 자동 재생 실패:", error);
      });
    }
  }, []);

  return (
    <div className="video-background">
      <video id="background-video" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
