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
      {words.map((word) => (
        <div key={word}></div>
      ))}
    </div>
  );
};
