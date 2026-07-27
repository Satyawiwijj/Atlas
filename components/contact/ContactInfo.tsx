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
        We reply within a few hours during US business hours. For an existing project, mention it in
        your message and it&apos;ll get to the right person faster.
      </p>
      <div className="rounded-xl border border-ink/10 p-4">
        <p className="text-sm font-medium text-ink">US Working Hours</p>
        <p className="text-sm text-ink/70 mt-1">9am - 6pm EST, Monday - Friday</p>
        <p className="text-xs text-ink/50 mt-2">
          Overlap for live calls. Async via Slack, Loom, and docs.
        </p>
      </div>
    </div>
  );
}
