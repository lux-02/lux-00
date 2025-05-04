# 우주의 세 가지 힘 (Three Cosmic Forces)

이 Next.js 프로젝트는 개발자, 디자이너, 보안 전문가의 세 가지 영역을 우주적 은유로 표현한 인터랙티브 웹 경험입니다.

## 기능

- 어두운 우주 배경의 메인 페이지
- 로고 이미지가 페이드인되며 빛나는 효과와 함께 등장
- 백그라운드 없이 순수한 텍스트 버튼이 우아하게 등장
- 각 영역별 특성을 표현하는 배경 비디오:
  - Light: 초신성 (가능성)
  - Reflex: 천체 궤도 (감각)
  - Shadow: 블랙홀 (보이지 않는 힘)
- Framer Motion을 사용한 부드러운 페이지 전환과 요소 애니메이션
- 다국어 지원: 한국어와 영어

## 기술 스택

- Next.js (페이지 라우터)
- JavaScript
- Tailwind CSS
- Framer Motion

## 시작하기

프로젝트를 로컬 환경에서 실행하려면:

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 모드 실행
npm start
```

## 필요한 파일

이 프로젝트는 다음과 같은 파일이 필요합니다:

- `/public/logo.png` - 메인 페이지에 표시될 로고 이미지
- `/public/videos/supernova.mp4` - 초신성 폭발 장면
- `/public/videos/celestial.mp4` - 행성 또는 천체 움직임
- `/public/videos/blackhole.mp4` - 블랙홀과 왜곡된 빛

실제 사용 시에는 실제 로고 이미지와 비디오 파일을 적절한 고품질 파일로 대체해야 합니다.

## 참고 사항

이 프로젝트는 어두운 테마 전용으로 디자인되었으며, 그레인 효과를 통해 우주적인 질감을 강조합니다.
