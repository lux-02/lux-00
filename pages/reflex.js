import PageLayout from "@/components/PageLayout";
import CinematicQuote from "@/components/CinematicQuote";

export default function Reflex() {
  const content = (
    <>
      <p className="mb-4">
        디자인은 단순한 장식이 아닌, 감정과 사유를 전하는 언어다. <br />
        상호작용은 세상을 더 따뜻하고 아름답게 만드는 연결의 시작이 된다.
      </p>
      <p className="text-gray-400">
        Design is not mere decoration. It's a language that speaks emotion and
        thought. <br />
        Through interaction, I build connections that make the world warmer,
        more beautiful. <br />
        Just as light reflects, I design to resonate with people and places
        alike.
      </p>
    </>
  );

  return (
    <PageLayout
      title="Reflex: Design"
      description="디자이너의 반사 영역"
      backgroundImage="/BB.png"
    >
      <CinematicQuote
        quote="빛이 닿은 곳마다, 새로운 감정이 시작된다."
        quoteEn="Every place the light touches, a new feeling awakens."
      >
        {content}
      </CinematicQuote>
    </PageLayout>
  );
}
