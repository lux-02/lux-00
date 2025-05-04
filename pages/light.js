import PageLayout from "@/components/PageLayout/PageLayout";
import CinematicQuote from "@/components/CinematicQuote";

export default function Light() {
  const content = (
    <>
      <p className="mb-4">
        세상이 불가능이라 말할 때, 나는 그 불가능에 형태를 부여한다. <br />
        세상에 의미 있는 가치를 구현하는 또 하나의 가능성을 창조한다.
      </p>
      <p className="text-gray-400">
        When the world declares something impossible, I give it form. <br />
        Through logic and creation, I manifest new possibilities that carry real
        meaning. <br />I turn the unseen into reality and bring light to where
        none existed before.
      </p>
    </>
  );

  return (
    <PageLayout
      title="Light: Dev"
      description="개발자의 빛의 영역"
      backgroundImage="/AA.png"
    >
      <CinematicQuote
        quote="어둠 속에 단 하나의 빛이 있다면, 그것은 가능성이다."
        quoteEn="In the darkest void, a single light remains, possibility."
      >
        {content}
      </CinematicQuote>
    </PageLayout>
  );
}
