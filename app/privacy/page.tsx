import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What Nylor Tech collects through this site, and what we do with it.",
};

export default function PrivacyPage() {
  return (
    <PageShell className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Privacy"
        as="h1"
        title="How we handle your information."
        description="Short version: we only collect what you send us through the contact form, and we only use it to reply to you."
      />

      <div className="flex flex-col gap-10 mt-14 max-w-2xl">
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-ink">What we collect</h2>
          <p className="text-ink/80">
            When you submit the contact form, we receive the name, email, company (optional), project
            type, and message you enter. That&apos;s sent directly to our inbox by email — we don&apos;t
            store it in a database, and nothing else on this site collects personal information.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-ink">How we use it</h2>
          <p className="text-ink/80">
            Only to read your message and reply. We don&apos;t sell it, share it with third parties, or
            add you to a marketing list.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-ink">Cookies &amp; tracking</h2>
          <p className="text-ink/80">
            We use Vercel Analytics to see which pages get visited. It doesn&apos;t use cookies and
            doesn&apos;t collect anything that identifies you personally — just anonymized counts of
            page views.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-ink">Questions</h2>
          <p className="text-ink/80">
            Email{" "}
            <a href="mailto:nylortech@gmail.com" className="text-ember-deep hover:underline">
              nylortech@gmail.com
            </a>{" "}
            and we&apos;ll answer directly.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
