import PageLayout from "@/components/PageLayout";
import CinematicQuote from "@/components/CinematicQuote";

export default function Shadow() {
  const content = (
    <>
      <p className="mb-4">
        나는 드러나지 않은 위험과 마주하고, 그 속에서 질서를 세운다. <br />
        빛이 존재하기 위해 반드시 필요한 어둠의 경계에서 나는 평화를 위해 세상을
        지킨다.
      </p>
      <p className="text-gray-400">
        I face the invisible threats, and from within the silence, restore
        order. <br />
        At the threshold where light ends and darkness begins, I stand guard.
        <br />
        For peace to thrive, there must be one who protects it from the shadows,
        that is who I am.
      </p>
    </>
  );

  return (
    <PageLayout
      title="Shadow: Security"
      description="보안 전문가의 그림자 영역"
      backgroundImage="/CC.png"
    >
      <CinematicQuote
        quote="보이지 않아도 존재하는 힘, 그것이 그림자의 본질이다."
        quoteEn="The unseen still exists, such is the nature of shadow."
      >
        {content}
      </CinematicQuote>
    </PageLayout>
  );
}
