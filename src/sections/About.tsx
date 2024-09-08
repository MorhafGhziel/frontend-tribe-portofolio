import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="About Me"
        eyebrow="A Glimpse Into My World"
        description="Learn more about who i am, what i do, what inspires me"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
          </div>
        </Card>
      </div>
    </div>
  );
};
