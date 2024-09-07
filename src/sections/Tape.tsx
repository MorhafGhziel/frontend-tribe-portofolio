import StartIcon from "@/assets/icons/star.svg";

const words = [
  "Perfomant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimize",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div>
      <div className="flex gap-4">
        {words.map((word) => (
          <div key={word}>
            <span>{word}</span>
            <StartIcon />
          </div>
        ))}
      </div>
    </div>
  );
};
