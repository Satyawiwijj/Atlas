import { Eyebrow } from "@/components/ui/Eyebrow";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <Eyebrow>Direct</Eyebrow>
      <a
        href="mailto:nylortech@gmail.com"
        className="font-display text-2xl md:text-3xl font-semibold text-ink hover:text-ember-deep transition-colors duration-200 break-all"
      >
        nylortech@gmail.com
      </a>
      <p className="text-ink/80 max-w-sm">
        We reply within 1-2 business days. For an existing project, mention it in your message and
        it'll get to the right person faster.
      </p>
    </div>
  );
}
