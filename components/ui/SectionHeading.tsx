import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        className={`font-display text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-2xl ${eyebrow ? "mt-4" : ""}`}
      >
        {title}
      </Heading>
      {description && <p className="text-base md:text-lg text-ink/80 max-w-xl mt-3">{description}</p>}
    </div>
  );
}
