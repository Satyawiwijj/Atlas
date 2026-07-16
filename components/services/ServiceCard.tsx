import type { Service } from "@/lib/content";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div id={service.slug} className="scroll-mt-24 grid md:grid-cols-[100px_1fr] gap-6 md:gap-12 py-12 border-t border-ink/10">
      <span className="font-display text-4xl md:text-5xl font-bold text-ink/15">{String(index + 1).padStart(2, "0")}</span>
      <div className="flex flex-col gap-4 max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink">{service.title}</h2>
        <p className="text-base md:text-lg text-ink/80">{service.description}</p>
        <ul className="flex flex-col gap-2 mt-2">
          {service.included.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-ink/80">
              <span className="h-1.5 w-1.5 rounded-full bg-ember shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
