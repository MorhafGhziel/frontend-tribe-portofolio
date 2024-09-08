import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

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
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
      </div>
    </div>
  );
};
